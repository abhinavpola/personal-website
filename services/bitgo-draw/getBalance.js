var BitGoJS = require('bitgo');
var bitgo = new BitGoJS.BitGo({env: 'test', accessToken: 'apikey'});

async function getBalance(btc_addr) {
  let result = bitgo.wallets().get({type: 'bitcoin', id: btc_addr}, function(err, wallet) {
    if (err) { console.log(err); process.exit(-1); }
      return wallet.balance();
  });
  return result;
}

module.exports = {getBalance};