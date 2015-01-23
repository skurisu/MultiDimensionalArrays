module.exports = {
  generate_1d : function(param) {
    var result = [];

    if(param === undefined){
      param = 3;
    } 
    if (typeof param !== 'number') {
      return result;
    }
    // code logic here 
    while(result.length < param){
      result.push(Math.round(Math.random()));
    }
    return result;
  },

  generate_2d : function (param1,param2) {
    var result = [];

    //if param1 and param2 are undefined 
    if(param1 === undefined) { param1 = 3; }
    if(param2 === undefined) { param2 = 3; }

    if(typeof param1 !== 'number' || typeof param2 !== 'number') {
      return result;
    }
    //code logic here
    //determine array length
    while(result.length < param1) {
      result.push(this.generate_1d(param2));
    }

    return result; 
  },

  generate_3d : function (param1,param2,param3) {
    var result = [];

    if(param1 === undefined) { param1 = 3; }
    if(param2 === undefined) { param2 = 3; }
    if(param3 === undefined) { param3 = 3; }

    if(typeof param1 !== 'number' || typeof param2 !== 'number' || typeof param3 !== 'number') {
      return result;
    }
    //code logic here
    //determine array length
    while(result.length < param1) {
      result.push(this.generate_2d(param2,param3));
    }
    
    return result;
  }


};

