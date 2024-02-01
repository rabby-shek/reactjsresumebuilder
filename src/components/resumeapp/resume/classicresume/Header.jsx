import React, { useState } from "react";

const Header = () => {
  const [username, setUsername] = useState("Full Name");
  const [usernameEdit, setUsernameEdit] = useState(false);
  const [role, setRole] = useState("Designation");
  const [roleEdit, setRoleEdit] = useState(false);
  const [phone, setPhone] = useState("+8801*********");
  const [phoneEdit, setPhoneEdit] = useState(false);

  const handleUsernameEdit = () => {
    setUsernameEdit(!usernameEdit);
    setRoleEdit(false);
    setPhoneEdit(false);
  };
  const handleRoleEdit = () => {
    setRoleEdit(!roleEdit);
    setUsernameEdit(false);
    setPhoneEdit(false);
  };
  const handlePhoneEdit = () => {
    setPhoneEdit(!phoneEdit);
    setUsernameEdit(false);
    setRoleEdit(false);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (usernameEdit) {
        handleUsernameEdit();
      } else if (roleEdit) {
        handleRoleEdit();
      } else if (phoneEdit) {
        handlePhoneEdit();
      }
    }
  };
  return (
    <div className="classic-resume-header">
      {usernameEdit ? (
        <>
          <input
            className="user-name"
            style={{
              outline: "none",
              border: "none",
              textAlign: "center",
              padding: 0,
              margin: 0,
            }}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
            onKeyDown={handleKeyPress}
          />
        </>
      ) : (
        <div className="user-name" onDoubleClick={handleUsernameEdit}>
          {username}
        </div>
      )}
      {roleEdit ? (
        <>
          <input
            className="role"
            style={{
              outline: "none",
              border: "none",
              textAlign: "center",
              padding: 0,
              margin: 0,
            }}
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            autoFocus
            onKeyDown={handleKeyPress}
          />
        </>
      ) : (
        <div className="role" onDoubleClick={handleRoleEdit}>
          {role}
        </div>
      )}
      <ul>
        <>
          {" "}
          {phoneEdit ? (
            <li>
              <input
                style={{
                  outline: "none",
                  border: "none",
                  padding: 0,
                  margin: 0,
                  textAlign: "right",
                  width: `${phone.length + 100}px`,
                }}
                maxLength={phone.length + 2}
                minLength={11}
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoFocus
                onKeyDown={handleKeyPress}
              />
            </li>
          ) : (
            <li onDoubleClick={handlePhoneEdit}>{phone}</li>
          )}
        </>
        <li>{phone.length > 0 ? "/" : ""}rabbyhshek1998@gmail.com</li>
        <li>/Linkedin/Portfolio</li>
        <li>/Matuail,Demra,Dhaka</li>
      </ul>
    </div>
  );
};

export default Header;
