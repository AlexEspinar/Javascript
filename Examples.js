/*Head
Implementa una función head (inmutable), tal que, dado un array como entrada extraiga
y devuelva su primer elemento. U􀦞liza destructuring.*/

const head = ([first]) => first; // Implementation here.

/*Tail
Implementa una función tail (inmutable), tal que, dado un array como entrada
devuelta todos menos el primer elemento. U􀦞liza rest operator.*/

const tail = ([, ...last]) => last; // Implementation here.

/*Init
Implementa una función init (inmutable), tal que, dado un array como entrada
devuelva todos los elementos menos el úl􀦞mo. U􀦞liza los métodos que ofrece
Array.prototype.*/

const init = arr => arr.splice(0,arr.length-1);  // Implementation here.

/*Last
Implementa una función last (inmutable), tal que, dado un array como entrada
devuelva el úl􀦞mo elemento.*/

const last = arr => arr.pop(); // Implementation here.	

/*Concat
Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,
devuelva la concatenación de ambos. U􀦞liza rest / spread operators.*/

const concat = (a, b) => {}; // Implementation here.

const concat = (...ar) =>ar.reduce((a,b)=>(a + b),0);


/*Clone
Implementa una función clone que, a par􀦞r de un objeto de entrada source devuelva
un nuevo objeto con las propiedades de source :*/
function clone(source) {
    return this.source= source;
} 


/*Merge
Implementa una función merge que, dados dos objetos de entrada source y target ,
devuelva un nuevo objeto con todas las propiedades de target y de source , y en caso
de propiedades con el mismo nombre, source sobreescribe a target .
Por ejemplo, dados estos 2 objetos:
const a = {name: "Maria", surname: "Ibañez", country: "SPA"};
const b = {name: "Luisa", age: 31, married: true};
el resultado de mezclar a sobre b sería:
merge(a, b) // {name: "Maria", age: 31, married: true, surname: "Ibañez", c
TIP: Puedes usar la función “clone” del apartado A.*/
function merge(source,target){
    var result = {};
    for (const propiedad in target) { result[propiedad] = target[propiedad]; }
    for (const propiedad in source) { result[propiedad] = source[propiedad]; }
    return result;
}

/*4. Read Books
Crea una función isBookRead que reciba una lista de libros y un 􀦠tulo y devuelva si se
ha leído o no dicho libro.
Un libro es un objeto con title como string y isRead como booleano. En caso de no
exis􀦞r el libro devolver false
TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
function isBookRead(books, titleToSearch) {
// Implementation here
}
Ejemplo
const books = [
{title: "Harry Potter y la piedra filosofal", isRead: true},
{title: "Canción de hielo y fuego", isRead: false},
{title: "Devastación", isRead: true},
];

Opcional
U􀦞liza Typescript para añadir los 􀦞pos adecuados.

*/
console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false


function isBookRead(books,j){
    for (var i=0;i<books.length;i++){
        if(books[i].title.includes(j)&& books[i].isRead){
         return "leido";
        }
    }
    return "No leido";
}

/*5. Slot Machine
El obje􀦞vo de este ejercicio es crear una máquina tragaperras u􀦞lizando clases donde
cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia)
tendrá un contador de monedas que automá􀦞camente se irá incrementando conforme
vayamos jugando.
Cuando se llame al método play el número de monedas se debe incrementar de forma
automá􀦞ca y debe generar tres booleanos aleatorios que representarán el estado de las
3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean true , y por
tanto deberá mostrarse por consola el mensaje:
"Congratulations!!!. You won <número de monedas> coins!!"
y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la
máquina.
En caso contrario deberá mostrar otro mensaje:
"Good luck next time!!".
Ejemplo de uso
class SlothMachine { 
/* ... */
}
class SlothMachine{
   constructor(){
       this.monedas=0;
   }
  play()
  {
    const ruleta1 = Math.random() < 0.5 ? true : false;
    const ruleta2 = Math.random() < 0.5 ? true : false;
    const ruleta3 = Math.random() < 0.5 ? true : false;
    this.monedas=this.monedas+1;
    if(ruleta1 & ruleta2 & ruleta3){
        console.log("Congratulations!!!. You won "+this.monedas+" coins!!");
    }
    else{
        console.log("Good luck next time!!");
    }
  }
}


const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
