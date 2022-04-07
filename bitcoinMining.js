function bitcoinMining(data) {
    let goldValue = 67.51;
    let bitvointValue = 11949.16;

    let bitcoinCounter = 0;
    let firstDay;
    let totalMoney = 0;
    for (let i = 1; i <= data.length; i++) {
        let goldMined = data[i - 1];
        if (i % 3 === 0) {
            goldMined *= 0.7;
            totalMoney += goldMined * goldValue;
        } else {
            totalMoney += goldMined * goldValue;
        }
        if (totalMoney >= bitvointValue) {
            if (firstDay === undefined) {
                firstDay = i;
            }
            bitcoinCounter += parseInt(totalMoney / bitvointValue);
            totalMoney -= parseInt(totalMoney / bitvointValue) * bitvointValue;

        }
    }
    console.log(`Bought bitcoins: ${bitcoinCounter}`);
    if(firstDay!==undefined){
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}
bitcoinMining([3124.15, 504.212, 2511.124]);