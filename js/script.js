{
'use strict';

  const optArticleSelector = '.post'; // article
  const optTitleListSelector = '.titles'; // left column
  const optAuthorsList = 'ul.authors'; // down of right column
  const optTagsList = 'ul.tags'; // up of right column
  const optArticleTagsSelector = '.post-tags .list'; // <div> tags > ul
  const optArticleAuthorSelector = '.post-author'; // article > h3 > p
  const optTitleSelector = '.post-title'; // article > h3
  const optCloudClassCount = 5;
  const optCloudClassPrefix = 'tag-size-';

  const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;

/* [DONE] remove class 'active' from all article links */
/* [DONE] add class 'active' to the clicked link */
/* [DONE] remove class 'active' from all articles */
/* [DONE] get 'href' attribute from the clicked link */
/* [DONE] find the correct article using the selector (value of 'href' attribute) */
/* [DONE] add class 'active' to the correct article */

  const activeLinks = document.querySelectorAll('.titles a.active');
      for(let activeLink of activeLinks){
      activeLink.classList.remove('active');}

  clickedElement.classList.add('active');

  const activeArticles = document.querySelectorAll('.posts article.active');
      for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');}

  const articleSelector = clickedElement.getAttribute ('href');
  const targetArticle = document.querySelector(articleSelector);
  targetArticle.classList.add('active');
}

/* remove contents of titleList */
/* [DONE] for each article */
/* [DONE] find ID of an article */
/* [DONE] find title of an article */
/* [DONE] create HTML of a link */
/* [DONE] insert link into titleList */

  function generateTitleLinks() {

    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
    const articles = document.querySelectorAll(optArticleSelector);
    let html = '';

        for(let article of articles){
        const articleId = article.getAttribute('id');
        const articleTitle = article.querySelector(optTitleSelector).innerHTML;
        const linkHTML = '<li><a href="#' + articleId + '"><span>'+ articleTitle + '</span></a></li>';
        html = html + linkHTML;
        }

    titleList.innerHTML = html;
    const links = document.querySelectorAll('.titles a');
        for(let link of links){
        link.addEventListener('click', titleClickHandler);
        }
  };
generateTitleLinks();

/* [NEW] create a new variable allTags with an empty object */
/* find all articles */
    /* START LOOP: for every article: */
    /* find tags wrapper */
    /* make html variable with empty string */
    /* get tags from data-tags attribute */
    /* split tags into array */
        /* START LOOP: for each tag */
        /* generate HTML of the link */
        /* add generated code to html variable */
        /* [NEW] check if this link is NOT already in allTags */
        /* [NEW] add tag to allTags object */
        /* END LOOP: for each tag */
    /* insert HTML of all the links into the tags wrapper */
    /* END LOOP: for every article: */
/* [NEW] find list of tags in right column */
/* [NEW] create variable for all links HTML code */
    /* [NEW] START LOOP: for each tag in allTags: */
    /* [NEW] generate code of a link and add it to allTagsHTML */
    /* [NEW] END LOOP: for each tag in allTags: */
/*[NEW] add HTML from allTagsHTML to tagList */
/* prevent default action for this event */
/* make new constant named "clickedElement" and give it the value of "this" */
/* make a new constant "href" and read the attribute "href" of the clicked element */
/* make a new constant "tag" and extract tag from the "href" constant */
/* find all tag links with class active */
    /* START LOOP: for each active tag link */
    /* remove class active */
    /* END LOOP: for each active tag link */
/* find all tag links with "href" attribute equal to the "href" constant */
    /* START LOOP: for each found tag link */
    /* add class active */
    /* END LOOP: for each found tag link */
