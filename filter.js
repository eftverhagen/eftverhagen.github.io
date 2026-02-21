var cl = console.log;
	
function max(array) {
	return array.reduce((a, b) => {
	  return a >= b ? a : b;
	}, 0);
}

 function isPossible(a, b){
	 var r = true;
	 var lr = ["right", "left"];
	 var ud = ["up", "down"];
	 var impossible = [lr, ud];
	 
	 impossible.forEach(imp => {
   if(imp.indexOf(a) !== -1 &&
	imp.indexOf(b) !== -1){
		 r = false;
		}
   });
   return r;
}
// thecc is random \\ controls \\ not going to use
function sequenceValid(seq, off){
	var r = false;
	var random = Math.random();
	
	if(random < 0.30){
		cl(1);
		
	 r = !seq.map((d, idx)=> {
	  return isPossible(d, seq[idx+1]);
  }).includes(false);
  
	}else{
	 seq.forEach((d, idx)=> {
	   if(isPossible(d, seq[idx+1]) === false){
		r = false;
	   }
  });
  
	}
	return	off ? true : r;
}