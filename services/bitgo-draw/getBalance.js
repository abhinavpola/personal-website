var BitGoJS = require('bitgo');
var bitgo = new BitGoJS.BitGo({env: 'test', accessToken: 'v2xda5b40f7101f3afe69b16ddc590b0db961854d1cf85c7cb5777313ab0c94ffbb'});

async function getBalance(btc_addr) {
  let result = bitgo.wallets().get({type: 'bitcoin', id: btc_addr}, function(err, wallet) {
    if (err) { console.log(err); process.exit(-1); }
      return wallet.balance();
  });
  return result;
}

module.exports = {getBalance};