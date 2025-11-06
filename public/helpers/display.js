/* A function to change the display of the main screen and backgrounds of the on/off buttons.  Like the message database I need to figure out how to implement/share this through out the rest of the view templates */

function displayOnOffButton() {
  const onButton = document.querySelector(".on-button");
  const onButtonOn = document.querySelector(".on-button-on");
  const onButtonOff = document.querySelector(".on-button-off");
  const offButton = document.querySelector(".off-button");
  const offButtonOn = document.querySelector(".off-button-on");
  const offButtonOff = document.querySelector(".off-button-off");
  const onButtonDisplayLight = document.querySelector(".on-button-light");
  const mainSectionDisplay = document.querySelector(".main-section");

  onButton.addEventListener("click", () => {
    if (onButton.classList.contains("on-button-off")) {
      onButton.classList.remove("on-button-off");
      onButton.classList.add("on-button-on");

      offButton.classList.remove("off-button-on");
      offButton.classList.add("off-button-off");

      mainSectionDisplay.style.display = "flex";

      onButtonDisplayLight.classList.remove("on-button-light-off");
      onButtonDisplayLight.classList.add("on-button-light-on");
      displayToggle = true;
      console.log("on button clicked");
    }
  });
  offButton.addEventListener("click", () => {
    if (onButton.classList.contains("on-button-on")) {
      onButton.classList.remove("on-button-on");
      onButton.classList.add("on-button-off");

      offButton.classList.remove("off-button-off");
      offButton.classList.add("off-button-on");

      mainSectionDisplay.style.display = "none";

      onButtonDisplayLight.classList.remove("on-button-light-on");
      onButtonDisplayLight.classList.add("on-button-light-off");
      displayToggle = false;
      console.log("off button clicked");
    }
  });
}

displayOnOffButton();

/* module.exports = displayOnOffButton; */
