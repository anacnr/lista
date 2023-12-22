
/**
 * PARTE DO JAVASCRIPT CLIENTE SIDE
 *O Ajax permite que o JavaScript se comunique com o PHP para validar as condicionais de acesso.
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
                    //window.location.href = 'test.html' 
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
    setTimeout(()=>{
    window.location.href = 'index.html'
    },500)
}
