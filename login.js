function logar() {
    var usuarios = [
        { "usuario": "111111111-11", "senha": "123", "tipouser": "medico" },
        { "usuario": "222222222-22", "senha": "456", "tipouser": "paciente" },
        { "usuario": "333333333-33", "senha": "789", "tipouser": "medico" },
        { "usuario": "444444444-44", "senha": "321", "tipouser": "paciente" }
    ]
    var user = document.getElementById('login').value;
    var password = document.getElementById('senha').value;
    // var recorrente;

    console.log(user);
    console.log(password);

    // recorrente = true;
    // do {
    for (let i = 0; i < usuarios.length; i++) {
        if (user == usuarios[i].usuario) {
            console.log("Usuário encontrado: " + user)
            if (password == usuarios[i].senha) {
                console.log("senha validada: " + senha)
                // console.log(usuarios[i]);
                if (usuarios[i].tipouser == "paciente") {
                    window.alert("você será direcionado para sua página: " + usuarios[i].tipouser);
                    // window.location.assign("/aaa/paginamedico.html");
                    window.location.href = "https://www.google.com";
                    return true;
                    break;
                } else //if (usuarios[i].tipouser == "medico"); 
                {
                    window.alert("você será direcionado para sua página: " + usuarios[i].tipouser);
                    window.location.assign("/aaa/paginamedico.html");
                    break;
                }
                // recorrente = false;
                break;
            } else {
                console.log("usuario ou senha invalido");
                window.alert("usuario ou senha invalido");
            }
            break;
        } else {
            console.log("usuario ou senha invalido");
            window.alert("usuario ou senha invalido");
        }
    }

    //} while (recorrente == true);
}
