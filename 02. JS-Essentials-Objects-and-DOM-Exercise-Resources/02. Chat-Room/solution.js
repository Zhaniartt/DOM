function solve() {
   let enterBttn = document.querySelector('#send').addEventListener('click',send)
    let chatChronology = document.querySelector('#chat_messages')

   function send(){
       let currentMsg = document.querySelector('#chat_input')
       let message = document.createElement('div')
       message.textContent = currentMsg.value
       message.className += "message my-message"
       chatChronology.appendChild(message)
        currentMsg.value = ''
   }
}


