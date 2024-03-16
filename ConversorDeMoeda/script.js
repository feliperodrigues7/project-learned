const convertButton = document.querySelector(".convert-button")
const currencySelectDe = document.querySelector(".currency-select-de")
const currencySelectPara = document.querySelector(".currency-select-para")

function convertValues() {
    const inputCurrency = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValue = document.querySelector(".currency-value")
    const dolarToday = 4.9
    const euroToday = 5.2
    const libraToday = 6.27

    //Quando o DE for Real
    if (currencySelectDe.value == "real") {

        if (currencySelectPara.value == "dolar") {
            currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrency / dolarToday)
        }

        if (currencySelectPara.value == "euro") {
            currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrency / euroToday)
        }

        if (currencySelectPara.value == "libra") {
            currencyValue.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrency / libraToday)
        }

        if (currencySelectPara.value == "real") {
            currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrency)
        }

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrency)
    }

    //Quando o DE for Dolar
    if (currencySelectDe.value == "dolar") {

        if (currencySelectPara.value == "euro") {
            currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrency * 0.92)
        }
        if (currencySelectPara.value == "libra") {
            currencyValue.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrency * 0.79)
        }

        if (currencySelectPara.value == "real") {
            currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrency * 4.95)
        }

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency)
    }

    //Quando o DE for Euro
    if (currencySelectDe.value == "euro") {
        if (currencySelectPara.value == "euro") {
            currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrency)
        }
        if (currencySelectPara.value == "libra") {
            currencyValue.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrency * 0.86)
        }

        if (currencySelectPara.value == "real") {
            currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrency * 5.37)
        }

        if (currencySelectPara.value == "dolar") {
            currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrency * 1.08)
        }

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency)

    }

    //Quando o DE for Libra
    if (currencySelectDe.value == "libra") {

        if (currencySelectPara.value == "euro") {
            currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrency * 1.16)
        }
        if (currencySelectPara.value == "libra") {
            currencyValue.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrency)
        }

        if (currencySelectPara.value == "real") {
            currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrency * 6.26)
        }

        if (currencySelectPara.value == "dolar") {
            currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrency * 1.26)
        }

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrency)
    }
}

function changeCurrencyDe() {
    const currencyImageDe = document.querySelector(".currency-img-de")
    const currencyNameDe = document.getElementById("currency-name-de")

    if (currencySelectDe.value == "real") {
        currencyNameDe.innerHTML = "Real"
        currencyImageDe.src = "./assets/brasil 2.png"
    }
    if (currencySelectDe.value == "dolar") {
        currencyNameDe.innerHTML = "Dolar Americano"
        currencyImageDe.src = "./assets/estados-unidos (1) 1.png"
    }

    if (currencySelectDe.value == "euro") {
        currencyNameDe.innerHTML = "Euro"
        currencyImageDe.src = "./assets/Design sem nome 3.png"
    }

    if (currencySelectDe.value == "libra") {
        currencyNameDe.innerHTML = "Libra"
        currencyImageDe.src = "./assets/libra 1.png"
    }
    convertValues()
}

function changeCurrencyPara() {
    const currencyImagePara = document.querySelector(".currency-img-para")
    const currencyNamePara = document.getElementById("currency-name-para")

    if (currencySelectPara.value == "dolar") {
        currencyNamePara.innerHTML = "Dolar Americano"
        currencyImagePara.src = "./assets/estados-unidos (1) 1.png"
    }

    if (currencySelectPara.value == "euro") {
        currencyNamePara.innerHTML = "Euro"
        currencyImagePara.src = "./assets/Design sem nome 3.png"

    }

    if (currencySelectPara.value == "libra") {
        currencyNamePara.innerHTML = "Libra"
        currencyImagePara.src = "./assets/libra 1.png"
    }

    if (currencySelectPara.value == "real") {
        currencyNamePara.innerHTML = "Real"
        currencyImagePara.src = "./assets/brasil 2.png"
    }
    convertValues()
}

currencySelectDe.addEventListener("change", changeCurrencyDe)
currencySelectPara.addEventListener("change", changeCurrencyPara)
convertButton.addEventListener("click", convertValues)

