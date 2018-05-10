var conf = require('../conf.js');

function getUrl(rout,params){
  var param = "";
  if (isEmpty(params)) {
    param = urlParamCombine(params);
  }
  // https://${conf.baseDomain}${route}${param}
  return 'http://' + conf.baseDomain + rout+param
}

function isEmpty(obj){
  if (typeof(obj) == "undefined" || (!obj && typeof(obj) != "undefined" && obj != 0)) {
    return true;
  }
  for (let i in obj) {
    return false;
  }
  return true;
}

function urlParamCombine(arr){
  var param = "?";
  for (var key in arr){
    if (typeof(arr[key]) == 'array'|| typeof(arr[key]) == 'object') {
      for(var k in arr[key]){
        param += (k+"="+arr[key][k]+"&");
      }
    }else{
      param += (key + "=" + arr[key]+"&");
    }
  }
  return param.substr(0,param.length - 1);
}

module.exports={
  isEmpty:isEmpty,
  getUrl:getUrl
}