{
'use strict'

    /*const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log('event');

    /* [DONE] remove class 'active' from all article links
    const activeLinks = document.querySelectorAll('.titles a.active');
    for(let activeLink of activeLinks){
      clickedElement.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link
    console.log('clickedElement:', clickedElement);
    clickedElement.classList.add('active');*/

   /* [DONE] remove class 'active' from all articles
    const activeArticles = document.querySelectorAll('.post article.active');
    for(let activeArticle of activeArticles){
      clickedElement.classList.remove('active');
    }
    /* [DONE] get 'href' attribute from the clicked link
    const articleSelector = clickedElement.getAttribute ('href');
    console.log('articleSelector');*/

    /* [DONE] find the correct article using the selector (value of 'href' attribute)
    const targetArticle = document.querySelector(articleSelector);
    console.log('targetArticle');*/

    /* [DONE] add class 'active' to the correct article
    targetArticle.classList.add('active');
}*/

  const optTitleListSelector = '.titles'; // list
        optArticleSelector = '.post', // articles
        optTitleSelector = '.post-title', // headers

  /* remove contents of titleList */
  /* for each article */
  /* get the article id */
  /* find the title element */
  /* get the title from the title element */
  /* create HTML of the link */
  /* insert link into html variable */

  function generateTitleLinks(){
  let html = '';

  const titleList = document.querySelector(optTitleListSelector);
  const articles = document.querySelectorAll(optArticleSelector);

  for(let article of articles){
    const articleId = article.getAttribute('id')
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    let linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    html = html + linkHTML;
  }

  titleList.innerHTML = html;

  const links = document.querySelectorAll('linkHTML');

  for(let link of links) {
    link.addEventListener('click', function (event) {
    event.preventDefault();
    const id = event.titleList.getAttribute('href');

    for (article of articles) {
    article.classList.remove('active');
  }
    const titleListTarget = document.querySelector(id);
    titleListTarget.classList.add('active');
  })
  }
  }
  generateTitleLinks();
}
