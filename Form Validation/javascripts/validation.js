
// If the emails are different, display the error message "Emails do not match" at the bottom of the email (confirmation) form and apply #d14539 to the text color. 
// If the emails are different, apply rgba(230,169,171,.5) to the background color of the email (confirmation) form .
// Do not display error messages or form background colours if the email is the same

var validation = ()=>{
    let email = document.getElementById("email").value
    let confirm_email = document.getElementById("email_confirm")
    let content = document.getElementById("content")
    let err = document.getElementById("error")
    let errorMessage = document.createElement("p")
    let forms = document.forms

    errorMessage.setAttribute("class", "emailNotMatch")
    errorMessage.appendChild(document.createTextNode("Emails don't match"))
    let appended = false
    confirm_email.addEventListener("keyup", (event)=>{
        let userInput = confirm_email.value

        if(userInput == email || userInput == ""){
            confirm_email.style.backgroundColor = "unset"
            if(appended){
                err.removeChild(errorMessage)
                appended = !appended
            }
        }else{
            if (!appended) {
                err.appendChild(errorMessage);
                appended = !appended
            }
            confirm_email.style.backgroundColor = "rgba(230,169,171,.5)"
        }
    })
    forms[0].addEventListener("submit", (event)=>{
        event.preventDefault()
        if(email ==  confirm_email.value) alert("Submitted !!")
            
    })
   
}

window.addEventListener("DOMContentLoaded", validation)