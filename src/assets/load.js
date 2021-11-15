export const loadScript = function (src) {
  var body = document.getElementsByTagName('body')[0],
      tag = document.createElement('script');
  tag.async = false;
  tag.src = src;
  body.appendChild(tag);
}

export const loadStyle = function (src) {
  var head  = document.getElementsByTagName('head')[0],
      link  = document.createElement('link');
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = src;
  head.appendChild(link);
}