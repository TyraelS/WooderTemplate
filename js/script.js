document.addEventListener("DOMContentLoaded", ()=>{
  let langBar = document.querySelector('.langToggle');
  let list = document.querySelector('#langlist');
  let clicked = false;
  console.log(langBar);
  langBar.onclick = ()=> {
    clicked?clicked=false:clicked=true;
    if(clicked){
      langlist.classList.add('visible');
      document.querySelector('.fa-caret-down').classList.replace('fa-caret-down', 'fa-caret-up');
    } else{
      langlist.classList.remove('visible');
      document.querySelector('.fa-caret-up').classList.replace('fa-caret-up', 'fa-caret-down');
    }
    
  }
});
