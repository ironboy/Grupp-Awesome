module.exports = function(mongoose){

  // our mongoose schema
  var mediaSchema = mongoose.Schema({
    name: {type: String, required: true},
    path: {type: String, required: true},

    // a relation
    // doneBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  });

  // Return
  return mongoose.model("media", mediaSchema);
};