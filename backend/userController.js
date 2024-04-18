import data from './data/data.js';

// Get all users
const getAllUsers = (req, res) => {
  res.json(data);
};

//  // Get a user by id
const getOneUser = (req, res) => {
  const id = req.params.id;
  const user = data.find((user) => user.id === id);
  res.json(user);
};

//  // Adding a user
const addUser = (req, res) => {
  const { name, email } = req.body;

  const userId = data.length > 0 ? +data[data.length - 1].id + 1 : 1;

  const newUser = {
    id: userId,
    name,
    email,
  };
  data.push(newUser);
  res.status(201).json(newUser);
};

export { getAllUsers, getOneUser, addUser };
