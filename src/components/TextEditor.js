"use client";
import React from "react";
import ReactQuill from "react-quill";

const TextEditor = ({ text = "", handleChange }) => {
  return (
    <ReactQuill
      value={text}
      onChange={handleChange}
      modules={{
        toolbar: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link"],
          ["clean"],
        ],
      }}
      formats={[
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
      ]}
    />
  );
};

export default TextEditor;
