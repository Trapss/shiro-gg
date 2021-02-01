const shiro = require(".");

async function x() {
  let image = await shiro.fetchImage("pat");
  console.log(image);
}

async function y() {
  let endpoints = await shiro.fetchEndpoints();;
  console.log(endpoints);
}

x();
y();
