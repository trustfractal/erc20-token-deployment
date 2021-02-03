require('dotenv').config();

async function main() {
  const {
    HEX_PRIVATE_KEY,
    TOKEN_NAME,
    TOKEN_SYMBOL,
    TOKEN_INITIAL_SUPPLY,
  } = process.env;

  // We get the contract to deploy
  const FCLToken = await hre.ethers.getContractFactory("FCLToken");
  const fclToken = await FCLToken.deploy(
    TOKEN_NAME,
    TOKEN_SYMBOL,
    TOKEN_INITIAL_SUPPLY,
  );

  await fclToken.deployed();

  console.log("FCLToken deployed to:", fclToken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
