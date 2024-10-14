export function animateText(){
const dynamicText = document.getElementById('dynamic-text');
const messages = ["My Experties","SEO Optimization", "Video Editing", "Graphic Designing","Social Media Marketing","Content Writting"];
let index = 0;
function changeText() {
if(dynamicText){
    dynamicText.textContent = messages[index];
    index = (index + 1) % messages.length; // Cycle through messages
}
}
// Change text every 2 seconds (2000 ms)
setInterval(changeText, 2000);
// Initialize with the first message
changeText();
}