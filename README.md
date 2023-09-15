## to run the app use commands
#### 'npm install' to install all dependencies
#### 'node server.js' to start the server on port http://localhost:3200

### the app serves four apis using express framework

#### http://localhost:3200/notes => get method to get all created notes

#### http://localhost:3200/notes/create => post method to create a new note, body parameters needed is { title, content, createdBy }

#### http://localhost:3200/notes/update => put method to update a certain note, bodyparameter needed is { id, title, content, createdBy }

#### http://localhost:3200/notes/delete/id => delete method that deletes a certain note