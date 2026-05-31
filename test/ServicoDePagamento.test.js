const assert = require('assert');
const ServicoDePagamento = require('../src/ServicoDePagamento');

describe('Testes da Classe ServicoDePagamento', () => {
    let servico;

    beforeEach(() => {
        servico = new ServicoDePagamento();
    });

    it('Deve cadastrar um pagamento com categoria "cara" quando o valor for maior que 100', () => {
        servico.pagar('0987-7656-3475', 'Samar', 156.87);
        const ultimo = servico.consultarUltimoPagamento();
        assert.strictEqual(ultimo.categoria, 'cara');
    });

    it('Deve cadastrar um pagamento com categoria "padrão" quando o valor for menor ou igual que 100', () => {
        servico.pagar('1111-2222-3333', 'Neoenergia', 85.50);
        const ultimo = servico.consultarUltimoPagamento();
        assert.strictEqual(ultimo.categoria, 'padrão');
    });

    it('Deve retornar exatamente o ÚLTIMO pagamento realizado', () => {
        servico.pagar('1111', 'Empresa A', 50.00);
        servico.pagar('2222', 'Empresa B', 200.00);
        const ultimo = servico.consultarUltimoPagamento();
        assert.strictEqual(ultimo.empresa, 'Empresa B');
    });

    it('Deve retornar null se nenhum pagamento foi realizado ainda', () => {
        const ultimo = servico.consultarUltimoPagamento();
        assert.strictEqual(ultimo, null);
    });
});