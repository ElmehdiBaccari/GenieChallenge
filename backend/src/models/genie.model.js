
module.exports = function (app) {
  const modelName = 'genie';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    name : {
        type: String,
        required: [true, ' Name is required']
      
    },
    description : {
      type: String,
      required: [true, ' Description is required']
    
  }, links : {
    type: String,
    required: [true, ' Links is required']
  },

  authordetails : {
    type: String,
    required: [true, ' Author Details is required']
  },
  number : {
    type: String,
    required: [true, ' Number of citation and references is required']
  },
    year : {
      type: String,
      required: [true, 'Year is required']
    },
  }, {
    timestamps: true
  });

  
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }

  return mongooseClient.model(modelName, schema);
};
