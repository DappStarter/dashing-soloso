require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note soap unique hunt opinion slot ghost'; 
let testAccounts = [
"0x32d2ec5b7db08b69ecb05d17b1f42951ab6bd511776b1c03489c7bb18c6f4f7f",
"0xae83181ed3a1bb19da5f6f1970abd309b2793577587d276a15b44bd1a351fd79",
"0xad1d57cb988f36528bf6e9920302fa2ac7809b5e03a25ea4ac496dafcfa7c71c",
"0xd7197769ce02e22da39d55a11b0f00c86e9bf93d609cc552fd707630aae0b5f5",
"0x5da2e5f1c31d5ec4c1616903667e0b5d26fe62ad51236fde7e518f973872c45e",
"0x76052ab44b905965306fe9a2ec18a0643863b7b48eef727cb781480733eb0173",
"0xa2489ef2886fcfc1adc9a6b5ecbea0481a6f9597e507948dc2bf339f4cbd957f",
"0x81e1a2f6112feef8161af574b187ec3833f278132e471dd20039196c86b63302",
"0x1ed5ef3a0836b1624aa26f8badaba48fb535b0b7ea33f43367b51ab492b7851d",
"0x299f0373150bb177990977cdca6fb8e7fc45e7a51c8b20d3e727b94a0da6a5f7"
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
            version: '^0.5.11'
        }
    }
};
