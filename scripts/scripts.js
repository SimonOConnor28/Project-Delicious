// html and css create a burger button and sticky it to bottom right
    //hide our menu by default so that it can be summoned by clicking the burger
    // in the nav have a div with our burger button
        // font-awesome icons for burget and x to toggle between
        //media queries to hide it at larget widths

// when the user clicks, the menu appears


const toggleButton = document.getElementsByClassName('toggleButton')[0];
const toggleLinks = document.getElementsByClassName('navBarLink')[0];

// toggleButton.addEventListener("click", () => {
//     toggleButton.classList.style.display('active')
//     toggleLinks.classList.style.display('active')
// })

toggleButton.addEventListener('click', function() {
    toggleButton.classList.toggle('active')
    toggleLinks.classList.toggle('active')
})