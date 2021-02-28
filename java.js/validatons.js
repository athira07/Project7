function validations(){
    let Name=document.getElementById("name")
    let email=document.getElementById("email")
    if(name.value==""){
        alert("name field can't be empty")
        name.focus()
        return false
    }
    let email=document.getElementById("email")
    if(email.value==""){
        alert("this field can't be empty")
        email.focus()
        return false
}
if(isNaN(mobile.value)||mobile.value.length!=10){
    alert("mobile number is invalid")
    mobile.focus()
    return false
}

}