const express = require('express');
const bodyParser = require('body-parser');
const dbUtils = require('../utils/db.utils');

const router = express.Router();

router.use(bodyParser.json());

router.get('/users', (req, res) => {
    dbUtils.getUsers().then(data => res.send(data));
});

router.put('/users/:id', (req, res) => {
    dbUtils.replaceUser(req.body).then(data => res.send(data));
});


router.get('/users/:id', (req, res) => {
    dbUtils.getUser(req.params.id).then(data => res.send(data));
});

router.post('/users', (req, res) => {
    dbUtils.createUser(req.body).then(data => res.send(data));
});

router.delete('/users/:id', function (req, res){
    dbUtils.deleteUser(req.params.id).then(data => res.send(data));
});

module.exports = router;