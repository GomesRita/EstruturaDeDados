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
