function randomNumbers(){
    const min = Math.ceil(document.querySelector(".min").value)
    const max = Math.floor(document.querySelector(".max").value)

    const result =  Math.floor(Math.random() * (max - min) + min)
    const randomNumber = document.getElementById("randomNumber")
    randomNumber.value = result



}
