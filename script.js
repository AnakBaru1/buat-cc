// Function for the "Yes" button
function accept() {
    alert("Yay! 🎉 Thank you, Calista! I’m so happy to be with you! 💖");
  }
  
  // Function to move the "No" button
  function moveNoButton() {
    const noBtn = document.getElementById("no-btn");
    noBtn.style.top = Math.random() * window.innerHeight + "px";
    noBtn.style.left = Math.random() * window.innerWidth + "px";
  }
  