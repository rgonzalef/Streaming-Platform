import {Schema, model} from "mongoose"

const movieSchema = new Schema( {

    title:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    image:{
        type:String,
        required:false
    },
    dateOfReleased:{
        type: String,
        required: true
    },
    numberOfLikes:{
        type: Number,
        required:false
    }

}) 

export default model ("Movie", movieSchema)



