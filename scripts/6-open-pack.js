import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = "0xa7E48277D862872698BE45EBf662c26c5968d05E";
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log("Opening the pack...");
  const opened = await packModule.open("0");
  console.log("Opened the pack!");
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}
