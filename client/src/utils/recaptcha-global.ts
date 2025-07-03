export {}; // Ensure this file is treated as a module

declare global {
  interface Window {
    onloadCallback?: () => void;
    onRecaptchaSuccess?: () => void;
    grecaptcha?: any;
  }
}

// Define the reCAPTCHA render callback
window.onloadCallback = () => {
  const container = document.getElementById('recaptcha-container');
  if (
    container &&
    window.grecaptcha &&
    typeof window.grecaptcha.render === 'function'
  ) {
    window.grecaptcha.render(container, {
      sitekey: '6LfocW0rAAAAAJSU3g9IJE12XRZlhpVWXJIpr3XK',
      callback: () => {
        if (typeof window.onRecaptchaSuccess === 'function') {
          window.onRecaptchaSuccess();
        }
      },
    });
  }
};
