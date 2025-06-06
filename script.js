// Display the current domain with a typing effect
const domainElement = document.getElementById('current-domain');
const domain = window.location.hostname || "localhost";

let i = 0;
function typeWriter() {
  if (i < domain.length) {
    domainElement.textContent += domain.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

// Start with empty text
domainElement.textContent = "";
// Begin typing effect after a short delay
setTimeout(typeWriter, 1000);
