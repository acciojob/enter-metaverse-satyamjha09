// Select the paragraph and button elements
const statusParagraph = document.getElementById('status');
const enterButton = document.getElementById('enterBtn');

// Add a click event listener to the button
enterButton.addEventListener('click', () => {
  // Change the content of the paragraph to an <h1> tag with updated text
  statusParagraph.innerHTML = '<h1>Entered Metaverse</h1>';
});
