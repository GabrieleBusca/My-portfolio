function ChangeTheme() {
const body = document.getElementsByTagName("body") [0];


if (body.classList.contains ("light")){
body.classList.remove ("dark")
body.classList.add ("light")
}


console.log ("fatto")


}

document.getElementById("changeThemeButton").addEventListener("click", ChangeTheme)