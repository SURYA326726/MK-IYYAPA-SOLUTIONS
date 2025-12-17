const mongoose = require('mongoose');

function ConnectDB() {
  mongoose
    .connect(
      'mongodb+srv://suryam726326_db_user:0bTOmVwYGT0tUEyL@gomathtechnology.eulokq1.mongodb.net/gomathDB?retryWrites=true&w=majority&appName=GomathTechnology'
    )
    .then(() => {
      console.log('MongoDB connected successfully');
    })
    .catch((err) => {
      console.error('MongoDB connection error:', err.message);
    });
}

module.exports = ConnectDB;
