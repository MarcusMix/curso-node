//Twrow -> erro programado
let age;


function isOldAge (age) {
    if(age < 18) {
        throw new Error('Usuário menor de idade!')
    } else {
        console.log('Acesso permitido!') 
    }
}

isOldAge(19)

//encerra o programa caso for acionado!


//Try - catch

const userAge = 18

try {
    userAge = 20
} catch (error) {
    console.log(error)
}

// mostra o error de uma forma mais sutil