var express = require("express");
require("./db")
const prodmodel = require('./model/product');

var app = express();

app.use(express.json());

var port = 3000;

app.post("/",(req,res)=>{
    try {
        prodmodel(req.body).save();
        res.send("data added succesfully" )
    } catch (error) {
        res.send(error)
    }
})
app.get('/',async(req,res)=>{
    try {
     var data = await prodmodel.find();
     res.send(data);
    } catch (error) {
     res.send(error)
    }
 })

 app.delete('/remove/:id',async(req,res)=>{
    console.log(req.params)
try {
    await prodmodel.findByIdAndDelete(req.params.id);
    res.send("Dleted succcesfully")
} catch (error) {
    res.send(error)
}
 })
 
 







app.listen(port,(req,res)=>{
    console.log(`Server is connected to ${port}`)

})
