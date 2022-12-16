// on hover, scale image up 1.1x

// GETTING THE IMAGE SRC
// store gallery images in a variable
const images = document.querySelectorAll('.gallery img');
// declare an image source variable
let imgSrc;
// add event listeners to all images
images.forEach((img) => {
  img.addEventListener('click', (e) => {
    imgSrc = e.target.src;
    console.log(imgSrc);
    imgModal();
  });
});

console.log(images);

// CREATING THE MODAL
let imgModal = () => {
  const modal = document.createElement('div');
  modal.setAttribute('class', 'modal');
  document.querySelector('main').append(modal);
};
