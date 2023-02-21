import mongoose from "mongoose"

const uri = 'mongodb+srv://admin:admin@db-streaming.9gus5kj.mongodb.net/?retryWrites=true&w=majority'
mongoose.set("strictQuery", false);//to eliminate mongoose DeprecationWarning
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then( (db) => {
    return console.log('DB is connected')
})
.catch( (err) => console.log(err))