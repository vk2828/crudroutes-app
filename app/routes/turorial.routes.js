//Yaha par sare routes create karenge jojo karna hai humko like--
//new data banana,data get karna,id ke hisaab data grt karna ....

//yaha par ek app function banaya jisse hum server file me call karenge
module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");

    var router = require("express").Router();

    //new Tutorial
    router.post("/", tutorials.create);

    // get all Tutorials
    router.get("/", tutorials.findAll);

    // get all published Tutorials
    // router.get("/published", tutorials.findAllPublished);

    // get single Tutorial with id
    router.get("/:id", tutorials.findOne);

    // update a Tutorial with id
    router.put("/:id", tutorials.update);

    // delete a Tutorial with id
    router.delete("/:id", tutorials.delete);

    // delete all Tutorials
    router.delete("/", tutorials.deleteAll);

    app.use('/api/tutorials', router);
};