const express=require('express');
const app=express(); //created an application

app.listen(3000,()=>{
    console.log("Connected.Listening on port 3000");
});

//Callback function is called here is called a route handler.
app.get('/',(req,res)=>{
    res.send('You have successfully connected to our API.welcome!');
});

//Get all method
app.get('/api/avengers',(req,res)=>{
    let avengers = ['Iron Man','Captain America','Black widow','Thor'];
    res.send(avengers);
});

//Get with params
app.get('/api/avengers/:avengerId',(req,res)=>{
    //eg: localshost:3000/api/avengers/9?filterBy="avengerType"
    let optionalParams=req.query.filterBy; //Accessing optional parametrs
    res.send("You have requested for the avenger ID: "+ req.params.avengerId +' and the optional parameters passed for filterBy is '+optionalParams);
});

// app.get('/api/avengers/2',(req,res)=>{
//     let avenger ={id: 2,name:'Captain America'};
//     res.send(avenger);
// });
// app.get('/api/avengers/3',(req,res)=>{
//     let avenger ={id: 3,name:'Black Widow'};
//     res.send(avenger);
// })