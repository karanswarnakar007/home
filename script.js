


var icon = document.getElementById("icon");

icon.onclick = () => {
  document.body.classList.toggle("dark-mood");
  if (document.body.classList.contains("dark-mood")) {

    icon.src = "sun.png"
  } else {
    icon.src = "moon.png"

  }
}

var manu = document.getElementById("menuResponsive");
var addMenu = document.getElementById("menu-responsiv_btn");



// to add menu
addMenu.addEventListener("click", function () {
    manu.classList.add("menuOpen");
    manu.classList.remove("menuClose")
});



// to close menu
var closeMenu = document.getElementById("close");
closeMenu.addEventListener("click", function () {
//   manu.classList.add("menuClose")
//   manu.classList.remove("menuOpen")
if(manu.classList.contains= "menuOpen"){
    manu.classList.remove("menuOpen")
}else{
    manu.classList.add("menuClose")

}

})

/*
 if(active == true){
    }else{
        header.classList.add("main-header2");
    }
*/
