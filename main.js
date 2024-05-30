function registerKeyHandler() {
  document.addEventListener("keydown", function (e) {
    tizen.tvinputdevice.registerKey("MediaPlayPause");
    tizen.tvinputdevice.registerKey("MediaPlay");
    tizen.tvinputdevice.registerKey("MediaStop");
    tizen.tvinputdevice.registerKey("MediaPause");
    tizen.tvinputdevice.registerKey("MediaRewind");
    tizen.tvinputdevice.registerKey("MediaFastForward");
    tizen.tvinputdevice.registerKey("Exit");

    switch (e.keyCode) {
      case 37: //LEFT arrow
        console.log("left pressed");
        break;

      case 38: //UP arrow
        console.log("Up pressed");
        break;

      case 39: //RIGHT arrow
        console.log("right pressed");
        break;

      case 40: //DOWN arrow
        console.log("down pressed");
        break;
      case 13: //OK button
        console.log("Ok pressed");
        analytics.logEvent("AppLaunchUser", {
          location: "WDRB+",
          item_brand: "TizenTVvv",
        });
        const log = document.getElementById("log");
        log.innerHTML += `<div class="log"> AppLaunchUser event triggered </div>`;

        break;

      default:
        console.log("Key code : " + e.keyCode);
        break;
    }
  });
}

window.onload = (event) => {
  registerKeyHandler();
};
