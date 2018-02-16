var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
var TestSchema = new Schema({
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
      Answer1: Array, 
      Answer2: Array, 
      Answer3: Array, 
      Answer4: Array, 
      Answer5: Array, 
      Answer6: Array, 
      Answer7: Array, 
      Answer8: Array, 
      Answer9: Array, 
      Answer10: Array,
      Choice1: String,
      Choice2: String,
      Choice3: String,
      Choice4: String, 
      Choice5: String, 
      Choice6: String,
      Choice7: String,
      Choice8: String,
      Choice9: String,
      Choice10: String, 
      testName: String, 
      testMaker:String,
      score: {type: Number},                                                             
      id:{type: Schema.Types.ObjectId}  
});

// Create the Model
var Test = mongoose.model("Test", TestSchema);

// Export it for use elsewhere
module.exports = Test;

