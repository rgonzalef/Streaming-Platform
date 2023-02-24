import {gql} from "@apollo/client"

export const CREATE_MOVIE = gql `

    mutation createMovie($title: String, $image: String, $description: String, $dateOfReleased: String, $NumberOfLikes: Int){
        createMovie(title: $title, image: $image, description: $description, dateOfReleased:$dateOfReleased, numberOfLikes: $numberOfLikes){
            _id
            title
            description
            image
            dateOfReleased
            numberOfLikes
        }
    }

`