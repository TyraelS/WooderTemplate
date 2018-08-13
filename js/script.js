document.addEventListener("DOMContentLoaded", ()=>{
  let langBar = document.querySelector('.langToggle');
  let clicked = false;
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

  let sidebar = document.querySelector('.sidebar');
  let sidebarToggle = document.querySelector('.sidebarToggle');
  let arrowToggle = document.querySelector('.fa-arrow-left');
  sidebarToggle.onclick = () => {
    sidebar.classList.add('visible');
  }
  arrowToggle.onclick = () => {
    sidebar.classList.remove('visible');
  }

});
