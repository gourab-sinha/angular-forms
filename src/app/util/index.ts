export const scrollToError = function (selector) {
    const firstElementWithError = document.querySelector(
      selector
    );
  
    if (firstElementWithError) {
      firstElementWithError.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  };