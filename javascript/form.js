
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
                url: './php/login.php',
                type: 'POST',
                data: dates,
                processData: false,
                contentType: false
            }).done(function(valide) {
                if (valide.status === "Encontrado") {
                    console.log(valide.message) 
                }
                else if(valide.status === "SenhaErrada"){
                    console.log(valide.message)
                }
                else {
                  console.log(valide.message)
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
