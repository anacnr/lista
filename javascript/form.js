
/**
 * PARTE DO JAVASCRIPT CLEINTE SERVIDOR
 * Vou tentar fazer com que o js pegue só a validação do php e emita duas mensagens de compartibilidade e incompatibilidade
 */
console.log("Script carregado!")
// Aguarde o carregamento completo da página
document.addEventListener("DOMContentLoaded", function () {
    // Adicione um ouvinte de eventos para o formulário
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio tradicional do formulário

        let user = document.getElementById("gmail").value;
        let passw = document.getElementById("senha").value;

        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(user)) {
            var dates = new FormData();

            dates.append('end', user);
            dates.append('passw', passw);

            $.ajax({
                url: './php/login.php'
                /* 'php/login.php' Caminho relativo*/
                /*Caminho absoluto: 'http://127.0.0.1/lista/php/login.php',*/ ,
                type: 'POST',
                data: dates,
                processData: false,
                contentType: false
            }).done(function(valide) {
                if (valide.status === "Encontrado") {
                    setTimeout(()=>{
                        window.location.href = 'teste.html'
                    },1000)  

                }
                else if(valide.status === "G errado"){
                    /*alert("Email errado!")
                    setTimeout(()=>{
                      
                    },1000) */
                }
                else if(valide.status === "S errada"){
                    alert("Senha errada!")
                }
                else {
                    console.log(valide.message);

                   
                    //Esconder o form
                    let form = document.querySelector("form")
                    form.style.opacity = '0%'
                    
                
                    let quadro = document.createElement("div")
                    quadro.classList.add('quadro_a')
                    quadro.style.display = 'block';
                    
                    let fundo = document.querySelector("body")
                    fundo.appendChild(quadro) 
 
                    
                    let frase = document.createElement("p")
                    frase.className = 'frase_a'
                    frase.innerHTML = 'Dados não encontrados. <br> Por favor faça cadastro!'
                    quadro.appendChild(frase)
                    

                    setTimeout(()=>{                        
                        form.style.opacity = '100%'
                        quadro.classList.remove('quadro_a')
                        quadro.style.display = 'none'
                    },3000)
                }
            }).fail(function (jqXHR, textStatus, errorThrown) {
                console.log("Erro na requisição AJAX:", textStatus, errorThrown);
            });
        }
    });
});

function Register() {
    // Sua função de cadastro
    console.log("a")
}
