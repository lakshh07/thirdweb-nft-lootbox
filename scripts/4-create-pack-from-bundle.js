import { readFileSync } from "fs";
import { sdk } from "./helpers.js";

async function main() {
  const bundleModuleAddress = "0xE033E7B0ee41250152a22964a7Cf608A55acd417";
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  const packModuleAddress = "0xa7E48277D862872698BE45EBf662c26c5968d05E";
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log("Getting all NFTs from bundle...");
  const nftsInBundle = await bundleModule.getAll();

  console.log("NFTs in bundle:");
  console.log(nftsInBundle);

  console.log("Creating a pack containing the NFTs from bundle...");
  const created = await packModule.create({
    assetContract: bundleModuleAddress,
    metadata: {
      name: "Super Cars Pack!",
      image: readFileSync("./assets/cars.jpeg"),
    },
    assets: nftsInBundle.map((nft) => ({
      tokenId: nft.metadata.id,
      amount: nft.supply,
    })),
  });

  console.log("Pack created!");
  console.log(created);
}

try {
  await main();
} catch (error) {
  console.error("Error minting the NFTs", error);
  process.exit(1);
}
