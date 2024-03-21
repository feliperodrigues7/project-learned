const navBar = document.querySelector('.navbar')
const p = document.querySelector('.about-text')
const allLi = document.querySelectorAll('li')
const buttonAbout = document.querySelector('.show-about')
const buttonHome = document.querySelector('.show-home')
const list = document.querySelector('.list')

allLi.forEach((li, index) => {
    li.addEventListener("click", e => {
        //navBar.querySelector('.active-home').classList.remove("active-home")
        li.classList.add("active-home")

        const indicator = document.querySelector(".indicator")
        indicator.style.transform = `translateX(calc(${index * 105}px))`

    })
})

function showHome(productsArray) {
    let MyLi = ''
    //remove as imagens
    productsArray.forEach(product => {
        MyLi += ``

        //altera a div
        navBar.style.marginLeft = "100px";
        p.style.border = ""
    })
    list.innerHTML = MyLi
    p.innerHTML = ``
}

function showAbout(productsArray) {
    let MyLi = ''
    //faz aparecer as imagens
    productsArray.forEach(product => {
        MyLi += `<li class="items">
                            <img src=${product.src} >
                        </li>`
        //altera a div
        navBar.style.marginLeft = "314px";
    })
    list.innerHTML = MyLi
    
    p.innerHTML = `A nossa depilação é feita com nossa exclusiva cera quente natural à base de mel. Um produto inovador feita com
    nobres ativos rico em resinas e óleos nobres vegetais. Sua fórmula hidrata enquanto depila e possui baixa
    temperatura e alta elasticidades proporcionando maior eficácia e conforto para nossos clientes.
    <br>
    <br>
    A equipe profissional é bastante qualificada e constantemente reciclada tornando assim sua depilação mais
    prática, segura e agradável.`

    p.style.border = "solid 5px #f7d5e3";
}



buttonAbout.addEventListener('click', () => showAbout(menuOptions))
buttonHome.addEventListener('click', () => showHome(menuOptions))