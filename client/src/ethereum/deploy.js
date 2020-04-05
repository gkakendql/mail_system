const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/MailFactory.json');

const provider = new HDWalletProvider( //connect to target network and unlock account
  'speed tell turtle spring try direct maid portion final erase attitude release',
  'https://rinkeby.infura.io/v3/0e555da2ac9e47f596b78b40a8f57ba7'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ gas: '2000000', from: accounts[0] });

    console.log('Contract deployed to', result.options.address);
};

deploy();
