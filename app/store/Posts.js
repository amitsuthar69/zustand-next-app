import { create } from "zustand";

export const usePostState = create((set) => ({
  posts: [
    // initial states
    { id: 1, title: "Post 1", description: "This is a Description for 1" },
    { id: 2, title: "Post 2", description: "This is a Description for 2" },
  ],
  addPost: (newPost) => {
    set((state) => ({ posts: [...state.posts, newPost] }));
  },
  editPost: (id, updatedPost) => {
    set((state) => {
      const updatedPosts = state.posts.map((post) => {
        if (post.id === id) return { ...post, ...updatedPost };
        return post;
      });
      return { posts: updatedPosts };
    });
  },
  deletePost: (id) => {
    set((state) => {
      const updatedPosts = state.posts.filter((post) => post.id !== id);
      return { posts: updatedPosts };
    });
  },
}));
