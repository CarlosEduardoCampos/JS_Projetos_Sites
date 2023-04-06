// Mascara para o campo de CVV
IMask(document.querySelector('#cc-cvv'), {
    mask: '0000' 
});
// Mascara para o campo numero do cartão
IMask(document.querySelector('#cc-number'), {
    mask: '0000 0000 0000 0000'
});
// Mascara para o campo de data de validade més/ano
IMask(document.querySelector('#cc-validity'),{
    mask: 'MM{/}YY',
    blocks: {
        // limita o valor anterio a '/' ate 12
        MM:{
            mask: IMask.MaskedRange,
            from: 1, to: 12
        },
        // limita o valor posterior a '/' ate 10 ano apartir do ano atual
        YY:{
            mask: IMask.MaskedRange,
            from: String(new Date().getFullYear()).slice(2),// ano atual
            to: String(new Date().getFullYear() + 10).slice(2)// ano futuro
        }
    }
});