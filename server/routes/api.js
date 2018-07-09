const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video');


//connect to mLab
const db = "mongodb://userzion:userzion123@ds125881.mlab.com:25881/videoshopdb";
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.error("Error! " + err);
    }
})

//Get /api/videos
router.get('/videos', function(req, res){
    console.log("Get request for all videos");
    Video.find({})
    .exec(function(err, videos){
        if(err){
            console.log("Error retreiving videos");
        }else{
            return res.json(videos);
        }
    });
});

//GET /api/videos/2
router.get('/videos/:id', function(req, res){
    console.log("Get request for a single video");
    Video.findById(req.params.id)
    .exec(function(err, video){
        if(err){
            console.log("Error retreiving video");
        }else{
            return res.json(video);
        }
    });
});

//POST /api/video/
router.post('/video', function(req, res){
    console.log("Post a video");
    var newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;

    newVideo.save(function(err, insertedVideo){
        if(err){
            console.log('Error saving video');
        }else{
            res.json(insertedVideo);
        }
    });
}); 

//PUT /api/video/3
router.put('/video/:id', function(req, res){
    console.log('Update a video');
    Video.findByIdAndUpdate(req.params.id, 
    {
       $set: {title: req.body.title, url: req.body.url, description: req.body.description} 
    },
    {
        new: true
    },
        function(err, updatedVideo){
            if(err){
                res.send("Error updating video");
            }else{
                res.json(updatedVideo);
            }
        }
    )
})


router.delete('/video/:id', function(req, res){
    console.log("Deleting a video");
    Video.findByIdAndRemove(req.params.id, function(err, deletedVideo){
        if(err){
            res.send("Error deleting video");
        }else{
            res.json(deletedVideo);
        }
    })
})

module.exports = router;