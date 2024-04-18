import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [usersData, setUsersData] = useState([]);
  const [onUser, setOnUser] = useState({});
  const [userIdInput, setUserIdInput] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // get all users
  const getAllUsers = async () => {
    const { data } = await axios.get(`http://localhost:8000/user`);
    setUsersData(data);
  };

  // get a user by id
  const getUserById = async (id) => {
    const { data } = await axios.get(`http://localhost:8000/user/${id}`);
    setOnUser(data);
  };

  // add a user
  const addUser = async (event) => {
    event.preventDefault();

    const { data } = await axios.post('http://localhost:8000/user', {
      name,
      email,
    });

    console.log('User added:', data);
    setName('');
    setEmail('');
  };

  // addUser();

  const handelSearch = (e) => {
    e.preventDefault();
    getUserById(userIdInput);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <h1>Hello from the frontend!</h1>
      <ul>
        {usersData?.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>

      <form onSubmit={handelSearch}>
        <input
          type='text'
          value={userIdInput}
          onChange={(e) => setUserIdInput(e.target.value)}
        />
        <button>search user</button>
      </form>

      <h2>{onUser?.name}</h2>
      <p>{onUser?.email}</p>

      <hr />
      <hr />
      <form onSubmit={addUser}>
        <input
          placeholder='name'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder='email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type='submit'>Add User</button>
      </form>
    </>
  );
}

export default App;
