//*EjerciciosEi  ejercicios@escueladeinternet.mx

/*Generar un código el cual genere 5 números aleatorios(Math.random()*100) enteros y
devuelva si el número generado es par o impar.
Ejemplo:
Primera iteración: numeroGenerado = 5 // el número es impar
Segunda iteración: numeroGenerado = 12 // el número es par */



    const iteraciones = ["Primera","Segunda","Tercera", "Cuarta","Quinta"];
    for(let i=0;i<5;i++){
        let aleatorio
        aleatorio = Math.round(Math.random()*100)
        if(aleatorio%2==0) {
            console.log (iteraciones [i] + " iteración: Numero generado " + "= " + aleatorio + " // El numero es par");
        }else{
            console.log (iteraciones [i] + " iteración: Numero generado " + "= " + aleatorio + " // El numero es impar");

        }

    }










