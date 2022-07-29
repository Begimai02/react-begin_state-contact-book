import React from "react";
import "./ContactList.css";

const ContactList = (props) => {
  return (
    <div className="list">
      {props.contacts.map((item, index) => {
        return (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.name} />
            <div className="card-info">
              <h3>
                {item.name} {item.surname}
              </h3>

              <div>
                <button
                  onClick={() => props.deleteCont(item.id)}
                  className="card-del"
                >
                  Del
                </button>
                <button
                  onClick={() => props.getContactForEdit(index)}
                  className="card-edit"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactList;
