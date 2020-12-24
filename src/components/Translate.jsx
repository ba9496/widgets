import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import axios from "axios";
// import Convert from "./Convert";

const options = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "Mongolian",
    value: "mn",
  },
];

const Translate = ({ selectedColor }) => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    const translateText = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };

    const timeoutId = setTimeout(() => {
      if (text) translateText();
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [language, text]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label className="label">Enter Text</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="input"
          />
        </div>
      </div>

      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <p style={{ color: selectedColor.value }}>{translated}</p>
      {/* <Convert text={text} language={language} /> */}
    </div>
  );
};

export default Translate;
