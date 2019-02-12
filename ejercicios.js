// var alumnas = [
//     "Maria",
//     "esther",
//     "consuelo",
//     "Barbara",
//     "Luisana",
//     "pancracia",
//     "luzbelita",
//     "Jimena"
// ]

// for(var i=0; i<alumnas.length; i++){
//     alumnas[i]=alumnas[i].charAt(0).toUpperCase()+ alumnas[i].slice(1);
    
// }
// console.log(alumnas);

//Ejercicio 100

// for(var i = 0; i<=5; i++){
//     var imprime="*****";
//     document.write(imprime, '<br>');
// }

//ejercicio 101

// for(var i = 0; i<=5; i++){
//     if(i==0|| i ==5){
//         console.log("*****");
//     }    
//     else{
//         console.log("*    *")
//     }
// }

//ejercicio 102

// for(var i = 0; i<=5; i++){
//     if (i%2==1){
//     console.log(" * * * * * * * * ");
// } else {console.log("* * * * * * * * *")}

// }

// //ejercicio 103
// for(var i = 1; i<=9; i++){
//     if(i==1|| i==9){console.log("*");}
//     else if(i==2||i==8){console.log("***");}
//     else if(i==3||i==7){console.log("*****");}
//     else if(i==4||i==6){console.log("*******");}
//     else{console.log("*********");}

//     }

//Ejercicio 104

var n = 10;
var m = 26;
var resultado = 0;

for(var i=n; i<=m; i+=2){
    resultado+=i;
}
console.log(resultado);

