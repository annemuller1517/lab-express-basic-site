const manishPhoto = document.querySelector("#manish")

let pika = new Audio('sounds/pikaaaa.mp3')

manishPhoto.addEventListener("click", () => {
    // manishPhoto.src = 'images/pokemon.png';
    if (manishPhoto.getAttribute("src") == "images/manish.png"){
        manishPhoto.src = 'images/pokemon.png';
        pika.play()

    }
    else {
        manishPhoto.src = "images/manish.png";
    }
    
  })
  