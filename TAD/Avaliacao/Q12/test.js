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
