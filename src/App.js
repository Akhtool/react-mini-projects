import React, { useEffect, useState } from "react";
import "./index.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users";

function App() {
  const [users, setUsers] = useState([]);
  const [invites, setInvites] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearcValue] = useState("");
  const [success, setSuccess] = useState(false);

  const getUsers = () => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении пользователей");
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const onChangeSearchValue = (event) => {
    setSearcValue(event.target.value);
  };

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  const onClickSuccess = () => {
    setSuccess(true);
  };

  return (
    <div className="App">
      {success ? (
        <Success count={invites.length} />
      ) : (
        <Users
          searchValue={searchValue}
          onChangeSearchValue={onChangeSearchValue}
          items={users}
          isLoading={isLoading}
          invites={invites}
          onClickInvite={onClickInvite}
          onClickSuccess={onClickSuccess}
        />
      )}
    </div>
  );
}

export default App;
