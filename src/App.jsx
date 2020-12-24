import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Header from "./components/Header";
import Route from "./components/Route";

const items = [
  {
    title: "What is react?",
    content: "React is frontend javascript framework",
  },
  {
    title: "Why use react?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
];

// const language = [
//   {
//     label: "English",
//     value: "en",
//   },
//   {
//     label: "Mongolian",
//     value: "mn",
//   },
// ];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  //   const [toogle, setToogle] = useState(true);
  //   const [selectedLanguage, setSelectedLanguage] = useState(language[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>
      <Route path="/translate">
        <Translate selectedColor={selected} />
      </Route>

      {/* <button onClick={() => setToogle(!toogle)}>Toogle Dropdown</button>
      {toogle ? (
        
      ) : null} */}
      {/* <p style={{ color: selected.value }}>Test me!</p> */}
    </div>
  );
};
