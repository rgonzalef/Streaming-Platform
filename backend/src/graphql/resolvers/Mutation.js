import Movie from "../../models/Movie.js";
import User from "../../models/User.js"

const Mutation = {
    async createMovie(  _, {title, description, image, dateOfReleased, numberOfLikes} ){
        const newMovie = {title, description, image, dateOfReleased, numberOfLikes}
        const movie = await Movie.create(newMovie)
        return movie
    },
    
    async deleteMovie(_, {_id}){
        return await Movie.findByIdAndDelete(_id)
    },

    async updateMovie( _, {_id,title, description, image, dateOfReleased, numberOfLikes} ) {
        const movie = {title, description, image, dateOfReleased, numberOfLikes}
        return await Movie.findByIdAndUpdate(_id, movie, {new: true})
    },

    async createUser( _, {email, password, name}) {
        const newUser = {email,password,name}
        const user = await User.create(newUser)
        return user

    },
    async deleteUser(_, {_id}){
        return await User.findByIdAndDelete(_id)
    },

    async updateUser( _, {_id, password, name} ) {
        const user = {password, name}
        return await User.findByIdAndUpdate(_id, user, {new: true})
    }
}

export default Mutation


