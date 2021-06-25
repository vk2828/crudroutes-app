//yaha par hum ek table define kar rhe hai tutorials naam ki...

// const { Sequelize } = require("sequelize/types");
// const { sequelize } = require(".");

//sabse pahle sequelize library ar seuelize module ko export karo taaki isse hum isse index.js me requiare kar paye
module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorials", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });

    return Tutorial;
};