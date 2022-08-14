// const incrementBtn=document.querySelector(".increment");
// const decrementBtn=document.querySelector(".decrement");
// const resetBtn=document.querySelector(".reset");
// const counterBtn=document.querySelector(".counter span");

// let count=0;
// incrementBtn.addEventListener("click",(e)=>{
//  count++;
//  counterBtn.textContent=count;
     
// });

// decrementBtn.addEventListener("click",(e)=>{
// count--;
// counterBtn.textContent=count;
// });

// resetBtn.addEventListener("click",(e)=>{
//     count=0;
//     counterBtn.textContent=count;
// })

const buttons=document.querySelectorAll(".btn");
const counterBtn=document.querySelector(".counter span");
let count=0;

console.log(buttons);

buttons.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        const classes=btn.classList;
    //    console.log(classes); 
if(classes.contains("increment")){
    count++;
}else if(classes.contains("decrement")){
    count--;
}else{
    count=0;
}
if(count>0) counterBtn.style.color="red";
else if(count<0) counterBtn.style.color="blue";
counterBtn.textContent=count;
    });

});