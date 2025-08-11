const menutog = document.getElementById("menutog")
const menuhide = document.getElementById("menuhide")
const tellist = document.getElementById("tellist")


menutog.addEventListener("click" , function(){
    tellist.classList.add("spawn")
})
menuhide.addEventListener("click" , function(){
    tellist.classList.remove("spawn")
})



const mangal1 = document.getElementById("mangal1")
const mangal2 = document.getElementById("mangal2")
const mangal3 = document.getElementById("mangal3")
const mangal4 = document.getElementById("mangal4")
const mangal5 = document.getElementById("mangal5")
const mangal6 = document.getElementById("mangal6")
const mangalcome = document.getElementById("mangalcome")
const mangalhide = document.getElementById("mangalhide")


mangalcome.addEventListener("click" , function(){
    mangal1.classList.add("show")
})
mangalcome.addEventListener("click" , function(){
    mangal2.classList.add("show")
})
mangalcome.addEventListener("click" , function(){
    mangal3.classList.add("show")
})
mangalcome.addEventListener("click" , function(){
    mangal4.classList.add("show")
})
mangalcome.addEventListener("click" , function(){
    mangal5.classList.add("show")
})
mangalcome.addEventListener("click" , function(){
    mangal6.classList.add("show")
})


mangalhide.addEventListener("click" , function(){
    mangal1.classList.remove("show")
})
mangalhide.addEventListener("click" , function(){
    mangal2.classList.remove("show")
})
mangalhide.addEventListener("click" , function(){
    mangal3.classList.remove("show")
})
mangalhide.addEventListener("click" , function(){
    mangal4.classList.remove("show")
})
mangalhide.addEventListener("click" , function(){
    mangal5.classList.remove("show")
})
mangalhide.addEventListener("click" , function(){
    mangal6.classList.remove("show")
})