// Example: Insert a task to create the collection/table
const mongoose = require('mongoose');
const Task = require('../models/task.model'); // Adjust the path as needed

mongoose.connect('mongodb://localhost:27017/your-db-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  const task = new Task({
    title: 'First Task',
    description: 'This will create the tasks collection.',
    completed: false
  });
  await task.save();
  console.log('Task inserted and collection created!');
  mongoose.disconnect();
}).catch(err => {
  console.error('MongoDB connection error:', err);
});