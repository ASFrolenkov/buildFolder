const spanContent = document.querySelectorAll('.content'),
      modalContent = document.querySelectorAll('.modal_content'),
      modal = document.querySelector('.modal'),
      closeBtn = document.querySelectorAll('.modal_close'),
      scrollHeight = document.body.scrollHeight;

spanContent.forEach(elem => {
    elem.addEventListener('click', (event) => {
        event.preventDefault();
        target = event.target;
        modalContent.forEach(element => {
            element.style.display = 'none'
            if (target.getAttribute('data-button') == element.getAttribute('data-modal')) {
                console.log('done');
                element.style.display = 'block';
                modal.style.display = 'block';
                window.scroll({top: scrollHeight, behavior: 'smooth'})
            }
        });
    });
});

closeBtn.forEach(elem => {
    elem.addEventListener('click', (event) => {
        event.preventDefault();
        modal.style.display = 'none';
        modalContent.forEach(elem => {
            elem.style.display = 'none';
        })
    })
})