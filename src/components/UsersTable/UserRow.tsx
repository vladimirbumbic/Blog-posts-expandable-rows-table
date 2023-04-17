import React, { useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { deleteUser, User } from "../../data/data";
import { deleteUserSuccess } from "../../redux/user/userSlice";
import { DeleteButton } from "../GlobalStyles/ButtonStyles";
import BlogPost from "./BlogPost";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  ModalBody,
  ModalButtons,
  ModalCancelButton,
  ModalContent,
  ModalDeleteButton,
  ModalTitle,
  ModalWrapper,
} from "../GlobalStyles/ConfirmDeletionModal";

interface UserRowProps {
  user: User;
}

const UserRow: React.FC<UserRowProps> = ({ user }) => {
  const [expandedUserId, setExpandedUserId] = useState<number | null>(null);
  const isDarkMode = useTypedSelector((state) => state.darkMode);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useAppDispatch();

  const handleUserRowClick = useCallback(
    (userId: number) => {
      setExpandedUserId((currentUserId) => {
        return currentUserId === userId ? null : userId;
      });
    },
    [expandedUserId],
  );

  const removeUser =
    (idToDelete: number) =>
    async (
      dispatch: (arg0: {
        payload: number;
        type: "user/deleteUserSuccess";
      }) => void,
    ) => {
      try {
        setIsDeleting(true);
        await deleteUser(idToDelete);
        dispatch(deleteUserSuccess(idToDelete));
        setIsDeleting(false);
        setShowModal(false);
      } catch (error) {
        console.log(error);
      }
    };

  const handleDeleteUser = (id: number) => {
    dispatch(removeUser(id));
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <>
      <tr onClick={() => handleUserRowClick(user.id)}>
        <th
          style={{
            fontWeight: isDarkMode ? "normal" : "bold",
            cursor: "pointer",
          }}
        >
          {user.first_name} {user.last_name}
        </th>
        <th
          style={{
            fontWeight: isDarkMode ? "normal" : "bold",
          }}
        >
          {user.email}
        </th>
        <td
          style={{
            border: "none",
            width: "100px",
            backgroundColor: isDarkMode ? "#222222" : "#f8f9fa",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <DeleteButton onClick={() => setShowModal(true)}>
            Delete user
          </DeleteButton>
        </td>
      </tr>
      {user.id === expandedUserId && <BlogPost user={user} />}

      {showModal &&
        ReactDOM.createPortal(
          <ModalWrapper>
            <ModalContent>
              <ModalTitle>Confirm Deletion</ModalTitle>
              <ModalBody>
                Are you sure you want to delete {user.first_name}{" "}
                {user.last_name}?
              </ModalBody>
              <ModalButtons>
                <ModalCancelButton onClick={() => setShowModal(false)}>
                  Cancel
                </ModalCancelButton>
                <ModalDeleteButton
                  onClick={() => handleDeleteUser(user.id)}
                  disabled={isDeleting}
                >
                  {isDeleting ? "Deleting..." : "Delete"}
                </ModalDeleteButton>
              </ModalButtons>
            </ModalContent>
          </ModalWrapper>,
          document.getElementById("modalRoot") || document.createElement("div"),
        )}
    </>
  );
};

export default UserRow;
