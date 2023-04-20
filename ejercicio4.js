

//- Una variable que contenga la lista de la compra (mínimo 5 elementos)
//- Modifica la lista de la compra y añádele "Aceite de Girasol"
const compra=["manzana","pera","uvas","sandia","piña"]
console.log("Una variable que contenga la lista de la compra (mínimo 5 elementos)")
console.log(compra)
compra.push("aceite girasol")
console.log("Modifica la lista de la compra y añádele 'Aceite de Girasol'")
console.log(compra)

//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
console.log("Vuelve a modificar la lista de la compra eliminando 'Aceite de Girasol'")
compra.pop()
console.log(compra)

//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)


//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

const objetos=[
    {nombre:"karol",fecha:2000,director:" maxi"},
     {nombre:"isa",fecha:2009,director:" max"},
     {nombre:"amanda",fecha:2014,director:" maestr"},
     {nombre:"santiago",fecha:2015,director:" maiif"}
]

const fechas=objetos.filter(obj =>{
    if (obj.fecha<2010) {
        return true
    } else {
        return false
    }
})
console.log(" lista que contenga las películas posteriores al 1 de enero de 2010")
console.log(fechas)




//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const arreglo=["rhonda byrne","maxi","xxxxx"]
const nombre =arreglo.forEach(n=>{
    
    return 2
})

const newArray=arreglo.map((valor,indice)=>{
    return (indice+1 +valor)
})
console.log(" lista que contenga los directores de la lista de películas original ")
console.log(newArray)
//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const arreglo1=["laredes","el secreto","el "]
const peli =arreglo.forEach(n=>{
  
    return 2
})

const newArra=arreglo.map((valor,indice)=>{
    return (indice+1 +valor)
})
console.log(" lista que contenga los títulos de la lista de películas original ")
console.log(newArra);
//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const lista = (arreglo.concat(arreglo1))
console.log(" lista que concatene la lista de directores y la lista de los títulos ")
console.log(lista)

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
console.log(" lista que concatene la lista de directores y la lista de los títulos ")
console.log(...lista)

