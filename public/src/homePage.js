const manishPhoto = document.querySelector("#manish")

manishPhoto.addEventListener("click", () => {
    // manishPhoto.src = 'images/pokemon.png';
    if (manishPhoto.getAttribute("src") == "images/manish.png"){
        manishPhoto.src = 'images/pokemon.png';
    }
    else {
        manishPhoto.src = "images/manish.png";
    }
    
  })
  