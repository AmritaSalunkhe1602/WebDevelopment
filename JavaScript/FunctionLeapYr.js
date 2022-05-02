 
function leap(a){
    return(a%4==0 && a%100!=0 || a%400==0  )
    
    
}
console.log(leap(2000));
console.log(leap(2005));
