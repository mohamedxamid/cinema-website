import {openModal, closeModal} from "./modal"
import { modifiers } from "../js/main"
import { postData } from "../js/server/server"

function form() {
    const forms = document.querySelectorAll('form')
    
    forms.forEach(form => {
        bindPostData(form)
    })
    
    const msg = {
        loading: "Loading...",
        success: "Thank's for submitting our form",
        failure: "Something went wrong",
    }
    
    function bindPostData(form) {
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            
            const statusMessage = document.createElement('div')
            statusMessage.textContent = msg.loading
            if (!form.classList.contains('cta__form')) {
                form.append(statusMessage)
            }
            
            const formData = new FormData(form)
            const json  = JSON.stringify(Object.fromEntries(formData.entries()))
            
            postData("http://localhost:3000/requests", json)
            .then((data) => {
                console.log(data);
                showThanksModal(msg.success);
            })
            .catch((err) => {
                console.log(err.message);
                showThanksModal(msg.failure);
            })
            .finally(() => {
                if (form.classList.contains('cta__form')) {
                    openModal()
                }
                form.reset()
                statusMessage.remove();
            })
        })
    }
    
    function showThanksModal(message) {
        const elPrevModal = document.querySelector('.modal__inner'),
        elModalContainer = document.querySelector('.modal__container')
        elPrevModal.classList.add(modifiers.hide)
        
        const elThanksModal = document.createElement('div')
        elThanksModal.classList.add('modal__inner')
        elThanksModal.innerHTML = `
        <button class="modal__close" type="button">&times;</button>
        <div class="modal__text">${message}</div>
        `
        
        elModalContainer.append(elThanksModal)
        
        setTimeout(() => {
            elThanksModal.remove()
            elPrevModal.classList.remove(modifiers.hide)
            closeModal()
        }, 4000)
    }
}

export default form;