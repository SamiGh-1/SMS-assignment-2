const express = require('express');
const httpApp = express();

const students =[
    {name:'lma',id:11926777,gpa:2.7,BirthDate:"19/6/2001"},
    {name:'sami',id:11923667,gpa:3.2,BirthDate:"9/8/2001"},
    {name:'noor',id:11920365,gpa:3.1,BirthDate:"30/1/2001"}
]

httpApp.get('/students' , func);
httpApp.get('/' , (req,res)=>{
    res.send('hello its me');
});


function func(req,res){
    res.status(200).send(students);
}

httpApp.listen(3000,()=>{
    console.log('http server running on http:localhost:3000')
})