import './menu.css'
export default function menuPage() {
    const main = document.querySelector('#main')
    const menu = document.createElement('div')
    const lamb = document.createElement('div')
    const fish = document.createElement('div')
    const pork = document.createElement('div')
    const steak = document.createElement('div')
    const sideDish = document.createElement('div')
    const salad = document.createElement('div')

    menu.id = 'menuOffer'
    lamb.id = 'lamb'
    fish.id = 'fish'
    pork.id = 'pork'
    steak.id = 'steak'
    sideDish.id = 'sideDish'
    salad.id = 'salad'

    lamb.classList.add('mealOffer')
    fish.classList.add('mealOffer')
    pork.classList.add('mealOffer')
    steak.classList.add('mealOffer')
    sideDish.classList.add('mealOffer')
    salad.classList.add('mealOffer')

    main.append(menu)
    menu.append(lamb, fish, pork, steak, sideDish, salad)

    lamb.textContent = 'lamb'
    fish.textContent = 'fish'
    pork.textContent = 'pork'
    steak.textContent = 'steak'
    sideDish.textContent = 'sideDish'
    salad.textContent = 'salad'
} 