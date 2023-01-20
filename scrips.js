const button = document.getElementById('ConvertButton')

const Dólar = 5.2
const Euro = 5.6
const BTC = 0.00000920

const ConvertValue = () => {

    const ValorEmReais = document.getElementsByTagName('input')[0].value

    const ValorReais = document.getElementById('RealValueInText')

    const ValorDolar = document.getElementById('DolarValueInText')

    ValorReais.innerHTML = new Intl.NumberFormat("pt-BR", {
        style:"currency",
        currency:"BRL",
    }).format(ValorEmReais)

    if(select.value ===  "US$ Dólar americano"){
    ValorDolar.innerHTML = new Intl.NumberFormat("en-US", {
        style:"currency",
        currency:"USD",
    }).format((ValorEmReais / Dólar).toFixed(2))
 }

    if(select.value === "€ Euro")
    ValorDolar.innerHTML = new Intl.NumberFormat("de-DE", {
        style:"currency",
        currency:"EUR",
    }).format((ValorEmReais / Euro).toFixed(2))

    if(select.value === "Bitcoin")
    ValorDolar.innerHTML = ((ValorEmReais * BTC).toFixed(4))
}

// FASE DOIS =>

const select = document.getElementById("currency-select")
const EuroText = document.getElementById('Euro')
const imgEuro = document.getElementById('EuroImg')




const CurrencyChange = () =>{

   if(select.value === "€ Euro"){
EuroText.innerHTML = "Euro"

imgEuro.src = "./images/Design sem nome 1.png"
}

if(select.value === "US$ Dólar americano"){
    EuroText.innerHTML = "Dólar Americano"
    
    imgEuro.src = "./images/estados-unidos (1) 1.png"
    }

    if(select.value === "Bitcoin"){
        EuroText.innerHTML = "Bitcoin"
        
        imgEuro.src = "./images/Design sem nome (1) 1.png"
        }
    
    

    ConvertValue()
}





button.addEventListener("click", ConvertValue)
select.addEventListener("change", CurrencyChange)

