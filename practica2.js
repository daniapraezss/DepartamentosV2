let saludo = prompt("Bienvenido seleccione la ciudad o pueblo que desee: \n 1. Popayán \n 2.Caldono\n 3.Toribio\n 4.Silvia\n 5.Cali\n 6.Palmira \n7.Yumbo\n 8.Buga\n 9.Medellin\n 10.Rio Negro\n 11.Itagui\n 12.Envigado\n 13.Pereira \n14.Marsella \n15.Dos quebradas\n 16 Araucarias"
);


while (saludo !== "1" && saludo !== "2" && saludo !== "3" && saludo !== "4" && saludo !== "5" && saludo !== "6" && saludo !== "7" && saludo !== "8" && saludo !== "9" && saludo !== "10" && saludo !== "11" && saludo !== "12" && saludo !== "13" && saludo !== "14" && saludo !== "15" && saludo !== "16") {
     alert("ingrese opción valida");
     saludo = prompt("Bienvenido seleccione la ciudad o pueblo que desee: \n 1. Popayán \n 2.Caldono\n 3.Toribio\n 4.Silvia\n 5.Cali\n 6.Palmira \n7.Yumbo\n 8.Buga\n 9.Medellin\n 10.Rio Negro\n 11.Itagui\n 12.Envigado\n 13.Pereira \n14.Marsella \n15.Dos quebradas\n 16 Araucarias");
}


if(saludo === "1" || saludo === "2" || saludo === "3" || saludo === "4"){
    alert("pertenece al Dpto Cauca");
}
if (saludo === "5" || saludo === "6" || saludo === "7" || saludo === "8") {
    alert("pertenece al Dpto Valle del cauca");
}
if (saludo === "9" || saludo === "10" || saludo === "11" || saludo === "12") {
    alert("pertenece al Dpto Antioquia");
}
if (saludo === "13" || saludo === "14" || saludo === "15" || saludo === "16") {
    alert("pertenece al Dpto Risaralda");
}