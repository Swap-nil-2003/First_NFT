async function main() {
  const MyNFT = await ethers.getContractFactory("MyNFT");

  // Start deployment, returning a promise that resolves to a contract object
  const myNFT = await MyNFT.deploy();
  console.log("Contract deployed to address:", myNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
//0x6FB6Def40ba3f0888da369400CB9750AeFd58E6c

//1st nft minted at hash: 0xde433d5664aa93b5cacabd24bafcdf41286cfa92cb480eacb2922bfccdb952ed 
//2nd nft minted at hash: 0xa71a488c97378e83b4ef57e9470905fc75dacff12e9997b803f6106b8e2eae4c 
//3rd nft minted at hash: 0x16192f00b4c4eb29310cd532ee43fcbc8eada85512a931ed4bace4f021da27a7 