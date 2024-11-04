const data = require("../data/users.json");

function getAll() {
  return data.items;
}

function get(id) {
  return data.items.find((user) => user.id === id);
}

function add(user) {
  user.id = data.items.reduce((prev, x) => (x.id > prev ? x.id : prev), 0) + 1;
  data.items.push(user);
  return user;
}
function update(id, user) {
  const userToUpdate = data.items.find((user) => user.id === id);
  Object.assign(userToUpdate, req.body);
  return userToUpdate;
}

function remove(id) {
  const userIndex = data.items.findIndex((user) => user.id === id);
  data.items.splice(userIndex);
  return {
    success: true,
    message: "User has been deleted",
  };
}

module.exports = {
  getAll,
  get,
  add,
  update,
  remove,
};