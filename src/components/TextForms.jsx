import React, { useState } from "react";

export default function TextForms() {
  const toUpperCase = () => {
    let newText = text1.toUpperCase();
    setText1(newText);
  };

  const toLowerCase = (text) => {
    let newText1 = text1.toLowerCase();
    setText1(newText1);
  }

  const onChange = (event) => {
    setText1(event.target.value);
  };

  const clearText = () => {
    setText1("");
  }

  const reuseUtility = () => {
      const words = text1.trim().split(/\s+/);
      let vowelsCount = 0;
      const vowels = ['a', 'e', 'i', 'o', 'u'];

      words.forEach((word) => {
        if(vowels.includes(word[0]?.toLowerCase())){
          vowelsCount++;
        }
      });

      setText1('Number of words starting with vowels are : ' + vowelsCount);
  }


  const [text, setText] = useState("Enter Text to Analyze:");
  const [text1, setText1] = useState("Enter Text here:");

  return (
    <>
      <div>
        <div className="mb-3">
          <div className="container">
            {text}
            <textarea className="form-control" id="textContent" rows="6" value={text1} onChange={onChange} ></textarea>
          </div>
            <button className="btn btn-primary m-3" onClick={toUpperCase}>Convert to Uppercase: </button>
            <button className="btn btn-primary m-3" onClick={toLowerCase}>Convert to Lowercase: </button>
            <button className="btn btn-primary" onClick={clearText}>Clear TextArea: </button>
          </div>
          <div class="container3">
            <button className="btn btn-primary" onClick={reuseUtility}>Modify Text: </button>
          </div>

        <div className="container1"> 
            {/* <p>Number of words are: {text1.split(" ").length} & Number of Characters are : {text1.length}</p> */}
            {/* <p className="my-2">Time Rquired to read is : {0.008 * text1.split(" ").length}</p> */}
            <h2>Preview: </h2>
            <p>{}</p> 
        </div> 
      </div>
    </>
  );
}

