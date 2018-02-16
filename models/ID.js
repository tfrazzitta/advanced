var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
var IDSchema = new Schema({
      testId:String,
      testId2:String,
      Id:Number,                                                         
      id:{type: Schema.Types.ObjectId}  
});

// Create the Model
var ID = mongoose.model("ID", IDSchema);

// Export it for use elsewhere
module.exports = ID;

