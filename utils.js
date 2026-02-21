function iterationCopy(src) {
      let target = {};
      for (let prop in src) {
          if (src.hasOwnProperty(prop)) {
        if(typeof src[prop]=="object"){
            if(Array.isArray(src[prop])){
                target[prop] = clone(src[prop]);
          }else{
            target[prop] = iterationCopy(src[prop]);
          }
        }else{
          target[prop] = src[prop];
        }
      }
    }
  return target;
}

function clone(arr, i=0, r=[]){
  	if(typeof arr[i]=="object"){
    	if(Array.isArray(arr[i])){
      		r.push(clone(arr[i]))
    	}else{
      		r.push(iterationCopy(arr[i]))
    	}
  	}else if(typeof arr[i]!=="undefined"){
    	r.push(arr[i]);
  	}
  
  	if(typeof arr[i+1]!=="undefined"){
   		clone(arr,i+1,r);
	}
  return r;
}
function webRequest(url){
	let r;
	// XMLHttpRequest
	const Http = new XMLHttpRequest();
	Http.open("GET", url);
	Http.send();
	//
	Http.onreadystatechange = (e) => {
	  cl(Http.responseText)
	}
	/* Fetch
	https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
	*/
	fetch(url)
	  .then((response) => {
	    return response.json();
	  })
	  .then((data) => {
	    cl(data);
	  });

	return r;
}

function store(obj){
	localStorage.setItem(obj.key,obj.value)
}

function replace(str,term,replacement){
	let r="",len=string=>string.length;
	let m={
		indexes:[],
		match:[]
	};
    for(let i=0;i<len(str);i++){
        for(let x=0;x<len(term);x++){
         	if(str[i+x]==term[x]){
				m.indexes.push(i+x)
				if(len(m.indexes)==len(term)){
					m.match.push(i)
					r+=replacement;
					x=0;
					i+=len(term);
				}
         	}else{
         		m.indexes=[];
         	}
        }
       	if(typeof str[i] !== "undefined"){
       		r+=str[i];
       	}
    }
    return r;
}

function exclude(text,char){
    var r="";
    for(let i=0;i<text.length;i++){
      text[i]!=char?
      (r+=text[i]):0;
    }
    return r; 
}

function extra(str1,str2){
	let r="",len=string=>string.length;
    for(let i=0;i<len(str1);i++){
       	if(typeof str1[i] !== "undefined"){
       		r+=str1[i]+=str2;
       	}
    }
    return r;
}

function toLowerCase(str){
	let r="",len=string=>string.length;
    for(let i=0;i<len(str);i++){
    	r+=str[i].toLowerCase();
    }
    return r;
}

function toUpperCase(str){
	let r="",len=string=>string.length;
    for(let i=0;i<len(str);i++){
    	r+=str[i].toUpperCase();
    }
    return r;
}

function abcup(text){
	let r;
	// helpers
	function abcUp(char){
		let r="",abc="abcdefghijklmnopqrstuvwxyz";
		// pseudo: a->b z->a
		if(char==" "){
			r=" ";
		}else if(abc.indexOf(char)!=abc.length-1){ // last z=a
			r=abc[abc.indexOf(char)+1]; // get index add one read from string ^
		}else{
			r="a"; // one up a->b...
		}
		return r;
	}
	function toLowerCase(str){
		let r="",len=string=>string.length;
		for(let i=0;i<len(str);i++){
			r+=str[i].toLowerCase();
		}
		return r;
	}
	text=toLowerCase(text);
	for(let i=0;i<text.length-1;i++){
	  (r+=abcUp(text[i]))
	}
    return r;
}

function encode(str, type){
	let r;
	function l2i(str){
		let r="",len=str.length;
		let indxx={};
		for(let i=0;i<len-1;i++){
			if(typeof indxx[str[i]]=="undefined"){
				indxx[str[i]]=[i];
			}else{
				indxx[str[i]].push(i);
			}
		}
		cl(indxx);
		r=JSON.stringify(indxx);
		// multi occurance mapping here..
		return r;
	}
	switch(type){
		case "l2i": {
			r=l2i(str);
		}
		break;
		default:
			r=l2i(str);
		break;
	}
	return r;
}

