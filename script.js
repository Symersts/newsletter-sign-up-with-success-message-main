const input=document.querySelector("input")
const errorText=document.querySelector(".error")
const button=document.querySelector("button")
const container=document.querySelector(".container")
const success=document.querySelector(".success-container")
const successButton=document.querySelector(".success-button")



button.addEventListener("click", () =>{
    console.log(inputChecker())
    
    if (inputChecker() === true){
        container.classList.add("hidden")
        success.classList.remove("hidden")
        document.querySelector(".email").textContent=input.value 
    }
    else{
        container.classList.remove("hidden")
        success.classList.add("hidden")  
    }
})

successButton.addEventListener("click", () =>{
    container.classList.remove("hidden")
    success.classList.add("hidden")
})






function inputChecker(){
    if (input.value.includes("@")){
        errorText.classList.add("hidden")
        input.classList.remove("error-input")

        return true
    }
    else{
        errorText.classList.remove("hidden")
        input.classList.add("error-input")
        return false  
    }
    
}

