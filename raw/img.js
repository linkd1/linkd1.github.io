  /* COPY AND PASTE THE FOLLOWING CODE INTO THE CONSOLE (INSPECT ELEMENT, ENTER WITH CTRL+SHIFT+I AND PRESS 'CONSOLE') */

 javascript:(function() {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('src', 'https://gptchatly.com/image-generator/');
  iframe.style.position = 'fixed';
  iframe.style.top = '50%';
  iframe.style.left = '50%';
  iframe.style.transform = 'translate(-50%, -50%)';
  iframe.style.border = '8px solid Aquamarine';
  iframe.style.width = '80%';
  iframe.style.height = '80%';
  iframe.style.zIndex = '9999';

  var closeButton = document.createElement('button');
  closeButton.style.position = 'fixed';
  closeButton.style.top = '5px';
  closeButton.style.right = '5px';
  closeButton.style.fontSize = '20px';
  closeButton.style.color = 'white';
  closeButton.style.backgroundColor = 'Aquamarine';
  closeButton.style.border = 'none';
  closeButton.style.borderRadius = '50%';
  closeButton.style.width = '30px';
  closeButton.style.height = '30px';
  closeButton.style.cursor = 'pointer';
  closeButton.style.zIndex = '10000';

  closeButton.addEventListener('click', function() {
    iframe.remove();
    closeButton.remove();
  });

  document.body.appendChild(iframe);
  document.body.appendChild(closeButton);
   alert('AI Image Generator is installed. Refreshing the page closes this.')
})();
