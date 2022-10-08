import initialPage from "./home.js";
import { homePage } from "./home.js";
import contactPage from "./contact.js";
import menuPage from "./menu.js";
import './home.css'
initialPage()
homePage()
const homeTab = document.querySelector('#home')
const menuTab = document.querySelector('#menu')
const contactTab = document.querySelector('#contact')
const main = document.querySelector('#main')

function deleteMain() {
    main.textContent = ''
}

homeTab.addEventListener('click', function() {
    deleteMain()
    homePage()
})

menuTab.addEventListener('click', function() {
    deleteMain()
    menuPage()
})

contactTab.addEventListener('click', function() {
    deleteMain()
    contactPage()
})