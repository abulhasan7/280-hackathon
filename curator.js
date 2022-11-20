let json = require('./inputjson.json');
let fs = require('fs')
let India = {};
let China = {};
let us = {}
let index = 1;
for(let jsonobj of json){
    let temp = {};
    for(let key of Object.keys(jsonobj)){
        temp[key.substring(0,4)] = jsonobj[key] ==".."?"":jsonobj[key];
    }
    if(index==2){
        us = temp;
    }else if(index ==1){
        India = temp;
    }else{
        China = temp;
    }
    index++;
}
console.log(India);
fs.writeFile('output.json', JSON.stringify(China), err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });