import { Schema, model } from 'mongoose';

const courcesSchema = new Schema(
    {
        university : {type:String},
        name : {type:String},
        level : {type:String}
      },
    {
        timestamps: true
      }
    );
    
    export default model('cources', courcesSchema);