
let pokemons = [
  { id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30 },
  { id: 2, name: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 26 },
  { id: 3, name: "bulbasaur", type: "leaf", base_damage: 8, base_hp: 16, speed: 26 },
  { id: 4, name: "pikachu", type: "electric", base_damage: 12, base_hp: 8, speed: 32 },
  { id: 5, name: "pidgey", type: "air", base_damage: 10, base_hp: 10, speed: 35 },
  { id: 6, name: "goldeen", type: "water", base_damage: 9, base_hp: 12, speed: 32 },
  { id: 7, name: "bellsprout", type: "leaf", base_damage: 10, base_hp: 12, speed: 30 },
  { id: 8, name: "magnemite", type: "electric", base_damage: 9, base_hp: 14, speed: 30 },
  { id: 9, name: "ponyta", type: "fire", base_damage: 12, base_hp: 18, speed: 36 },
  { id: 10, name: "evee", type: "normal", base_damage: 10, base_hp: 12, speed: 30 },
]

//1. Ordenar los pokemons por base_damage de menor a mayor.
function ordenarPorBaseMenorMayor() {
  return pokemons.sort((a, b) => a.base_damage - b.base_damage)
}
// console.log(ordenarPorBaseMenorMayor())


//2. Crear una funcion para ordernar los pokemons dependiendo de el argumento que se ingrese en la funcion. 
//Pueden ingresar: type, base_damage, base_hp o speed.
function ordenarPorAtributo(atributo) {
  if (atributo === "id") {
    return "Id no es un atributo valido"
  }
  if (typeof pokemons[0][atributo] === "number") {
    return pokemons.sort((a, b) => a[atributo] - b[atributo])
  } else if (typeof pokemons[0][atributo] === "string") {
    return pokemons.sort((a, b) => a[atributo].localeCompare(b[atributo]))
  } else {
    return "Ingrese un atributo valido"
  }
}
// console.log(ordenarPorAtributo("speed"))


//3. Crear una funcion que filtre el objeto pokemons y devuelva un arreglo con los pokemons filtrados. 
//La funcion debe aceptar un argumento para filtrar por type de pokemon.
function filtrarPorTypePokemon(tipo) {
  return pokemons.filter(pokemon => pokemon.type === tipo)
}
// console.log(filtrarPorTypePokemon("leaf"))


//4. Crear un objeto llamado Pokemon Master que tenga los siguientes atributos: id: number, name: string, created_date: string, y pokemon: array of objects.
const PokemonMaster = {
  id: 2,
  name: "pepe",
  created_date: "12/12/1988",
  pokemon: []
}

//5. Crear una funcion que de manera aleatoria agregue un nuevo pokemon al atributo pokemon de Pokemon Master.
function agregarPokemonAleatorio() {
  const pokemonAleatorio = pokemons[Math.floor(Math.random() * pokemons.length)]
  PokemonMaster.pokemon.push(pokemonAleatorio)
}
// agregarPokemonAleatorio()
//console.log(PokemonMaster)


//6. Crear una funcion que agregue de manera aleatoria los atributos min_damage y max_damage a nuestro arreglo de pokemons teniendo en cuenta lo siguiente:
// min_damage debe ser un numero entero aleatorio entre 1 y 2 y max_damage debe ser un numero entero aleatorio entre 3 y 5

function generarAleatorioEntre1y2() {
  return Math.floor(Math.random() * (2 - 1 + 1) + 1)
}

function generarAleatorioEntre3y5() {
  return Math.floor(Math.random() * (5 - 3 + 1) + 3)
}

function agregarMinMaxDamage() {
  for (let i = 0; i < pokemons.length; i++) {
    pokemons[i].min_damage = generarAleatorioEntre1y2()
    pokemons[i].max_damage = generarAleatorioEntre3y5()
  }
}
// agregarMinMaxDamage()
// console.log(pokemons)


//7. Crear una funcion que determine el daño que hara un pokemon elegido de la lista ante una posible pelea, para ello considerar que el daño que hara el pokemon es:
// daño = base_damage + un valor aleatorio entre el min_damage y el max_damage

//agregarMinMaxDamage()
function generarAleatorioEntre(max, min) {
  return Math.floor((Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min)))
}

function calcularDaño(name) {
  const pokemonEncontrado = pokemons.find(pokemon => pokemon.name === name)
  const daño = pokemonEncontrado.base_damage + generarAleatorioEntre(pokemonEncontrado.max_damage, pokemonEncontrado.min_damage)
  return daño
}
// console.log(calcularDaño("evee"))


//8. Nuestro Pokemon Master quiere estar preparado para pelear, para ello necesita que lo apoyes a ordenar sus pokemons. Colocar tres pokemons con la funcion del ejercicio 5.
// El quiere que sus pokemons se ordenen de manera que el que tenga un mayor valor posible de base_damage + max_damage sea el que este primero en la lista y asi sucesivamente.

agregarPokemonAleatorio()
agregarPokemonAleatorio()
agregarPokemonAleatorio()
function ordenarPokemonDamage() {
  return PokemonMaster.pokemon.sort((a, b) => (b.base_damage + b.max_damage) - (a.base_damage + a.max_damage))
}

// console.log(ordenarPokemonDamage())


//9. Crear una lista desordenada de Pokemons en nuestro documento HTML
function mostrarPokemonListado() {
  const lista = document.getElementById("lista")
  const ul = document.createElement("ul")
  for (const key in pokemons) {
    const li = document.createElement("li")
    li.textContent = pokemons[key].name
    ul.append(li)
  }
  lista.append(ul)
}
mostrarPokemonListado()



//10. Utilizando javascript crear una tabla de pokemons con las siguientes columnas: id, name, type, base_damage, base_hp, speed
const table = document.createElement("table")
const root = document.getElementById("root")
table.setAttribute('border', '1')
root.append(table)

const encabezados = document.createElement("thead")
for (const key in pokemons[0]) {
  const th = document.createElement("th")
  th.textContent = key
  encabezados.append(th)
}
table.append(encabezados)

function mostrarPokemonTabla() {
  for (const index in pokemons) {
    const tr = document.createElement("tr")
    for (const key in pokemons[index]) {
      const td = document.createElement("td")
      td.textContent = pokemons[index][key]
      tr.append(td)
    }
    table.append(tr)
  }
}
 mostrarPokemonTabla()