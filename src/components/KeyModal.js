
import '../style/KeyModal.css';
import React, { useEffect, useRef, useState } from "react";
import NFTOwn from './NFTOwn';
import { EthereumClient,w3mConnectors,w3mProvider } from "@web3modal/ethereum";
import { Web3Modal, Web3Button as MyWeb3Button, useWeb3Modal  } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig  } from "wagmi";
import { arbitrum, mainnet, polygon, sepolia } from "wagmi/chains";
import { useAccount, useContract, useSigner } from 'wagmi'

let final = false;


const chains = [arbitrum, mainnet, polygon, sepolia]
const projectId = '9def8a39725e00775bbb10058e68b380'

// Wagmi client
const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, version: 2, chains }),
    provider
});
// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);

// 모달의 재사용 필요 시 구조를 바꾸자. (모달 안 내용을 children으로)

const KeyModal = ({setModalState}) => {

    const closeModal = () => {
        setModalState(false);
        setisWalletModalOpen(false);
        setisTryConnectWallet(false);
        // disconnect2WalletConect(false);
        Web3Modal.close();
    }     
    const[isWalletModalOpen, setisWalletModalOpen] = useState(true)
    const[CDkey, setCDkey] = useState("check the KTTC NFT")
    const[isTryConnectWallet, setisTryConnectWallet] = useState(false)


    const [walletAddress, setWalletAddress] = useState(null)
    const [nfts, setNfts ] = useState([])
    let [cdvalue, setcdvalue] = useState(null)
    let [strcdvalue, setstrcdvalue] = useState(null)
    const { isOpen, open, close, setDefaultChain } = useWeb3Modal();
    

    // Options {
    //     route: "Account" | "ConnectWallet" | "Help" | "SelectNetwork";
    //   }

    const mounted = useRef(false);


      
    //connect with MetaMask / Coinbase wallet
    const connectWallet = () => {
        if (typeof window.ethereum !== 'undefined' ) {
            // debugger
            const accounts = window.ethereum.request({ method: 'eth_requestAccounts' })
                                                    .catch((error) => { if (error.code === 4001) {
                                                                            // EIP-1193 userRejectedRequest error
                                                                            console.log('Please connect to MetaMask.');
                                                                        } else {
                                                                            console.error(error);
                                                                        }
                                                                        });
            // debugger
            setWalletAddress(accounts[0])
            // console.log(walletAddress)
        }
        // debugger
    }
    

    const connect2WalletConect = async () => {
        
        if (typeof ethereumClient !== 'undefined') {
            // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setisTryConnectWallet(true)
            // setWalletAddress(accounts[0])
            // return <MyWeb3Button/>


            await open("ConnectWallet");
            setDefaultChain(mainnet);
            //   const address = await ethereumClient.getAccount();
            //   setWalletAddress(address)

            //   debugger
            setisWalletModalOpen(false)
            }

    }
    
    const disconnect2WalletConect = async () => {
        setisTryConnectWallet(false)
        close();
    }

    const getNftData = async () => {
        if(!walletAddress) return;
        // console.log(walletAddress);
        // console.log(typeof(walletAddress));
        // console.log('https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:'+walletAddress);
        const response = await fetch('https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:'+walletAddress)
        
        // Need to just get the API from Goerli Network to gather our NFT
        // const response = await fetch('https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0x58d56d4DC321DAA5b3296f9179A1727b7b681703') //this one using Real ethereum address
        
        const data = await response.json()
        
        console.log('response data', data)
        console.log('walletAddress',walletAddress)
        setNfts(data.items)
        setisWalletModalOpen(false)
      }

    useEffect(() => {
        getNftData()
    }, [walletAddress])
    
    useEffect(() => {
        if(nfts.length<=0){
        mounted.current = true;
        }else{
        console.log('nfts len',nfts.length)
        final = NFTOwn({nfts});
        }
    }, [nfts])

    useEffect(() => {
        if(final)
        {console.log('final2', final)
        console.log('walletAddress', walletAddress)

        cdvalue	= parseInt(parseInt(walletAddress % 100000000000, 16)/100)*4339
        console.log('walletAddress', cdvalue)

        strcdvalue = cdvalue.toString()
        strcdvalue = strcdvalue.slice(0,-12).padStart(4,'0') +'-'+strcdvalue.slice(-12,-8) + '-' +strcdvalue.slice(-8,-4) + '-' +strcdvalue.slice(-4)
        console.log('walletAddress', strcdvalue)
        setCDkey(strcdvalue)
        }else{
        setCDkey("check the KTTC NFT")
        }
    }, [final, nfts])

    useEffect(() => {
        setcdvalue(setcdvalue)
        setstrcdvalue(strcdvalue)
        console.log('show strcdvalue', strcdvalue)
    }, [setcdvalue])

    console.log('final1',final);

    useEffect(() => {
        document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
        return () => {
          const scrollY = document.body.style.top;
          document.body.style.cssText = '';
          window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
      }, []);      

    useAccount({
    onConnect({ address }) {
        setWalletAddress(address);
        console.log('Connected', { address });
    },
    })

    function HomePage() {
        return <MyWeb3Button />
      }
      
    return (
        // 모달 외부
        <div className='modal' onClick={closeModal}>
            <div className='cdkey_container' onClick={(e) => e.stopPropagation()}>
                <img className='cdkey_alert' src='./images/imgModal/cdkey_alert.webp' alt="mmai games demo"/>
                <div className='cdkey_number'>
                    <span>{CDkey}</span>
                </div>
            </div>
            {/* // 모달 내부 */}
            { isWalletModalOpen && <div className='modal_body' onClick={(e) => e.stopPropagation()}>
                {/* 흰 바탕 부분 */}
                <div className='modal_front'>
                    <img onClick={closeModal} className='modal_close_btn' src='./images/imgModal/close_btn.webp' alt='modal close'/>
                    <div className='modal_content'>
                        <img className='madal_mmai_logo' src='./images/imgModal/modal_top_logo.webp' alt='MMAI'/>
                        <div className='modal_header'>Connect Your Wallet</div>
                        <div className='connect_form'>
                            <div className='metamask'>
                                <img className='connect_form_img' src='./images/imgModal/Metamask.webp' alt='Connect Wallet on metamask' />
                                <div className='connect_form_name' onClick={connectWallet} >MetaMask</div>
                            </div>
                            <div className='coinbase'>
                                <img className='connect_form_img'  src='./images/imgModal/coinbase.webp' alt='Connect Wallet on coinbase' />
                                <div className='connect_form_name' onClick={connectWallet} >Coinbase</div>
                            </div>
                            <div className='walletconnect'>
                               { !isTryConnectWallet && <img className='connect_form_img'  src='./images/imgModal/walletconnect.webp' alt='Connect Wallet on walletconnect'  />}
                               { !isTryConnectWallet && <div className='connect_form_name' onClick={connect2WalletConect} > WalletConnect </div>}
                                <WagmiConfig client={wagmiClient}>
                                    { isTryConnectWallet &&  <HomePage />}
                                </WagmiConfig> 
                                
                            </div>
                        </div>
                        <div className='modal_footer'>Connect your wallet <br /> For check if you have MMAI Pureworld Key to the city</div>
                    </div>
                </div>
                <div className='modal_logo_footer'><img className='modal_logo_footer_img' src='./images/imgModal/mmai_logo.webp' alt='By MMAI'/></div>
            </div>}
            <Web3Modal projectId = {projectId} ethereumClient = {ethereumClient}/>
        </div>
        
        
    );
};

export default KeyModal;