import { readFileSync } from "fs";
import { sdk } from "./helpers.js";

async function main() {
  // Paste in the address from when you created the bundle collection module
  const bundleModuleAddress = "0xE033E7B0ee41250152a22964a7Cf608A55acd417";
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  console.log("Creating NFT batch...");

  const created = await bundleModule.createAndMintBatch([
    {
      metadata: {
        name: "Dodge challenger Srt",
        description: "A pretty fancy car!",
        image: readFileSync("./assets/dodge.jpeg"),
        properties: {
          rarity: "super rare",
          fanciness: 10,
        },
      },
      supply: 1100,
    },
    {
      metadata: {
        name: "Lamborghini",
        description: "A pretty fancy car!",
        image: readFileSync("./assets/lamborghini.jpeg"),
        properties: {
          rarity: "a bit rare",
          fanciness: 8,
        },
      },
      supply: 1000,
    },
    {
      metadata: {
        name: "Mustang GT",
        description: "A super fancy car!",
        image: readFileSync("./assets/mustang.jpeg"),
        properties: {
          rarity: "a bit super rare!",
          fanciness: 9,
        },
      },
      supply: 900,
    },
  ]);

  console.log("NFTs created!");
  console.log(JSON.stringify(created, null, 2));
}

try {
  await main();
} catch (error) {
  console.error("Error minting the NFTs", error);
  process.exit(1);
}
