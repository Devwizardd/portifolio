var hamburguer = document.querySelector(".hamburguer")

document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
)


document.querySelector("#qtty").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-yes").addEventListener("change", atualizarPreco)
document.querySelector("#layout-no").addEventListener("change", atualizarPreco)
document.querySelector("#deadline").addEventListener("change", function () {
    const prazo = document.querySelector("#deadline").value
    document.querySelector("label[for=deadline]").innerHTML = `Deadline: ${deadline} semanas`
    atualizarPreco()
})

function atualizarPreco(){
    const qtty = document.querySelector("#qtty").value
    const temJS = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-yes").checked
    const deadline = document.querySelector("#deadline").value
  
    let price = qtty * 100;
    if (temJS) price *= 1.1
    if (incluiLayout) price += 500
    let taxaUrgencia = 1 - deadline*0.1;
    price *= 1 + taxaUrgencia
   
    document.querySelector("#price").innerHTML = `R$ ${price.toFixed(2)}`
}