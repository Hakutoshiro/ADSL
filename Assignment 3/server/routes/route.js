const express = require('express');
const con = require('../Connection');
const {handleLogin, handleReadData, handleEnrollData,handleUpdateData} = require("../controllers/controllers.js")
const router = express.Router();

router.post('/login',handleLogin)
router.get('/readData/:dbName?',handleReadData)
router.post('/enroll',handleEnrollData)
router.post('/update',handleUpdateData)

module.exports = router;