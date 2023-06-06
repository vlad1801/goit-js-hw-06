const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

function changeFontSize() {
  const fontSize = fontSizeControl.value + "px";
  textSpan.style.fontSize = fontSize;
}

fontSizeControl.addEventListener("input", changeFontSize);