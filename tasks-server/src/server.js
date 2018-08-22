let express = require('express');
let bodyParser = require('body-parser');

const app = express();

class Task {

    constructor(id, description, isDone, dateFrom, dateTo){
        this.id = id;
        this.description = description;
        this.isDone = isDone;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
    }

}

app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

let tasks = [];

app.get('/task', function(req, res){
    res.json(tasks);
});

app.post('/task', function(req, res){
    let task = req.body;

    tasks.push(new Task(task.id, task.description, task.isDone, task.dateFrom, task.dateTo));
    res.end();
})

app.delete('/task/:id', function(req, res){
    tasks = tasks.filter( t => t.id != req.params.id);
    res.end();
});

app.put('/task/:id', function(req, res){
    let idx = tasks.findIndex(t => t.id == req.body.id);

    if (idx === -1){
        res.status(404).send('No such task');
    }

    let task = req.body;
    tasks[idx] = new Task(task.id, task.description, task.isDone, task.dateFrom, task.dateTo);

    res.end();
});

app.listen(3000);

