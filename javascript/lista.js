/*Criar a lista com js*/
document.addEventListener("DOMContentLoaded" , ()=>{
    
        document.addEventListener('choose', (event) => {

            const produtoEscolhido = event.detail;
            console.log(produtoEscolhido)
            
            // Agora você pode fazer qualquer coisa com o produto escolhido,
            // como atualizar a lista ou realizar outra ação baseada nesse produto.
        });
    });
       
