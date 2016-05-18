module.exports = function(mongoose){

  var homeSchema = mongoose.Schema({
    title: {type: String, required: false},
    text: {type: String, required: false}
  });

  return mongoose.model("homedb", homeSchema);
};