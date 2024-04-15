<<<<<<< HEAD
//Pegar os dados do formulario
const fname = document.getElementById("fname");
const adress = document.getElementById("adress");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
 
//Para ouvir o clique do botão, usamos o addEventListener
const btnSubmit = document.getElementById("btn");
const data = [];
 
btnSubmit.addEventListener('click', function (event) {
    //Não deixa o formulario se comportar como padrão, ou seja, enviar dados para proxima página/requisição
    event.preventDefault();
    const pessoa = {
        nome: fname.value,
        endereco: adress.value,
        email: email.value,
        fone: phone.value,
=======
//Pegar os dados do formulário
const fname = document.getElementById("fname");
const end = document.getElementById("end");
const email = document.getElementById("email");
const fone = document.getElementById("fone");

const btnSubmit = document.getElementById("btn")

//Criar uma lista vazia
const data = [];

//Para "ouvir" o click do botão, usamos o addEventListener
btnSubmit.addEventListener('click', function (event) {
    //não deixa o formulário se comportar como padrão, ou seja,
    //enviar os dados para próxima página/requisição
    event.preventDefault();

    //Criando objeto
    const pessoa = {
        nome: fname.value,
        endereco: end.value,
        email: email.value,
        fone: fone.value,
>>>>>>> 9f5adb0684934d643b2bd8374c822764bc9ce0ef

        favoritos: [
            {
                titulo: "A nova casa",
<<<<<<< HEAD
                autor : "Juca Bala",
                ano: 2025,
                genero: "Aventura"
            }
        ]
    }
    data.push(pessoa);

    console.log(data);
    
    console.log(pessoa);
    
    console.log(pessoa.favoritos);
});
=======
                autor: "Juca Bala",
                ano: 2025,
                genero: "Aventura"
            }

        ]
    }
    //Adicionar pessoa a lista
    data.push(pessoa);
    console.log(pessoa.favoritos)
    console.log(data)

})
>>>>>>> 9f5adb0684934d643b2bd8374c822764bc9ce0ef
