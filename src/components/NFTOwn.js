

const NFTOwn = ({nfts: nfts_put}) => {
    // const [nfts_put, setnfts_put] = useState([]);
  let nftaddresslist = 
  ['ETHEREUM:0x3355b82a425f0eeefc4b9b0070e865633e837be5', 
  'ETHEREUM:0xdbfee2557319206b719b16cad8d70f94743d1e52', 
  'ETHEREUM:0x22463d37eb3f88355f5e39870e2e681ba27f5e1d', 
  'ETHEREUM:0x90d697252c5b1e8abaadc5793f6ac59769169110', 
  'ETHEREUM:0x94cd85545744efd7045e553802a7f48873ef47cd', 
  'ETHEREUM:0x0dc764c89b0daabc8c24b66f0030d8785fc6aad3', 
  'ETHEREUM:0x67f7c240ea0b3600bcfccc67cb5369b790850f0b', 
  'ETHEREUM:0x5bb5f5b03c46897e45a56e504517db3e5456a053', 
  'ETHEREUM:0x924ba8a26dcff99121e878098b58f3f5502ba516', 
  'ETHEREUM:0x775f7cdce709325e34d12263050aa5f4055a1e36', 
  'ETHEREUM:0xe9ff258da3be9fe7d990092fdb353e7f37e0d3db', 
  'ETHEREUM:0x7cffb54615fe3fe8db785c79f063fe94f418eadd', 
  'ETHEREUM:0x3761dbe7374d93d389ef8cdd2c86082fa47e13f7', 
  'ETHEREUM:0xcd7c8d440d4c20933476dcb65e93d9bf4b432cb6', 
  'ETHEREUM:0xd4a2e9e1698301bbc2afc964b1327d90646a77a2', 
  'ETHEREUM:0xfb1f0b7caa44efee63b42580078ffdf3dc405723', 
  'ETHEREUM:0xedb73204c8c4a601e2d48b91758a684510adf013', 
  'ETHEREUM:0x24a10e2b50f44084deede5bc8f1072d8076145d4', 
  'ETHEREUM:0x75efe2ded19b099cbf3bcb6ef90ca86ab348181e', 
  'ETHEREUM:0x450fe1890b888aa7253a33af1cf3b65f31bd267e', 
  'ETHEREUM:0x6d68fb91cb49c9f9fab83cf99b9b76498418000e', 
  'ETHEREUM:0x50c2106f8da4b5551fb9e75a2550bae8480377e0', 
  'ETHEREUM:0xda26beac3eae848313c60999ef2cde930a570194', 
  'ETHEREUM:0x3576545dd0f3e8d812b76107d2d097e1c84bfa32', 
  'ETHEREUM:0x63bada7575de0cd708fb7a036d5ae54d384e04d8', 
  'ETHEREUM:0x3ef59b794ba17531cdbbd40669c365b57d162906', 
  'ETHEREUM:0xc961d2f98d91fc4b790c105630f35a5e52ca444a', 
  'ETHEREUM:0xf500ec2466633d9726204960ad081a79f00b603b', 
  'ETHEREUM:0x1e8eea879c8f5a6486a74087e392875ccf93795d', 
  'ETHEREUM:0xa681688863655cdcc822ec551fc7a1346803990b', 
  'ETHEREUM:0x7f99566cb7d06287b7bcafed482543b6a59be957', 
  'ETHEREUM:0xde268367bddc87df4e040aaee1a1e7403c4ab37d', 
  'ETHEREUM:0x9eeacaebcf5461992a480b3194289af0c153643f', 
  'ETHEREUM:0x1ff75c616264063e4eee682470a73371323828fa', 
  'ETHEREUM:0xa079fe7f98caacd0c00e11932194e79f2ce7b95b', 
  'ETHEREUM:0x0aee191f3c56fda8a2d0b0c55854cb0f45fe561d', 
  'ETHEREUM:0x7573654e3dc56abb435837b57c810f89da92c3e7', 
  'ETHEREUM:0xe8f8f48f43c09409e30de6ea75892536be17a807', 
  'ETHEREUM:0x4710fc66722929fb5b55541b7902f68e92dfb0d1', 
  'ETHEREUM:0x40018f21f9f34bc7e814319ece0b3dc3dc5c1e7a', 
  'ETHEREUM:0x2636f828daeeae0a727fe8cda3382a2b1cbcf070']

    var ans = [];
    let final = false;
    console.log('nfts_put',nfts_put)

    {nfts_put.map((nft) => {
        // console.log(nft)

        // ans.push(nftaddresslist.includes(nft.contract))
        // console.log(ans)
        // if(ans.includes(true)) {
        //     final = true
        // } 

        nftaddresslist.map((addr) =>{
            // console.log(addr)
            // console.log(addr, nft.contract, typeof(addr), typeof(nft.contract), addr==nft.contract, addr===nft.contract, addr.localeCompare(nft.contract) )
            if(addr == nft.contract){
                final = true
            }
            // if(addr == nft.contract){
            //     final = true
            // }
        })

    })}
    // console.log('final',final);

//   return (
//        <div className='text'>
//         Having the KTTC NFT : {final}
//        </div>
//   )
    return final
}

// export {final};
export default NFTOwn