let header = document.querySelector('#page-header')
header.style.textAlign = 'right'
header.style.color = 'red'

let dogImages = document.querySelectorAll('.dog-image')
for (let i=0; i < dogImages.length; i++) {
    dogImages[i].style.borderRadius = '50px'
    dogImages[0].style.width = '180px'
    dogImages[1].style.width = '250px'
    dogImages[2].style.width = '100px'

}

let dogDescriptions = document.querySelectorAll ('.dog-description')
for (let i=0; i < dogDescriptions.length; i++) {
    dogDescriptions[0].style.color = 'blue'
    dogDescriptions[1].style.color = 'purple'
    dogDescriptions[2].style.color = 'orange'
    dogDescriptions[0].style.textAlign = 'left'
    dogDescriptions[2].style.textAlign = 'right'
    dogDescriptions[2].style.backgroundColor= 'black'
}
let footer = document.querySelector('.footer')
footer.style.textAlign = 'left'
footer.style.color = 'green'


// Select some elements...