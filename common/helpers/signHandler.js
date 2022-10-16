function signHandler (accessToken, clientData, setClientData){
    localStorage.setItem("accessToken", accessToken);
    setClientData(clientData);
    //setLoadItem(70)
}

export default signHandler;