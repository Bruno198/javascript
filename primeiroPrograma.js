let a = 2 , b = 9 , c = 7 , reservadeb = b;

console.log(a+","+b+","+c);
let calc = 0 , x = 0 , calc2 = 0 , calc3 = 0 , div = 0;
if(a == 0)
console.log(" O a n pode ser zero");
if(b < 0)
x = b * 1;
else if(b > -1)
x = b * -1;
calc = Math.pow(reservadeb , 2);
 calc2 = a * 2;
//calc = calc - 4 * a * c / calc2;
avezesc = a * c;
console.log("x = " +x+"+-"+calc+"- 4 ."+avezesc+"/"+calc2);
if(avezesc > -1 && - 4)
calc3 = avezesc * - 4;
console.log("x = " +x+"+-"+calc +calc3+"/"+calc2);

calc = calc - 56;
console.log("x = " +x+"+-"+calc+"/"+calc2);
let y = 1 , valor  = 1 , valordey;
while(y != 0)//(y * y != 0)
{
   valordey =  y * valor;
    if(valordey == calc)
    {
        calc = y;
        y = 0;
    }
    
    if(valordey != calc)
    valor++;
     if(valor == 10)
     {
        y++;
        valor = 1;
     }
    
}

console.log("x = " +x+"+- "+calc+"/"+calc2);

    div = calc * -1;
    calc3 = (x + calc) / calc2;

    calc = (x + div) / calc2;
    
console.log(" X1 = "+calc3);
console.log(" X2 = "+calc);
console.log(" Raizes Reais "+ calc3 +" e "+calc);
