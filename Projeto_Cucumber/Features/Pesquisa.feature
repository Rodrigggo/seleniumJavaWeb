Feature: Consultar vagas 


Scenario Outline: Validar a funcionalidade de pesquisar com nome inexistente 
	Given Acessar o site "<site>" 
	When  Realizo uma pesquisa com o nome "<nomePesquisa>" 
	Then Valido que foi exibido a mensagem de nenhum resultado encontrado 
	
	Examples: 
		| site                         | nomePesquisa     |
		| https://blogdoagi.com.br/    | hahaá            |
		
		
Scenario Outline: Validar a funcionalidade de pesquisar com nome valido
	Given Acessar o site "<site>" 
	When  Realizo uma pesquisa com o nome "<nomePesquisa>" 
	Then Valido que foi exibido o resultado para o nome informando 
	
	Examples: 
		| site                         | nomePesquisa     |
		| https://blogdoagi.com.br/    | Open banking     |