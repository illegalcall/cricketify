import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import mongoose from "mongoose";
import mongo from "mongodb";
var ObjectId = mongo.ObjectId

const MongoClient = mongo.MongoClient
//import Match from './models/matchSchema.js'

dotenv.config();
const connectionString = process.env.MONGO_URI;
//connectDB();

const app = express();



MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('Matches')
     //init an Mongo object
    app.get('/api/choosematch',(req,res)=>{
      let matchPlayersAndArray = []
      //const product = db.collection('matches').find({ _id:oid }).toArray()
      const product = db.collection('matches').aggregate([{ $sample: { size: 1 } }]).toArray() //Random find
        .then(match=>{
          //console.log(match[0].innings)
          var playerExcel=[]
          var playerMap = new Map()
          const playerxl = db.collection('players').find({}).toArray().then(playerList=>{
            //console.log("Player:",player)
            playerExcel=playerList
            
            const newplayerMap = playerExcel.map(p=>{
              playerMap.set(p.Players,p['Credit Value'])
            })


            //console.log(playerMap)
          
            const mySet1 = new Set()
            const iterate = (obj) => {
                Object.keys(obj).forEach(key => {
              if((key==='batsman'|| key ==='bowler' || key ==='non_striker') && typeof (obj[key]) === 'string'){
                mySet1.add(obj[key])	
              }
              
                //console.log(typeof (obj[key]))

                if (typeof obj[key] === 'object') {
                        iterate(obj[key])
                    }
                })
            }
            iterate(match);
            
            let player22Creds=[]
            for (let elem of mySet1){

              let temp = {
                playerName:elem,
                creds:playerMap.get(elem)
              }
              playerMap.delete(elem)
              player22Creds.push(temp)
              
            } 
            //while(player22Creds.length<22)
            //{
              playerMap.forEach((elem,ind)=>{
                
                let temp = {
                playerName:ind,
                creds:elem
              }
              //playerMap.delete(elem)
              if(player22Creds.length<22)
                player22Creds.push(temp)
              
              })
            //}
            //player22Creds.shift();
            matchPlayersAndArray.push(player22Creds)
            //console.log("First",matchPlayersAndArray)

            res.json(matchPlayersAndArray) // Contains [ [match] ,[player22creds]]

          }
          )
          matchPlayersAndArray.push(match)
          //console.log(matchPlayersAndArray)
          //res.json(match)//random selected match

          //console.log(results)
        })
        .catch(err=>console.error(err))
    })
    
  })



const PORT = 5000;
app.listen(PORT, console.log(`server running on ${PORT}`));








// Trash
// const conn = await mongoose.connect(process.env.MONGO_URI, {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
//   useCreateIndex: true,
// });
// console.log(`MongoDB connected:' ${conn.connection.host}`.cyan.underline);

// var Test = mongoose.model("Test", new Schema(), "test");
// Test.findOne({ _id: "60832c23eb001c1fd47c18dc" }, function (err, doc) {
//   console.log("doc", doc);
// });

//Mongo fetch

// mongo.connect(/* ... */)
//   .then(client => {
//     // ...
//     const db = client.db('Matches')
//     db.collection('product').find().toArray()
//       .then(results =>{
//         console.log(results)
//       })
//       .catch(err=> console.error(err))
//     //const cursor = db.collection('q').find()
    

//     // ...
//   })

// mongo.connect(process.env.MONGO_URI, (err, db) => {
//   console.log('hello')
//   var cursor = db
//     .collection("matches")
//     .findOne({ _id: "60832c23eb001c1fd47c18dc" });
//   console.log("obj", cursor);
// });

// app.get("/api/choosematch", (req, res) => {
  //Select JSON File
  //const randomIndex = (Math.random() * 1000) % 231;

  //Fetch that file from Mongo


  

  // const fetchMatchfromMongoDB = async () => {
  //   const match = await Match.findById("60832c23eb001c1fd47c18dc",function (err, docs) {
  //     if (err){
  //         console.log(err);
  //     }
  //     else{
  //         console.log("Result : ", docs);
  //     }
  //   });
  // } 
  // fetchMatchfromMongoDB();


  //_id: 60832c23eb001c1fd47c18dc

  //Return obj to front from mongo
//   res.json({ teams: ["Royal Challengers Bangalore", "Kolkata Knight Riders"] });
// });
// const pathToDeliveries = (match) =>{
          //   match.innings.forEach((inning,index))=>{
          //     console.log(`Index${index}::Inning-${inning}`)
          //   }
          // }
          //pathToDeliveries(match)
          // const batsmen = db.collection('matches').find('batsman').toArray().then(batsman=>{
          //   //console.log(batsman)
          //   res.json(batsman)
          // })
          // const oid = new ObjectId(match[0]._id)
          // db.collection('matches').find({oid}).toArray()