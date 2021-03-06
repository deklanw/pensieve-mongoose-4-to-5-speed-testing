/* eslint-disable no-console */
const chalk = require('chalk');
const mongoose = require('mongoose');

module.exports.connect = () => {
  const mongoURI = process.env.MONGODB_URI;

  mongoose.Promise = global.Promise;
  const mongoDB = mongoose.connect(mongoURI, { useMongoClient: true });

  if (process.env.NODE_ENV === 'development') {
    mongoDB.on('error', (err) => {
      console.log(chalk.red('🔺  Connection to database failed', err.message));
    });
    mongoDB.once('open', () => {
      console.log(chalk.cyan('✨  Connection to database established'));
    });
  }
};
