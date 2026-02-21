/*
Filename: patterns.js
Function: generate pattern sequences
*/

var cl = console.log;

function matches(arr){
	var matches = [];
	for(var i=0, j = 1; i < arr.length; i++, j++){
			var left = arr.slice(i,j);
			var right = arr.slice(j);

		for(var x=0; x < right.length; x++){
		  matches.push(Array(left[0], right[x]));
		}
	}
  return matches;
}

function permutation(array) {
    function p(array, temp) {
        var i, x;
        if (!array.length) {
            result.push(temp);
        }
        for (i = 0; i < array.length; i++) {
            x = array.splice(i, 1)[0];
            p(array, temp.concat(x));
            array.splice(i, 0, x);
        }
    }

    var result = [];
    p(array, []);
    return result;
}