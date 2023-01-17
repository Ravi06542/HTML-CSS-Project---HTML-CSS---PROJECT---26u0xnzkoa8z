const images=document.querySelectorAll(".image")
const list = document.querySelectorAll("ul li")

list.forEach((el,i)=>{
    el.addEventListener('click',()=>{
        images.forEach((el)=>{
            el.classList.remove("show")
        })
        list.forEach((el)=>{
            el.classList.remove("active")
        })
        el.classList.add("active")
        images[i].classList.add("show")
    })
})
