
var path = require("path");
var mongoose = require("mongoose");
var Student = require("../models/Student.js");
var Answer = require("../models/Answer.js");
var Test = require("../models/Test.js");
var ID = require("../models/ID.js");
var user = require("../models/user.js");



module.exports=function(app){
  

app.post("/submit-test",function(req,res){
   // /console.log(req.body)

   var NewTest = new Test ({ 

      testName:req.body.testName,

      testMaker:req.user.google.name,

      testCode:Math.floor((Math.random() * 10000) + 1),

      q1: req.body.q1,
      Answer1: [req.body.a1, req.body.b1, req.body.c1, req.body.d1],

      q2: req.body.q2,
      Answer2: [req.body.a2,req.body.b2,req.body.c2,req.body.d2],

      q3: req.body.q3,
      Answer3: [req.body.a3,req.body.b3,req.body.c3,req.body.d3],

      q4: req.body.q4,
      Answer4: [req.body.a4,req.body.b4,req.body.c4,req.body.d4],

      q5: req.body.q5,
      Answer5: [req.body.a5,req.body.b5,req.body.c5,req.body.d5],

      q6: req.body.q6,
      Answer6: [req.body.a6,req.body.b6,req.body.c6,req.body.d6],

      q7: req.body.q7,
      Answer7: [req.body.a7,req.body.b7,req.body.c7,req.body.d7],

      q8: req.body.q8,
      Answer8: [req.body.a8,req.body.b8,req.body.c8,req.body.d8],

      q9: req.body.q9,
      Answer9: [req.body.a9,req.body.b9,req.body.c9,req.body.d9],

      q10: req.body.q10,
      Answer10: [req.body.a10,req.body.b10,req.body.c10,req.body.d10],

      score: 10
  });

     NewTest.save(function(err,doc){
          if (err){
          console.log('err: ' + error);
          res.json('error: there was an error');
          }
          else{  
          console.log(doc._id) 
             ID.update({Id:4}, {$set:{testId2:doc._id}}).exec(function(error,data){
                if (error){
                console.log('err: ' + error);
                res.json('error: there was an error');
                }
                else{  
                
                console.log(doc)
                console.log(data)
                res.redirect("/answer")
                }   
            })

          //res.redirect("/answer")
          }   
    })
})



app.get("/continue-to-answer", function(req, res) {
  ID.find({Id:4}).exec(function(error,doc){
    if (error) {
     console.log(error)
    }
    else {
      console.log(doc)
      var testId2=doc[0].testId2; 
      console.log(doc[0].testId2);
      Test.find({_id:testId2}).exec(function(error,data){
           if (error){
            console.log('err: ' + error);
            res.json('error: there was an error');
            }
            else{  
            console.log(data) 
            res.send(data)
            }   

        })
    }
 })
})


app.post("/answer",function(req,res){
console.log(req.body)
   ID.find({Id:4}).exec(function(error,doc){
    if (error) {
     console.log(error)
    }
    else {
      var testId2=doc[0].testId2; 
      console.log(testId2);
          Test.update({"_id":doc[0].testId2}, {$set:{Choice1:req.body.q1, 
                                                     Choice2:req.body.q2,
                                                     Choice3:req.body.q3,
                                                     Choice4:req.body.q4,
                                                     Choice5:req.body.q5,
                                                     Choice6:req.body.q6,
                                                     Choice7:req.body.q7,
                                                     Choice8:req.body.q8,
                                                     Choice9:req.body.q9,
                                                     Choice10:req.body.q10}}).exec(function(error,data){
           if (error){
            console.log('err: ' + error);
            res.json('error: there was an error');
            }
            else{  
              Test.find({"_id":doc[0].testId2}).exec(function(error,test){
                if (error) {
                  console.log(error)
                }
                else {
                  console.log(test);
                  res.redirect("/home")
                }
              })
            }   

        })
     }
  })
})




app.get("/get-test", function(req, res) {
   Test.find({}).exec(function(error,doc){
      if (error) {
       console.log(error)
      }
      else {
        res.send(doc);
        //console.log(doc)
      }
    })
})





app.post("/student-test",function(req,res){
ID.find({Id:4}).exec(function(error,data){
if (error){
console.log('err: ' + error);
res.json('error: there was an error');
}
else{ 
  var testId=data[0].testId 
  console.log(testId)
  var NewStudent = new Student ({     
      // firstName: req.body.firstName,
      // lastName: req.body.lastName,
      name:req.user.google.name,
          q1: req.body.q1,
          q2: req.body.q2,
          q3: req.body.q3,
          q4: req.body.q4,
          q5: req.body.q5,
          q6: req.body.q6,
          q7: req.body.q7,
          q8: req.body.q8,
          q9: req.body.q9,
          q10: req.body.q10,
          testId:testId,
          completed:"completed",
          score: 0
  });
      NewStudent.save(function(err,doc){
          if (err){
          console.log('err: ' + error);
          res.json('error: there was an error');
          }
          else{  
          console.log(doc) 
          res.redirect("/table")
          }   
    })
}   
})
});




app.post("/retrieve-test/:id",function(req,res){
    console.log(req.params.id)
    ID.update({Id:4}, {$set:{testId:req.params.id}}).exec(function(error,doc){
         if (error){
          console.log('err: ' + error);
          res.json('error: there was an error');
          }
          else{  
           Test.find({_id:req.params.id}).exec(function(error,doc){
                 if (error){
                    console.log('err: ' + error);
                    res.json('error: there was an error');
                  }
                  else{ 
                  console.log(doc)

                  res.send(doc) 
                  }   
          })
        } 
    })
});



// app.get("/createid",function(req,res){
//   var NewID = new ID ({     
//            testId:"hello",
//            testId2:"hh",
//            Id:4
//   });
//       NewID.save(function(err,doc){
//           if (err){
//           console.log('err: ' + error);
//           res.json('error: there was an error');
//           }
//           else{  
//           //console.log(doc) 
//           res.redirect("/home")
//           }   
//     })
// });




app.get("/get-one-test/",function(req,res){
    ID.find({Id:4}).exec(function(error,doc){
         if (error){
            console.log('err: ' + error);
            res.json('error: there was an error');
          }
          else{
              var testId=doc[0].testId
              Test.find({_id:testId}).exec(function(error,doc){
                 if (error){
                    console.log('err: ' + error);
                    res.json('error: there was an error');
                  }
                  else{ 
                  console.log(doc)
                  res.send(doc) 
                  }   
          })
          }   
    })
});




app.get("/show-ID", function(req, res) {
  ID.find({}).exec(function(error,doc){
      if (error) {
       console.log(error)
      }
      else {
        res.send(doc);
        //console.log(doc)
      }
    })
})





app.get("/show-all-in-table", function(req, res) {
if(req.user.google.name==="Thomas Frazzitta"){
  console.log("BOOOM")

     ID.find({Id:4}).exec(function(error,doc){
         if (error){
            console.log('err: ' + error);
            res.json('error: there was an error');
          }
          else{
              var testId=doc[0].testId
              Student.find({testId:testId}).exec(function(error,data){
                 if (error){
                    console.log('err: ' + error);
                    res.json('error: there was an error');
                  }
                  else{ 
                  console.log(data)
                  res.send(data) 
                  }   
          })
    }   
 })
}
else{
         ID.find({Id:4}).exec(function(error,doc){
         if (error){
            console.log('err: ' + error);
            res.json('error: there was an error');
          }
          else{
              var testId=doc[0].testId
              Student.find({testId:testId,name:req.user.google.name}).exec(function(error,data){
                 if (error){
                    console.log('err: ' + error);
                    res.json('error: there was an error');
                  }
                  else{ 
                  console.log(data)
                  res.send(data) 
                  }   
          })
    }   
 })

}
    
})





app.get("/show-one-in-table", function(req, res) {
     ID.find({Id:4}).exec(function(error,doc){
         if (error){
            console.log('err: ' + error);
            res.json('error: there was an error');
          }
          else{
              var testId=doc[0].testId
              Student.find({testId:testId,name:req.user.google.name}).exec(function(error,data){
                 if (error){
                    console.log('err: ' + error);
                    res.json('error: there was an error');
                  }
                  else{ 
                  console.log(data)
                  res.send(data) 
                  }   
          })
    }   
 })
})



app.get("/completed-tests", function(req, res) {
      ID.find({Id:4}).exec(function(error,doc){
         if (error){
            console.log('err: ' + error);
            res.json('error: there was an error');
          }
          else{
              var testId=doc[0].testId
              Student.find({completed:"completed",name:req.user.google.name}).exec(function(error,data){
                 if (error){
                    console.log('err: ' + error);
                    res.json('error: there was an error');
                  }
                  else{ 
                  console.log(data)
                  res.send(data) 
                  }   
            })
          }
})

})







app.get("/show-answer",function(req,res){
  Answer.find({}).exec(function(error,doc){
    if (error) {
     console.log(error)
    }
    else {
      res.send(doc);
     // console.log(doc)
    }
  })
})





app.post("/delete-test", function(req, res) {
  console.log(req.body.DeleteArray)
  var DelArray =req.body.DeleteArray; 
  var calls =0;
      for(i=0;i<DelArray.length;i++){
          Test.remove({_id:DelArray[i]}).exec(function(error,data){
              if(error){
                res.send(error)
              }

          })
      }

      
      
             //else{
                //calls++
                //console.log("DELETEDDDDDD")
                // Test.find({}).exec(function(error,doc){
                //     if (error) {
                //      console.log(error)
                //     }
                //            // else {
                //     if(calls===DelArray.length){
                //       //console.log(DelArray);
                //       res.send(DelArray)
                //     }
                //     else{
                //       calls++;
                //     }
        
                // });
             // }
            Test.find({}).exec(function(error,doc){
                if (error) {
                 console.log(error)
                }
                       // else {
                // if(calls===DelArray.length){
                //   //console.log(DelArray);
                //   res.send(doc)
               // }
                else{
                 // calls++;
                  res.send(doc)
                }
    
            }); 
         // })
      //}  
      //res.send(DelArray)    
})




app.get("/delete", function(req, res) {
  Student.remove({}).exec(function(error,data){
     if(error){
        res.send(error)
      }
      else{
        console.log(data)
        res.send(data)
      }
   });
})


app.get("/del", function(req, res) {
  Answer.remove({}).exec(function(error,data){
     if(error){
        res.send(error)
      }
      else{
        console.log(data)
        res.send(data)
      }
   });
})

app.get("/depot", function(req, res) {
  Test.remove({}).exec(function(error,data){
     if(error){
        res.send(error)
      }
      else{
        console.log(data)
        res.send(data)
      }
   });
})


app.get("/remove", function(req, res) {
  ID.remove({}).exec(function(error,data){
     if(error){
        res.send(error)
      }
      else{
        console.log(data)
        res.send(data)
      }
   });
})


app.get("/find", function(req, res) {
  ID.find({}).exec(function(error,data){
     if(error){
        res.send(error)
      }
      else{
        console.log(data)
        res.send(data)
      }
   });
})


app.get("/hello", function(req, res) {
   res.send(req.user.google.name);

})


app.get("/createid", function(req, res) {
   ID.find({}).exec(function(error,data){
     if(error){
        res.send(error)
      }
      if(data.length==0){
           var NewID = new ID ({     
           testId:"hello",
           testId2:"hh",
           Id:4
  });
      NewID.save(function(err,doc){
          if (err){
          console.log('err: ' + error);
          res.json('error: there was an error');
          }
          else{  
          console.log(doc) 
          res.send("Creating ID Object");
          //res.redirect("/home")
          }   
    })
      }
      else{
        //console.log(data)
        res.send("Objcect Already Saved");
      }
  })
})



///////////////// PAGES
// app.get('/', function(req, res){
//  res.render('index');
// });


app.get("/answer", function(req, res) {
   if(req.user==undefined){
       res.redirect("/")
    }
    else{
      res.sendFile(path.join(__dirname, "../public/answer.html"));
    }   
});



app.get("/home", function(req, res) {
    if(req.user==undefined){
       res.redirect("/")
    }
    else{
      res.sendFile(path.join(__dirname, "../public/home.html"));
    }   
});

app.get("/admin-table", function(req, res) {
    if(req.user==undefined){
       res.redirect("/")
    }
    else{
      res.sendFile(path.join(__dirname, "../public/admin-table.html"));
    }  
});


app.get("/exam", function(req, res) {
    if(req.user==undefined){
       res.redirect("/")
    }
    else{
      res.sendFile(path.join(__dirname, "../public/exam.html"));
    }  
});

app.get("/table", function(req, res) {
    if(req.user==undefined){
       res.redirect("/")
    }
    else{
      res.sendFile(path.join(__dirname, "../public/table.html"));
    }  
});

app.get("/test", function(req, res) {
    if(req.user==undefined){
       res.redirect("/")
    }
    else{
      res.sendFile(path.join(__dirname, "../public/test.html"));
    }  
});


app.get("/placing", function(req, res) {
    if(req.user==undefined){
       res.redirect("/")
    }
    else{
      res.sendFile(path.join(__dirname, "../public/placing.html"));
    }  
});



}////MODULE END///////



  
