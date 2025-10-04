const mongo = require('mongoose');

function ConnectDB() {
  mongo
    .connect('mongodb://localhost:27017/gomathTech')
    .then(() => {
      console.log('MongoDB connected successfully');
    })
    .catch((err) => {
      console.log('MongoDB disconnected', err);
    });
}

module.exports=ConnectDB;
