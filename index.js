import { ethers } from "ethers";

(async () => {
    const connection = new ethers.providers.JsonRpcProvider("https://data-seed-prebsc-1-s1.binance.org:8545/");

    const gasPrice = connection.getGasPrice();
    // const wallet = ethers.Wallet.fromMnemonic("radar blur cabbage chef fix engine embark joy scheme fiction master release");
    // const signer = wallet.connect(connection);

    var privateKey = '792b48bb0ae271453431c38015d00a5d88e1377a0fcf71efe01e7cdddf180813';
    var wallet = new ethers.Wallet(privateKey);
    const signer = wallet.connect(connection);

    console.log(wallet.address);

    const recipient = "0x1BaB8030249382A887F967FcAa7FE0be7B390728";
    const tx = {
        from: wallet.address,
        to: recipient,
        value: ethers.utils.parseUnits('0.001', 18),
        gasPrice: gasPrice,
        gasLimit: ethers.utils.hexlify(100000),
        nonce: connection.getTransactionCount(wallet.address, 'latest')
    };

    const transaction = await signer.sendTransaction(tx);

    console.log(transaction);
    console.log(ethers.utils.parseUnits('0.001', 18));
    console.log(gasPrice);

    

    // var privateKey = '0x0123456789012345678901234567890123456789012345678901234567890123';
    // var wallet = new ethers.Wallet(privateKey);
    // const signer = wallet.connect(wallet.providers = ethers.providers.getDefaultProvider());

    // const recipient = "0x1BaB8030249382A887F967FcAa7FE0be7B390728";
    // const tx = {
    //     from: wallet.address,
    //     to: recipient,
    //     value: ethers.utils.parseUnits('0.001', 'ether'),
    //     gasLimit: ethers.utils.hexlify(100000),
    // };

    // const transaction = await signer.sendTransaction(tx);

    // console.log(transaction);
})();
