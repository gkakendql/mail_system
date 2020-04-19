const web3 = require('./test');
const Mail = require('./build/Mail.json');


module.exports =  function(address) {
  return new web3.eth.Contract(JSON.parse(Mail.interface),address);
}
