document.addEventListener(
  "DOMContentLoaded",
  function() {
    const button = document.getElementById("button");
    button.addEventListener(
      "click",
      function() {
        chrome.tabs.executeScript({
          file: "index.js"
        });
      },
      false
    );
  },
  false
);
