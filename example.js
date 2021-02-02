const shiro = require(".");

async function x() {
  let image = await shiro.fetchImage("nom");
  console.log(image.url);
}

async function y() {
  let endpoints = await shiro.fetchEndpoints();;
  console.log(endpoints);
}

async function z() {
  let image = await shiro.fetchImage("pat");
  if (image.nsfw) {
    console.log('image is nsfw')
  } else {
    console.log('image is not nsfw')
  }
}

x();
y();
z();
