import "./App.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updataUserName } from "./features/Users";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [newUserName, setNewUserName] = useState("");
  return (
    <div className="App">
      <div className="addUser">
        <input
          type="text"
          placeholder="Name..."
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="UserName..."
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name: name,
                username: userName,
              })
            );
          }}
        >
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((item, index) => {
          return (
            <div>
              <h1>{item.name}</h1>
              <h1>{item.username}</h1>
              <input
                type="text"
                placeholder="New UserName..."
                onChange={(e) => {
                  setNewUserName(e.target.value);
                }}
              />
              <button
                onClick={() =>
                  dispatch(
                    updataUserName({ id: item.id, username: newUserName })
                  )
                }
              >
                Updata UserName
              </button>
              <button onClick={() => dispatch(deleteUser({ id: item.id }))}>
                Delete User
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
