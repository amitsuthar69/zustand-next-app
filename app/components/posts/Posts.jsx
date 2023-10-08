"use client";
import { usePostState } from "@/app/store/Posts";
import { useState } from "react";
import Form from "../form/Form";

export default function Posts() {
  const { posts, addPost, editPost, deletePost } = usePostState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [postId, setPostId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const handleAddPost = (e) => {
    e.preventDefault();

    if (!title && !description) return;

    const newPost = {
      id: Date.now(),
      title,
      description,
    };

    addPost(newPost);

    setTitle("");
    setDescription("");
  };

  const handleEditPost = (e) => {
    e.preventDefault();

    if (!title && !description) return;

    const updatedPost = {
      id: postId,
      title,
      description,
    };

    editPost(updatedPost.id, { ...updatedPost });
    setTitle("");
    setDescription("");
    setIsEdit(false);
  };

  const EditAPost = (id) => {
    const post = posts.filter((post) => post.id === id)[0];
    setTitle(post.title);
    setDescription(post.description);
    setPostId(id);
    setIsEdit(true);
  };

  const handleRemovePost = (postId) => {
    deletePost(postId);
  };

  return (
    <div className="flex flex-col gap-4 font-sans justify-center items-center h-screen">
      <h1 className="text-3xl text-center">Posts</h1>
      <Form
        isEdit={isEdit}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        handleAdd={handleAddPost}
        handleEdit={handleEditPost}
      />
      {posts ? (
        posts.map((post) => (
          <div className="border w-[240px] bg-[#141010b4] rounded-md p-2" key={post.id}>
            <h1 className="text-green-500">{post.title}</h1>
            <p>{post.description}</p>
            <div className="flex gap-2 justify-center items-center mt-4">
              <button
                onClick={() => EditAPost(post.id)}
                className="bg-green-600 px-2 py-1 w-20 text-gray-50 rounded">
                Edit
              </button>
              <button
                onClick={() => handleRemovePost(post.id)}
                className="bg-red-600 px-2 py-1 w-20 text-gray-50 rounded">
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <h1 className="text-red-500">Posts not found</h1>
      )}
    </div>
  );
}
