function cards() {
    class MenuCard {
        constructor(src, alt, title, desc, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.desc = desc;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;
            this.transfer = 12295;
            this.changeToUZS();
        }
        changeToUZS() {
            this.price = this.price * this.transfer;
        }
        render() {
            const element = document.createElement('article');
            element.classList.add('plans__cart');
            this.classes.forEach(className => element.classList.add(className));
            element.innerHTML = `
            <img class="plans__img" src=${this.src} alt=${this.alt} width="318.4" height="200">
            <div class="plans__content">
            <div class="plans__name">Plan "${this.title}"</div>
            <p class="plans__desc">${this.desc}</p>
            </div>
            <div class="plans__price">
            <div class="plans__cost">Price:</div>
            <div class="plans__total"><span>${this.price}</span> uzs/month</div>
            </div>
            `
            this.parent.append(element);
        }
    };
    
    // Request
    axios.get('http://localhost:3000/menu')
    .then(({data}) => {
        data.forEach(({src, alt, title, desc, price}) => {
            new MenuCard(src, alt, title, desc, price, '.plans__wrapper__container').render();
        });
    })
    .catch(() => {
        console.log('Something went wrong!');
    })
}

export default cards;