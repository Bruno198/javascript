let horasaomes = 220 , porcentagem = [0.11, 0.08, 0.05] , desconto = [] , divisor = 0 , salario_bruto = 0;
let descontofinal = 0 , salario_liquido = 0;
divisor = (horasaomes / 6) + 30;
console.log("Horas Trabralhadas"+divisor);

salario_bruto = divisor * 12;
console.log("Salario Bruto"+salario_bruto);

for(let i = 0; i<2; i++)
{
 desconto[i] = salario_bruto * porcentagem[i];
 descontofinal = desconto[i] + desconto[i];
}
// deconto[0] + deconto[1] + deconto[2]
salario_liquido = descontofinal - salario_bruto;

salario_bruto = descontofinal - salario_liquido;

console.log("Salario Bruto/n - IR (11%):R$/n - INSS (8%):R$/n - Sindicato (5%):R$/n = Salario Liquido:R$/n"+salario_bruto ,porcentagem[0] ,porcentagem[1] ,porcentagem[2] , salario_liquido);