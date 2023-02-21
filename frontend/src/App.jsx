
import './App.css'
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar'
import Login from './components/Login'

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
        <Route index element={<Login/>}></Route>
        </Routes>

        

      </ApolloProvider>

    </Router>

    
  )
}

export default App

