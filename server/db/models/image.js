const sequelize = require('sequelize');
const db = require('../database');
const { HotModuleReplacementPlugin } = require('webpack');
const { defaultConfig } = require('sinon');

const Image = db.define('image', {
  URL: {
    type: sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Image;
