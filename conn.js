const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/users",{
    
}) .then(()=>{
    console.log(`connection sucessful`);
}) .catch((e)=>{
    console.log(`no connection`);

})