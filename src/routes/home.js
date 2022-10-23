import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    const [currentAccount, setCurrentAccount] = useState("");

    const connectWallet = async () => {
        try {
          const { ethereum } = window;
          if (!ethereum) {
            alert("Get MetaMask!");
            return;
          }
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
          console.log("Connected: ", accounts[0]);
          setCurrentAccount(accounts[0]);
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <div className="Home">
            <h2>
                A Brand-New Learnfi is HERE!!!!!!
            </h2>
            <ul>
                <li>
                    <Link to="/question-creater-page" onClick={connectWallet}>問題を作る</Link>
                </li>
                <li>
                    <Link to="/question-list-page" onClick={connectWallet}>問題を解く</Link>
                </li>
                <li>
                    <Link to="/answer-list-page" onClick={connectWallet}>採点する</Link>
                </li>
                <li>
                    <Link to="/sbt-list-page" onClick={connectWallet}>SBT一覧</Link>
                </li>
            </ul>
        </div>
    );
}

export default Home;