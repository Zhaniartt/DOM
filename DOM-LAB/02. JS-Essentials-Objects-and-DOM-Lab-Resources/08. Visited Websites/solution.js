function solve() {
  let aCollection = document.getElementsByTagName('a');

  Array.from(aCollection).forEach((a) => {
    a.addEventListener('click', increaseCount);
  });

  function increaseCount() {
    let span = this.parentNode.children[1];
    let [first, count, last] = span.textContent.split(/ /);
    span.textContent = first + ' ' + ++count + ' ' + last;
  }
}