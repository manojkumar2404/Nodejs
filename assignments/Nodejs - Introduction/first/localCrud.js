//server -> module(node) -> http(server create module) -> require(module define)

//node - function always - callback(argument)

const http = require('http') //module //variable store
const express = require('express');
// const cors = require('cors') 
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let mydata = [
    {
        id:1,
        name:"manoj",
        email:"manoj@gmail.com",
        password:"123"
    },
    {
        id:2,
        name:"node",
        email:"node@gmail.com",
        password:"123"
    }
]


//http://localhost/myapi/datafetch
//datafetch //map
app.get('/datapost', (req, res)=>{
     res.json(mydata)

    console.log("data fetch successfully..")
})

//data insert //push  //id unique //req.body //name,email,pass
app.post('/datapost', (req, res)=>{

    const {name, email, password} = req.body;

    const newdata = {id: mydata.length + 1,name,email,password};

    mydata.push(newdata);

    res.status(201).json(newdata);

    console.log("data insert successfully..")
})

//data edit //update tablename set name=?,email=?,password=? where is = ?
app.put('/datapost/:id', (req, res)=>{
    const id = parseInt(req.params.id)
    const {name, email, password} = req.body;

    mydata= mydata.map( item=> {

        item.id === id ? {...item, name,email,password} : item
       
    })

    res.json({ msg:"Particular id data is edited"}); // key and value
//object data store 

    // console.log("data edit successfully..")
})

//data delete // delete from tablename where is = ?
app.delete('/datapost/:id', (req, res)=>{
    const id = parseInt(req.params.id) //id convert string to number

   mydataDelete =  mydata.filter(item => item.id !== id)

   res.json({msg:"Perticular id is deleted"});

    //console.log("data delete successfully..")
})
 

app.listen(5001, ()=>{
    console.log("my server is running on 5001")
})

/* ---- node server create----
    const servers = http.createServer((req, res)=>{

    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/plain') 
    res.end("hello node") 

})*/