// // Optional: JavaScript for lightbox/modal functionality
// const gallery = document.querySelector('.gallery');
// const lightbox = document.createElement('div');
// lightbox.className = 'lightbox';
// document.body.appendChild(lightbox);

// gallery.addEventListener('click', e => {
//   if (e.target.tagName === 'IMG') {
//     lightbox.innerHTML = '';
//     const img = document.createElement('img');
//     img.src = e.target.src;
//     lightbox.appendChild(img);
//     lightbox.classList.add('active');
//   }
// });

// lightbox.addEventListener('click', () => {
//   lightbox.classList.remove('active');
// });
// JavaScript for image gallery with lightbox/modal functionality
const gallery = document.querySelector('.gallery');
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
document.body.appendChild(lightbox);

gallery.addEventListener('click', e => {
  if (e.target.tagName === 'IMG') {
    lightbox.innerHTML = '';
    const img = document.createElement('img');
    img.src = e.target.src;
    lightbox.appendChild(img);
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling of background content
  }
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
  document.body.style.overflow = 'auto'; // Restore scrolling of background content
});
