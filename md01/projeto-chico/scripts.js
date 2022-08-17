const img = document.getElementById("chico-img");

img.addEventListener("click", (event) => {
  //   console.log(img.getAttribute("src"));

  if (img.getAttribute("src") === "./images/chico 1.png") {
    img.setAttribute("src", "./images/chico 2.png");
  } else {
    img.setAttribute("src", "./images/chico 1.png");
  }
});
