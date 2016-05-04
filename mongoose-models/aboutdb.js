module.exports = function(mongoose){

  // our mongoose schema
  var aboutSchema = mongoose.Schema({
    title: {type: String, required: false},
    description: {type: String, required: false},
    path: {type: String, required: false}

    // a relation
    // doneBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  });

  // Return
  return mongoose.model("aboutdb", aboutSchema);
};