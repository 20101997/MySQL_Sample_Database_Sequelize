const express = require("express");
const app = express();

const db = require('./models')


db.sequelize.sync({ force: true }).then(() => {

    app.listen(3001, () => {
        console.log("running");
    })


});
