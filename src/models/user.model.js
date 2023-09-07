import { Schema, model } from 'mongoose';

const universitiesSchema = new Schema(
  {
    country : {type:String},
    city : {type:String},
    name :  {type:String},
    location : {
      type :  {type:String},
      coordinates : {type:[]}
    },
    students : [
      { year : {type:Number}, number : {type:Number} },
    
    ]
  },
  {
    timestamps: true
  }
);

export default model('universities', universitiesSchema);
