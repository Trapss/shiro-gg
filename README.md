# shiro-gg  
this is a basic api wrapper node module for the Shrio.gg API.  
It is capable of fetching all endpoints or fetching an image.  
   
##Example Usage
  
Fetching an image URL  
```js
async function x() {
  let image = await shiro.fetchImage("pat");
  console.log(image);
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
More example usage can be found in the [shiro.gg demonstration bot](https://github.com/trapss/shiroDemo) 