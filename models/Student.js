var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
var StudentSchema = new Schema({
      firstName: {type: String},
      lastName:{type:String},
      name:String,
      q1: String,
      q2: String,
      q3: String,
      q4: String, 
      q5: String, 
      q6: String,
      q7: String,
      q8: String,
      q9: String,
      q10: String,
      testId:String,
      completed:String, 
      // q11: String, 
      // q12: String,
      // q13: String,
      // q14: String,
      // q15: String,
      // q16: String, 
      // q17: String, 
      // q18: String,
      // q19: String,
      // q20: String,   
      score: {type: Number},                                                             
      id:{type: Schema.Types.ObjectId}  
});

// Create the Model
var Student = mongoose.model("Student", StudentSchema);

// Export it for use elsewhere
module.exports = Student;

