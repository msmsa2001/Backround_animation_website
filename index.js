// console.log("Done")
// let a=document.all;
//a=document.forms[0]

// Array.from(a).forEach(function(element) {
    // console.log(element)
// });  


// arr=[1,2,3,4,5,6]
// console.log(arr);

// arr.forEach(function(item,index) {
//     console.log(index,index,item)
// });

// a=document.href
// a=document.images;
// a=document.scripts
// console.log(a)

//  a = document.hrefs;
// console.log(a);

// var a= document.querySelector("nav");

//  a.style.background="red";
// // var b=a.innerText;
// // console.log(a.innerHTML)

// a=a.parentNode;
// console.log(a)

function Change1(){
    var name=document.getElementById("nav1");
    name.style.background="yellow"
    
    var a=document.getElementsByClassName('row1');
    Array.from(a).forEach(function(element) {
        element.style.background="yellow";
    });

    var a=document.getElementsByClassName('row2');
    Array.from(a).forEach(function(element) {
        element.style.background="yellow";
    });

    var b=document.getElementsByTagName('form');
    Array.from(b).forEach(function(element) {
        element.style.background="red";
    });
    
  }

  function Change2(){
    var name=document.getElementById("nav1");
    name.style.background="red"
    
    var a=document.getElementsByClassName('row1');
    Array.from(a).forEach(function(element) {
        element.style.background="red";
    });

    var a=document.getElementsByClassName('row2');
    Array.from(a).forEach(function(element) {
        element.style.background="red";
    });


  }

  function Change3(){
    var name=document.getElementById("nav1");
    name.style.background="orange"

    var a=document.getElementsByClassName('row1');
    Array.from(a).forEach(function(element) {
        element.style.background="orange";
    });

    var a=document.getElementsByClassName('row2');
    Array.from(a).forEach(function(element) {
        element.style.background="orange";
    });

  }

  function Change4(){
    var name=document.getElementById("nav1");
    name.style.background="green"

    var a=document.getElementsByClassName('row1');
    Array.from(a).forEach(function(element) {
        element.style.background="green";
    });

    var a=document.getElementsByClassName('row2');
    Array.from(a).forEach(function(element) {
        element.style.background="orange";
    });

  }

  var aa=document.getElementById('nav1')
  aa.addEventListener('mouseenter',function(){
      console.log("You entered in Nav Bar")
  })

  document.getElementById('service').addEventListener('mousemove',function(e){
    document.body.style.background=`rgb(${e.offsetX},${e.offsetY},${e.offsetX + e.offsetY})`
})