import React, { useState } from "react";
import Web3 from "web3";
import { getWeb3Modal } from "../utils/Web3Constants";

export default function Login() {
  const [account, setAccount] = useState("");
  let web3;
  let provider;
  let accounts;
  let chainId;

  async function walletConnect() {
    try {
      const web3Modal = getWeb3Modal();
      provider = await web3Modal.connect();
      web3 = new Web3(provider);
      accounts = await web3.eth.getAccounts();
      chainId = await web3.eth.getChainId();
      setAccount(accounts[0]);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div>
      <button onClick={walletConnect}>Connect Wallet</button>
      <div>{account}</div>
    </div>
  );
}
