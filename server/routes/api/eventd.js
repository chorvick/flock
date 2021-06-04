const EventD = require("../../models/Event");
const mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();
// import axios from 'axios';



module.exports = (app) => {


    router.route('/api/events').get((req, res) => {
        user.find((error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    })

}

