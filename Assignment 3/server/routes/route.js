const express = require('express');
const con = require('../Connection');
const {handleLogin, handleReadData, handleEnrollData,handleUpdateData,handleDeleteData} = require("../controllers/controllers.js")
const router = express.Router();

router.post('/login',handleLogin)
router.get('/readData/:dbName?',handleReadData)
router.post('/enroll',handleEnrollData)
router.patch('/update',handleUpdateData)
router.delete('/delete',handleDeleteData)

module.exports = router;