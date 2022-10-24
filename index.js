// require all needed dependency
const express = require('express')
const cors = require('cors')
const app = express()
const Port = process.env.Port || 5000;

app.use(cors());

const courseTitle = require('./data/CoursesTitle.json');
const courseDetails = require('./data/allCourses.json')

// root directory 
app.get('/', (req, res) => {
    res.send('Courses Api Running ')
})


app.get('/course-title', (req, res) => {
    res.send(courseTitle);
})
app.get('/course-details', (req, res) => {
    res.send(courseDetails);
})

app.get('/course-title/:id', (req, res) => {
    const id = req.params.id;
    const singleCourse = courseTitle.find(n => n.id === id);
    res.send(singleCourse)
    console.log(id, singleCourse)
})

// running api server
app.listen(Port, () => {
    console.log('Courses Api Running ', Port)
})
