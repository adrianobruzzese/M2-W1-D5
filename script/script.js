window.addEventListener(`scroll`,()=>{
   let scroll= window.scrollY;
    if (scroll>456){                        //quando la navbar scrolla oltre il banner di 455px aggiungiamo o togliamo la classe .downScroll (bg-color: white)
      header.classList.add(`downScroll`);
   }else{
      header.classList.remove(`downScroll`);
   }
})


let lettersM = document.querySelectorAll("g");

setInterval(()=> mDisappear(), 20)               //20ms è troppo veloce forse? Modificare

function mDisappear(){
   let randomPosition = lettersM[Math.floor(Math.random() * lettersM.length)];

   if (randomPosition.style.opacity==0) {
      randomPosition.style.opacity=`1`;
   } else {
      randomPosition.style.opacity=`0`;
   }
}