// var age=18;
// if(age<18){
//     console.log("minor");
// }else if(age>=18){
//     console.log("major");
// }

// var n = ['Hello','rak'];
// console.log(n[1]);
// n.push('hi');
// n.unshift('hh');
// n.pop();

// console.log(n);

// var bill=124;
// var tipa=[];
// function tip(bill)
// {
//     if(bill<50)
//     {
//         tipa.push(bill*0.2);
//     }
//     else if(bill>=50 && bill<=200)
//     {
        
//         tipa.push(0.15*bill);
//     }
//     else{
//         tipa.push(0.10*bill);
//     }
// }
// console.log(tipa);
/*
var mydetails={
    fname: 'rakshita',
    lname: 'RS',
    dob: 1998,
    family: ['A','B'],
    calage: function(year){
        return 2019-year;
    }
};

console.log(mydetails.fname);
var z='dob';
console.log(mydetails[z]);


//new object
var shiva=new Object();
shiva.fname='ram';
console.log(shiva);

console.log('Rakshita is '+mydetails.calage(1998)+'years old');

mydetails.dob=1998;
console.log(mydetails);
*/

document.getElementById('btn').onmouseover = changeOnMouseOver;
document.getElementById('btn').onmouseout = changeOnMouseOut;

 function changeOnMouseOver() {
    var but=document.getElementById('btn');
    but.style.background = "red";

};
function changeOnMouseOut(){
    var but=document.getElementById('btn');
    but.style.background = "blue";

};
/*

document.getElementById('btn').onclick = function(){
    alert("You clicked !!");
}


//addevent listener example
var but=document.getElementById('btn');
but.addEventListener('mouseover',changeOnMouseOver);

function changeOnMouseOver(){
    this.style.background="red";
}

document.querySelector('#hId').text
*/