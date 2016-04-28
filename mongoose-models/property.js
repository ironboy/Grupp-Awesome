module.exports = function(mongoose){

  // our mongoose schema
  var propertySchema = mongoose.Schema({
    adress: {type: String, required: true},
    zipcode: {type: Number, required: true},
    price: {type: Number, required: true},
    rooms: {type: Number, required: true},
    livingarea: {type: Number, required: true},
    propertyType: {type: String, required: true},
    description: {type: String, required: true},
    yardarea: {type: Number, required: false},
    floors: {type: Number, required: false}
    //media: [{ type: mongoose.Schema.Types.ObjectId, ref: 'media' }]


    // a relation
    // doneBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  });

  // Return
  return mongoose.model("property", propertySchema);
};