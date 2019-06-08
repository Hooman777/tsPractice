const express = require('express');
const app = express();

const courses = [{
    id: 1,
    name: 'course1'
}, {
    id: 2,
    name: 'course2'
}, {
    id: 3,
    name: 'course3'
}];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send([1, 3, 7]);
});

app.get('/api/courses/:id', (req, res) => {
    const _id = parseInt(req.params.id);
    const course = courses.find(crs => crs.id === _id);
    if (!course) res.status(404).send(`The course with id = ${_id} was not found!`);
    res.send(course.name);
});

app.get('/api/courses/:month/:year', (req, res) => {
    res.send(req.query);
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listenning on port ${port}...`));

// app.post()
// app.put()
// app.delete()