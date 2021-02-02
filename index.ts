import fetch from "node-fetch";

let baseUrl = "https://shiro.gg/api/";

interface Endpoints {
  sfw: string[];
  nsfw: string[];
}

interface ImageResponce {
  nsfw: boolean;
  code: number;
  url: string[];
}

async function returnImage(apiEndpoint: string) {
  let shiroResponce: ImageResponce = await fetch(
    baseUrl + apiEndpoint
  ).then((res) => res.json());

  if (apiEndpoint.includes("nsfw")) {
    shiroResponce.nsfw = true;
  } else {
    shiroResponce.nsfw = false;
  }

  if (!shiroResponce) return console.error("No Responce from Shiro.gg");
  else if (shiroResponce.code !== 200)
    return console.error("Invalid Responce Code");
  else if (!shiroResponce.url) return console.error("Missing Image URL");
  else return await shiroResponce;
}

module.exports = {
  fetchEndpoints: async function detchEndpoints() {
    let endpoints: Endpoints = await fetch(baseUrl + "endpoints").then((res) =>
      res.json()
    );

    return endpoints;
  },

  fetchImage: async function fetchImage(endpointParameter: string) {
    let endpointFinal: string;
    let endpoints: Endpoints = await fetch(baseUrl + "endpoints").then((res) =>
      res.json()
    );

    if (endpoints.sfw.includes("images/" + endpointParameter.toLowerCase())) {
      endpointFinal = "images/" + endpointParameter;
      return await returnImage(endpointFinal);
    } else if (endpoints.nsfw.includes("images/nsfw/" + endpointParameter)) {
      endpointFinal = "images/nsfw/" + endpointParameter;
      return await returnImage(endpointFinal);
    } else {
      return console.error("Invalid Endpoint");
    }
  },
};
