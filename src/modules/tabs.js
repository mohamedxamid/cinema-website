import { modifiers } from "../js/main";

function tabs() {
    const elTabsNavigationList = document.querySelector('.tabs__navigation-list');
    
    deactivateTabLinks();
    activeTabContent();
    
    if (elTabsNavigationList) {
        elTabsNavigationList.addEventListener('click', (evt) => {
            if (evt.target && evt.target.matches('.tabs__natigation-item')) {
                const elsTabsNavigationItem = document.querySelectorAll('.tabs__natigation-item');
                
                elsTabsNavigationItem.forEach((item, index) => {
                    if (evt.target === item) {
                        deactivateTabLinks();
                        activeTabContent(index);
                    }
                })
            }
        })
    }
    
    function activeTabContent(i = 0) {
        const elsTabsNavigationItem = document.querySelectorAll('.tabs__natigation-item');
        const elsTabsContent = document.querySelectorAll('.tabs__content');
        
        elsTabsNavigationItem[i].classList.add(modifiers.tabsNavigationItemActive);
        elsTabsContent[i].classList.add(modifiers.show, modifiers.fade);
        elsTabsContent[i].classList.remove(modifiers.hide);
    }
    
    function deactivateTabLinks() {
        const elsTabsNavigationItem = document.querySelectorAll('.tabs__natigation-item');
        const elsTabsContent = document.querySelectorAll('.tabs__content');
        
        elsTabsNavigationItem.forEach((item) => {
            item.classList.remove(modifiers.tabsNavigationItemActive);
        });
        
        elsTabsContent.forEach((item) => {
            item.classList.add(modifiers.hide);
            item.classList.remove(modifiers.show, modifiers.fade);
        })
    }
}

export default tabs;