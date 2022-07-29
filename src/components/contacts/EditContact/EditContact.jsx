import React, { useState } from "react";
import "./EditContact.css";
import "../AddContact/AddContact";

const EditContact = (props) => {
  const [name, setName] = useState(props.contForEdit.name);
  const [surname, setSurname] = useState(props.contForEdit.surname);
  const [image, setImage] = useState(props.contForEdit.image);

  function handleClick() {
    if (!name || !surname || !image) {
      alert("Zapolnite polya!!!");
      return;
    }
    let newContact = {
      name,
      surname,
      image,
      id: props.contForEdit.id,
    };
    props.handleSave(newContact);
    props.setIsEdit();
  }
  return (
    <div className="edit-wrapper">
      <div className="add edit">
        <h2>Edit contact</h2>
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
        <button onClick={handleClick}>Save</button>
        <button onClick={() => props.setIsEdit()}>Close</button>
      </div>
    </div>
  );
};

export default EditContact;
