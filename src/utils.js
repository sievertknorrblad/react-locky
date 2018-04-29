export const preventAll = (event) => {
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
};

const preventDefault = (event) => {
  event.preventDefault();
};

const report = callback => (event) => {
  preventAll(event);
  if (callback) {
    callback(event);
  }
};

export const getHandler = (event, option, callback) => {
  if (!option) {
    return null;
  }

  if (option === 'no-default') {
    return preventDefault;
  }

  if (option === 'report') {
    return report(callback);
  }

  return preventAll;
};


export const addEvent = (target, event, handler, capture) =>
  handler && ({ event, handler: target.addEventListener(event, handler, capture) });
