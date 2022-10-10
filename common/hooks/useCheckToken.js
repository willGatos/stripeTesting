import axios from 'axios';
import { useEffect } from "react";

const useCheckToken = () =>{
  let accessToken
  useEffect(() => {
    // Perform localStorage action
    accessToken = localStorage.getItem("accessToken")
  }, [])
  
  const setApiCall = (typeOfCall, url, postBody)=>{
    if(typeOfCall==="get"){
      return axios.get(url,
        {headers: {'Authorization': 'Bearer '+ accessToken}})
        .catch((e) =>{
          console.log("Hola estimado hacker/cracker, ¿ Cómo te encuentras ?", e);
        })
    } else if(typeOfCall === "post"){
      return axios.post(url, postBody,
        {headers: {'Authorization': 'Bearer '+ accessToken}})
        .catch((e) =>{
            console.log("Hola estimado hacker/cracker, ¿ Cómo te encuentras ?", e);
        })
    }
  }
  return setApiCall;
}

export default useCheckToken;
