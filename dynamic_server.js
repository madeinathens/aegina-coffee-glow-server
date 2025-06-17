const express = require("express");
const app = express();

const images = [
  "https://turquoise-central-tick-211.mypinata.cloud/ipfs/bafkreihnv447wsypmqebhy3bfcl565c4u2gde7pdk2qqolyacoaxctaeb4",
  "https://turquoise-central-tick-211.mypinata.cloud/ipfs/bafkreih4eeiijzgjhd37apsxncrmvzlylmnn3kp4agglflafyxo4ei7dci",
  "https://turquoise-central-tick-211.mypinata.cloud/ipfs/bafkreiedj4pttzh7znrfwrx753x4gskqpogwt62qdm6tf2dakezpuex3im",
  "https://turquoise-central-tick-211.mypinata.cloud/ipfs/bafkreidzcki427sgtt4gq3blpbr4zjemdkco4vfh6perdefmyqo5in4qne",
];

app.get("/metadata", (req, res) => {
  const hour = new Date().getHours() + 3;
  const index = Math.floor((hour % 24) / 6);
  res.json({
    name: "Aegina Coffee Glow Dynamic",
    description: "A dynamic NFT that changes every 6 hours.",
    image: images[index],
    attributes: [{ trait_type: "Dynamic", value: "Changes every 6 hours" }],
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
