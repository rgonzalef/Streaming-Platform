import Movie from "../../models/Movie.js";
import User from "../../models/User.js"

const Query = {
    async getMovies(){
        const movies = await Movie.find()
        return movies
    },
    async getMovieByTitle(_, {title}){
        const singleMovie = await Movie.findOne({title: title})
        return singleMovie
    },
    async getUsers(){
        const users = await User.find()
        return users

    },
    async login (_, {email, password}){
        var message
        const verifyUser = await User.find({email: email, password: password}) //returs an array
        //console.log('user', verifyUser.length)

        if(verifyUser.length > 0){
            message = "User OK"
        } else {
            message = "Bad User"

        }
        return message
        
    }
}

export default Query


