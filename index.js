const express=require('express');
const {createServer} = require('http');
const {Server}=require('socket.io');
const cors=require('cors');

const app=express();
const httpServer=createServer(app);

app.use(cors({origin: 'http://localhost:3000'}));
const io=new Server(httpServer,{cors:'http://localhost:3000'})

io.on('connection',(socket)=>{
  console.log('server connected');
  
 socket.on('beginPath',(arg)=>{
   //send to all other clients other than the sender who has send this message
   socket.broadcast.emit('beginPath',arg)
 })

 socket.on('drawLine',(arg)=>{
   //send to all other clients other than the sender who has send this message
   socket.broadcast.emit('drawLine',arg)
 })

 socket.on('changeConfig',(arg)=>{
   //send to all other clients other than the sender who has send this message
   socket.broadcast.emit('changeConfig',arg)
 })

})

 

httpServer.listen(5000)