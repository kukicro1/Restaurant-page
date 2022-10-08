export default function initialPage() {
    const content = document.querySelector("#content")
    const logo = document.createElement("div")
    const navbar = document.createElement('div')
    const main = document.createElement('div')
    const home = document.createElement('div')
    const menu = document.createElement('div')
    const contact = document.createElement('div')
    const footer = document.createElement('div')
    const logoContent = document.createElement('p')

    logo.id = 'logo'
    navbar.id = 'navbar'
    main.id = 'main'

    home.classList.add('navbar')
    menu.classList.add('navbar')
    contact.classList.add('navbar')

    home.id = 'home'
    menu.id = 'menu'
    contact.id = 'contact'
    logoContent.id = 'goodFood'
    footer.id = 'footer'

    content.append(logo, navbar, main, footer)
    navbar.append(home, menu, contact)
    logo.append(logoContent)

    logoContent.textContent = 'Good Food'
    home.textContent = 'About us'
    menu.textContent = 'Menu'
    contact.textContent = 'Contact'

    footer.textContent = 'Made by Krunoslav.'
}

export function homePage () {
    const homePageDiv = document.createElement('div')
    const homeContext = document.createElement('p')
    homePageDiv.id = 'homePageDiv'
    main.append(homePageDiv)
    homePageDiv.append(homeContext)
    homeContext.textContent = 
    'This is going to be very exiting journey.'
}