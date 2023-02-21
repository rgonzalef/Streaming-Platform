import server from './server.js'
import "./database.js"

const PORT = process.env.PORT || 3000

server.start( {port:PORT}, ( { port} ) =>{
    console.log('Server is running on port: ' + port)
})

