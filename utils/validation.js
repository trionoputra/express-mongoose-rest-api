module.exports = function validation(type)
{
    let result = "";
    if(type === "required")
        result =  "{PATH} is required";
    else if(type === "enum")
        result =  "{VALUE} is not a valid enum value for {PATH}";
    else if(type === "unique")
        result =  "{VALUE} is already exist";
    else if(type === "minChar")
        result =  "{PATH} at least {MINLENGTH} characters";
        
    return result;
}