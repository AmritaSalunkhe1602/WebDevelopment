function leap(a){
    if(a%4==0){
        if(a%100==0){
            if(a%400==0){
                return true;
            }
            else{
            return false;
            }
        }
        else{
            return true;
        }
              
    }
    else{
        return false;
    }
}
const x=leap(2020);
if (x==true){
    console.log("Leap Year");
}
else{
    console.log("Not Leap Year");
}
