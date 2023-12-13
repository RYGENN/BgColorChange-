const mainButton=document.querySelector("button");
console.log(mainButton)
const body=document.body
const tag=document.querySelector('.current-color')

function randomColorGenerator () {
    const red=Math.floor(Math.random()*255);
    const green=Math.floor(Math.random()*255);
    const blue=Math.floor(Math.random()*255);
    const randomColor=`rgb(${red},${green},${blue})`
    return randomColor
    
}
mainButton.addEventListener('click',() =>{
    randomColor=randomColorGenerator();
    body.style.backgroundColor=randomColor;
    tag.textContent=randomColor;  

})  
