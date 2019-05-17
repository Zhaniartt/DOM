function growingWord() {
  let theButton = document.querySelector('button[type="button"]') 
  let count = 0
  theButton.addEventListener('click',function(){
     let theGrowingThing = document.querySelector('div#exercise p')
     console.log(count)
        if(count % 3 === 0){
           theGrowingThing.style.color = 'blue'
        }
        else if(count % 3 === 1){
           theGrowingThing.style.color = 'green'
        }
        else if(count % 3 === 2){
           theGrowingThing.style.color = 'red'
        }
        count++
        theGrowingThing.style.fontSize = count * 2 + 'px';
  
  })
}