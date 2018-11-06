var auth = require('basic-auth');

module.exports = (req, res, next) => {
  var user = auth(req);
  return res.status(401).send({ error: 'Unauthorized' });
  //if (typeof user === 'undefined' || JSON.stringify(req.headers)["session"] !== 'weebWeb') {}
  next();
};
