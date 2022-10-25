document.getElementById("toggle").onclick = function(){
    let image = document.getElementById("avatar");
        let currentImage = image.getAttribute("src").substring(0, 1);
        if (!Number(currentImage)) {
            currentImage++;
            image.setAttribute("src", `${currentImage}.jpg`);
        } else {
            currentImage--;
            image.setAttribute("src", `${currentImage}.jpg`);
        }
        document.body.classList.toggle("dark");
        document.getElementById("toggle").classList.toggle("fa-sun-o");
        }
