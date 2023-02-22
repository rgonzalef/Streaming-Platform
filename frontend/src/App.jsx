
import './App.css'
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar'
import Login from './components/Login'
import Home from './components/Home'
import AddMovie from './components/AddMovie'

function App() {
  const client = new ApolloClient( {
    cache: new InMemoryCache(),
    uri: "http://localhost:3000/"
  })
 
  return (
    <Router>
      <ApolloProvider client={client}>

        <Navbar/>

        <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/add-movie" element={<AddMovie/>}></Route>
        <Route index element={<Login/>}></Route>
        </Routes>

        

      </ApolloProvider>

    </Router>

    
  )
}

export default App

