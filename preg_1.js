var cad, sum, x;
var n = new Number();
document.write("Cuantos numeros pares desea sumar:",'<BR/>');
n = Number(prompt());
sum = 0;
cad = 0;
for (x=2;x<=n*2;x+=2) {
    sum = sum+x;
}
document.write("La suma es: ",sum,'<BR/>');
