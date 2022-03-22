let habitantespais_a = 80000 , habitantespais_b = 200000 , calc , calc2;
let contador = 0 ,quantosanos = 0 , quantosmesses = 0 , quantashoras = 0;
console.log("País A :\nPopulação de : "+habitantespais_a);
calc = habitantespais_a * 0.03;
//quantos anos ele leva calc * habitantespais_a quantos dias ele levou para consiguir essses habitantes;
console.log("País A : Cresimento dá População  de 3% : "+calc);
console.log("País B :\nPopulação de : "+habitantespais_b);
calc2 = habitantespais_b * 0.015;
console.log("País B : Cresimento dá População de 1.5%: referece a"+calc2);
habitantespais_a = habitantespais_a + calc;
habitantespais_b = habitantespais_b + calc2;
//contador = habitantespais_b;
// contador tem que receber o menor valor//
//contador = habitantespais_a;
if(habitantespais_a < habitantespais_b)
{
    contador = habitantespais_b;// armazenar recer sempre o maior valor para ir demunuindo até o menor e ver os messes anos e dias que dá
  //  if(utrapassar == 1)
    //contador = habitantespais_a * 2;
    while(contador >= habitantespais_a)//while(contador != 0)//contador != 0
    {
        contador--;
        //contador++;
        if(contador >= 365)
        {
            contador = contador - 365;
            quantosanos++;
        }
        if(contador >= 30)
        {
            contador = contador - 30;
            quantosmesses++;
        }
        if(contador >= 31)
        {
            contador = contador - 31;
            quantosmesses++;
        }
        if(contador >= 27)
        {
            contador = contador - 27;
            quantosmesses++;
        }
        if(contador >= 24)
        {
            contador = contador - 24;
            quantashoras++;
        }
    }
    
}
else //if(habitantespais_a > habitantespais_b)
{
    contador = habitantespais_a;
    while(contador>= habitantespais_b)//for(let i = habitantespais_a; i> habitantespais_b; i++)
    {
        contador--;
        //contador++;
        if(contador <= 365)
        {
            contador = contador - 365;
            quantosanos++;
        }
        if(contador >= 30)
        {
            contador = contador - 30;
            quantosmesses++;
        }
        if(contador >= 31)
        {
            contador = contador - 31;
            quantosmesses++;
        }
        if(contador >= 27)
        {
            contador = contador - 27;
            quantosmesses++;
        }
        if(contador >= 24)
        {
            contador = contador - 24;
            quantashoras++;
        }
    }
     
}
console.log("Tempo para população A alcansar b é  de : "+ quantosanos+" Anos "+"é "+quantosmesses+" Meses "+"é "+quantashoras+" Dias");
//if(contador == 30 ||contador == 27 || contador <= 31)
//console.log("Um Mes");
//if(contador <= 24 || contador == 24)
//console.log("Uma Hora ou Menos");
//console.log("Tempo para população A alcansar b é  de : "+contador);
