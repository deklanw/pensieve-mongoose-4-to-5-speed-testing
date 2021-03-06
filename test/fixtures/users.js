/* eslint-disable no-multi-assign */
/* eslint-disable no-unused-vars */

const id = require('pow-mongodb-fixtures').createObjectId;
const User = require('../../api/models/user');

const password1 = (exports.password1 = 'password 1');

const invite1 = (exports.invite1 = {
  value: 'test123 test456 test567',
});

const invites = (exports.invites = [
  {
    _id: id(),
    value: 'test invite phrase',
    isUsed: false,
  },
]);

const userWithEmailNotifs = (exports.userWithEmailNotifs = {
  _id: id(),
  name: 'Tester 1',
  email: 'tester1@example.com',
  password: User.generateHash('1234k'),
  prefs: {
    emailNotifs: true,
    sessionSize: 1,
  },
});

const userWithoutEmailNotifs = (exports.userWithoutEmailNotifs = {
  _id: id(),
  name: 'Tester 2',
  email: 'tester2@example.com',
  password: User.generateHash('1234k'),
  prefs: {
    emailNotifs: false,
    sessionSize: 1,
  },
});

const userWithoutCards = (exports.userWithoutCards = {
  _id: id(),
  name: 'Tester 3',
  email: 'tester3@example.com',
  password: User.generateHash('1234k'),
  prefs: {
    emailNotifs: true,
    sessionSize: 1,
  },
});

const users = (exports.users = [
  {
    _id: id(),
    name: 'Jane Tester',
    email: 'jane@example.com',
    password: User.generateHash(password1),
  },
  {
    _id: id(),
    name: 'Joe Tester',
    email: 'joe@example.com',
    password: User.generateHash('1234k'),
  },
  {
    _id: id(),
    name: 'Sarah Tester',
    email: 'sarah@example.com',
    password: User.generateHash('1234h'),
  },
  userWithEmailNotifs,
  userWithoutEmailNotifs,
  userWithoutCards,
]);
