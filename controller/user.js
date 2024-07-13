const fs = require("fs");

// const index = fs.readFileSync("index.html", "utf-8");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const users = [];

// create User
exports.createUser = (req, res) => {
    users.push(req.body);
    res.status(200).json(req.body);
}

// get users list
exports.usersList = (req, res) => {
    res.status(200).json(users);
}

// get user by id
exports.getUserById = (req, res) => {
    const id = +req.params.id;
    const user = users.find(user => user.id === id);
    res.status(200).json(user);
}

// update user by id
exports.updateUserById = (req, res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex(user => user.id === id);
    users.splice(userIndex, 1, { ...req.body, id })
    res.status(200).json();
}

// replace user by id
exports.replaceUserById = (req, res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex(user => user.id === id);
    const user = users[userIndex];
    users.splice(userIndex, 1, { ...user, ...req.body })
    res.status(200).json();
}

// delete user by id
exports.deleteUserById = (req, res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex(user => user.id === id);
    users.splice(userIndex, 1)
    res.status(200).json();
}