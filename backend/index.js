import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let todos = [
    {id: 1, title: 'Почати проєкт', completed: false}
];

app.get('/api/', (req, res) => {
    res.json(todos);
});

app.post('/api/', (req, res) => {
    const {title} = req.body;
    if (!title || typeof title !== 'string' || title.trim().length === 0) {
        return res.status(400).json({message: 'Заголовок обов\'язковий і має бути непорожнім рядком'});
    }
    const newTodo = {
        id: todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1,
        title: title.trim(),
        completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.put('/api/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const {title, completed} = req.body;
    const todo = todos.find(t => t.id === id);
    if (!todo) return res.status(404).json({message: 'Завдання не знайдено'});
    if (title !== undefined) {
        if (typeof title !== 'string' || title.trim().length === 0) {
            return res.status(400).json({message: 'Заголовок має бути непорожнім рядком'});
        }
        todo.title = title.trim();
    }
    if (completed !== undefined) {
        if (typeof completed !== 'boolean') {
            return res.status(400).json({message: 'Завершено має бути логічним значенням'});
        }
        todo.completed = completed;
    }
    res.json(todo);
});

app.delete('/api/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex(t => t.id === id);
    if (index === -1) return res.status(404).json({message: 'Завдання не знайдено'});
    todos.splice(index, 1);
    res.json({message: 'Успішно видалено'});
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({message: 'Щось пішло не так!'});
});

app.listen(PORT, () => {
    console.log(`Сервер працює на http://localhost:${PORT}`);
});