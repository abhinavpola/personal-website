var BitGoJS = require('bitgo');
var bitgo = new BitGoJS.BitGo({env: 'test', accessToken: 'v2xda5b40f7101f3afe69b16ddc590b0db961854d1cf85c7cb5777313ab0c94ffbb'});

async function createWallet(label, pass) {
    // Create the wallet                        
    let result = bitgo.wallets().createWalletWithKeychains({"passphrase": pass, "label": label}, function(err, result) {
        if (err) { console.dir(err); throw new Error("Error creating wallet!"); }       
        return result;                                                                                        
        });
    return result;
}

module.exports = {createWallet}