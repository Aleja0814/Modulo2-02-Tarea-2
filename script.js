let pulgadas;
let medidaMetros=document.getElementById("metros").value

function Convertir(){
    let medidaMetros=document.getElementById("metros").value
    pulgadas= medidaMetros/0.0254
    document.getElementById("pulgada").value=pulgadas.toFixed(3)
}