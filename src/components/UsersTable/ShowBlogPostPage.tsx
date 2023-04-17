import React, { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { selectPosts } from "../../redux/user/postSlice";
import { deleteBlogPost } from "../../data/data";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { deleteBlogPostSuccess } from "../../redux/user/postSlice";

import { BlogPostEdited } from "./EditPost";
import {
  Wrapper,
  Cover,
  Title,
  BodyPost,
  BackIcon,
  DatePost,
  DeleteButton,
  EditButton,
} from "../GlobalStyles/BlogPostStyles";
import { BeatLoader } from "react-spinners";
import ErrorPage from "./ErrorPage";

const ShowBlogsPage: React.FC = () => {
  const posts = useTypedSelector(selectPosts);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const params = useParams<{ id: string }>();
  const postId = params.id;

  const post: BlogPostEdited | undefined = useMemo(
    () => posts.find((postsId) => postsId.id === postId),
    [posts, postId],
  );

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
    navigate(`/`);
  };

  if (!post) {
    return <ErrorPage />;
  }

  return (
    <>
      <Wrapper>
        <Cover />
        <Title>{post?.title}</Title>
        <BodyPost>{post?.body}</BodyPost>
        <BackIcon size={50} onClick={() => navigate("/")} />

        <DatePost>
          {post.dateEdited ? (
            <p>
              <span>
                <strong style={{ fontSize: "10px" }}>
                  Modified on: &nbsp;
                </strong>
                {new Date(post.dateEdited).toLocaleString()}
              </span>
            </p>
          ) : (
            <p>{new Date(post.datePosted).toLocaleString()}</p>
          )}
        </DatePost>

        <DeleteButton onClick={() => handleDeleteBlogPost(post.id)}>
          Delete blog post
        </DeleteButton>
        <EditButton onClick={() => navigate(`/edit-post/${post.id}`)}>
          Edit blog post
        </EditButton>
      </Wrapper>
    </>
  );
};

export default ShowBlogsPage;
