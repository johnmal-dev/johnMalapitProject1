const commentsContainer = document.getElementById('comments');
const form = document.getElementById('form');

function dateString() {
  const newDate = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  let result = newDate.toLocaleDateString('en-US', options);
  const commaIndex = result.indexOf(',');
  result = result.slice(0, commaIndex) + result.slice(commaIndex + 1);
  return result;
}

function submitHandler(e) {
  e.preventDefault();

  // remove border-bottom-green class from last comment
  const comments = document.querySelectorAll('.comment-container');
  const lastComment = comments[comments.length - 1];
  lastComment.classList.remove('border-bottom-green');

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const commentInput = document.getElementById('comment');

  // div.comment-container
  const newDiv = document.createElement('div');
  newDiv.classList.add('comment-container', 'border-bottom-green');

  // div.img-container
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  newDiv.appendChild(imgContainer);
  commentsContainer.appendChild(newDiv);

  // img
  const img = document.createElement('img');
  img.setAttribute('src', './assets/snape.png');
  img.setAttribute('alt', "The current user's profile picture");
  imgContainer.appendChild(img);

  // div.text-container
  const textContainer = document.createElement('div');
  textContainer.classList.add('text-container');
  newDiv.appendChild(textContainer);

  // p - Date
  const dateParagraph = document.createElement('p');
  dateParagraph.textContent = `${dateString()} by ${nameInput.value}`;
  textContainer.appendChild(dateParagraph);

  // p - comment
  const commentParagraph = document.createElement('p');
  commentParagraph.textContent = commentInput.value;
  textContainer.appendChild(commentParagraph);

  // clear input values
  nameInput.value = '';
  emailInput.value = '';
  commentInput.value = '';

  // scroll to latest post
  newDiv.scrollIntoView({behavior: "smooth"});
}

form.addEventListener('submit', submitHandler);
