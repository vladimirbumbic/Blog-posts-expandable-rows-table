import reducer, { fetchPosts, PostState } from "../user/postSlice";
import { BlogPost } from "../../data/data";

const TestPosts: BlogPost[] = [
  {
    "id": "1234567",
    "userId": 76,
    "datePosted": "2022-05-07T01:41:43Z",
    "title": "title post testing",
    "body": "body post testing.",
  },
  {
    "id": "12345678910",
    "userId": 77,
    "datePosted": "2022-07-07T01:41:43Z",
    "title": "title post testing again.",
    "body": "body post testing again.",
  },
];

describe("postSlice", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      postList: [],
    });
  });

  it("adds posts to list when fetched", () => {
    const action = { type: fetchPosts.fulfilled.type, payload: TestPosts };

    const previousState: PostState = {
      postList: [],
    };

    expect(reducer(previousState, action)).toEqual({
      postList: TestPosts,
    });
  });

  it("adds a new post to the list", () => {
    const newPost: BlogPost = {
      id: "3",
      title: "New post",
      userId: 77,
      datePosted: "2023-07-07T01:41:43Z",
      body: "New body",
    };

    const previousState: PostState = {
      postList: TestPosts,
    };

    const action = {
      type: "posts/addPostSuccess",
      payload: newPost,
    };

    expect(reducer(previousState, action)).toEqual({
      postList: [...TestPosts, newPost],
    });
  });

  it("edits an existing post in the list", () => {
    const updatedPost: BlogPost = {
      id: "1234567",
      userId: 76,
      datePosted: "2022-05-07T01:41:43Z",
      title: "title post testing editing",
      body: "body post testing.",
    };

    const previousState: PostState = {
      postList: TestPosts,
    };

    const action = {
      type: "posts/editBlogPostSuccess",
      payload: updatedPost,
    };

    expect(reducer(previousState, action)).toEqual({
      postList: [updatedPost, TestPosts[1]],
    });
  });

  it("deletes an existing post from the list", () => {
    const postId = "1234567";

    const previousState: PostState = {
      postList: TestPosts,
    };

    const action = {
      type: "posts/deleteBlogPostSuccess",
      payload: postId,
    };

    expect(reducer(previousState, action)).toEqual({
      postList: [TestPosts[1]],
    });
  });
});
