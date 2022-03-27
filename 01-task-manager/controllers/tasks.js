const getAllTasks = (req, res) => {
  res.send("All items");
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const createTask = (req, res) => {
  res.json(req.body);
};

const updateTask = (req, res) => {
  res.send("Update task");
};

const deleteTask = (req, res) => {
  res.send("Delete task");
};

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
