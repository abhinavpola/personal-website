var BitGoJS = require('bitgo');
var bitgo = new BitGoJS.BitGo({env: 'test', accessToken: 'apikey'});

async function createWallet(label, pass) {
    // Create the wallet                        
    let result = bitgo.wallets().createWalletWithKeychains({"passphrase": pass, "label": label}, function(err, result) {
        if (err) { console.dir(err); throw new Error("Error creating wallet!"); }       
        return result;                                                                                        
        });
    return result;
}

module.exports = {createWallet}