"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _Registration = require('../controllers/Registration'); var _Registration2 = _interopRequireDefault(_Registration);



const router = new (0, _express.Router)();


router.post('/', _Registration2.default.store); 



exports. default = router; 