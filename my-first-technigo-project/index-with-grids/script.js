const headerTitle = document.getElementById("main-header")    


//headerTitle.textContent = "Hey"

buttonElement = document.getElementById("button")

buttonElement.onclick = function() {
  headerTitle.textContent = "Heyyo"
  buttonElement.style.backgroundColor = "red"
  buttonElement.style.color = "yellow"
  headerTitle.style.display = "none"
}