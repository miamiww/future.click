(function(){
  var style = document.createElement('link');
  style.setAttribute('rel', 'stylesheet');
  style.href = '/widget.css';
  // style.href = 'widget.css';

  document.querySelector('head').appendChild(style);
  var container = document.querySelector('#widget');
  var author = container.getAttribute('data-author');
  var url = container.getAttribute('data-href');


  var html = 
  '<div id="content">' + 
  '  <p>Made by <span id="author"></span></p>' + 
  '  <p><a id="link" href="#">Homepage</a></p>' + 
  '</div>';

  container.innerHTML = html;
  document.querySelector('#author').textContent = author;
  document.querySelector('#link').href = url;
})();
