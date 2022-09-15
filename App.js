let ErrorMsg = document.getElementById("ErrorMsg");
let EmailInput = document.getElementById("EmailBox");
let AccessButton = document.getElementById("AccessFreeButton");
let ValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

AccessButton.addEventListener('click', ()=>{
    if(EmailInput.value.match(ValidEmail))
    {
        ErrorMsg.style.display = "none"
        
    }
    else{
        ErrorMsg.style.display = "block"
        EmailInput.focus();
    }
});