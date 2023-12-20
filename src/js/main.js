"use strict";
import loader from '../modules/loader';
import tabs from '../modules/tabs';
import timer from '../modules/timer';
import modal from '../modules/modal';
import cards from '../modules/cards';
import form from '../modules/form';
import slider from '../modules/slider';

export const modifiers = {
    tabsNavigationItemActive: "tabs__natigation-item--active",
    show: "show",
    hide: "hide",
    fade: "fade",
}

window.addEventListener('DOMContentLoaded', () => {
    loader();
    tabs();
    timer("2024-01-01");
    modal();
    cards();
    form();
    slider();
});