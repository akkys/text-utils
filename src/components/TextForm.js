import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  var modes = props.mode === "light" ? "dark" : "light";

  const onTextChange = (e) => {
    setText(e.target.value);
  };

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    if (text) props.showAlert("Texts are converted to Uppercase!", "success");
  };

  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    if (text) props.showAlert("Texts are converted to Lowercase!", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myTextarea");
    text.select();
    navigator.clipboard.writeText(text.value);
    if (text) props.showAlert("Texts copied to clipboard!", "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    if (text) props.showAlert("Removed Extra Spaces!", "success");
  };

  const handleClear = () => {
    setText("");
    if (text) props.showAlert("Textfield is cleared!", "success");
  };

  return (
    <div style={props.myStyle}>
      <div style={{ height: "89vh" }}>
        <div className="container">
          <h1 className="pt-3">Enter the texts to analys below</h1>
          <textarea
            className="form-control my-3"
            id="myTextarea"
            value={text}
            onChange={onTextChange}
            rows="5"
            style={props.myStyle}
          ></textarea>
          <button
            className={`btn btn-outline-${modes} btn-sm mx-1 my-1`}
            onClick={handleUpperCase}
          >
            Convert UpperCase
          </button>
          <button
            className={`btn btn-outline-${modes} btn-sm mx-1`}
            onClick={handleLowerCase}
          >
            Convert LowerCase
          </button>
          <button
            className={`btn btn-outline-${modes} btn-sm mx-1 my-1`}
            onClick={handleCopy}
          >
            Copy to Clipboard
          </button>
          <button
            className={`btn btn-outline-${modes} btn-sm mx-1`}
            onClick={handleExtraSpace}
          >
            Remove Extra Spaces
          </button>
          <button
            className={`btn btn-outline-${modes} btn-sm mx-1`}
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
        <div className="container my-3">
          <h3>Your Text Summary</h3>
          <p>
            {text.split(" ").length} words and {text.length} characters.
          </p>
          {text.length > 0 ? (
            <>
              <h3>Preview</h3>
              <textarea
                className="form-control my-3 textarea"
                value={text}
                onChange={onTextChange}
                rows="5"
                readOnly
                disabled
                style={props.myStyle}
              />
            </>
          ) : (
            <>
              <p>Enter the texts in above Text Field to Preview here.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextForm;
