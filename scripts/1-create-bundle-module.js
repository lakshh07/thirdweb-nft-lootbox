import { getApp } from "./helpers.js";

async function main() {
  const app = await getApp();

  console.log("Deploying bundle collection module...");

  const bundleModule = await app.deployBundleModule({
    name: "Lootbox Bundle",
    sellerFeeBasisPoints: 100,
  });

  console.log(
    `Deployed bundle collection module with address ${bundleModule.address}`
  );
}
// 0xE033E7B0ee41250152a22964a7Cf608A55acd417
// Deployed bundle collection module with address 0xE033E7B0ee41250152a22964a7Cf608A55acd417

try {
  await main();
} catch (error) {
  console.error("Error creating the bundle collection module", error);
  process.exit(1);
}
