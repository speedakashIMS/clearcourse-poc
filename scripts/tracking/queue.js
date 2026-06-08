/** *********************************************************
 * ADOBE DATA LAYER — Event Queue
 *
 * Must be imported before any tracking module so that all
 * adobeDataLayer.push calls are intercepted and buffered
 * until Adobe Launch has loaded and flushAdobeEvents() is called.
 ********************************************************** */

window.adobeDataLayer = window.adobeDataLayer || [];

const _queue = [];
let _ready = false;

window.queueAdobeEvent = function (event) {
  if (_ready) {
    window.adobeDataLayer.push(event);
  } else {
    _queue.push(event);
  }
};

window.flushAdobeEvents = function () {
  _ready = true;
  const events = _queue.splice(0);
  console.log(`Adobe Queue: flushing ${events.length} event(s)`, events);
  events.forEach((event) => window.adobeDataLayer.push(event));
};
