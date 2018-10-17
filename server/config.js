const port = process.env.PORT || 9000;
const secretKey = 'secretKey';
const expiredAfter = 60 * 60 * 1000;

export default {
  port,
  secretKey,
  expiredAfter
};
