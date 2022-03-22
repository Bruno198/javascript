let codigo = [123,12345,544321] , pesso = [65,53,90] , altura = [1.73, 1.50, 1.90];
let maior = -999999 , menor = 900000 , maior_pesso = -9000000 , menor_pesso = 9000000;
let codigo_do_maior = 0, codigo_do_menor = 0 , codigo_do_maisgordo = 0 , codigo_do_maismagro = 0;
let tamanhovetoraltura = 0 , tamanhovetorpesso = 0 , somadevetore = 0 , media = 0 , mediafinal = 0;
tamanhovetoraltura = altura.length;
tamanhovetorpesso = pesso.length;
somadevetore = tamanhovetoraltura + tamanhovetorpesso;
for(let i = 0; i <= 2; i++)
{
    console.log(codigo[i] , pesso[i] , altura[i]);
    if(altura[i] > maior)
    {
        maior = altura[i];
        codigo_do_maior = codigo[i];
    }
   
    else if(altura[i] < menor)
    {
        menor = altura[i];
        codigo_do_menor = codigo[i];
    }

    if(pesso[i] > maior_pesso)
    {
       maior_pesso = pesso[i];
       codigo_do_maisgordo = codigo[i];
    }
       else if(pesso[i] < menor_pesso)
       {
           menor_pesso = pesso[i];
           codigo_do_maismagro = codigo[i];
       }
      // fazer a media  
      media = (media + altura[i] );
    media = media + pesso[i];// /vetoresomados);
    mediafinal = media / somadevetore;
}
console.log("O Mais Alto "+maior+" com o Codigo "+codigo_do_maior+" O mais Baixo "+menor+" com o codigo "+codigo_do_menor+""+"\n O Mais Gordo "+maior_pesso+" com o codigo "+codigo_do_maisgordo+" O Mais Magro "+menor_pesso+" com o codigo "+codigo_do_maismagro);
console.log(" Media de Clientes "+mediafinal.toFixed(4));