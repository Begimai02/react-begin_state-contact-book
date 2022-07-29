import React, { useState } from "react";
import AddContact from "./components/contacts/AddContact/AddContact";
import ContactList from "./components/contacts/ContactList/ContactList";
import EditContact from "./components/contacts/EditContact/EditContact";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [contForEdit, setContForEdit] = useState({});

  function handleAdd(newContact) {
    let newArr = [...contacts];
    newArr.push(newContact);
    setContacts(newArr);
  }

  function deleteCont(id) {
    let arr = contacts.filter((item) => id !== item.id);
    setContacts(arr);
  }

  function getContactForEdit(index) {
    setContForEdit(contacts[index]);
    setIsEdit(true);
  }

  function handleSave(person) {
    let newContacts = contacts.map((item) => {
      if (item.id === person.id) {
        return person;
      } else {
        return item;
      }
    });
    setContacts(newContacts);
  }

  return (
    <div>
      <AddContact handleAdd={handleAdd} />
      <ContactList
        getContactForEdit={getContactForEdit}
        deleteCont={deleteCont}
        contacts={contacts}
      />
      {isEdit ? (
        <EditContact
          setIsEdit={setIsEdit}
          contForEdit={contForEdit}
          handleSave={handleSave}
        />
      ) : null}
    </div>
  );
};

export default App;
