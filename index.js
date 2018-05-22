function lowerCaseDrivers(arr){
  return arr.map(
    function(elem){
      return elem.toLowerCase();
    }
  );
}

function nameToAttributes(arr){
  return arr.map(
    function(elem){
      const nameArr = elem.split(" ");
      return Object.assign({}, {firstName: nameArr[0], lastName: nameArr[1]});
    }
  );
}

function attributesToPhrase(){
}
