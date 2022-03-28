const express = require("express");
const app = express();
const port = 3000;
const tasks = require("./routes/tasks");

// middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/api/v1/tasks/", tasks);

// app.get('/api/v1/tasks', (req, res) => res.send('Hello World!'))
// app.post('/api/v1/tasks', (req, res) => res.send('Hello World!'))
// app.get('/api/v1/tasks/:id', (req, res) => res.send('Hello World!'))
// app.patch('/api/v1/tasks/:id', (req, res) => res.send('Hello World!'))
// app.delete('/api/v1/tasks/:id', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Server listening on port ${port}...`));

console.log("Task Manager App");
