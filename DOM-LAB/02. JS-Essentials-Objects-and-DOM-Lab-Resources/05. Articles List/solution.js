function createArticle() {
	let title = document.querySelector('#createTitle')
	let content = document.querySelector('#createContent')
	let articles = document.querySelector('#articles')
if(title.value.length > 0 && content.value.length >0){
	let h3 = document.createElement('h3')
	h3.textContent = title.value;
	let p = document.createElement('p')
	p.textContent = content.value;
	let article = document.createElement('article')
	article.appendChild(h3)
	article.appendChild(p)
	articles.appendChild(article)
	title.value = ''
	content.value = ''
}
	
}