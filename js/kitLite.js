function adaptForMobile(width) {
  var element = document.documentElement;
  var resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';
  var recalculate = function() {
    var clientWidth = element.clientWidth;
    if (!clientWidth)
      return;
    var value = element.style.fontSize = 100 * (clientWidth / width) + 'px';
    var real = $('html').css('font-size') || value;
    /* fix bug in XiaoMi3 phone */
    if (value != real) {
      var v = value.replace('px', '');
      var r = real.replace('px', '');
      element.style.fontSize = v * (v / r) + 'px';
    }
  };
  /* register listener */
  if (!document.addEventListener) {
    return;
  } else {
    window.addEventListener(resizeEvent, recalculate, false);
    document.addEventListener('DOMContentLoaded', recalculate, false);
  }
}