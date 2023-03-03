import inquirer from "inquirer"

inquirer.prompt([
    {
        name: 'pergunta1',
        message: 'por que o professor do curso é tao idiota?'
    },
    {
        name: 'pergunta2',
        message: 'por que ele não consegue dar nomes condizentes as variáveis?'
    }
])
.then((response) => console.log(response))
.catch((error) => console.log(error))