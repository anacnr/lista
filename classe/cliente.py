#Criar uma classe para o cliente

class Cliente():

    def __init__(self, nome, telefone, gmail, endereco):
        self.nome = nome
        self.tel = telefone
        self.gmail = gmail
        self.end = endereco

    def preencherDados(self):
        self.nome = input("Coloque o seu nome -> \n")
        self.tel = int(input("Coloque o seu número de celular ou fixo -> \n"))
        self.gmail = input("Coloque o seu endereço virtual -> \n")
        self.end = input("Coloque o endereço da sua residência -> \n")
        print("Nome do usuário: " + self.nome  + '\n' + "Contato: \n" , self.tel , '\n' + self.gmail + '\n' "Você mora na " + self.end + '\n' + "Você entrou no app! \n" )

#Métodos do cliente
    def pesquisarProduto(self , prateleira ,produto):
        prateleira = ('Arroz' , 'Guardanapo' , 'Desodorante' , 'Biscoito')

        self.prod = produto = input(" Pesquisar produto -> \n")

        if produto in prateleira :
            print(prateleira.index(produto) , " encontrado!")
        else:
            print("Produto não encontrado!")

    def adicionarProduto(self, lista):
        self.li = lista = [] 
        self.li.append(self.prod)
        print(lista)

    def removerProduto(self, excluido):
        resposta = input("Remover item? \n ")

        if resposta == 'sim':
            excluido = input("Qual item?  \n")
            
            self.li.remove(excluido)

            print(excluido + " removido")
        else:
            pergunta = input(" Você quer adicionar outros produtos? \n ")
            
            if pergunta == 'sim' or 'Sim' or 'SIM':
                adicionado = input(" Qual produto você quer adicionar? \n ")
                self.li.append(adicionado)

            elif pergunta == 'nao' or 'não' or 'NAO' or 'NÃO':
                ask = input(" Salvar lista? ")
                if ask == 'sim' or 'Sim' or 'SIM':     
                    print(self.li)
                else:
                    self.li.clear()
                    print(" Lista excluída \n")
            
#Te que chamar a função de adicionar os produtos. Só printou a última ocorrência

usuario = Cliente(nome = input, telefone = input, gmail = input, endereco = input)
usuario.preencherDados()
usuario.pesquisarProduto(prateleira = list, produto = input)
usuario.adicionarProduto(lista = list)
usuario.removerProduto(excluido = input)