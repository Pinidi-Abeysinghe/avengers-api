const express=require('express');
const app=express(); //created an application
const logger = require('./middleware/logger');
const auth = require('./middleware/authenticator');
body =app.use(express.json()); //parse the JSON

app.use(logger); //telling app to use custom middleware

app.use(auth);



let avengerArray =[{id:1 , name: "Captain America"},
{id:2, name: "Thor"},
{id:3,name:"Black widow"}];

app.listen(3000,()=>{
    console.log("Connected.Listening on port 3000");
});

//Callback function is called here is called a route handler.
app.get('/',(req,res)=>{
    res.send('You have successfully connected to our API.welcome!');
});

//Get all method
app.get('/api/avengers',(req,res)=>{
    console.log("GET All method was called");
    let avengers = ['Iron Man','Captain America','Black widow','Thor'];
    res.send(avengers);

});

//POST Method

app.post('/api/avengers',(req,res)=>{

   //Validations
   if(!req.body.name){
      return res.status(400).send("Not all mandatory values are sent");
    }

    let avengerObject ={
        id: avengerArray.length+ 1,
        name: req.body.name

    };
    avengerArray.push(avengerObject);
    res.send(avengerArray);
    //req.body.name - Access parameters in the request body. 
});

    //PUT Method
    app.put('/api/avengers/:avengerId',(req,res)=>{
        let avenger = avengerArray.find(a=>a.id == req.params.avengerId);
        if(!avenger){
            return res.status(404).send("The given ID does not exist in our system");
        }
        //Validation
        if(!req.body.name){
            return res.status(400).send("Not all mandatory values are sent");
          }

          avenger.name = req.body.name;
          res.send(avenger);

    });

    //DELETE method

    app.delete('/api/avengers/:avengerId',(req,res)=>{

        let avenger = avengerArray.find(a=>a.id == req.params.avengerId);
        if(!avenger){
            return res.status(404).send("The given ID does not exist in our system");
        }
        let indexOfAvenger=avengerArray.indexOf(avenger);
        avengerArray.splice(indexOfAvenger,1);
        res.send(avenger);

    });

//Get with params
// app.get('/api/avengers/:avengerId',(req,res)=>{
//     //eg: localshost:3000/api/avengers/9?filterBy="avengerType"
//     let optionalParams=req.query.filterBy; //Accessing optional parametrs
//     res.send("You have requested for the avenger ID: "+ req.params.avengerId +' and the optional parameters passed for filterBy is '+optionalParams);
// });

//GET with params
// == comparing the value
// === comparing the value and data type
app.get('/api/avengers/:avengerId',(req,res)=>{
    let avenger = avengerArray.find(a=>a.id == req.params.avengerId);
    if(!avenger){
        return res.status(404).send("The given ID does not exist in our system");
    }
    res.status(200).send(avenger);
});

// app.get('/api/avengers/2',(req,res)=>{
//     let avenger ={id: 2,name:'Captain America'};
//     res.send(avenger);
// });
// app.get('/api/avengers/3',(req,res)=>{
//     let avenger ={id: 3,name:'Black Widow'};
//     res.send(avenger);
// })