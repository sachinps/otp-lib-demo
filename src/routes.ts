import { Router } from 'express';

import { generateOtp, validateOtp } from './otpService';

const router = Router();

router.use('/generate-otp', (req, res) => {
  const otp = generateOtp();
  res.status(200).send(otp);
});

router.use('/validate-otp', (req, res) => {
  const { otp } = req.body;
  const response = validateOtp(otp);
  res.status(200).send({ 'validate-otp': response });
});

export default router;
