const fontConfig = {
  fonts: {
    Dangrek: {
      import: "https://fonts.googleapis.com/css2?family=Dangrek&display=swap",
      import:"https://fonts.googleapis.com/css2?family=Battambang:wght@100;300;400;700;900&family=Dangrek&display=swap",
      class: "dangrek-regular",
      style: {
        "font-family": "'Dangrek', sans-serif",
        "font-weight": "400",
        "font-style": "normal"
      }
    }
  }
};

// Dynamically load the Google Font
const link = document.createElement("link");
link.href = fontConfig.fonts.Dangrek.import;
link.rel = "stylesheet";
document.head.appendChild(link);

// Apply font to element
document.body.style.fontFamily = fontConfig.fonts.Dangrek.style["font-family"];
