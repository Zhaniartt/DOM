function solve() {
   let counter = 0;
   let selectionCounter = 3;
   let buttons = Array.from(document.querySelectorAll(".answer-text"))
   buttons.forEach(b=> b.addEventListener('click',getAnswer))
   let allSections = Array.from(document.querySelectorAll('section'))
   let counterOfSect = 0;
    function getAnswer(){
    
        for(let i = 0; i < selectionCounter;i++){
          if(i === 0){
            if(this.textContent === 'onclick' ) {
              counter++
            }
            allSections[i].className = 'hidden'
          }
          if(i === 1){
            allSections[i].className = 'block'
            if(this.textContent === 'JSON.stringify()'){
              counter++
            }
          }
          if(i === 2){
            allSections[i-1].className = 'hidden'
            allSections[i].className = 'block'
            if(this.textContent === 'A programming API for HTML and XML documents'){
              counter++
            }
          }
        }
       
    }
    
   
   
}
