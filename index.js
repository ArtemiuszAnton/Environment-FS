const express = require('express');
const { getAllData, getDataById, createNewData, updateData, deleteData } = require('./service');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())

app.get('/', (req, res) => {
    const data = getAllData();
    res.send(data)
})

app.get('/:id', (req, res) => {
    const { id } = req.params
    const data = getDataById(id)
    res.send(data)
})

app.post('/', (req, res) => {
    const { label, category, priority } = req.body;
    const data = createNewData(label, category, priority);
    res.send(data)
})

app.put('/:id', (req, res) => {
    const { label, category, priority } = req.body;
    const { id } = req.params;
    const data = updateData(id, label, category, priority)
    res.send(data)
})

app.delete('/:id', (req, res) => {
    const { id } = req.params
    const data = deleteData(id)
    res.send(data)
})

app.listen(3001, () => {
    console.log('server is run');
})