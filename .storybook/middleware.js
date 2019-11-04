// middleware.js

const express = require('express');
const path = require('path');

module.exports = router => router.use('/', express.static(path.join(__dirname, '../public')));
