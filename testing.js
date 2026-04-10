
/* unit to define mental related factors */
var testArr1=[ // the data "PMCc"
	["1","perception",2,4,6], // one item / mental state(unit) msu
	["2","mood",4,2,5],
	["3","consciousness",3,3,4],
	["4","cognition",5,4,4]
];

function test(arr){
	b(view,rule(arr[0]))
}

/* CLICK REGION


e(root,"mousedown",function(){

	// define region
	if(this.clientX>200){
		cl("     hello")
	}
	
	var x=this.clientX;
	var y=this.clientY;
	
	if(x>200 && y>200){
		cl("     hi")
	}
})

*/

function webRequest(url){
	let r;
	// XMLHttpRequest // Headers?
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

function extra(str1,str2){
	let r="",len=string=>string.length;
    for(let i=0;i<len(str1);i++){
       	if(typeof str1[i] !== "undefined"){
       		r+=str1[i]+=str2;
       	}
    }
    return r;
}