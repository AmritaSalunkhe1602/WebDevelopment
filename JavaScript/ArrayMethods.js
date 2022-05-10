/*For in
const Arr=["abc","lmn","pqr"];
for(let x in Arr)
{
    console.log(x);
}*/

/*For of
const Arr=[12,"abc",12,true];
for (let y of Arr)
{
    console.log(y);
}*/

/*For Each
const Arr=['add',32,true,"kkod"];
const x=Arr.forEach(element,inex,Arr);
{
     var y="Element is `${element}` + &Index is `{index}`";
     console.log(y);
}*/

/*indexOf()
const Arr=[100,20,30,40]
console.log(Arr.indexOf(40));*/

/*filter()
const Arr=[10,20,30,40];
const x=Arr.filter((element=>element>20));
console.log(x);
*/

                                               /*const Arr=[10,20,30,40];
                                                    for(let y=0;y<=Arr.length-1;y++){
                                                               let a=Arr[y]*2;
                                                                  console.log(a);
    
                                                     }
                                                  const x=Arr.filter((element=>element>20));
                                                  console.log(x);*/


/*sort
const arr1=['zz','gg','ss','aa'];
console.log(arr1.sort());

const arr2=[0,8,10,4,20,70,9];
console.log(arr2.sort());*/

                       /*const arr=[5,2,10,30,4];
                             function sort(a,b){
                              return a-b;
                               }
                                   sort();
                             console.log(arr.sort());*/

/*const year=[2001,2002,2003,2004,2005,2006];
const x=year.splice(5,0,2007);
console.log(year);*/

/*const year=[2001,2002,2003,2004,2005,2006];
var x=year.splice(year.length,0,2007);
console.log(year);*/

/*const year=[2001,2002,2003,2004,2005,2006];
var x=year.splice(4,1,2007);
console.log(year);*/
/*const year=[2001,2002,2003,2004,2005,2006];
var x=year.splice(year.length-1,1,2007);
console.log(year);*/

/*const year=[2001,2002,2003,2004,2005,2006];
let x=year.indexOf(2004);
let y=year.splice(x,1,'aa');
console.log(x);
console.log(year);*/

/*const arr=[10,20,30,40];
let x=arr.map(
    function abc(element,index,arr){
        return element>20;
    }
)
console.log(x);*/

const arr=[10,20,30,40];
const x=arr.map((element)=>element*2).filter((element)=>element>20).reduce((accumulator,element,index,array)=>accumulator+=element);

console.log(x);