export const otpConfig:any = {
  digits: 6, // The length of the token.
  step: 10, // Time step (seconds)
  window: 2, // Tokens in the previous and future x-windows that should be considered valid.
  secret: 'KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD', // Code used to create OTP
};
