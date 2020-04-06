import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  //window는 브라우저에서만 실행되는데 next는 서버사이드 렌더링 방식이기 때문에 서버에서 렌더링한번하고 브라우저에서 렌더링을 또하기 때문에 서버에서 실행되지 않아 오류가 발생한다
  web3 = new Web3(window.ethereum); //provider == metamask
  window.ethereum.enable();
} else {
  //We are on the server or the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/0e555da2ac9e47f596b78b40a8f57ba7'
  );
  web3 = new Web3(provider);
}

export default web3;
