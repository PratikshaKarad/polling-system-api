# polling-system-api
This is a RESTful API for a Polling System built using Node.js and MongoDB. It provides endpoints to create questions, add options, vote for options, and manage questions and options.

## Features
- Create a question
- Add options to a question
- Add a vote to an option of a question
- View a question with its options and votes
- Delete a question
- Delete an option

## API Endpoints
### Create a question
- POST /api/questions/create
- Body: { "title": "Question Title" }

### Add an option to a question
- POST /api/questions/:id/options/create
- Body: { "text": "Option Text" }

### View a question with its options
- GET /api/questions/:id

### Add a vote to an option
- POST /api/options/:id/add_vote

### Delete an option
- DELETE /api/options/:id/delete

### Delete a question
- DELETE /api/questions/:id/delete


### Prerequisites
- Node.js and npm installed
- MongoDB installed and running
