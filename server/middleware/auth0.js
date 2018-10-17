import jwt from 'express-jwt'
import jwksRsa from 'jwks-rsa';
import Config from '../config';

const { secretKey } = Config;

const authJwtCheck = jwt({
    // Dynamically provide a signing key based on the kid in the header and the singing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://oforms.auth0.com/.well-known/jwks.json`
    }),
  
    // Validate the audience and the issuer.
    audience: "https://www.oforms.io/api/", //"https://oforms.auth0.com/userinfo",//process.env.AUTH0_AUDIENCE,
    issuer: `https://oforms.auth0.com/`,
    algorithms: ['RS256']
});

export { authJwtCheck };