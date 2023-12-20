import { modifiers } from "../js/main";

const elsOpenModal = document.querySelectorAll('.js-open-modal'),
    elModal = document.querySelector('.modal'),
    openModalTimerId = setTimeout(openModal, 5000);


function closeModal() {
    elModal.classList.add(modifiers.hide);
    document.body.style.overflow = "";
}

function openModal() {
    elModal.classList.remove(modifiers.hide);
    document.body.style.overflow = "hidden";
    clearTimeout(openModalTimerId);
}

function modal() {
    closeModal();


    elsOpenModal.forEach((elOpenModal) => {
        elOpenModal.addEventListener('click', openModal);
    })

    if (elModal) {
        elModal.addEventListener('click', (evt) => {
            if((evt.target && evt.target.matches('.modal__close') || (evt.target && evt.target.matches('.modal__container')))) {
                closeModal();
            };
        });
    };

    document.addEventListener('keydown', (evt) => {
        if(evt.code === "Escape" && (!elModal.classList.contains(modifiers.hide))) {
            closeModal();
        };
    });

    function showModalByScroll() {
        const scrollBottom = (document.documentElement.scrollHeight - document.documentElement.clientHeight - document.documentElement.scrollTop);

        if(scrollBottom <= 0) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export {closeModal, openModal}