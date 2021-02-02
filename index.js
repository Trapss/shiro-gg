"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
let baseUrl = "https://shiro.gg/api/";
async function returnImageURL(apiEndpoint) {
    let shiroResponce = await node_fetch_1.default(baseUrl + apiEndpoint).then((res) => res.json());
    if (apiEndpoint.includes('nsfw')) {
        shiroResponce.nsfw = true;
    }
    if (!shiroResponce)
        return console.error("No Responce from Shiro.gg");
    else if (shiroResponce.code !== 200)
        return console.error("Invalid Responce Code");
    else if (!shiroResponce.url)
        return console.error("Missing Image URL");
    else
        return await shiroResponce;
}
module.exports = {
    fetchEndpoints: async function detchEndpoints() {
        let endpoints = await node_fetch_1.default(baseUrl + "endpoints").then((res) => res.json());
        return endpoints;
    },
    fetchImage: async function fetchImage(endpointParameter) {
        let endpointFinal;
        let endpoints = await node_fetch_1.default(baseUrl + "endpoints").then((res) => res.json());
        if (endpoints.sfw.includes("images/" + endpointParameter.toLowerCase())) {
            endpointFinal = "images/" + endpointParameter;
            let responce = await returnImageURL(endpointFinal);
            return await responce;
        }
        else if (endpoints.nsfw.includes("images/nsfw/" + endpointParameter)) {
            endpointFinal = "images/nsfw/" + endpointParameter;
            return await returnImageURL(endpointFinal);
        }
        else {
            return console.error("Invalid Endpoint");
        }
    },
};
