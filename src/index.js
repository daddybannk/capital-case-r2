String.prototype.toCapitalCase = function(ignoreCase = true) {
    function isCharacter(text) {
    	return text.search(/[^a-zA-Z]+/) === -1;
    }
    function foo(d) {
      let state = 0;
      const myarray = d.split("");
      for (let i = 0;i< myarray.length;i++) {
        const ch = myarray[i]
        if (state == 0 && isCharacter(myarray[i]) ){
            myarray[i] = ch.toUpperCase()
        	state = 1;
        }
      	else if (state == 0 && !isCharacter(myarray[i])) {
            state = 3; 
        }
      	else if (state == 1 && isCharacter(myarray[i])) {
            state = 2; 
        }
      	else if (state == 1 && !isCharacter(myarray[i])) {
            state = 3; 
        } 
      	else if (state == 2 && isCharacter(myarray[i])) {
            state = 2; 
        } 
      	else if (state == 2 && !isCharacter(myarray[i])) {
            state = 3; 
        } 
      	else if (state == 3 && isCharacter(myarray[i])) {
            myarray[i] = ch.toUpperCase()
        	state = 1;
        } 
      	else if (state == 3 && !isCharacter(myarray[i])) {
            state = 3; 
        } 
      }
		return myarray.join("");
    }
  	const value = ignoreCase ? this : this.toLowerCase()
    return foo(value);
}