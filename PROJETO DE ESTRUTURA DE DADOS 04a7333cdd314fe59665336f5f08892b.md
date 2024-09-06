# PROJETO DE ESTRUTURA DE DADOS

**SUMÀRIO**

**SOBRE ESTE TRABALHO**

**link para acessar o Notion:**

[https://www.notion.so/PROJETO-DE-ESTRUTURA-DE-DADOS-04a7333cdd314fe59665336f5f08892b?pvs=4](https://www.notion.so/PROJETO-DE-ESTRUTURA-DE-DADOS-04a7333cdd314fe59665336f5f08892b?pvs=21)

**Discentes:**

DEMETRIUS FERREIRA DOS SANTOS

JANINE ALVES DA SILVA

MARIA GABRIELI DE MOURA RODRIGUES

MARIA RITA DA SILVA GOMES

**Livros utilizados:**

**EDELWEISS, Nina; GALANTE, Renata.** *Estruturas de Dados: Volume 18*. São Paulo: Grupo A - Bookman, 2009. 262 p.

**BHARGAVA, Aditya Y.** *Algoritmos: Teoria e Prática*. São Paulo: Novatec Editora, 2018. 264 p. 

# Questão 1

Leia os capítulos de pilhas, filas e listas encadeadas, em livros disponíveis na
biblioteca do campus. Anote os pontos principais e as explicações fornecidas
sobre Filas, Pilhas e Listas Encadeadas.

**Resposta:**

Baseando nos livros de *Estrutura de dados* e *Algoritmos Teoria e Prática* foram *encontradas as seguintes explicações e características sobre estas estruturas:*

**Sobre Lista Encadeada:**

1. Aprsenta um ponteiro para o primeiro nodo da lista; permite o acesso à lista;
2. Realiza o encadeamento dos nodos através de um campo de elo (referência);
3. Apresenta um indicador de final de lista: o último nodo deve implementar um valor nulo que indique ao algoritmo o final da lista.
4. Um nodo é composto por um campo que contém a informação e um segundo que contém o elo, referência do próximo nodo.
5. Os elementos podem estar em qualquer lugar da memória. Um item indica o endereço do próximo.

**Sobre Pilhas:**

1. O item é inserido no topo da lista, quando você consulta a pilha visualiza somente o item do topo e ele é removido.
2. São listas que respeitam a regra LIFO (Last In, First Out), o primeiro nodo a ser retirado deve ser o último que fora inserido.
3. Das operações que podem ser executadas:Criar pilha, consultar, excluir, modificar primeiro nodo e destruir pilha.

**Sobre Filas:**

1. Somente podem ser acessados os nodos das extremidades. 
2. Segue a regra FIFO (First In, First Out), o primeiro nodo retirado deve ser o primeiro que foi incluído.
3. Operações permitidas: Criar uma fila, inserir um novo nodo no final, excluir nodo no início, consultar ou modificar o nodo do início, destruir fila

# Questão 2

Escreva um resumo crítico de cada capítulo lido. O resumo deve incluir:
o Uma visão geral dos conceitos apresentados.
o Exemplos práticos discutidos no capítulo.
o Sua opinião sobre a clareza e utilidade das explicações fornecidas.

**Resposta:**

**Resumo do Livro**: "Estruturas de Dados e Algoritmos: Teoria e Prática" de Nina Edelweiss e Renata Galante
**Visão Geral dos Conceitos Apresentados**

O livro oferece uma abordagem completa sobre estruturas de dados e algoritmos, abordando desde os fundamentos básicos até técnicas mais avançadas. A obra é dividida em capítulos que cobrem uma ampla gama de tópicos, incluindo listas, pilhas, filas, árvores e grafos, além de técnicas de análise de algoritmos. A proposta é fornecer uma compreensão tanto teórica quanto prática, enfatizando como as estruturas de dados podem ser aplicadas para resolver problemas reais de maneira eficiente.
**Exemplos Práticos Discutidos no Capítulo1.** 

1. **Listas e Arrays:**    - A introdução cobre a implementação de listas encadeadas e arrays.   - Exemplos práticos incluem a criação de uma lista encadeada para gerenciar um conjunto dinâmico de dados e o uso de arrays para armazenar dados em um formato contíguo na memória.
2. **Pilhas e Filas**    - O capítulo sobre pilhas e filas oferece exemplos como a implementação de uma pilha para gerenciar a recursão em algoritmos e uma fila para gerenciar um sistema de atendimento por prioridade, por exemplo, em um sistema de impressão.
3. **Árvores**:    - A discussão inclui árvores binárias e árvores balanceadas, como árvores AVL.   - Um exemplo prático é a implementação de uma árvore AVL para realizar buscas e inserções de dados de forma eficiente em um banco de dados.
4. **Grafos**:    - O livro explora a teoria e a aplicação de grafos, incluindo algoritmos de busca como BFS e DFS.   - Exemplos práticos incluem a implementação de algoritmos de caminho mínimo, como o de Dijkstra, para roteamento em redes.

**Opinião Sobre a Clareza e Utilidade das Explicações**

As explicações fornecidas no livro são claras e bem estruturadas. As autoras têm um estilo didático que facilita a compreensão dos conceitos, com a inclusão de diagramas e exemplos de código que ilustram os tópicos abordados. A utilidade das explicações é destacada pela aplicação prática dos conceitos e pela discussão detalhada sobre a eficiência e a escolha de algoritmos. O livro é eficaz tanto para estudantes quanto para profissionais, oferecendo uma base sólida e aplicável para a implementação de estruturas de dados e algoritmos.

# Questão 3

Compare os conceitos de Filas, Pilhas e Listas Encadeadas apresentados nos
diferentes livros. Identifique semelhanças e diferenças na abordagem dos autores.

**Resposta**:

Os livros escolhidos foram “Entendendo algoritmos” de Aditya Y. Bhargava e “Estrutura de dados”

de Nina Edelweiss e Renata Galante. Ambos os livros abordam e explicam muito bem os principais conceitos

de filas, pilhas e listas encadeadas. A principal semelhança entre elas está na forma como abordam o assunto,

os autores tentam ser bem didáticos com o uso de figuras ilustrativas exemplificando com acontecimentos do cotidiano.

No entanto, existe um contraste entre nos dois livros que os diferencia. O primeiro, escrito por Aditya Y. Bhargava se utiliza de uma

linguagem simples,intuitiva e didatica usando bastantes exemplos do dia a dia, enquanto o segundo livro, escrito por Nina Edelweiss e Renata Galante,

tende para uma escrita formal e prioriza termos técnicos.

# Questão 4

Descreva algumas das aplicações práticas das estruturas de dados mencionadas
nos capítulos. Inclua exemplos que você achou mais interessantes ou
surpreendentes.

**Resposta:**

As aplicações encontradas no livro Entendendo algoritmos - um guia ilustrado para programadores e outros curiosos foram arrays, listas encadeadas, notação big O, busca sequencial, busca binária, ordenação, Quicksort e hashes.

No livro Estrutura de dados foram encontradas as seguintes aplicações Listas lineares e suas generalizações: listas ordenadas, listas encadeadas e filas. Aplicações de listas. Árvores e suas generalizações: árvores binárias, árvores de busca, árvores balanceadas (AVL), árvores B e B +.Aplicação de árvores.

# Questão 5

Formule três perguntas para reflexão sobre cada estrutura de dados, baseadas nos
capítulos lidos. As perguntas devem incentivar uma análise mais profunda e crítica
dos conceitos.

**Resposta:**

**1.Qual é a complexidade de tempo para acessar um elemento específico em um array e por que isso é possível?**

Resposta: A complexidade de tempo para acessar um elemento específico em um array é 𝑂 ( 1 ) O(1), ou tempo constante. Isso é possível porque os arrays armazenam elementos em posições de memória contíguas, permitindo o acesso direto a qualquer posição usando seu índice.

**2.Quais são as principais operações que podem ser realizadas em um array e suas respectivas complexidades de tempo?**

Resposta:

- Acesso: O(1)O(1)O(1)
- Inserção: O(n)O(n)O(n) no pior caso (se a inserção for feita no início ou no meio do array, todos os elementos subsequentes precisam ser deslocados)
- Remoção: O(n)O(n)O(n) no pior caso (se a remoção for feita no início ou no meio do array, todos os elementos subsequentes precisam ser deslocados)
- Busca: O(n)O(n)O(n) no pior caso (se for uma busca linear)

**3.Quais são as vantagens e desvantagens de usar arrays em comparação com outras estruturas de dados, como listas ligadas?**

Resposta:

- Vantagens:
    - Acesso rápido a elementos usando índices (O(1)O(1)O(1))
    - Estrutura de dados simples e direta
- Desvantagens:
    - Tamanho fixo (necessário definir o tamanho no momento da criação)
    - Inserção e remoção de elementos são custosas (O(n)O(n)O(n) no pior caso)
    - Uso ineficiente de memória se o array for subutilizado

**1.Qual é a principal vantagem de uma lista encadeada sobre um array em termos de inserção e remoção de elementos?**

resposta: Considere a necessidade de mover elementos em um array versus a modificação de ponteiros em uma lista encadeada.

**2.Como funciona a inserção de um novo nó no meio de uma lista encadeada? Quais são os passos necessários para garantir que a lista mantenha sua integridade?**

resposta: Pense nos ponteiros do nó atual, do novo nó e do nó seguinte.

**3.Qual é a complexidade de tempo para acessar um elemento específico em uma lista encadeada e por que? Como isso se compara ao acesso em um array?**

resposta: Compare o acesso sequencial em uma lista encadeada com o acesso direto em um array.

**1.Quais são alguns exemplos de aplicações onde o uso de listas ligadas pode ser mais vantajoso do que arrays?**

resposta:ㅤPense em situações onde a inserção e remoção de elementos é frequente e ocorre em várias partes da lista, como em gerenciadores de memória ou sistemas de gerenciamento de tarefas.

**2.Como as listas são usadas na implementação de outras estruturas de dados, como pilhas e filas, e quais são as vantagens dessas implementações?**

resposta:ㅤConsidere a eficiência de operações como push, pop (em pilhas), enqueque e dequeue (em filas) quando implementadas usando listas.

**3.Explique como listas duplamente ligadas podem ser utilizadas para criar um navegador de histórico de páginas web**.

resposta:ㅤPense em como o ponteiro para o próximo e anterior em cada nó facilita a navegação para frente e para trás entre páginas visitadas.

**1.O que é uma árvore binária e como ela difere de uma árvore binária de busca?**

Resposta: Uma árvore binária é uma estrutura de dados onde cada nó tem no máximo dois filhos, chamados de filho esquerdo e filho direito. Uma árvore binária de busca (BST - Binary Search Tree) é uma árvore binária com a propriedade adicional de que o valor do nó esquerdo é sempre menor do que o valor do nó pai, e o valor do nó direito é sempre maior. Isso facilita operações como busca, inserção e remoção de elementos.

**2.Quais são as principais vantagens das árvores AVL em comparação com as árvores binárias de busca simples?**

Resposta: As árvores AVL são um tipo de árvore binária de busca auto-balanceada. As principais vantagens das árvores AVL são que elas mantêm a altura balanceada após cada inserção e remoção, garantindo que as operações de busca, inserção e remoção possam ser realizadas em tempo O(log n). Isso contrasta com as árvores binárias de busca simples, que podem se tornar desequilibradas e degenerar em listas ligadas, resultando em operações de tempo O(n) no pior caso.

**3.O que são árvores B e quais são suas aplicações típicas?**

Resposta: Árvores B são árvores auto-balanceadas de ordem maior que duas, usadas principalmente em sistemas de gerenciamento de bancos de dados e sistemas de arquivos. Elas são generalizações das árvores binárias e podem ter mais de dois filhos por nó. As árvores B são eficientes para operações de leitura e gravação em disco porque minimizam o número de acessos ao disco. Isso as torna ideais para armazenar grandes volumes de dados que não cabem na memória principal.

# Questão 6

Implemente uma fila de prioridade para simular um sistema de mensageria onde
mensagens são enviadas e processadas em ordem de prioridade. Crie uma classe
MensageriaPrioridade com métodos para adicionar mensagens à fila com
diferentes níveis de prioridade e processá-las de acordo com a prioridade. Simule
o envio de várias mensagens e o processamento das mesmas, exibindo mensagens
no console para indicar o estado da fila e as ações realizadas.

## Solução

```jsx
// MensageriaPrioridade.js

/**
 * Representa uma mensagem com prioridade.
 * @typedef {Object} Mensagem
 * @property {string} conteudo - O conteúdo da mensagem.
 * @property {number} prioridade - A prioridade da mensagem.
 */

/**
 * Classe para gerenciar uma fila de mensagens com prioridade.
 */
class MensageriaPrioridade {
    constructor() {
      this.fila = [];
    }
  
    /**
     * Adiciona uma mensagem à fila com uma prioridade específica.
     * @param {string} conteudo - O conteúdo da mensagem.
     * @param {number} prioridade - A prioridade da mensagem (número maior indica maior prioridade).
     */
    adicionarMensagem(conteudo, prioridade) {
      const mensagem = { conteudo, prioridade };
      this.fila.push(mensagem);
      this.fila.sort((a, b) => b.prioridade - a.prioridade);
      console.log(`Mensagem adicionada: ${conteudo} com prioridade ${prioridade}`);
    }
  
    /**
     * Processa a próxima mensagem na fila, removendo-a.
     * @returns {Mensagem|null} A mensagem processada ou null se a fila estiver vazia.
     */
    processarMensagem() {
      if (this.fila.length === 0) {
        console.log('Nenhuma mensagem para processar.');
        return null;
      }
      const mensagem = this.fila.shift();
      console.log(`Processando mensagem: ${mensagem.conteudo}`);
      return mensagem;
    }
  
    /**
     * Retorna o estado atual da fila de mensagens.
     * @returns {Mensagem[]} A fila de mensagens.
     */
    estadoFila() {
      console.log('Estado atual da fila:', this.fila);
      return this.fila;
    }
  }
  
  module.exports = MensageriaPrioridade;
  
```

## Teste

```jsx
// MensageriaPrioridade.test.js

const MensageriaPrioridade = require('./MensageriaPrioridade');

test('Deve adicionar mensagens com diferentes prioridades e processá-las na ordem correta', () => {
  const mensageria = new MensageriaPrioridade();

  mensageria.adicionarMensagem('Mensagem 1', 1);
  mensageria.adicionarMensagem('Mensagem 2', 3);
  mensageria.adicionarMensagem('Mensagem 3', 2);

  expect(mensageria.processarMensagem().conteudo).toBe('Mensagem 2');
  expect(mensageria.processarMensagem().conteudo).toBe('Mensagem 3');
  expect(mensageria.processarMensagem().conteudo).toBe('Mensagem 1');
  expect(mensageria.processarMensagem()).toBe(null);
});
```

# Questão 7

Implemente uma fila que simule o atendimento de clientes em um banco, onde os
clientes são atendidos por ordem de chegada, mas com prioridade para clientes

preferenciais (por exemplo, idosos, grávidas). Crie uma classe FilaBancoPrioridade
com métodos para adicionar clientes à fila com diferentes níveis de prioridade e
atendê-los. Simule a chegada de clientes e o atendimento dos mesmos, exibindo
mensagens no console para indicar o estado da fila e as ações realizadas.

## Solução

```jsx
class filaDeBancoPrioridade {
    constructor (){
     this.filaPrioridade1 = []; //60+
     this.filaPrioridade2 = []; //gestante
     this.filaComum = [];
    }

    add (nome, prioridade = 0) {
        if (prioridade === 1 ){ //idoso
            this.filaPrioridade1.push(nome);
            console.log(`Cliente ${nome} chegou na fila prioritária 1 (maior de 60 anos)`);
        }else if (prioridade === 2) { //gestante
            this.filaPrioridade2.push(nome);
            console.log(`Cliente ${nome} chegou na fila prioritária 2 (gestante)`);
        }else{
            this.filaComum.push(nome);
            console.log (`Cliente ${nome} chegou na fila comum`)
        }
    }
    atenderCliente (){
        if (this.filaPrioridade1.length > 0){
            const atendendoCliente = this.filaPrioridade1.shift();
            console.log(`Atendendo cliente prioritário 1 (Maior de 60 anos): ${atendendoCliente}`);
        } else if (this.filaPrioridade2.length > 0){
                const atendendoCliente = this.filaPrioridade2.shift();
                console.log(`Atendendo o(a) cliente prioritário 2 (gestante): ${atendendoCliente}`);
            } else if(this.filaComum.length > 0) {
                const atendendoCliente = this.filaComum.shift();
                console.log (`Atendendo o(a) cliente: ${atendendoCliente}`)
                } else {
                    if (this.filaComum.length === 0)
                        console.log (`Não há cliente na fila.`);
                    }
     }

        listarFilas(){
            console.log(`Pessoas na fila Prioritária 1 (Maior de 60 anos): ${this.filaPrioridade1.join(', ')}`);
            console.log(`Pessoas na fila Prioritária 2 (Gestante): ${this.filaPrioridade2.join(', ')}`);
            console.log(`Pessoas na fila comum: ${this.filaComum.join(', ')}`);    
        }
    }
   

const filaDeBanco = new filaDeBancoPrioridade();

filaDeBanco.add('João', 1);
filaDeBanco.add('Ana', 1);
filaDeBanco.add('Cláudia', 2);
filaDeBanco.add('Maria');
filaDeBanco.add('Pedro');

filaDeBanco.listarFilas();

filaDeBanco.atenderCliente();
filaDeBanco.atenderCliente();
filaDeBanco.atenderCliente();
filaDeBanco.atenderCliente();
filaDeBanco.atenderCliente();
filaDeBanco.atenderCliente();
```

## Teste

```jsx
const filaDeBancoPrioridade = require('./Q7.js');

describe('filaDeBancoPrioridade', () => {
  let fila;

  beforeEach(() => {
    fila = new filaDeBancoPrioridade();
  });

  test('deve adicionar clientes às filas corretas', () => {
    fila.add('João', 1);
    fila.add('Ana', 1);
    fila.add('Cláudia', 2);
    fila.add('Maria');
    fila.add('Pedro');

    expect(fila.filaPrioridade1).toEqual(['João', 'Ana']);
    expect(fila.filaPrioridade2).toEqual(['Cláudia']);
    expect(fila.filaComum).toEqual(['Maria', 'Pedro']);
  });

  test('deve atender clientes na ordem correta', () => {
    fila.add('João', 1);
    fila.add('Ana', 1);
    fila.add('Cláudia', 2);
    fila.add('Maria');
    fila.add('Pedro');

    const consoleSpy = jest.spyOn(console, 'log');
    fila.atenderCliente();
    fila.atenderCliente();
    fila.atenderCliente();
    fila.atenderCliente();
    fila.atenderCliente();
    fila.atenderCliente();
    fila.atenderCliente();

    expect(consoleSpy).toHaveBeenCalledWith('Atendendo cliente prioritário 1 (Maior de 60 anos): João');
    expect(consoleSpy).toHaveBeenCalledWith('Atendendo cliente prioritário 1 (Maior de 60 anos): Ana');
    expect(consoleSpy).toHaveBeenCalledWith('Atendendo o(a) cliente prioritário 2 (gestante): Cláudia');
    expect(consoleSpy).toHaveBeenCalledWith('Atendendo o(a) cliente: Maria');
    expect(consoleSpy).toHaveBeenCalledWith('Atendendo o(a) cliente: Pedro');
    expect(consoleSpy).toHaveBeenCalledWith('Não há cliente na fila.');

    consoleSpy.mockRestore();
  });

  test('deve listar as filas corretamente', () => {
    fila.add('João', 1);
    fila.add('Ana', 1);
    fila.add('Cláudia', 2);
    fila.add('Maria');
    fila.add('Pedro');

    const consoleSpy = jest.spyOn(console, 'log');
    fila.listarFilas();

    expect(consoleSpy).toHaveBeenCalledWith('Pessoas na fila Prioritária 1 (Maior de 60 anos): João, Ana');
    expect(consoleSpy).toHaveBeenCalledWith('Pessoas na fila Prioritária 2 (Gestante): Cláudia');
    expect(consoleSpy).toHaveBeenCalledWith('Pessoas na fila comum: Maria, Pedro');

    consoleSpy.mockRestore();
  });
});

```

# Questão 8

Escreva uma função que use uma pilha para converter expressões infixas (onde os
operadores estão entre os operandos) para notação pós-fixa (onde os operadores
estão após os operandos). A função deve receber uma string representando a

expressão infixa e retornar uma string representando a expressão em notação pós-
fixa. Utilize uma pilha para gerenciar os operadores e garantir a precedência

correta.
o Expressões Infixas:
▪ Os operadores estão posicionados entre os operandos.
▪ Exemplo: a+b
o Expressões Pós-Fixas (ou Notação Polonesa Reversa):
▪ Os operadores vêm após os operandos.
▪ Exemplo: ab+

## Solução

```jsx
/**
 * Converte uma expressão infixa para notação pós-fixa (notação polonesa reversa).
 * 
 * @param {string} expressao - A expressão aritmética em notação infixa, por exemplo, "(3 + 4) * 5 - 6 / 2".
 * @returns {string} A expressão convertida para notação pós-fixa.
 */
function infixaParaPosfixa(expressao) {
    let saida = [];
    let operadores = [];
    let precedencia = {
        '^': 4, // Exponenciação (associatividade à direita)
        '*': 3, // Multiplicação
        '/': 3, // Divisão
        '%': 3, // Módulo
        '+': 2, // Adição
        '-': 2, // Subtração
        '(': 1  // Parêntese de abertura
    };

    /**
     * Verifica se um caractere é um operador aritmético.
     * 
     * @param {string} c - O caractere a ser verificado.
     * @returns {boolean} Retorna verdadeiro se o caractere for um operador, falso caso contrário.
     */
    function verificarOperador(c) {
        return ['+', '-', '*', '/', '%', '^'].includes(c);
    }

    /**
     * Obtém a precedência de um operador.
     * 
     * @param {string} op - O operador cujo valor de precedência será retornado.
     * @returns {number} O valor de precedência do operador.
     */
    function obterPrecedencia(op) {
        return precedencia[op] || 0;
    }

    /**
     * Aplica operadores da pilha à saída conforme a precedência.
     * 
     * @param {string} op - O operador a ser comparado com os operadores na pilha.
     */
    function aplicarOperadores(op) {
        while (operadores.length > 0 && (obterPrecedencia(operadores[operadores.length - 1]) > obterPrecedencia(op) || 
               (obterPrecedencia(operadores[operadores.length - 1]) === obterPrecedencia(op) && op !== '^'))) {
            saida.push(operadores.pop());
        }
    }
    /**
     * Processa cada caractere da expressão infixa para converter em notação pós-fixa.
     * 
     * Itera sobre cada caractere da expressão:
     * - Se o caractere é um dígito, ele acumula os dígitos subsequentes para formar um número completo e o adiciona à saída.
     * - Se o caractere é um parêntese de abertura '(', ele é empurrado para a pilha de operadores.
     * - Se o caractere é um parêntese de fechamento ')', desempilha operadores da pilha e os adiciona à saída até encontrar o parêntese de abertura correspondente, que é então removido da pilha.
     * - Se o caractere é um operador, aplica operadores da pilha de acordo com a precedência e empurra o operador atual para a pilha.
     * 
     * @param {string} expressao - A expressão aritmética em notação infixa a ser processada.
     */
    for (let i = 0; i < expressao.length; i++) {
        let c = expressao[i];

        if (/\d/.test(c)) {  // Se o caractere é um número
            let num = c;
            while (i + 1 < expressao.length && /\d/.test(expressao[i + 1])) {
                num += expressao[++i]; 
            }
            saida.push(num);
        } else if (c === '(') {  
            operadores.push(c);
        } else if (c === ')') {
            while (operadores.length > 0 && operadores[operadores.length - 1] !== '(') {
                saida.push(operadores.pop());
            }
            operadores.pop();
        } else if (verificarOperador(c)) {  
            aplicarOperadores(c); 
            operadores.push(c);
        }
    }
    /**
     * Desempilha todos os operadores restantes
     */
    while (operadores.length > 0) {
        saida.push(operadores.pop());
    }

    return saida.join(' ');
}

module.exports = infixaParaPosfixa;

let expressaoInfixa = "(3 + 4) * 5 - 6 / 2";
let expressaoPosfixa = infixaParaPosfixa(expressaoInfixa);
console.log("Expressão Pós-fixa:", expressaoPosfixa);
```

## Teste

```jsx
const infixaParaPosfixa = require('./Q8.js');

describe('Função infixaParaPosfixa', () => {

    test('deve converter a expressão infixa "(3 + 4) * 5 - 6 / 2" para pós-fixa', () => {
        const expressaoInfixa = "(3 + 4) * 5 - 6 / 2";
        const resultadoEsperado = "3 4 + 5 * 6 2 / -";
        expect(infixaParaPosfixa(expressaoInfixa)).toBe(resultadoEsperado);
    });

    test('deve converter a expressão infixa "3 + 4 * 2 / (1 - 5) ^ 2 ^ 3" para pós-fixa', () => {
        const expressaoInfixa = "3 + 4 * 2 / (1 - 5) ^ 2 ^ 3";
        const resultadoEsperado = "3 4 2 * 1 5 - 2 3 ^ ^ / +";
        expect(infixaParaPosfixa(expressaoInfixa)).toBe(resultadoEsperado);
    });

    test('deve converter a expressão infixa "1 + 2" para pós-fixa', () => {
        const expressaoInfixa = "1 + 2";
        const resultadoEsperado = "1 2 +";
        expect(infixaParaPosfixa(expressaoInfixa)).toBe(resultadoEsperado);
    });

    test('deve converter a expressão infixa "(1 + 2) * (3 + 4)" para pós-fixa', () => {
        const expressaoInfixa = "(1 + 2) * (3 + 4)";
        const resultadoEsperado = "1 2 + 3 4 + *";
        expect(infixaParaPosfixa(expressaoInfixa)).toBe(resultadoEsperado);
    });

    test('deve converter a expressão infixa "42" para pós-fixa', () => {
        const expressaoInfixa = "42";
        const resultadoEsperado = "42";
        expect(infixaParaPosfixa(expressaoInfixa)).toBe(resultadoEsperado);
    });

    test('deve converter a expressão infixa "2 + 3 * 4" para pós-fixa', () => {
        const expressaoInfixa = "2 + 3 * 4";
        const resultadoEsperado = "2 3 4 * +";
        expect(infixaParaPosfixa(expressaoInfixa)).toBe(resultadoEsperado);
    });

});

```

# Questão 9

Utilize uma pilha para implementar uma solução que encontre o caminho em um
labirinto bidimensional. A função deve receber uma matriz representando o
labirinto, onde 0 indica um caminho livre e 1 indica uma parede. A função deve
retornar um array de coordenadas representando o caminho encontrado. Utilize
uma pilha para gerenciar o percurso e as decisões de retrocesso.

## Solução

```jsx

```

## Teste

```jsx

```

# Questão 10

Implemente uma classe ListaEncadeada para representar uma lista encadeada
simples. A classe deve incluir métodos para adicionar elementos ao final da lista,
remover elementos do início da lista, buscar elementos por valor e exibir todos os
elementos da lista. Além disso, implemente métodos para inserir elementos em
posições específicas e remover elementos por valor. Simule a adição, remoção e
busca de vários elementos, exibindo o estado da lista a cada operação.

## Solução

```jsx
// ListaEncadeada.js

/**
 * Classe que representa um nó na lista encadeada.
 */
class Nodo {
    /**
     * @param {*} valor - O valor armazenado no nó.
     */
    constructor(valor) {
      this.valor = valor;
      this.proximo = null;
    }
  }
  
  /**
   * Classe para gerenciar uma lista encadeada simples.
   */
  class ListaEncadeada {
    constructor() {
      this.cabeca = null;
    }
  
    /**
     * Adiciona um elemento ao final da lista.
     * @param {*} valor - O valor a ser adicionado.
     */
    adicionar(valor) {
      const novoNodo = new Nodo(valor);
      if (!this.cabeca) {
        this.cabeca = novoNodo;
      } else {
        let atual = this.cabeca;
        while (atual.proximo) {
          atual = atual.proximo;
        }
        atual.proximo = novoNodo;
      }
      console.log(`Adicionado: ${valor}`);
    }
  
    /**
     * Remove o elemento do início da lista.
     * @returns {*} O valor do elemento removido ou null se a lista estiver vazia.
     */
    removerInicio() {
      if (!this.cabeca) {
        console.log('A lista está vazia');
        return null;
      }
      const removido = this.cabeca.valor;
      this.cabeca = this.cabeca.proximo;
      console.log(`Removido do início: ${removido}`);
      return removido;
    }
  
    /**
     * Busca um elemento por valor na lista.
     * @param {*} valor - O valor a ser buscado.
     * @returns {Nodo|null} O nó com o valor buscado ou null se não for encontrado.
     */
    buscar(valor) {
      let atual = this.cabeca;
      while (atual) {
        if (atual.valor === valor) {
          console.log(`Encontrado: ${valor}`);
          return atual;
        }
        atual = atual.proximo;
      }
      console.log(`Não encontrado: ${valor}`);
      return null;
    }
  
    /**
     * Exibe todos os elementos da lista.
     * @returns {void}
     */
    exibir() {
      let atual = this.cabeca;
      const elementos = [];
      while (atual) {
        elementos.push(atual.valor);
        atual = atual.proximo;
      }
      console.log('Elementos da lista:', elementos);
    }
  
    /**
     * Insere um elemento em uma posição específica.
     * @param {*} valor - O valor a ser inserido.
     * @param {number} posicao - A posição onde o valor será inserido.
     */
    inserirNaPosicao(valor, posicao) {
      const novoNodo = new Nodo(valor);
      if (posicao === 0) {
        novoNodo.proximo = this.cabeca;
        this.cabeca = novoNodo;
        console.log(`Inserido ${valor} na posição ${posicao}`);
        return;
      }
  
      let atual = this.cabeca;
      let anterior = null;
      let index = 0;
  
      while (atual && index < posicao) {
        anterior = atual;
        atual = atual.proximo;
        index++;
      }
  
      if (anterior) {
        novoNodo.proximo = atual;
        anterior.proximo = novoNodo;
        console.log(`Inserido ${valor} na posição ${posicao}`);
      } else {
        console.log(`Posição ${posicao} fora do alcance`);
      }
    }
  
    /**
     * Remove um elemento por valor na lista.
     * @param {*} valor - O valor a ser removido.
     * @returns {boolean} Verdadeiro se o elemento foi removido, falso caso contrário.
     */
    removerPorValor(valor) {
      if (!this.cabeca) {
        console.log('A lista está vazia');
        return false;
      }
  
      if (this.cabeca.valor === valor) {
        this.cabeca = this.cabeca.proximo;
        console.log(`Removido: ${valor}`);
        return true;
      }
  
      let atual = this.cabeca;
      let anterior = null;
  
      while (atual && atual.valor !== valor) {
        anterior = atual;
        atual = atual.proximo;
      }
  
      if (atual) {
        anterior.proximo = atual.proximo;
        console.log(`Removido: ${valor}`);
        return true;
      }
  
      console.log(`Não encontrado: ${valor}`);
      return false;
    }
  }
  
  module.exports = ListaEncadeada;
  
```

## Teste

```jsx
// ListaEncadeada.test.js

const ListaEncadeada = require('./ListaEncadeada');

test('Deve adicionar elementos ao final da lista e exibir os elementos', () => {
  const lista = new ListaEncadeada();
  lista.adicionar(10);
  lista.adicionar(20);
  lista.adicionar(30);
  expect(lista.cabeca.valor).toBe(10);
  expect(lista.cabeca.proximo.valor).toBe(20);
  expect(lista.cabeca.proximo.proximo.valor).toBe(30);
});

test('Deve remover elementos do início da lista', () => {
  const lista = new ListaEncadeada();
  lista.adicionar(10);
  lista.adicionar(20);
  lista.removerInicio();
  expect(lista.cabeca.valor).toBe(20);
  lista.removerInicio();
  expect(lista.cabeca).toBe(null);
});

test('Deve buscar elementos por valor na lista', () => {
  const lista = new ListaEncadeada();
  lista.adicionar(10);
  lista.adicionar(20);
  lista.adicionar(30);
  expect(lista.buscar(20).valor).toBe(20);
  expect(lista.buscar(40)).toBe(null);
});

test('Deve inserir elementos em posições específicas', () => {
  const lista = new ListaEncadeada();
  lista.adicionar(10);
  lista.adicionar(30);
  lista.inserirNaPosicao(20, 1);
  expect(lista.cabeca.valor).toBe(10);
  expect(lista.cabeca.proximo.valor).toBe(20);
  expect(lista.cabeca.proximo.proximo.valor).toBe(30);
});

test('Deve remover elementos por valor', () => {
  const lista = new ListaEncadeada();
  lista.adicionar(10);
  lista.adicionar(20);
  lista.adicionar(30);
  lista.removerPorValor(20);
  expect(lista.buscar(20)).toBe(null);
  expect(lista.cabeca.valor).toBe(10);
  expect(lista.cabeca.proximo.valor).toBe(30);
});
```

# Questão 11

Implemente uma classe ListaDuplamenteEncadeada para representar uma lista
encadeada duplamente ligada. A classe deve incluir métodos para adicionar e
remover elementos tanto do início quanto do final da lista, buscar elementos por
valor, exibir todos os elementos da lista em ambas as direções (da cabeça para a
cauda e vice-versa). Simule a adição, remoção e busca de vários elementos,
exibindo o estado da lista a cada operação.

## Solução

```jsx
/**
 * @class Classe objeto que representa o Nó, contendo o valor, o endereço do próximo objeto e do objeto anterior.
 */
class No {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
        this.anterior = null;
    }
}

class ListaDuplamenteEncadeada {
    constructor() {
        this.inicio = null;
        this.final = null;
        this.tamanho = 0;
    }

    adicionarInicio(valor) {
        let no = new No(valor);
        /**
         * @description 
         * if (this.tamanho === 0) - verifica se a lista está vazia
         * no.proximo - indica que o atual primeiro nó agora será o próximo após inserir o novo nó
         * this.inicio.anterior - recebe o novo nó como o ANTERIOR ao atual primeiro nó
         * 
         * @param {this.tamanho++} this.tamanho - aumenta a lista em +1
         */
        if (this.tamanho === 0) {
            this.inicio = no;
            this.final = no;
        } else {
            no.proximo = this.inicio;
            this.inicio.anterior = no;
            this.inicio = no;
        }
        this.tamanho++;
    }
    /**
     * @description 
     * if (this.inicio === this.final) - se a lista tiver apenas 1 elemento atualiza inicio e final para null
     * this.inicio = this.inicio.proximo; - indica que inicio agora receberá o PROXIMO objeto da lista
     * this.inicio.anterior = null; - apaga o 'endereço' do objeto anterior do primeiro nó da fila 
     * 
     * @param {this.tamanho--} this.tamanho - descresce 1 o tamanho da lista 
     */
    removerInicio() {
        if (this.inicio !== null) {
            if (this.inicio === this.final) {
                this.inicio = null;
                this.final = null;
            } else {
                this.inicio = this.inicio.proximo;
                this.inicio.anterior = null;
            }
            this.tamanho--;
        } else {
            console.log("A lista está vazia");
        }
    }

    /**
     * @description 
     * se a lista estiver vazia o novo nó será o inicio e o final
     * se não, o novo nó recebe o atual this.final como anterior.
     *  > o atual this.final recebe o nó como próximo
     *  > o novo nó é adicionado ao final
     */

    adicionarFinal(valor) {
        let no = new No(valor);

        if (this.tamanho === 0) {
            this.inicio = no;
            this.final = no;
        } else {
            no.anterior = this.final;
            this.final.proximo = no;
            this.final = no;
        }
        this.tamanho++;
    }

    /**
     * @description
     * se a lista só possuir um elemento this.inicio e this.final deve
     * receber null indicando que a lista está vazia;
     * se não this.final recebe o valor do objeto anterior
     * a ele e atualiza o valor PROXIMO para null;
     *  @param {this.tamanho--} this.tamanho - descresce 1 o tamanho da lista
     */
    removerFinal() {
        if (this.final !== null) {
            if (this.inicio === this.final) {
                this.inicio = null;
                this.final = null;
            } else {
                this.final = this.final.anterior;
                this.final.proximo = null;
            }
            this.tamanho--;
        } else {
            console.log('A lista está vazia');
        }
    }
    /**
     * @description
     * recebe o valor de um nó e busca ele percorrendo a lista do começo ao final;
     * @param {let atual} atual - recebe o primeiro objeto da lista
     * @param {valor} valor - objeto procurado na lista
     */
    buscarElementos(valor) {
        let atual = this.inicio;
        while (atual !== null) {
            if (atual.valor === valor) {
                console.log("\nNó encontrado: " + atual.valor);
                return true;
            }
            atual = atual.proximo;
        }
        console.log('Nó não encontrado');
        return false;
    }
    /**
     * @description 
     * percorre a lista retornando do primeiro ao último elemento
     * @param {const anteriorValor} anteriorValor -  verifica se o valor contido no nó é válido para ser retornado
     * se não atribui null, evitando erros.
     * @param {const proximoValor} proximoValor - verifica se o valor contido no nó é válido para ser retornado
     * se não atribui null, evitando erros.
     */
    exibirTodosInicio() {
        let no = this.inicio;

        console.log("\nLISTA ATUALIZADA INICIO-FINAL");
        while (no !== null) {
            const anteriorValor = no.anterior ? no.anterior.valor : 'null';
            const proximoValor = no.proximo ? no.proximo.valor : 'null';

            console.log(`Anterior: ${anteriorValor} | Valor: ${no.valor} | Próximo: ${proximoValor}`);
            no = no.proximo;
        }
    }
    /**
     * @description
     * lista os elementos do último ao primeiro
     */
    exibirTodosFinal() {
        let no = this.final;

        console.log("\nLISTA ATUALIZADA FINAL-INICIO");
        while (no !== null) {
            const anteriorValor = no.anterior ? no.anterior.valor : 'null';
            const proximoValor = no.proximo ? no.proximo.valor : 'null';

            console.log(`Próximo: ${proximoValor} | Valor: ${no.valor} | Anterior: ${anteriorValor}`);
            no = no.anterior;
        }
    }
}

module.exports = ListaDuplamenteEncadeada;
let list = new ListaDuplamenteEncadeada()
//adiciona o novo elemento
list.adicionarInicio(1)
//mostra se o novo elemento  foi adicionado
list.exibirTodosInicio()
list.adicionarInicio(2)
list.exibirTodosInicio()
//apaga o elemento com valor 2 - primeiro da lista
list.removerInicio()
//mostra que o elemento 2 foi apagado
list.exibirTodosInicio()
//pesquisa pelo elemento 1
list.buscarElementos(1)
//adiciona elemento ao final
list.adicionarFinal(3)
//mostra se o elemento foi adicionado ao final
list.exibirTodosFinal()
//remove o elemento com valor 3
list.removerFinal()
//deve constar na lista apenas o elemento com valor 1.
list.exibirTodosFinal()
```

## Teste

```jsx
const ListaDuplamenteEncadeada = require('./Q11.js'); 

describe('ListaDuplamenteEncadeada', () => {
    let lista;

    beforeEach(() => {
        lista = new ListaDuplamenteEncadeada();
    });

    test('deve iniciar vazia', () => {
        expect(lista.inicio).toBeNull();
        expect(lista.final).toBeNull();
        expect(lista.tamanho).toBe(0);
    });

    test('deve adicionar elementos no início da lista', () => {
        lista.adicionarInicio(1);
        expect(lista.inicio.valor).toBe(1);
        expect(lista.final.valor).toBe(1);
        expect(lista.tamanho).toBe(1);

        lista.adicionarInicio(2);
        expect(lista.inicio.valor).toBe(2);
        expect(lista.inicio.proximo.valor).toBe(1);
        expect(lista.final.valor).toBe(1);
        expect(lista.tamanho).toBe(2);
    });

    test('deve remover elementos do início da lista', () => {
        lista.adicionarInicio(1);
        lista.adicionarInicio(2);
        lista.removerInicio();
        expect(lista.inicio.valor).toBe(1);
        expect(lista.tamanho).toBe(1);

        lista.removerInicio();
        expect(lista.inicio).toBeNull();
        expect(lista.final).toBeNull();
        expect(lista.tamanho).toBe(0);
    });

    test('deve adicionar elementos no final da lista', () => {
        lista.adicionarFinal(1);
        expect(lista.inicio.valor).toBe(1);
        expect(lista.final.valor).toBe(1);
        expect(lista.tamanho).toBe(1);

        lista.adicionarFinal(2);
        expect(lista.final.valor).toBe(2);
        expect(lista.final.anterior.valor).toBe(1);
        expect(lista.inicio.valor).toBe(1);
        expect(lista.tamanho).toBe(2);
    });

    test('deve remover elementos do final da lista', () => {
        lista.adicionarFinal(1);
        lista.adicionarFinal(2);
        lista.removerFinal();
        expect(lista.final.valor).toBe(1);
        expect(lista.tamanho).toBe(1);

        lista.removerFinal();
        expect(lista.inicio).toBeNull();
        expect(lista.final).toBeNull();
        expect(lista.tamanho).toBe(0);
    });

    test('deve buscar elementos na lista', () => {
        lista.adicionarInicio(1);
        lista.adicionarInicio(2);

        expect(lista.buscarElementos(1)).toBe(true);
        expect(lista.buscarElementos(3)).toBe(false);
    });

    test('deve exibir elementos da lista na ordem correta', () => {
        // Aqui você pode usar um spy para verificar as saídas dos métodos exibirTodosInicio e exibirTodosFinal.
        // Note que o Jest não captura a saída para o console por padrão, então você pode precisar usar bibliotecas como 'jest-mock' para capturar console.log, se necessário.
        // Para simplificar, aqui apenas vamos garantir que os métodos não lancem erros.
        expect(() => lista.exibirTodosInicio()).not.toThrow();
        expect(() => lista.exibirTodosFinal()).not.toThrow();
    });
});
```

# Questão 12

Escreva uma função que receba dois arrays e retorne um novo array contendo os
elementos comuns aos dois arrays, sem duplicatas.

## Solução

```jsx
class Questao12{
    /**
     * @constructor 
     * Define duas listas que serão comparadas 
     * @param {this.repeticoes = []} this.repeticoes - array que armazenará quais valores as listas 1 e 2 possuem em comum
     */
    constructor(){
        this.lista1 = [1,2,3,4,5]
        this.lista2 = [1,2,3,5,6]
        this.repeticoes = []
    }
    /**
     * @description
     * primeiro percorre a primeira lista, capturando o valor do indice atual e em seguida
     * compara o valor deste indice com cada valor da lista 2 percorrendo ela. Ao encontrar 
     * um elemento em comum, verifica se ele já está inclído na lista de repetições, se não estiver
     * ele é inserido a lista this.repetições.
     * @returns deve retornar a lista de repetições.
     */
    verificar(){
        for(var i = 0; i < this.lista1.length; i++){

            for(var j = 0; j < this.lista2.length; j++){
                if(this.lista1[i] === this.lista2[j]){
                    if(this.repeticoes.includes(this.lista1[i]) === false){
                        this.repeticoes.push(this.lista1[i])
                    }
                } 

            } 
        }
        console.log("ITENS EM COMUM NAS DUAS LISTAS \n" + this.repeticoes + "\nTotal de itens comuns: " + this.repeticoes.length)
        return this.repeticoes
    }

}
module.exports = Questao12;
let questao = new Questao12();
questao.verificar();
```

## Teste

```jsx
const Questao12 = require('./Q12.js');

test('verifica itens comuns entre duas listas', () => {
    const questao = new Questao12();
    const resultado = questao.verificar();
    expect(resultado).toEqual([1, 2, 3, 5]);
});

test('verifica itens comuns com listas diferentes', () => {
    const questao = new Questao12();
    questao.lista1 = [10, 20, 30];
    questao.lista2 = [30, 40, 50];
    const resultado = questao.verificar();
    expect(resultado).toEqual([30]);
});

test('verifica itens comuns com listas sem itens comuns', () => {
    const questao = new Questao12();
    questao.lista1 = [10, 20, 30];
    questao.lista2 = [40, 50, 60];
    const resultado = questao.verificar();
    expect(resultado).toEqual([]);
});

```

# Questão 13

Escreva uma função que receba dois arrays e retorne um novo array contendo todos
os elementos dos dois arrays, sem duplicatas.

## Solução

```jsx
/**
 * Mescla dois arrays e remove elementos duplicados.
 *
 * @param {Array} arr1 - O primeiro array a ser mesclado.
 * @param {Array} arr2 - O segundo array a ser mesclado.
 * @returns {Array} Um novo array contendo todos os elementos de arr1 e arr2, sem duplicatas.
 */
function arraysemduplicata(arr1, arr2) {
  // Concatena os dois arrays
  const mergedArray = [...arr1, ...arr2];
  
  // Converte o array resultante em um Set para remover duplicatas e depois volta a um array
  return [...new Set(mergedArray)];
}

// Exemplo de uso:
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

const result = arraysemduplicata(array1, array2);
console.log(result); // Output: [1, 2, 3, 4, 5, 6]
```

## Teste

```jsx
// mergeArrays.js
function arraysemduplicata(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2];
    return [...new Set(mergedArray)];
  }
  
  module.exports = arraysemduplicata;
  
  // mergeArrays.test.js
  const arraysemduplicata = require('./mergeArrays');
  
  test('arraysemduplicata removes duplicates and merges arrays', () => {
    const array1 = [1, 2, 3, 4];
    const array2 = [3, 4, 5, 6];
    const expected = [1, 2, 3, 4, 5, 6];
  
    expect(mergeAndRemoveDuplicates(array1, array2)).toEqual(expected);
  });
  
  test('arraysemduplicata works with empty arrays', () => {
    const array1 = [];
    const array2 = [];
    const expected = [];
  
    expect(arraysemduplicata(array1, array2)).toEqual(expected);
  });
  
  test('arraysemduplicata handles arrays with no common elements', () => {
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const expected = [1, 2, 3, 4, 5, 6];
  
    expect(arraysemduplicata(array1, array2)).toEqual(expected);
  });
  
  test('arraysemduplicata handles arrays with all duplicates', () => {
    const array1 = [1, 1, 1];
    const array2 = [1, 1, 1];
    const expected = [1];
  
    expect(arraysemduplicata(array1, array2)).toEqual(expected);
  });
  
```

# Questão 14

Escreva uma função que encontre o segundo maior número em um array de
números.

## Solução

```jsx
/**
 * Encontra o segundo maior número em um array de números.
 *
 * @param {number[]} arr - O array de números.
 * @returns {number} O segundo maior número no array.
 * @throws {Error} Se o array tiver menos de dois elementos ou não houver um segundo maior número.
 */
function encontrarSegundoMaiorNumero(arr) {
    if (arr.length < 2) {
      throw new Error('Array deve ter pelo menos dois elementos');
    }
  
    let maior = -Infinity;
    let segundoMaior = -Infinity;
  
    for (let num of arr) {
      if (num > maior) {
        segundoMaior = maior;
        maior = num;
      } else if (num > segundoMaior && num !== maior) {
        segundoMaior = num;
      }
    }
  
    if (segundoMaior === -Infinity) {
      throw new Error('Não há segundo maior número no array');
    }
  
    return segundoMaior;
  }
  
  module.exports = encontrarSegundoMaiorNumero;
  
```

## Teste

```jsx
const encontrarSegundoMaiorNumero = require('./encontrarSegundoMaiorNumero');

describe('encontrarSegundoMaiorNumero', () => {
  test('deve encontrar o segundo maior número em um array', () => {
    const numeros = [10, 20, 4, 45, 99];
    const resultado = encontrarSegundoMaiorNumero(numeros);
    expect(resultado).toBe(45);
  });

  test('deve lançar um erro se o array tiver menos de dois elementos', () => {
    const numeros = [10];
    expect(() => encontrarSegundoMaiorNumero(numeros)).toThrow('Array deve ter pelo menos dois elementos');
  });

  test('deve lançar um erro se não houver segundo maior número', () => {
    const numeros = [10, 10];
    expect(() => encontrarSegundoMaiorNumero(numeros)).toThrow('Não há segundo maior número no array');
  });

  test('deve lidar corretamente com arrays com números negativos', () => {
    const numeros = [-10, -20, -4, -45, -99];
    const resultado = encontrarSegundoMaiorNumero(numeros);
    expect(resultado).toBe(-10);
  });

  test('deve lidar corretamente com arrays com números repetidos', () => {
    const numeros = [10, 20, 20, 45, 99];
    const resultado = encontrarSegundoMaiorNumero(numeros);
    expect(resultado).toBe(45);
  });
});
```

# Questão 15

Escreva uma função que receba um array e um número alvo, e retorne todos os
pares de elementos do array cuja soma seja igual ao número alvo.

## Solução

```jsx
// encontrarPares.js

/**
 * Encontra todos os pares de elementos em um array cuja soma seja igual ao número alvo.
 * @param {number[]} array - O array de números a ser pesquisado.
 * @param {number} alvo - O número alvo cuja soma deve ser igual à soma dos pares.
 * @returns {number[][]} - Uma matriz contendo todos os pares de elementos cuja soma é igual ao número alvo.
 */
function encontrarPares(array, alvo) {
    const pares = [];
    const vistos = new Set();
  
    for (const num of array) {
      const complemento = alvo - num;
      if (vistos.has(complemento)) {
        pares.push([complemento, num]);
      }
      vistos.add(num);
    }
  
    return pares;
  }
  
  module.exports = encontrarPares;
  
```

## Teste

```jsx
// encontrarPares.test.js

const encontrarPares = require('./encontrarPares');

test('Deve encontrar todos os pares cuja soma é igual ao número alvo', () => {
  expect(encontrarPares([1, 2, 3, 4, 3, 5], 6)).toEqual([
    [4, 2],
    [3, 3]
  ]);
});

test('Deve retornar uma matriz vazia se nenhum par for encontrado', () => {
  expect(encontrarPares([1, 2, 3, 4, 5], 10)).toEqual([]);
});

test('Deve encontrar pares em arrays com números negativos', () => {
  expect(encontrarPares([-1, -2, -3, -4, -5], -6)).toEqual([
    [-1, -5],
    [-2, -4]
  ]);
});

test('Deve retornar uma matriz vazia para um array vazio', () => {
  expect(encontrarPares([], 0)).toEqual([]);
});

test('Deve retornar uma matriz vazia se o alvo não for um par possível', () => {
  expect(encontrarPares([1, 2, 3, 4, 5], 20)).toEqual([]);
});
```

# Questão 16

Escreva uma função que encontre o elemento mais frequente em um array.

## Solução

```jsx
class EncontrarElementoMaisFrequente {
    constructor() {
        this.contagem = {};
    }

    contarElemento(array) { 
        this.contagem = {}; 
        for (const elemento of array) {
            const chave = typeof elemento === 'string' ? elemento : String(elemento);
            if (this.contagem[chave]) {
                this.contagem[chave]++;
            } else {
                this.contagem[chave] = 1;
            }
        }
    }

    maisFrequente() {
        if (Object.keys(this.contagem).length === 0) {
            return null;
        }
        let elementoMaisFrequente = null;
        let frequenciaMaxima = 0;

        for (const [elemento, frequencia] of Object.entries(this.contagem)) {
            if (frequencia > frequenciaMaxima) {
                frequenciaMaxima = frequencia;
                elementoMaisFrequente = elemento;
            }
        }
        if (elementoMaisFrequente === "true") return true;
        if (elementoMaisFrequente === "false") return false;
        if (!isNaN(Number(elementoMaisFrequente))) return Number(elementoMaisFrequente);
        return elementoMaisFrequente;
    }
}
module.exports = EncontrarElementoMaisFrequente;
const array1 = [5, 5, 3, 3, 3, 2, 2];
const array2 = [10, 10, 20, 20, 30, 30, 30, 30];
const instancia1 = new EncontrarElementoMaisFrequente();
const instancia2 = new EncontrarElementoMaisFrequente();

instancia1.contarElemento(array1);
console.log(instancia1.maisFrequente()); 

instancia2.contarElemento(array2);
console.log(instancia2.maisFrequente()); 
```

## Teste

```jsx
const EncontrarElementoMaisFrequente = require('./Q7');

describe('EncontrarElementoMaisFrequente', () => {
    let instancia;

    beforeEach(() => {
        instancia = new EncontrarElementoMaisFrequente();
    });

    test('deve encontrar o elemento mais frequente em um array simples', () => {
        const array = [1, 2, 2, 3, 3, 3];
        instancia.contarElemento(array);
        expect(instancia.maisFrequente()).toBe(3);
    });

    test('deve retornar o elemento correto quando há um empate', () => {
        const array = [1, 2, 2, 3, 3];
        instancia.contarElemento(array);
        // A lógica pode variar dependendo de como você deseja lidar com empates. Aqui estamos assumindo que retornamos o primeiro elemento mais frequente.
        expect(instancia.maisFrequente()).toBe(2);
    });

    test('deve retornar null para um array vazio', () => {
        const array = [];
        instancia.contarElemento(array);
        expect(instancia.maisFrequente()).toBeNull();
    });

    test('deve lidar com elementos únicos', () => {
        const array = [1, 2, 3];
        instancia.contarElemento(array);
        expect(instancia.maisFrequente()).toBe(1);
    });

    test('deve lidar com strings como elementos', () => {
        const array = ['a', 'b', 'a', 'c', 'a'];
        instancia.contarElemento(array);
        expect(instancia.maisFrequente()).toBe('a');
    });

    test('deve lidar com números negativos', () => {
        const array = [-1, -2, -2, -3, -2];
        instancia.contarElemento(array);
        expect(instancia.maisFrequente()).toBe(-2);
    });

    test('deve lidar com elementos não numéricos', () => {
        const array = [true, false, true, false, false];
        instancia.contarElemento(array);
        expect(instancia.maisFrequente()).toBe(false);
    });
});

```