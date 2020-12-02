{
'use strict'

    const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log('event');

    /* [DONE] remove class 'active' from all article links */
    const activeLinks = document.querySelectorAll('.titles a.active');
    for(let activeLink of activeLinks){
      clickedElement.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */
    console.log('clickedElement:', clickedElement);
    clickedElement.classList.add('active');

   /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.post article.active');
    for(let activeArticle of activeArticles){
      clickedElement.classList.remove('active');
    }
    /* [DONE] get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute ('href');
    console.log('articleSelector');

    /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    console.log('targetArticle');

    /* [DONE] add class 'active' to the correct article */
    targetArticle.classList.add('active');
}

  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

  function generateTitleLinks(){
    console.log ('Done')
    let generateTitleLinks

  /* remove contents of titleList */
   const titleList = document.querySelector(optArticleSelector).innerHTML = '';
   console.log('optTitleListSelector');

  /* find all the articles and save them to variable: articles */
  /* for each article */

      let html = '';

      for(let article of articles){


      /* get the article id */
      const articleId = article.getAttribute('id')

      /* find the title element */
      const articleTitle = document.querySelector(optTitleSelector).innerHTML;

      /* create HTML of the link */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log (linkHTML)

      /* insert link into html variable */
      html = html + linkHTML;
      console.log('html');
      }

      titleList.innerHTML = html;
      const links = document.querySelectorAll('.titles a');
      for(let link of links) {
      link.addEventListener('click', titleClickHandler);
      }
  }
  generateTitleLinks();
}
