let numNfts = []; // a variable to hold NFTs

function mintNFT(name, created_by, date_created, sold_by, sold_to) { // a blueprint for getting NFTs Data
    const nft = {
        Name: name,
        createdBy: created_by,
        dateCreated: date_created,
        soldBy: sold_by,
        soldTo: sold_to
    };
    numNfts.push(nft);
};

function listNFTs () {
    for(let i = 0; i<numNfts.length; i++){ // using a for loop to print the NFTs Details
        console.log("NFT No." + (i + 1));
        console.log("Name: " + numNfts[i].Name);
        console.log("Created By: " + numNfts[i].createdBy);
        console.log("Date Created: " + numNfts[i].dateCreated);
        console.log("Sold By: " + numNfts[i].soldBy);
        console.log("Sold To: " + numNfts[i].soldTo);
        console.log('\n');
    };
};

function getTotalSupply() { // prints total number of NFTs minted
    console.log("Total NFTs minted : " + numNfts.length); 
};

mintNFT('Everydays: The First 5000 Days', 'Beeple', '20 May 2020', 'Adam Neuman', 'Leonardo Di Caprio'); //passing Actual Data of NFT in Blueprint
mintNFT('The Merge', 'pak', '19 March 2021', 'Layla Sen', 'Nora Simmons');
mintNFT('Bored Ape ', 'Yuga Labs', 'April 23 2021', 'OpenSea', 'Tom Cruise');

listNFTs(); // Printing Data of NFTs

getTotalSupply(); // Printing Total Number of NFTs minted
