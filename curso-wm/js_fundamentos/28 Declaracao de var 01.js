// a variavel var ficara visivel para todos que estiverem fora bloco
/* uma var possui dois escopos possiveis: global(visivel na aplicacao inteira) ou 
                                        : escopo de funcao(visivel apenas dentro da function)*/

{
    {
        {
            {
                var sera = "será???"
            }
        }
    }
}

console.log(sera)
function teste() {
    var local = 123  // essa var nao será visivel fora da funcao, apenas dentro
}

teste()