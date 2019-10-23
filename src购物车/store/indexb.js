export default {
  deepClone(obj) {
   let _obj = JSON.stringify(obj),
     objClone = JSON.parse(_obj);
   return objClone
 }
}