import express from 'express';
import bodyParser from 'body-parser';

import routes from './routes';
import { setCustomOtpConfig } from './otpService';

/**
 * Create Express server.
 */
const app = express();
app.use(
  bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 5000 }),
);
app.use(bodyParser.json({ limit: '50mb' }));

app.use('/', routes);
setCustomOtpConfig();

app.listen(4000, () => {
  console.log('OTP DEMO APP LISTENING TO PORT 4000');
});
