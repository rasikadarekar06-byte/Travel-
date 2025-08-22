function changeImage() {
  const images = document.querySelectorAll('.travel-image');
  let currentIndex = -1;

  images.forEach((img, index) => {
    if (!img.classList.contains('hidden')) {
      currentIndex = index;
      img.classList.add('hidden');
    }
  });

  const nextIndex = (currentIndex + 1) % images.length;
  images[nextIndex].classList.remove('hidden');
}
