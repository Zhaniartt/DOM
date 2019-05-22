function solve() {
    let input = document.querySelector('article input');
    let button = document.querySelector('article button').addEventListener('click',addName);

    function addName(){
       let section = Array.from(document.querySelectorAll('ol li'));
      let assciiValue = 65;
      for(let sect of section){
          sect.setAttribute('id',assciiValue)
          assciiValue++
      }
      let currentName = input.value.toLowerCase();
      let firstLetter = String(currentName[0].toUpperCase().charCodeAt(0))
      currentName = currentName.charAt(0).toUpperCase() + currentName.slice(1)
      if(document.getElementById(firstLetter).textContent === ''){
         document.getElementById(firstLetter).textContent = [currentName]
        }else{
            let existing = [document.getElementById(firstLetter).textContent]
           existing = existing[0].split(',')
            existing.push(currentName) 
           existing= existing.map(x=> x.trim())          
            document.getElementById(firstLetter).innerHTML = existing.join(', ')

        }
        input.value = ''
    }
    
}
