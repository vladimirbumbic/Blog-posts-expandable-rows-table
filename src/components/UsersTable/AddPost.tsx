import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

import { addBlogPost, BlogPost } from "../../data/data";
import { addPostSuccess } from "../../redux/user/postSlice";

import {
  FormGroup,
  Form,
  Label,
  Input,
  TextArea,
  Button,
  CancelButton,
  ButtonFormGroup,
  AddPostContainer,
} from "../GlobalStyles/FormElementStyles";

interface AddPostProps {
  userIdClicked: number;
  onClose: () => void;
}

const AddPost: React.FC<AddPostProps> = ({ userIdClicked, onClose }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [newBlogPost, setNewBlogPost] = useState<BlogPost>({
    id: "",
    userId: userIdClicked,
    datePosted: "",
    title: "",
    body: "",
  });

  const addNewPost = (newBlogPost: BlogPost) => async (dispatch: any) => {
    try {
      const response = await addBlogPost(newBlogPost);
      dispatch(addPostSuccess(response));
    } catch (err) {
      console.error("Error adding post: ", err);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const addNewBlogPost: BlogPost = {
      id: uuidv4(),
      userId: userIdClicked,
      datePosted: new Date().toISOString(),
      title: newBlogPost.title,
      body: newBlogPost.body,
    };

    dispatch(addNewPost(addNewBlogPost));
    onClose();
    navigate("/");
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <AddPostContainer>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Title:</Label>
          <Input
            type="text"
            value={newBlogPost.title}
            onChange={(event) =>
              setNewBlogPost({
                ...newBlogPost,
                title: event.target.value,
              })
            }
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Body:</Label>
          <TextArea
            value={newBlogPost.body}
            onChange={(event) =>
              setNewBlogPost({
                ...newBlogPost,
                body: event.target.value,
              })
            }
            required
          />
        </FormGroup>
        <ButtonFormGroup>
          <Button type="submit">Add Post</Button>
          <CancelButton type="button" onClick={onClose}>
            Cancel
          </CancelButton>
        </ButtonFormGroup>
      </Form>
    </AddPostContainer>
  );
};
export default AddPost;
