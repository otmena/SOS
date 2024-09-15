
document.querySelector('.dropdown__button').addEventListener('click', function() {
    let content = document.querySelector('.dropdown__content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });

  // Закрытие меню, если клик вне области
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown__button')) {
      let dropdowns = document.getElementsByClassName('dropdown__content');
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.style.display === 'block') {
          openDropdown.style.display = 'none';
        }
      }
    }
  }


  let currentSlide = 0;

  function showSlide(index) {
      const slides = document.querySelector('.slides');
      const totalSlides = document.querySelectorAll('.slide').length;
  
      if (index >= totalSlides) {
          currentSlide = 0;
      } else if (index < 0) {
          currentSlide = totalSlides - 1;
      } else {
          currentSlide = index;
      }
  
      slides.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
  
  function nextSlide() {
      showSlide(currentSlide + 1);
  }
  
  function prevSlide() {
      showSlide(currentSlide - 1);
  }
  
  setTimeout(nextSlide, 3000);
  

  function setupDropdown(buttonId, menuId) {
    const button = document.getElementById(buttonId);
    const menu = document.getElementById(menuId);

    button.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
}
setupDropdown('dropdownButton1', 'dropdownMenu1');
setupDropdown('dropdownButton2', 'dropdownMenu2');
setupDropdown('dropdownButton3', 'dropdownMenu3');
window.onclick = function(event) {
    if (!event.target.matches('.dropdown button')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
        }
    }
}

document.querySelectorAll('.header__link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Отключаем стандартное действие ссылки

        const sectionID = this.getAttribute('data-section'); // Получаем ID секции из data-атрибута
        const section = document.getElementById(sectionID); // Находим нужную секцию по ID

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth' // Плавная прокрутка
            });
        }
    });
});

document.querySelector('.main__bottom-action').addEventListener('click', function() {
    const sectionAbout = document.querySelector('#one');
    sectionAbout.scrollIntoView({
        behavior: 'smooth'
    });
})

const toggleButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.header__menu');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('showMenu');
});

