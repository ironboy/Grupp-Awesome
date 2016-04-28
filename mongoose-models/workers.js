module.exports = function(mongoose){

  // our mongoose schema
  var salesstaffSchema = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    worktime: {type: Number, required: false},
    age: {type: Number, required: false}

    
    // a relation
    // doneBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  });

  // Return
  return mongoose.model("salesstaff", salesstaffSchema);
};