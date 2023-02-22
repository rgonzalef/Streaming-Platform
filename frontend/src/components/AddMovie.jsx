import React,{useEffect} from 'react'
import userContainer from "../config/UserStore";
import { useNavigate } from "react-router-dom";

function AddMovie() {
  const navigate = useNavigate()
  const getAuthorization = userContainer((state) => state.isAuthorized)

  useEffect(() => {
      console.log('get Authorization', getAuthorization)
      if(!getAuthorization.isAuthorized) return navigate("/")
      

  }, [])

  return (
    <div>AddMovie</div>
  )
}

export default AddMovie