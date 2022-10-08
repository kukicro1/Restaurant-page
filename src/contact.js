import './contact.css'
export default function contactPage () {
    const main = document.querySelector('#main')
    const contactContainer = document.createElement('div')
    const mobileContainer = document.createElement('div')
    const addressContainer = document.createElement('div')
    const mapContainer = document.createElement('div')
    const mobile = document.createElement('div')
    const streetAddress = document.createElement('div')
    const map = document.createElement('div')

    contactContainer.id = 'contactContainer'
    mobileContainer.id = 'mobileContainer'
    addressContainer.id = 'addressContainer'
    mapContainer.id = 'mapContainer'
    mobile.id = 'mobile'
    streetAddress.id = 'streetAddress'
    map.id = 'map'

    mobileContainer.classList.add('contactGridContainer')
    addressContainer.classList.add('contactGridContainer')
    mapContainer.classList.add('contactGridContainer')

    main.append(contactContainer)
    contactContainer.append(mobileContainer, addressContainer, mapContainer)

    mobileContainer.append(mobile)
    addressContainer.append(streetAddress)
    mapContainer.append(map)

    mobile.textContent = 'mobile'
    streetAddress.textContent = 'streetAddress'
    map.textContent = 'map'
}