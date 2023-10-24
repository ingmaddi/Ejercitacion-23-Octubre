/*Madeleine Pacheco*/

function ConvertirAcentimetro(a) {
  let centimetro = a * 2.54;
    return centimetro;
}

console.log("Convirtiendo 5 pulgadas a centimetros");
let b = ConvertirAcentimetro(5);
console.log(b);

/******** */

function ConvertirUrl(b) {
    let URL = "http://wwww." + b + ".com";

    return URL;
}

console.log("Convirtiendo MARIA en URL");
let c = ConvertirUrl("maria");
console.log(c);

/******** */

function ColocaAdmiracion(b) {
    let texto = "¡" + b + ".!";

    return texto;
}

console.log("Colocando signos de admiracion a frase");
let d = ColocaAdmiracion("feliz cumpleaños");
console.log(d);

/******** */

function edadPerro(a) {
  edad = a * 7;
    return edad;
}
console.log("Calculamos la edad del perro firulais 3años a edad persona");
let e = edadPerro(3);
console.log(e);
/******** */

function HoraSalario(salariomensual) {
    salarioxhora = salariomensual / 40;
    return salarioxhora;
}
console.log("Calculando tu salario por hora en dolares, siendo tu salario mensual 3000 dolares es:");
let f = HoraSalario(3000);
console.log(f);
/******** */

function CalculadorIMC(altura, peso) {
  IMC = peso / (altura * altura);
    IMCfinal = Math.floor(IMC);
    return IMCfinal;
}

console.log("Calculando tu IMC.Siendo tu altura 1.70 m y tu peso 75 kg es: ");

let g = CalculadorIMC(1.7, 75);
console.log(g);
/******** */

function ConvierteAmayuscula(texto) {
    mayuscula = texto.toUpperCase();
    return mayuscula;
}
console.log('Convirtiendo a Mayuscula el texto "mi texto estaba en miniscula" ');
let h = ConvierteAmayuscula("mi texto estaba en miniscula");
console.log(h);
/******** */

function DefineTipo(a) {
    tipo = typeof a;
    return tipo;
}

console.log("El tipo de dato para 3.14 es :");
let i = DefineTipo(3.14);
console.log(i);

/******** */
function circunferencia(radio) {
    let pi = Math.PI;

  longitud = 2 * radio * pi;

    return longitud;
}

console.log("El radio es 6 m y su perimetro es ");
let j = circunferencia(6);
console.log(j);
