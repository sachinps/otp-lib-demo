import { totp } from 'otplib';
import moment from 'moment';

import { otpConfig } from './otpConfig';

export const setCustomOtpConfig = () => {
  const customOptions = {
    digits: otpConfig.digits,
    step: otpConfig.step,
    window: otpConfig.window
  };
  totp.options = customOptions;
};

export const generateOtp = () => {
  const secretKey = otpConfig.secret;
  const token = totp.generate(secretKey);
  console.log(`Otp ${token} is generated at ${moment().utcOffset('+05:30').format()}`);
  return token;
};

export const validateOtp = (token:any) => {
  const secretKey = otpConfig.secret;
  const isValid = totp.verify({ token, secret: secretKey });
  console.log(`Otp ${token} is validated as ${isValid} at ${moment().utcOffset('+05:30').format()} `);
  return isValid;
};
