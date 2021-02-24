# shiro-gg  
this is a basic api wrapper node module for the Shrio.gg API.  
It is capable of fetching all endpoints or fetching an image.  

## Responce Structure  
```js
  Image {
    "code": "int",
    "nsfw": "boolean",
    "url": "https://shiro.gg/api/images/xxx"
  }
```

200 is the successful response code.  

## Installing  

Run in your project directory  
```npm i https://github.com/Trapss/shiro-gg```

## Example Usage

Fetching an image URL  
```js
async function x() {
  let image = await shiro.fetchImage("nom");
  if (image.code == 200)
    console.log(image.url);
  else return console.log("There was an error.")
}

x();
```  

Fetching all endpoints  
```js
async function y() {
  let endpoints = await shiro.fetchEndpoints();
  console.log(endpoints);
}

y();
```

Checking if an image is NSFW  
```js
async function z() {
  let image = await shiro.fetchImage("pat");
  if (image.nsfw) {
    console.log('image is nsfw')
  } else {
    console.log('image is not nsfw')
  }
}

z();
```  

Using in a Discord bot
```js
async function shiroImage(endpoint) {
  let imgObject = await shiro.fetchImage(endpoint);

  if (imgObject.code !== 200)
    return msg.channel.send('There was an error fetching your image.');

  if (imgObject.nsfw && !(msg.channel.nsfw))
    return msg.channel.send("This command may only be used in NSFW channels.");

  msg.channel.send(imgObject.url);
}
```
