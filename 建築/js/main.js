'use strict';

{
  const open=document.getElementById("open");
  const close=document.getElementById("close");
  const spmenu =document.querySelector(".spmenu");
  const cover= document.querySelector(".cover");

  open.addEventListener("click",()=>{
   spmenu.classList.add("appear");
   cover.classList.add("appear");
   close.classList.add("appear");
   open.classList.add("appear");
  });
  close.addEventListener("click",()=>{
    spmenu.classList.remove("appear");
    cover.classList.remove("appear");
    close.classList.remove("appear");
    open.classList.remove("appear");
  });
}