const nextBtn = document.querySelector('.custom-slider__next');
  const prevBtn = document.querySelector('.custom-slider__prev');

  nextBtn.addEventListener('click', function() {
    const items = document.querySelectorAll('.custom-slider__item');
    document.querySelector('.custom-slider__track').appendChild(items[0]);
  });

  prevBtn.addEventListener('click', function() {
    const items = document.querySelectorAll('.custom-slider__item');
    document.querySelector('.custom-slider__track').prepend(items[items.length - 1]);
  });