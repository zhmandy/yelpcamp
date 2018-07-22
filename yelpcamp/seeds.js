var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
    name: "Cloud's Rest",
    image: "https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg",
    description: "For some medications, dosage must be determined by trial and error. For these drugs, your healthcare provider would need to monitor you when you first start treatment. For instance, if your doctor prescribes thyroid medications or blood thinners, you would likely need to have several blood tests over time to show if the dosage is too high or too low. The results from these tests would help your doctor adjust your dosage until they find the one that’s right for you."
    },
    {
        name: "Andy Rest",
        image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg",
        description: "For some medications, dosage must be determined by trial and error. For these drugs, your healthcare provider would need to monitor you when you first start treatment. For instance, if your doctor prescribes thyroid medications or blood thinners, you would likely need to have several blood tests over time to show if the dosage is too high or too low. The results from these tests would help your doctor adjust your dosage until they find the one that’s right for you."
    },
    {
        name: "Wendy Rest",
        image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg",
        description: "For some medications, dosage must be determined by trial and error. For these drugs, your healthcare provider would need to monitor you when you first start treatment. For instance, if your doctor prescribes thyroid medications or blood thinners, you would likely need to have several blood tests over time to show if the dosage is too high or too low. The results from these tests would help your doctor adjust your dosage until they find the one that’s right for you."
    }
]


function seedDB() {
    //remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("remove campgrounds!");
        //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                }
                else{
                    console.log("added a campground");
                    //create a comment
                    Comment.create({
                        text: "This place is great, but i wish there is wifi",
                        author: "Homer"
                    }, function(err, comment){
                        if(err){
                            console.log(err);
                        }
                        else{
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Created a new comment!");
                        }
                    })
                }
            });
        });
    });
    //add a few comments
}

module.exports = seedDB;