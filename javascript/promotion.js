document.addEventListener("DOMContentLoaded" , function(){

    const input = document.getElementById("product")

    const button = document.querySelector('.bi-search')

    const search = function toSearch(){
        
        if(input.value.length == 0 ){
            console.log("Valor: vazio.")
        }
        else{
            console.log("Pesquisando...")

            const select = document.getElementById("field-sel")
            select.style.display = 'block'

            select.selectedIndex = -1

            /*Função que cria a div que vai realizar a operação da troca de preço.*/
            const edit = () =>{
                let box = document.createElement('div')
                box.className = 'price-box'

                let body = document.querySelector('body')
                body.appendChild(box)
                
                let input = document.createElement('input')
                input.id = 'new-price'
                input.name = 'new-price'
                input.type = 'text'
                input.minLength = '4'
                input.placeholder = "Novo-preço"

                box.appendChild(input)

                /*Criação do parágrafo para pegar o código*/
                let phrase = document.createElement('p')
                phrase.id = 'code-prod'
                box.appendChild(phrase)
                
                document.querySelector('h1').style.display = 'none'
            }

            const form = new FormData()
            form.append('product', input.value)
            /*Faz as pesquisas para puxar os produtos do banco*/
            $.ajax({
                url: '../php/promo.php',
                type: "POST",
                data: form,
                processData: false,
                contentType: false
            }).done(function(request) {
                select.innerHTML = "" //Previne a duplicação da option
                
               /*Solução para que a função de editar não seja chamada em seguida*/
               let first_opt = document.createElement('option')
               first_opt.className = 'data'
               first_opt.innerHTML = "Setor: Variados"
               select.appendChild(first_opt)
                
                request.forEach(iten =>{
                    //Dados puxado do banco
                    let name = iten.nome
                    let id = iten.id

                        let option = document.createElement('option')                        
                        option.className = 'data'
                        option.textContent = name
                        select.appendChild(option)                    
                        option.id = `${id}`
                        option.value = `val${id}`
            });
                //Função para lidar com a mudança de opção
                function change(event) {
                    //Obtém o elemento selecionado
                    let select = event.target;

                    //Verifica se uma opção foi selecionada
                    let selectedOption = select.options[select.selectedIndex];
                    if (selectedOption) {
                        //selectedOption.id -> É responsável por pegar o id do produto no select

                        /*Requisição ajax para buscar o código*/
                        $.ajax({
                            url: '../php/produtos-salvos.php',
                            type: 'POST',
                            processData: false,
                            contentType: false
                        }).done(function(code) {
                            //Verifica se a condição é verdadeira para cada elemento
                           code.forEach(iten =>{

                            let id = iten.id
                            let opt_id = selectedOption.id

                            if(id == opt_id){
                                
                            console.log("ID do produto: " + id + " ID da option: " + opt_id);

                                let phrase = document.getElementById("code-prod")
                                phrase.innerHTML = `Código:${iten.codigo}`

                                const i = document.createElement("i")
                                i.className = 'bi bi-floppy-fill'

                                let box = document.querySelector('.price-box')

                                box.appendChild(phrase)
                                box.appendChild(i)

                                i.addEventListener("click" , ()=> {
                                /*Novo form para enviar o valor e também o código*/
                                let input = document.querySelector('#new-price').value

                                const form = new FormData()
                                form.append('new-price', input)
                                form.append('code', iten.codigo)

                                console.log("i clicado!")

                                $.ajax({
                                    url: '../php/preço-update.php', type: 'POST', data: form, processData: false, contentType:false
                                }).done(function(data){
                                    console.log(data)//Se funcionar retorna true
                                    setTimeout(()=>{
                                        location.href = '../supermercado/promo.html'                                       
                                    },3000)
                                });//ajax para trocar o preço 
                                });//Clique do i
                            }                            
                           })
                        });                        
                    } 
                    else {
                        console.log("Nenhuma opção selecionada");
                    }
                }
                // Adiciona um event listener para o evento de mudança no <select>
                select.addEventListener("change", change);               
            });   
        edit()         
        }
    }
    button.addEventListener("click", search);   
});