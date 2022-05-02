function a(){
    console.log("Hello");
    b();
    console.log("Hii");
}
function b(){
    console.log("In Function b()");
    c();
}
function c(){
    console.log("In Function c()");
}
a();