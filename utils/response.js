class response {  
    static success(data,method,count,message = response.API_MESSAGE_DEFAULT)
    {
       
        return {code: response.API_SUCCESS,message:message,response:data,count:count};
    }
    static error(message,isArray)
    {
        return {code: (isArray) ?  response.API_ERROR_ARRAY : response.API_ERROR  ,message:message,result:[]};
    }

    static getErrorMessage(message)
    {
        let error  = message.errors;
        let result = [];
        for (var key in error) 
        {
            result.push({[key]:error[key].message});
        }

        return result;
    }
}

response.HTTP_OK = 200;
response.API_SUCCESS = "00";
response.API_ERROR = "01";
response.API_ERROR_ARRAY = "02";
response.API_SAVE_SUCCESS = "DATA SAVED SUCCESSFULLY";
response.API_UPDATE_SUCCESS = "DATA UPDATED SUCCESSFULLY";
response.API_DELETE_SUCCESS = "DATA DELETED SUCCESSFULLY";
response.API_MESSAGE_DEFAULT = "OK";
response.API_DATA_NOT_FOUND = "DATA NOT FOUND";
response.API_DEFAULT_LIMIT = 5;
response.API_DEFAULT_ORDER_BY = "_id";
response.API_DEFAULT_ORDER_TYPE = "asc";
module.exports = response;  
