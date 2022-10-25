// require all needed dependency
const express = require('express')
const cors = require('cors')
const app = express()
const Port = process.env.Port || 5000;

app.use(cors());

// import/get data json file
const courseTitle = require('./data/CoursesTitle.json');
const courseDetails = require('./data/allCourses.json')

// root directory 
app.get('/', (req, res) => {
    res.send('Courses Api Running ')
})

// all course title
app.get('/course-title', (req, res) => {
    res.send(courseTitle);
})

// single course title
app.get('/course-title/:id', (req, res) => {
    const id = req.params.id;
    const singleCourseTitle = courseTitle.find(c => c.id == id)
    res.send(singleCourseTitle)
})

// all course Details 
app.get('/course-details', (req, res) => {
    res.send(courseDetails);
})

// single course Details with id
app.get('/course-details/:id', (req, res) => {
    const id = req.params.id;
    const singleCourse = courseDetails.filter(courses => courses.id == id)
    res.send(singleCourse);
})

// running api server
app.listen(Port, () => {
    console.log('Courses Api Running ', Port)
})
