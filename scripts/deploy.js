const main = async () => {
    const domainContractFactory = await hre.ethers.getContractFactory('Domains');
    const domainContract = await domainContractFactory.deploy("sys");
    await domainContract.deployed();
  
    console.log("Contract deployed to:", domainContract.address);
  
    // CHANGE THIS DOMAIN TO SOMETHING ELSE! I don't want to see OpenSea full of bananas lol
    let txn = await domainContract.register("skynet",  {value: hre.ethers.utils.parseEther('0.1')});
    await txn.wait();
    console.log("Minted domain skynet.sys");
  
    txn = await domainContract.setRecord("skynet ", "Am I a skynet bot or a ninja??");
    await txn.wait();
    console.log("Set record for skynet.sys");
  
    const address = await domainContract.getAddress("skynet");
    console.log("Owner of domain skynet:", address);
  
    const balance = await hre.ethers.provider.getBalance(domainContract.address);
    console.log("Contract balance:", hre.ethers.utils.formatEther(balance));
  }
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();