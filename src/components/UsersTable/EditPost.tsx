import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import { editBlogPost } from "../../data/data";
import { editBlogPostSuccess } from "../../redux/user/postSlice";
import { RootState } from "../../redux/store";
import {
  FormContainer,
  FormGroup,
  Form,
  Label,
  Input,
  TextArea,
  Button,
  CancelButton,
  ButtonFormGroup,
} from "../GlobalStyles/FormElementStyles";
import ErrorPage from "./ErrorPage";

export interface BlogPostEdited {
  id: string;
  userId: number;
  datePosted: string;
  title: string;
  body: string;
  dateEdited?: string;
}
const EditPost: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const params = useParams<{ id: string }>();

  const postId = params.id ? String(params.id) : "";
  const post = useTypedSelector((state: RootState) =>
    state.post.postList.find((post) => post.id === postId),
  );

  const [title, setTitle] = useState<string>(post?.title || "");
  const [body, setBody] = useState<string>(post?.body || "");

  const userIdEditing = post?.userId;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const postToEdit: BlogPostEdited = {
        id: postId,
        userId: userIdEditing || 0,
        title,
        body,
        datePosted: post?.datePosted || "",
        dateEdited: new Date().toISOString(),
      };

      const editedPost: BlogPostEdited = await editBlogPost(postId, postToEdit);
      dispatch(editBlogPostSuccess(editedPost));

      navigate(`/blogPosts/${postId}`);
    } catch (error) {
      console.error(error);
    }
  };

  if (!post) {
    return <ErrorPage />;
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="body">Body</Label>
          <TextArea
            id="body"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </FormGroup>
        <ButtonFormGroup>
          <Button type="submit">Save Changes</Button>
          <CancelButton
            type="button"
            onClick={() => navigate(`/blogPosts/${postId}`)}
          >
            Cancel
          </CancelButton>
          <Link to="/">Back to users list</Link>
        </ButtonFormGroup>
      </Form>
    </FormContainer>
  );
};

export default EditPost;
