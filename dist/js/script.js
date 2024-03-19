function darklight() {
  document.getElementsByClassName("moon")[0].classList.toggle("sun");
  document.getElementsByClassName("darklight")[0].classList.toggle("day");
  document.getElementsByTagName("BODY")[0].classList.toggle("light");
}

