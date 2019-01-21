// Dependencies
var friends = require("../data/friends.js");

// Export the function
module.exports = function(app) {

    // Sets the get for the api/friends route
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // Set the post for the api/friends route
    app.post('/api/friends', function(req, res) {

        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        console.log("Request: " + JSON.stringify(req.body));

        //Result of survey's POST and parse
        var userData = req.body;
        var userScores = userData.scores;

        console.log("User scores: " + userScores);

        var totalDifference = 0;

        //Loop through friend possibilities in the database
        for (var i = 0; i < friends.length; i++) {
           console.log(friends[i])
           totalDifference = 0
       

            //Then loop through scores of each friend
            for (var j = 0; j < friends[i].scores; j++); {
        
                //Calculate difference between scores
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                //If the total in the differences is less than the total of the "best match:"
                if (totalDifference <= bestMatch.friendDifference) {

                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }

        friends.push(userData);

        console.log("Best match: " + JSON.stringify(bestMatch));
        res.json(bestMatch);
    });

}