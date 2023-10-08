"use client";

export default function Form({
  isEdit,
  title,
  setTitle,
  description,
  setDescription,
  handleAdd,
  handleEdit,
}) {
  return (
    <>
      <form
        onSubmit={isEdit ? handleEdit : handleAdd}
        className="text-gray-900 flex flex-col gap-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Description"></textarea>
        <button className="bg-green-600 px-2 py-1 text-gray-50 rounded">
          {isEdit ? "Edit Post" : "Add new post"}
        </button>
      </form>
    </>
  );
}
