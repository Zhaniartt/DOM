function solve() {
   let buttons = Array.from(document.querySelectorAll(".add-product"))
   buttons.forEach(b=> b.addEventListener('click',addingProducts))
   let checkOutButton = document.querySelector(".checkout").addEventListener('click',checkout)
   let totalCost = 0;
   let totalProducts = new Set();
   function addingProducts(){
      let textArea = document.querySelector('textarea')

      let products = {
         Bread:0.80,
         Milk:1.09,
         Tomatoes:0.99
      }
      let output = ''
      if(buttons.indexOf(this) === 0){
         output = `Added Bread for ${products["Bread"].toFixed(2)} to the cart.\n`
         totalCost += products["Bread"]
         totalProducts.add('Bread')
      }
      else if(buttons.indexOf(this) === 1){
         output = `Added Milk for ${products["Milk"].toFixed(2)} to the cart.\n`
         totalCost += products["Milk"]
         totalProducts.add('Milk')

      }
      else if(buttons.indexOf(this) === 2){
         output = `Added Tomatoes for ${products["Tomatoes"].toFixed(2)} to the cart.\n`
         totalCost += products["Tomatoes"]
         totalProducts.add('Tomatoes')

      }  
      textArea.textContent += output
    }
    function checkout(){
      let textArea = document.querySelector('textarea')
      let out = Array.from(totalProducts.values()).join(', ')
      textArea.textContent += `You bought ${out} for ${totalCost.toFixed(2)}.`
      buttons.forEach(b=> b.removeEventListener('click',addingProducts))
      checkOutButton.removeEventListener('click',checkout)
    }
}