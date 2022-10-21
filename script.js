(function(){
    let onpageload = localStorage.getItem("toggle") || "";
    let element = document.body;
    element.classList.add(onpageload);
    document.getElementById("toggle").textContent =
    localStorage.getItem("toggle") || "";
})();

function toggleDark(state){
    let element = document.body;
    element.classList.toggle("dark");
    state.classList.toggle("fa-sun-o");

    let toggle = localStorage.getItem("toggle");

    if (toggle === "dark"){
        localStorage.setItem("toggle", "");
    } else {
        localStorage.setItem("toggle", "dark");
    }
    document.getElementById("toggle").textContent = localStorage.getItem("toggle");
}

