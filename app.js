const express = require("express");
const path = require("path");
const app= express();
require("./db/conn");
const hbs = require("hbs");
const Register= require("./models/registers");

const port = process.env.PORT || 3000;

const static_path =path.join(__dirname, "../public");
const template_path =path.join(__dirname, "../templates/views");
const partials_path =path.join(__dirname, "../templates/partials");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);
 
app.get("/",(req, res)=>{

    res.render("index")
});
app.get("/register", (req ,res)=>{
       res.render("register");
})
app.post("/register", async(req ,res)=>{
    try {
        const password= req.body.password;
        const cpassword = req.body.confirmpassword;
        if(password === cpassword){
            const registeruser = new Register({
                Username :req.body.Username,
                email :req.body.email,
                password :req.body.password,
                confirmpassword :req.body.confirmpassword,
            })
            const registered = await registeruser.save();

        }else{
            res.send("passwords do not match");
            res.status(201).render(index);
        }
        res.send(req.body.username);
        
    } catch (error) {
        res.status(400).send(error);
    }
})
app.get("/login", (req ,res)=>{
    res.render("login");
})


app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})
