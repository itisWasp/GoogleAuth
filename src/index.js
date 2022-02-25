// "use strict";

// Object.defineProperty(exports, "__esModule", {
//   value: true
// });
// exports.default = void 0;

// var _app = _interopRequireDefault(require("./app"));

// var _dotenv = _interopRequireDefault(require("dotenv"));

// function _interopRequireDefault(obj) {
//   return obj && obj.__esModule ? obj : {
//     default: obj
//   };
// }

// _dotenv.default.config();

// const port = process.env.PORT || 5000;

// _app.default.listen(port, () => {
//   console.log(`Server Started on Port ${port}`);
// });

// var _default = _app.default;
// exports.default = _default;

import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is live at localhost:${port}`));
