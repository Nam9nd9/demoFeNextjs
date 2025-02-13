import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const TestTextEditor = () => {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline"],
      ["link"],
      [{ align: [] }],
      ["image"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote"],
    ],
  };

  return (
    <div className=" rounded-lg shadow-md w-[716px] h-[400px]">
      <ReactQuill
        className=" w-[716px] h-[344px] mt-6"
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
      />
    </div>
  );
};

export default TestTextEditor;
