function leap(a){
    if(a%4==0){
        if(a%100==0){
            if(a%400==0){
               console.log("Leap Yr");
            }
           else{
            console.log("Not Leap Yr");
           }
        }
        
        else{
            console.log("Not Leap Yr");
           }
        
    }
    
    else{
        console.log("Not Leap Yr");
       }
    
}
leap(2000) ;
