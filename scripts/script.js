// on hover, scale image up 1.1x

// GETTING THE IMAGE SRC
// store gallery images in a variable
const images = document.querySelectorAll('.gallery img');
// declare an image source variable
let imgSrc;
// add event listeners to all images
images.forEach((img) => {
  img.addEventListener('click', (e) => {
    console.log(e.target);
    imgSrc = e.target.src;
    console.log(imgSrc);
    imgModal(imgSrc);
  });
});

console.log(images);

// CREATING THE MODAL
let imgModal = (src) => {
  const modal = document.createElement('div');
  modal.setAttribute('class', 'modal');
  // add modal to the main section
  document.querySelector('main').append(modal);
  // add image to modal
  const newImage = document.createElement('img');
  newImage.setAttribute('src', src);
  // creating the close button
  const closeBtn = document.createElement('i');
  closeBtn.setAttribute('class', 'fas fa-times closeBtn');
  closeBtn.onclick = () => {
    modal.remove();
  };
  modal.append(newImage, closeBtn);
};

//
