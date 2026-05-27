#!/usr/bin/env node
const{predict}=require("./engine/elo");
const[,,t1,t2]=process.argv||["Brazil","Serbia"];
const p=predict(1500,1500);
console.log(t1+": "+(p*100).toFixed(1)+"% | "+t2+": "+((1-p)*100).toFixed(1)+"%");
