class ResponseChecker {
    checkResponse = (responseObj, serviceName) => {
        if(responseObj){
            if(responseObj.status === 200){
                return true;
            }
            else{
                console.error("Response Status:'" + responseObj.status + "' Received for '" + serviceName + "'");    
            }
        }
        else{
            console.error("No Response Received for '" + serviceName + "'");
        }
    }
    createCatchedErrorMessage = (errorObj, serviceName) => {
        console.error("Caught Following Error in : '" + serviceName + "'\n" + errorObj);
    }
}

export default new ResponseChecker();