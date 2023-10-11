console.log("Hello Node World!");
//console.log(Object.entries(process.env));
for (let keyval of Object.entries(process.env)) {
  console.log(keyval);
  //console.log(key, ": ", process.env[key]);
}
