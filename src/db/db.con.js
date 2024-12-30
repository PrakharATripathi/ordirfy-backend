const { username, password } = require("../configs/db.config");

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://tripathiprakhar175:Prakhar$175@cluster-oderify.gmfvm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-Oderify")
    .then(() => console.log("MongoDb connected"))
    .catch((err) => console.log(err));

