const buttonShowAll = document.querySelector('.show-all')
const buttonNewPricesItems = document.querySelector('.map-all')
const buttonItemsSum = document.querySelector('.items-sum')
const buttonItemsFilter = document.querySelector('.items-filter')
const list = document.querySelector('ul')


//Function para atualizar a moeda

function currency(value) {

    const priceFormat = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

    return(priceFormat)
}




//For Each
function allShow(productsArray) {
    let MyLi = ''

    productsArray.forEach(product => {
        MyLi += `<li>
                            <img src=${product.src} >
                            <p>${product.name}</p>
                            <p class="item-price">${currency(product.price)}</p>
                        </li>`
    })

    list.innerHTML = MyLi
}
//MAP
function mapAllItems() {

    const newPrices = menuOptions.map(product => ({
        ...product,
        price: product.price * 0.9 //10% de Desconto
    }))

    allShow(newPrices)

}

//somar produtos
function ItemsSum() {

    const total = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `<li>
                            
                            <p> O valor total de produtos: R$${total}</p>
                            
                    </li> `
}

//filtrar itens
function ItemsFilter() {
    const ItemsFilter = menuOptions.filter(vegan =>

        vegan.vegan
    )
    allShow(ItemsFilter)
}


buttonShowAll.addEventListener('click', () => allShow(menuOptions))
buttonNewPricesItems.addEventListener('click', mapAllItems)
buttonItemsSum.addEventListener('click', ItemsSum)
buttonItemsFilter.addEventListener('click', ItemsFilter)


