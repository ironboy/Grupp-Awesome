module.exports = function(mongoose){

  // our mongoose schema
  var customerSchema = mongoose.Schema({
    name: {type: String, required: true},
    adress: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required:true},
    // a relation
    // doneBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  });

  // Return
  return mongoose.model("customer", customerSchema);
};