/* execute function "generateTitleLinks" with article selector as argument */
/* find all links to tags */
    /* START LOOP: for each link */
    /* add tagClickHandler as event listener for that link */
    /* END LOOP: for each link */

    const calculateTagClass = function (count, params) {
      /* find the difference between the most popular tag and the least popular*/
      const normalizedCount = count - params.min; // 6-2=4
      const normalizedMax = params.max - params.min; // 10-2=8
      const percentage = normalizedCount / normalizedMax; // 4/8=0,5
      const classNumber = Math.floor(percentage * (optCloudClassCount-1) + 1); //(0,5 * 4 (because 5-1)) + 1 = 3
      return optCloudClassPrefix + classNumber;
    }

    const calculateTagsParams = function (tags) {
      const params = {max:0, min:99999}; // object

      for (let tag in tags){
        console.log(tag + ' is used ' + tags[tag] + ' times');
        if (tags[tag] > params.max){
          params.max = tags[tag];
        }
        if (tags[tag] < params.min){
          params.min = tags[tag];
        }
      }
      return params;
    };

  const generateTags = function (){
    let allTags = {};
    const articles = document.querySelectorAll(optArticleSelector);
    console.log(articles);

        for (let article of articles){
        const tagsWrapper = article.querySelector(optArticleTagsSelector); // div > tag > ul
        let html = '';
        const articleTags = article.getAttribute('data-tags');
        const articleTagsArray = articleTags.split(' ');

            for (let tag of articleTagsArray) {
            const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
            html = html + linkHTML + ' ';
            if(!allTags[tag]){
            allTags[tag] = 1;
            } else {
            allTags[tag]++;
            }
            }

    tagsWrapper.innerHTML = html;
    }
    const tagList = document.querySelector(optTagsList); // aside > h2 > ul
    const tagsParams = calculateTagsParams(allTags);
    console.log('tagsParams:', tagsParams)
    let allTagsHTML = '';
        for(let tag in allTags) {
        allTagsHTML += '<li><a href="#tag-' + tag + '" class="' + calculateTagClass(allTags[tag], tagsParams) + '">' + tag + ' (' + allTags[tag] + ') </a></li>'; // stick (' + allTags[tag] + ')
        }
    tagList.innerHTML = allTagsHTML;

    };
    generateTags();

    const tagClickHandler = function (event){
    event.preventDefault();
    const clickedElement = this;
    const href = clickedElement.getAttribute('href'); // href="#tag-' + tag + '"
    const tag = href.replace('#tag-',''); // change '#tag-' on empty string to get only tag
    const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');

          for (let activeTag of activeTags) {
          activeTag.classList.remove('active');
          }

    const clickedTags = document.querySelectorAll('a[href="' + href + '"]');

          for (let clickedTag of clickedTags) {
          clickedTag.classList.add('active');
          }

generateTitleLinks('[data-tags~="' + tag + '"]');
};

const addClickListenersToTags = function (){
const tags = document.querySelectorAll('a[href^="#tag-"]');
    for (let tag of tags) {
    tag.addEventListener('click',tagClickHandler);
    }
};

addClickListenersToTags();

/* [DONE] find all articles */
/* [DONE] START LOOP: for every article: */
    /* [DONE] find author wrapper */
    /* [DONE] make html variable with empty string */
    /* [DONE] get author from data-author attribute */
    /* [DONE] generate HTML of the link */
    /* [DONE] add generated code to html variable */
    /* [DONE] insert HTML of author into the author wrapper */
    /* [DONE] END LOOP: for every article: */
/* [DONE] prevent default action for this event */
/* [DONE] make new constant named "clickedElement" and give it the value of "this" */
/* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */
/* [DONE] make a new constant "author" and extract author from the "href" constant */
/* [DONE] find all author links with class active */
    /* [DONE] START LOOP: for each active author link */
    /* [DONE] remove class active */
    /* [DONE] END LOOP: for each active author link */
/* [DONE] find all author links with "href" attribute equal to the "href" constant */
    /* [DONE] START LOOP: for each found author link */
    /* [DONE] add class active */
    /* [DONE] END LOOP: for each found author link */
/* [DONE] execute function "generateTitleLinks" with article selector as argument */
/* [DONE] find all links to authors */
    /* [DONE] START LOOP: for each link */
    /* [DONE] add authorClickHandler as event listener for that link */
    /* [DONE] END LOOP: for each link */

const generateAuthors = function (){
  const allAuthors = {};
  const articles = document.querySelectorAll(optArticleSelector);

      for (let article of articles) {
      const authorWrapper = article.querySelector(optArticleAuthorSelector);
      console.log(authorWrapper);
      let html = '';
      const author = article.getAttribute('data-author');
      console.log(author);
      const linkHTML = '<a href="#author-' + author + '">' + author + '</a>';
      console.log(linkHTML);
      html = html + linkHTML;

        if(!allAuthors[author]) {
        allAuthors[author] = 1;
        }
        else {
        allAuthors[author]++;
        }

  authorWrapper.innerHTML = html;
  console.log(authorWrapper);
  }
  const authorsList = document.querySelector(optAuthorsList);
  console.log(authorsList);
      let allAuthorsHTML = '';
      for (let author in allAuthors){
      allAuthorsHTML += '<li><a href="#author-'+ author + '"><span class="author-name">' + author + ' (' + allAuthors[author] + ')</span></a></li>';
      }
      authorsList.innerHTML = allAuthorsHTML;
      };
generateAuthors();

const authorClickHandler = function (event){
    event.preventDefault();
    const clickedElement = this;
    const href = clickedElement.getAttribute('href'); //href="#author-' + author + '"
    const author = href.replace('#author-',''); // change '#author-' on empty string to get only author

        const activeAuthors = document.querySelectorAll('a.active[href^="#author-"]');
        for (let activeAuthor of activeAuthors){
        activeAuthor.classList.remove('active');
        }

        const clickedAuthors = document.querySelectorAll('a[href="' + href + '"]');
        for (let clickedAuthor of clickedAuthors){
        clickedAuthor.classList.add('active');
        }
generateTitleLinks('[data-author="' + author + '"]');
}
  const addClickListenersToAuthors = function (){
      const authors = document.querySelectorAll('a[href^="#author-"]');
      for (let author of authors){
      author.addEventListener('click',authorClickHandler);
      }
      };
addClickListenersToAuthors();
}
