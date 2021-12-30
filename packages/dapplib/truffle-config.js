require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success strategy radar situate cluster hidden arena army gas'; 
let testAccounts = [
"0x1bbd7f3ba5b8358ba081c4481fecadd3032ffc087425452f3828d73f19143bf7",
"0x778cd889c51e86e026068e6f4cc7ab6b501d2900d4bafa5e990857bc3f178dfe",
"0x79ee1f1c00cd325c2c79d8c6e457fbbdf65d107a9a183ceb9389d844e3b068a3",
"0x38e012fb4c928f4ea2380768f51eee9d7b3631e1b626dc3de780bd803acac7c5",
"0x98d667513d5460b92b3d9fffbdb508e53d466b8477f3e4925325567e9a40dbe5",
"0xa36faa8b93ebf0463883b8d0e382f545bcdcc10810766436197b961b50e5ae63",
"0x71b793ff9f2c188494c25bfc9a406104bc93fa1f015102630493532fb2ba7d36",
"0x81345db88eee9047591efe83d3af95bc2d52ae2e6fa75ba0a9d7a2c129bdc8e4",
"0x1e17b0bedec9697734d4b6e771a866691819c69306a8ae89a219087a21a30d2d",
"0x999b9896a95233c953bfda84ed0f54010a9880c0ef35f7084cd016395b08d93b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

