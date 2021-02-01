const shiro = require(".");

async function x() {
  let image = await shiro.fetchImage("pat");
  console.log(image);
}

x();
