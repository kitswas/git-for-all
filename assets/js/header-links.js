// Refer to https://remarkablemark.org/blog/2020/04/04/jekyll-heading-anchor-links/
document
	.getElementById('main_content') // get the article
	.querySelectorAll('h1,h2,h3,h4,h5,h6')
	.forEach(function (heading) {
		if (heading.id) {
			heading.innerHTML =
				heading.innerText +
				' <a href="#' + heading.id + '">' +
				'§' +
				'<\/a>';
		}
	})
