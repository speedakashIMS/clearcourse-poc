export const isAuthor = window.location.origin.indexOf('author') > -1;
const getBaseUrl = () => {
  if (isAuthor) {
    return window.location.origin;
  }

  return 'https://publish-p153382-e1601836.adobeaemcloud.com';
};

export const origin = getBaseUrl();
