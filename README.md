# FriendFinder

This FriendFinder application is a compatibility-based dating app. It is a full-stack site that compares various user's input via a survey, and this way finds the best overall match between individuals. The name and the picture of the individual that best matches the user will be displayed in the result.

## Preview Site

https://friend-finder-app55.herokuapp.com/

## Usage

<img src="https://github.com/Heidijvr/FriendFinder/blob/master/Images/home.png" alt Friend Finder Home Page>

## Requirements

- Use express and body-parser npm packages in the server.js file
- Separate JavaScript files for routing (htmlRoutes.js and apiRoutes.js)
- Appropriate GET and POST routes for serving HTML pages and API's
- Separate file for storing friends (friends.js)
- 10-question survey to assess uniqueness of users
- Calculate best match for user once survey is completed and return that match to the user via *modal*
- **Alert** when user has not filled in the whole form when submitting.

## Technologies Used

- JavaScript
- jQuery
- node.js
- Express.js
- HTML
- Bootstrap
- Fontawesome

## Node Explanation

Our server.js file sets up the Express server, specifying our port number, the npm packages that need to be loaded, and also the routes, which we have externalized.
There are 2 separate HTML files (home.html and survey.html) that serve as the front-end portion of our code; they determine what the user sees (the homepage and the survey, which will also show the resulting best match).
Our 2 routing files (htmlRoutes.js and apiRoutes.js) determine the back-end logic (based on the request being made, the response that gets sent to the browser); the HTML routes display the survey and the homepage based on the URL that is accessed, and the API routes send back existing content in our server-side data or add new friends.
Best match is calculated by finding the friend with the minimal difference in scores and then sending that friend to the browser as a JSON object.
A modal is then toggled, displaying the the best match to the person who just took the survey.
***

This is an assignment is in fulfillment of the requirements for the bootcamp of the University of Washington (September 2018 - April 2019).
