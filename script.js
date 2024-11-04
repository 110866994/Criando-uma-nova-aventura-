const  avanca  =  documento . querySelectorAll ( '.btn-proximo' ) ;

avanca . forEach ( botão  =>  {
    botão . addEventListener ( 'clique' ,  função ( ) {
        const atual = document.querySelector('.ativo');
        const  nextPass  =  'passo-'  +  this . getAttribute ( 'dados-próximo' ) ;

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    } )
} )
