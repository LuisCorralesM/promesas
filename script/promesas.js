// // Ejercicios: 
// // 1) Crear un algoritmo que lea el nombre de un usuario y lo imprima. ----------------------------------------------------------


// const promesaNombre = new Promise((resolve, reject)=>{
//     const nombre = prompt('Registre su nombre:')

//     // Como un prompt al que se le da aceptar devuelve true o false dependiendo si se ingresó dato o no, simplemente 
//     //validamos que nombre sea 'true'
//     nombre
//     ? resolve(' Se registró su nombre correctamente ' + nombre)
//     // Nota: El reject solo aplica si al prompt se le da cancelar
//     : reject(' Registro fallido')
// })

// promesaNombre.then(res =>{
//     alert(res)
// })
// promesaNombre.catch(rej =>{
//     alert(rej);
// })


// // 2) Crear un algoritmo que le pida al usuario 3 números, calcular la suma de los 3 números e 
// // imprimir el resultado si es mayor que 25                    ------------------------------------------------------------------------

// const calcular = new Promise((resolve, reject)=>{
//     const 
//     num1 = prompt('Numero 1:'),
//     num2 = prompt('Numero 2:'),
//     num3 = prompt('Numero 3:'),

//     suma = parseInt(num1)+parseInt(num2)+parseInt(num3)

//     suma > 25
//     ? resolve('La suma es mayor a 25, Resultado: ' + suma)
//     // Nota: El reject solo aplica si al prompt se le da cancelar
//     : reject('La suma es inferior a 25, Resultado: ' + suma)
// })

// calcular.then(res =>{
//     alert(res)
// })
// calcular.catch(rej =>{
//     alert(rej);
// })


// 3) Crear un algoritmo que permita leer la edad y peso de una persona y posteriormente 
// imprimirla, si el peso es puperior a 100 imprimir que el usuario tiene sobre peso

//  const calcular = new Promise((resolve, reject)=>{
//     const 
//     edad = prompt('Edad:'),
//     peso = parseInt(prompt('Peso:'))

//    if((edad && peso) && peso > 100){
//        resolve('Tienes sobre peso: ' + ' Edad:'  + edad + ' Peso: ' + peso)
//    }else if((edad && peso)){
//     resolve('Edad: ' + edad + ' Peso: ' + peso)
//     }else{
//        reject('La suma es inferior a 25, Resultado: ' + suma)
//    }

// })

// calcular.then(res =>{
//     alert(res)
// })

// calcular.catch(rej =>{
//     alert(rej);
// })
