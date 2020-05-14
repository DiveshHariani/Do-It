const express = require('express');
const router = express.Router();

const Task = require('../../model/task');

//@GET request
// Display all the items:
// Access: public
router.get('/', (req,res) => {
    Task.find( (err,result) => {
        if(!err) {
            console.log(result);
            res.send(result);
        }
        else {
            console.log(err);
        }
    });
});

// @POST request
// Add items
// Access: public
router.post('/', (req,res) => {
    console.log(req.body);
    const newTask = new Task({
        title: req.body.title,
        due: req.body.due,
        details: req.body.details
    });

    newTask.save().then(console.log("Task added")).catch( err => console.log(err) );
});

// @DELETE request
// Deletes specific tasks
// Access: public
router.delete('/:TaskTitle', (req,res) => {
    Task.deleteOne(
        {title: req.params.TaskTitle},
        err => {
            if(!err) {
                console.log('Deleted ' + req.params.TaskTitle);
            }
            else {
                console.log(err);
            }
        }
    )
});

// @DELETE request
// Deletes all tasks
router.delete('/', (req,res) => {
    Task.deleteMany( err => {
        if(!err) {
            console.log('Deleted everything');
        }
        else {
            console.log(err);
        }
    })
})

module.exports = router;