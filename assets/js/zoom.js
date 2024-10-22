<<<<<<< HEAD
// Initialize medium zoom.
$(document).ready(function () {
  medium_zoom = mediumZoom("[data-zoomable]", {
    background:
      getComputedStyle(document.documentElement).getPropertyValue(
        "--global-bg-color",
      ) + "ee", // + 'ee' for trasparency.
  });
});
=======
$(document).ready(function(){medium_zoom=mediumZoom("[data-zoomable]",{background:getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color")+"ee"})});
>>>>>>> 7cb87b4936a67a8e8488aa358b1c74043c0cc102
