// "use strict";

// Object.defineProperty(exports, "__esModule", {
//   value: true
// });
// exports.default = void 0;

// var _fs = _interopRequireDefault(require("fs"));

// var _path = _interopRequireDefault(require("path"));

// var _sequelize = _interopRequireDefault(require("sequelize"));

// var _config = _interopRequireDefault(require("../config/config"));

// function _interopRequireDefault(obj) {
//   return obj && obj.__esModule ? obj : {
//     default: obj
//   };
// } // const fs = require("fs");
// // const path = require("path");
// // const Sequelize = require("sequelize");
// // const envConfigs = require("../config/config");

// const basename = _path.default.basename(__filename);

// const env = process.env.NODE_ENV || "development";
// const config = _config.default[env];
// const db = {};
// let sequelize;

// if (config.url) {
//   sequelize = new _sequelize.default(config.url, config);
// } else {
//   sequelize = new _sequelize.default(config.database, config.username, config.password, config);
// }

// _fs.default.readdirSync(__dirname).filter(file => {
//   return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
// }).forEach(file => {
//   const model = sequelize["import"](_path.default.join(__dirname, file));
//   db[model.name] = model;
// });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });
// db.sequelize = sequelize;
// db.Sequelize = _sequelize.default;
// var _default = db;
// exports.default = _default;

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const envConfigs = require("../config/config");

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = envConfigs[env];
const db = {};

let sequelize;
if (config.url) {
  sequelize = new Sequelize(config.url, config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    // const model = sequelize["import"](path.join(__dirname, file));
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

//models/index.js
