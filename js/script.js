{
  'use strict';

  const optArticleSelector = '.post'; // articles
  optTitleListSelector = '.titles'; // left column
  const optArticleTagsSelector = '.post-tags .list';
  const optArticleAuthorSelector = '.post-author';
  optTitleSelector = '.post-title';
  const optTagsListSelector = '.tags .list';

  const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');
  console.log(event);

/* [DONE] remove class 'active' from all article links */
  const activeLinks = document.querySelectorAll('.titles a.active');
  for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
  }

/* [DONE] add class 'active' to the clicked link */
  console.log('clickedElement:', clickedElement);
  clickedElement.classList.add('active');

/* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts article.active');
  for(let activeArticle of activeArticles){
  activeArticle.classList.remove('active');
  }

/* [DONE] get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute ('href');
  console.log(articleSelector);

 /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle);

/* [DONE] add class 'active' to the correct article */
  targetArticle.classList.add('active');
 }

  function generateTitleLinks() {
/* remove contents of titleList */
     const titleList = document.querySelector(optTitleListSelector);
     titleList.innerHTML = '';

    /* [DONE] for each article */
    const articles = document.querySelectorAll(optArticleSelector);
    console.log(articles);
    let html = '';
    for(let article of articles){

    /* [DONE] find ID of an article */
    const articleId = article.getAttribute('id');
    console.log(articleId);

    /* [DONE] find title of an article */
    const articleTitle = article.querySelector(optTitleSelector);
    articleTitle.innerHTML = '';
    console.log(articleTitle);

    /* [DONE] create HTML of a link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>'+ articleTitle + '</span></a></li>';
    console.log(linkHTML);

    /* [DONE] insert link into titleList */
    html = html + linkHTML;
    console.log(html);
    }

  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
};
generateTitleLinks();

const generateTags = function (){

  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);

  /* START LOOP: for every article: */
    for (let article of articles){

    /* find tags wrapper */
    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    console.log(tagsWrapper);

    /* make html variable with empty string */
    let html ='';

    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    console.log(articleTags);

    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log(articleTagsArray);

        /* START LOOP: for each tag */
        for(let tag of articleTagsArray){

        /* generate HTML of the link */
        const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
        console.log(linkHTML);

        /* add generated code to html variable */
        html = html + linkHTML;

        /* END LOOP: for each tag */
        }

    /* insert HTML of all the links into the tags wrapper */
    tagsWrapper.innerHTML = html;
    console.log(tagsWrapper);

  /* END LOOP: for every article: */
  }
};
generateTags();

const tagClickHandler = function (event){
  /* prevent default action for this event */
  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;

  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href'); // href="#tag-' + tag + '"
  console.log(href);

  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-',''); // change '#tag-' on empty string to get only tag
  console.log(tag);

  /* find all tag links with class active */
  const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');
  console.log(activeTags);

      /* START LOOP: for each active tag link */
      for (let activeTag of activeTags) {
      /* remove class active */
      activeTag.classList.remove('active');
      /* END LOOP: for each active tag link */
      }

  /* find all tag links with "href" attribute equal to the "href" constant */
  const clickedTags = document.querySelectorAll('a[href="' + href + '"]');
    console.log(clickedTags);

  /* START LOOP: for each found tag link */
    for (let clickedTag of clickedTags) {

    /* add class active */
    clickedTag.classList.add('active');

  /* END LOOP: for each found tag link */
  };

  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
};

  const addClickListenersToTags = function (){

  /* find all links to tags */
    const tags = document.querySelectorAll('a[href^="#tag-"]');
    console.log(tags);

  /* START LOOP: for each link */
    for (let tag of tags) {

    /* add tagClickHandler as event listener for that link */
    tag.addEventListener('click',tagClickHandler);

  /* END LOOP: for each link */
  }
};
addClickListenersToTags();

const generateAuthors = function (){
  /* [DONE] find all articles */
  const articles = document.querySelectorAll(optArticleSelector);

      /* [DONE] START LOOP: for every article: */
      for (let article of articles) {

      /* [DONE] find author wrapper */
      const authorWrapper = article.querySelector(optArticleAuthorSelector);
      console.log(authorWrapper);

      /* [DONE] make html variable with empty string */
      let html = '';

      /* [DONE] get author from data-author attribute */
      const author = article.getAttribute('data-author');
      console.log(author);

      /* [DONE] generate HTML of the link */
      const linkHTML = '<a href="#author-' + author + '">' + author + '</a>';
      console.log(linkHTML);

      /* [DONE] add generated code to html variable */
      html = html + linkHTML;

      /* [DONE] insert HTML of author into the author wrapper */
      authorWrapper.innerHTML = html;
      console.log(authorWrapper);

      /* [DONE] END LOOP: for every article: */
      }
    };

  generateAuthors();

  const authorClickHandler = function (event){

    /* [DONE] prevent default action for this event */
    event.preventDefault();

    /* [DONE] make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;

    /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href'); //href="#author-' + author + '"

    /* [DONE] make a new constant "author" and extract author from the "href" constant */
    const author = href.replace('#author-',''); // change '#author-' on empty string to get only author
    console.log(author);

    /* [DONE] find all author links with class active */
    const activeAuthors = document.querySelectorAll('a.active[href^="#author-"]');

        /* [DONE] START LOOP: for each active author link */
        for (let activeAuthor of activeAuthors){
        /* [DONE] remove class active */
        activeAuthor.classList.remove('active');
        /* [DONE] END LOOP: for each active author link */
        }

    /* [DONE] find all author links with "href" attribute equal to the "href" constant */
    const clickedAuthors = document.querySelectorAll('a[href="' + href + '"]');
    console.log(clickedAuthors);

        /* [DONE] START LOOP: for each found author link */
        for (let clickedAuthor of clickedAuthors){
        /* [DONE] add class active */
        clickedAuthor.classList.add('active');
        /* [DONE] END LOOP: for each found author link */
  }

    /* [DONE] execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-author="' + author + '"]');

    }

    const addClickListenersToAuthors = function (){

      /* [DONE] find all links to authors */
      const authors = document.querySelectorAll('a[href^="#author-"]');
      console.log(authors);

          /* [DONE] START LOOP: for each link */
          for (let author of authors){
          /* [DONE] add authorClickHandler as event listener for that link */
          author.addEventListener('click',authorClickHandler);
          /* [DONE] END LOOP: for each link */
          }
    };
addClickListenersToAuthors();
}
