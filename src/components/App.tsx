import React, { useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { fetchUsers } from "../redux/user/userSlice";
import { fetchPosts } from "../redux/user/postSlice";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import styled from "styled-components";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";

import UserTable from "./UsersTable/UserTable";
import ShowBlogsPage from "./UsersTable/ShowBlogPostPage";
import EditPost from "./UsersTable/EditPost";
import ErrorPage from "./UsersTable/ErrorPage";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding-bottom: 20px;

  body.dark-mode & {
    background-color: #222222;
    transition: "0.5s all ease-out";
  }
`;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<UserTable />} />
      <Route path="/blogPosts/:id" element={<ShowBlogsPage />} />
      <Route path="/edit-post/:id" element={<EditPost />} />
      <Route path="*" element={<ErrorPage />} />
    </>,
  ),
);

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchUsers());
  }, []);

  return (
    <StyledWrapper>
      <GlobalStyles />
      <RouterProvider router={router} />
    </StyledWrapper>
  );
};
