'use strict'

document.querySelector('.bt').addEventListener('click',function(){

    let a=[0,1,2,3,4,5,6,7,8,9];

    let c="";

    for (let i = 0; i < 4; i++) {
           c+=a[Math.floor(Math.random()*10)];     
    }

   document.querySelector('.b1').textContent=c;
});


setInterval(function(){
    var a=new Date();
    document.querySelector('.txt').innerHTML=a.toLocaleTimeString();
},1000);


document.querySelector('.bt2').addEventListener('click',function(){

    fetch('https://animechan.vercel.app/api/random').then(function (mess){
        return mess.json();
    }).then((qu)=>{
        document.querySelector('.wri').textContent=qu.quote;
       
    }).catch((err)=>{
        document.querySelector('.wri').textContent='error';
    
    })

});
