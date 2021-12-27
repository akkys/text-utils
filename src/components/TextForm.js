import React, { useState } from "react";

const TextForm = () => {
  const [text, setText] = useState("");

  const onTextChange = (e) => {
    setText(e.target.value);
  };

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  return (
    <>
      <div className="container my-3">
        <h1>Enter texts to analys below</h1>
        <textarea
          className="form-control my-3"
          value={text}
          onChange={onTextChange}
          rows="6"
        ></textarea>
        <button className="btn btn-primary" onClick={handleUpperCase}>
          Convert UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerCase}>
          Convert LowerCase
        </button>
      </div>
      <div className="container">
        <h3>Your Text Summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters.
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextForm;
