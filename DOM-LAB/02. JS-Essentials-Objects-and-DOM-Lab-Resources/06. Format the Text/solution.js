function solve() {
  let getTheText = document.getElementById('input').textContent;
  let fixedText = getTheText.split(/\./);
  for (let i = 0; i < fixedText.length; i += 3) {
    let firstP = fixedText[i];
    let secondP = fixedText[i + 1];
    let thirdP = fixedText[i + 2];
  
    let p = document.createElement('p');
  
    p.textContent += firstP + '.';
  
    if (secondP) {
    p.textContent += secondP + '.';
    }
  
    if (thirdP) {
    p.textContent += thirdP + '.';
    }
  
    document.querySelector('div[id="output"]').appendChild(p);
}
}