# Soluções

## Função recebeData_Data( )

Recebe um valor do Tipo Data e retorna True se a Data for válida ()  e false se for inválida a forma de validação foi dada por:

Meses de 30 dias = 4,6,9,11\
Meses de 31 dias = 1,3,5,7,8,10,12

- Verifica se o mês informado está contidos nos arrays de 30 ou 31 dias
- Se o mês informado estiver contido nos meses de 30 dias
    - Verificar o dia informado pelo usuário (Não pode passar de 30): Informa que a data é válida e retorna true;
    - Se o dia informado for maior que 30: Informar que a data é invalida e retorna false;
- Se o mês informado estiver contido nos meses de 31 dias
    - Verificar o dia informado pelo usuário (Não pode passar de 31): Informa que a data é válida e retorna true;
    - Se o dia informado for maior que 31: Informar que a data é invalida e retorna false;

## Função calcula_ano_bissexto( )

- Verifica se o ano informado pelo usuário é divisível por 4, indivisível por 100 ou divisível 400: se sim retorna true.

## Função recebeData_String( )

- Recebe uma data no formato String 'DD/MM/AAAA'
- Transforma a data em um array de 3 valores inteiros
- Atribui os respectivos valores e seus índices as variáveis dia, mes e ano
- Atribui a um objeto do tipo Data
- Após atribuir a um onjeto do tipo Data, podemos utilizar a função recebeData_Data( ) para verificar se a data é válida

## Função somaData( )

Recebe um numero (somador) e um objeto do tipo Data
Duas situações prováveis: O somador ser maior que 30, avança mais de um mês, e menor que trinta, avança até 1 mês

Função somar( ): //função parar somar um valor X < 30 a uma data atual
	
- verificar se o mês informado é de 30 ou 31 dias

    Se o mês for de 30 dias
	- Soma a data atual + somador
	- Se o valor de soma for maior que trinta deve-se 
	- Adicionar +1 ao mês, se o mês for maior que 12 deve-se adionar +1 ao ano e reiniciar a contagem de meses a partir do 1. 
	- Calcular a diferença entre soma e a quantidade máxima de dias do mês 30 e atribuir ao this.dia
	- Se o valor da soma não for maior que trinta apenas atribui o valor de soma a this.dia
	- Atribuir os valores de this.ano, this.mes e this.dia a uma variável do tipo Data

	Se o mês for de 31 dias
	- Soma a data atual + somador
	- Se o valor de soma for maior que trinta deve-se 
	- Adicionar +1 ao mês, se o mês for maior que 12 deve-se adionar +1 ao ano e reiniciar a contagem de meses a partir do 1. 
	- Calcular a diferença entre soma e a quantidade máxima de dias do mês 31 e atribuir ao this.dia
	- Se o valor da soma não for maior que trinta apenas atribui o valor de soma a this.dia
	- Atribuir os valores de this.ano, this.mes e this.dia a uma variável do tipo Data

Função somarData( ):

- Se o somador for maior que 30
	- Atribuir +1 ao mês para cada 30 dias 
	- Subtrai 30 de Somador a cada repetição do for ( A função somar recebe apenas o valor restante de somador  (> 30))
	- Chama a função somar( )


 - Se o somador for menor que 30
	- Chama a função somar( )

## Função subtraiData( )

Se for o subtraendo for maior que 30
- enquanto i > 30
	- reduzir -1 de this.mes a cada 30 dias
		- se this.mes for menor que 1 deve-se: subtrair -1 ao ano e atribuir 12 ao mes
	- subtrair -30 de subtraendo a cada repetição

Se for o subtraendo for menor que 30

- se o valor de subtraendo for menor que this.dia
	- this.dia = this.dia - subtraendo
	- atribuir o resultado a this.dia 

- se o valor do subtraendo for igual a this.dia
	- subtrair -1 de this.mes
	- se this.mes for menor que 1 deve-se: subtrair -1 ao ano e atribuir 12 ao mes
	- verificar se this.mes é de 30 ou 31 dias
		- se for de 31 dias: this.dia = 31
		- se for de 30 dias: this.dia = 30

- se o valor de subtraendo for maior que this.dia
	- subtrair -1 de this.mes
	- se this.mes for menor que 1 deve-se: subtrair -1 ao ano e atribuir 12 ao mes
	- atribuir a result = subtraendo - this.dia
	- verificar se o mês é de 30 ou 31 dias:
		- se for 31: 31 - result
		- se for 30: 30 - result
	- atribui o resultado a this.dia, this.mes, e this.ano

## Função imprimeData( )

O objetivo desta função que recebe como parâmetro um objeto do tipo data e retorna ela escrita por extenso

- Criar um dicionário e atribuir as chaves, números dos meses, aos seus respectivos nomes.
- Acessar o dicionário por meio do data.mes.
- Imprimir no console a data por extenso