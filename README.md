# shiro-gg  
this is a basic api wrapper node module for the Shrio.gg API.  
It is capable of fetching all endpoints or fetching an image.  
   
## Installing  

Run in your project directory  
```npm i https://github.com/Trapss/shiro-gg```

## Example Usage
  
Fetching an image URL  
```js
async function x() {
  let image = await shiro.fetchImage("pat");
  console.log(image.url);
}

x();
```  

Fetching all endpoints  
```js
async function y() {
  let endpoints = await shiro.fetchEndpoints();;
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