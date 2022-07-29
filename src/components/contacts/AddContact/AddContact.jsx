import React, { useState } from "react";
import "./AddContact.css";

const AddContact = (props) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [image, setImage] = useState("");

  function handleClick() {
    if (!name || !surname || !image) {
      alert("Zapolnite polya!!!");
      return;
    }
    let newContact = {
      name,
      surname,
      image,
      id: Date.now(),
    };
    props.handleAdd(newContact);
  }

  return (
    <div className="add">
      <h2>Add contact</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
      />
      <input
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        type="text"
        placeholder="Surname"
      />
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        type="text"
        placeholder="Image"
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default AddContact;
