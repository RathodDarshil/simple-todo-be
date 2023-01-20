const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

const todos = [];

app.get("/todos", (req, res) => {
    res.json({
        code: 200,
        data: todos,
    });
});

app.post("/todos", (req, res) => {
    const todo = req.body.todo;

    todos.push(todo);

    res.json({
        code: 200,
        msg: "Todo added!",
        data: todos,
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
