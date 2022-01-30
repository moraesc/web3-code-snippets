import { useState } from 'react';

function ConnectWallet() {
  const [address, setAddress] = useState('');

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        return;
      }

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

      if (accounts.length !== 0) {
        const address = accounts[0];
        setAddress(address);
      }
    } catch(error) {
      console.log(error);
    }

  }

  return (
    <div>
      {address !== '' ? <p>{address}</p> : <Button onClick={connectWallet}>Connect</Button>}
    </div>
  );
}

export default ConnectWallet;
