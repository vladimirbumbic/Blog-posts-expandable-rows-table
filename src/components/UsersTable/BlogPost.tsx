import React, { useState, useCallback } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { selectPosts } from "../../redux/user/postSlice";
import { useNavigate } from "react-router-dom";
import { deleteBlogPostSuccess } from "../../redux/user/postSlice";
import { deleteBlogPost, User } from "../../data/data";
import { DeleteButton, AddButton } from "../GlobalStyles/ButtonStyles";

import AddPost from "./AddPost";
import { BlogPostEdited } from "./EditPost";

interface BlogPostProps {
  user: User;
}

const BlogPost: React.FC<BlogPostProps> = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isDarkMode = useTypedSelector((state) => state.darkMode);
  const posts = useTypedSelector(selectPosts);

  const filteredPosts = posts
    .filter((post) => post.userId === user.id)
    .slice()
    .sort((a, b) => b.datePosted.localeCompare(a.datePosted));

  const removeBlogPost =
    (idToDelete: string) =>
    async (
      dispatch: (arg0: {
        payload: string;
        type: "posts/deleteBlogPostSuccess";
      }) => void,
    ) => {
      try {
        await deleteBlogPost(idToDelete);
        dispatch(deleteBlogPostSuccess(idToDelete));
      } catch (error) {
        console.log(error);
      }
    };

  const handleDeleteBlogPost = (id: string) => {
    dispatch(removeBlogPost(id));
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  }, []);

  return (
    <>
      <tr>
        <td
          style={{
            border: 0,
            backgroundColor: isDarkMode ? "#222222" : "#f8f9fa",
          }}
        >
          <AddButton onClick={openModal}>Add new blog post</AddButton>
          {isModalOpen && (
            <>
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  backgroundColor: "rgba(128, 128, 128, 0.8)",
                  zIndex: 999,
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1000,
                  padding: 20,
                  borderRadius: 10,
                  maxWidth: "1080px",
                  maxHeight: "1920px",
                  height: "600px",
                  width: "600px",
                }}
              >
                <AddPost userIdClicked={user.id} onClose={closeModal} />
              </div>
            </>
          )}
        </td>
      </tr>
      <tr
        style={{
          backgroundColor: isDarkMode ? "coral" : "#FFDB58",
          transition: "0.5s all ease-out",
        }}
      >
        <td
          style={{
            color: isDarkMode ? "  white" : "black",
            transition: "0.5s all ease-out",
          }}
        >
          {user.first_name}'s blog post titles:
        </td>
        <td
          style={{
            color: isDarkMode ? "  white" : "black",
            transition: "0.5s all ease-out",
          }}
        >
          Date posted:
        </td>
      </tr>

      {filteredPosts.length ? (
        filteredPosts.map((post: BlogPostEdited, index) => (
          <React.Fragment key={index}>
            <tr
              style={{
                backgroundColor: isDarkMode ? "#3a3a40" : "#c2c2d6",
                transition: "0.5s all ease-out",
              }}
            >
              <td
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/blogPosts/${post.id}`)}
              >
                {isDarkMode ? (
                  <p
                    style={{
                      color: "#CCCCCC",
                      transition: "0.5s all ease-out",
                    }}
                  >
                    {post.title}
                  </p>
                ) : (
                  <h6
                    style={{
                      color: "black",
                      transition: "0.5s all ease-out",
                    }}
                  >
                    {post.title}
                  </h6>
                )}
                <div style={{ display: "flex", gap: "5px", marginTop: "15px" }}>
                  <div onClick={(e) => e.stopPropagation()}>
                    <DeleteButton onClick={() => handleDeleteBlogPost(post.id)}>
                      Delete blog post
                    </DeleteButton>
                  </div>
                </div>
              </td>

              <td
                style={{
                  color: isDarkMode ? "  #CCCCCC" : "black",
                  transition: "0.5s all ease-out",
                }}
              >
                <p>{new Date(post.datePosted).toLocaleString()}</p>
                <p>
                  {post.dateEdited ? (
                    <span>
                      <strong style={{ fontSize: "10px" }}>
                        Modified on:&nbsp;
                      </strong>
                      {new Date(post.dateEdited).toLocaleString()}
                    </span>
                  ) : null}
                </p>
              </td>
            </tr>
          </React.Fragment>
        ))
      ) : (
        <tr>
          <td style={{ border: 0 }}>NO BLOG POSTS</td>
        </tr>
      )}
    </>
  );
};

export default BlogPost;
