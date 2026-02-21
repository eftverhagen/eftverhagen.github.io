saveButton=e(button("Save"),"click",function(){
	var contents=Array.from(document.querySelectorAll(".block"));
		contents=JSON.stringify(contents.map(elm=>{
		return elm.textContent;
	}))
	Storage.save("template",contents);
	cl("Contents have been saved..")
});

b(view,saveButton)

newButton=e(button("New"),"click",function(){
	var contents=Array.from(document.querySelectorAll(".block"));
		contents.push("Type here...");
		contents=JSON.stringify(contents.map(elm=>{
		return elm.textContent;
	}))
	Storage.save("template",contents);
})

b(view,newButton)

function recordTimestamp(evt){
	if(!mState["timestamps"]){
		mState["timestamps"]=[];
	}
	return mState["timestamps"] // outer scope
			.push({
				timestamp:Date.now(),
				key:evt.key, // "keycode conversion,
			});
}
scr1=block("fffffffffffffffffffade away");

e(scr1,"keypress",function(){
	recordTimestamp(this)
})

function compareTimestamp(a,b){
	return b-a;
}

src=mState.timestamps;
mState.timestamps.map(function(a,i){
	var r;
	if(typeof mState.timestamps[i+1]=="undefined"){
		r=0;
	}else{
		r=compareTimestamp(
			a.timestamp,
			mState.timestamps[i+1].timestamp
		);
	}
	return {
		diff:r,
		key:a.key,
	};
});

e(scr1,"click",function(){
	var timestamps=mState.timestamps.map(function(a,i){
		var r;
		if(typeof mState.timestamps[i+1]=="undefined"){
			r=0;
		}else{
			r=compareTimestamp(
				a.timestamp,
				mState.timestamps[i+1].timestamp
			);
		}
		return {
			diff:r,
			key:a.key,
		};
	});
	timestamps.map(function(obj,idx){
		setTimeout(function(){
			scr1.textContent+=obj.key;
		},obj.diff*idx)
	})
	cl("Done..")
})

/*
	sidebar for text selection listing
*/

let keys = {};
let keysPressed = '';
/*
document.onkeydown = handleKey;
document.onkeyup = handleKey;
*/
function handleKey(e) {
  // Indicate key pressed
  if (e.type == 'keydown') {
    keys[e.key] = true;
  }
  else {
    keys[e.key] = false;
  }

  // Run on all keys and determine which are pressed
  keysPressed = '';
  for (const [key, value] of Object.entries(keys)) {
    if (value) {
      keysPressed += key;
    }
  }

  // Show key presses
  s("view").innerHTML = keysPressed;
}

function generator(type,properties){
	function doThis(){}
	function listValues(){}

	var output={
		id:"hello",
		type,
		properties:listValues,
		init:doThis,
	}["id"](evt); // if method / static value
	
	return output;
}

//b(view,img("./0xf.gif"))

function rule(col){ // generate a line
	var r=o({class:"rule"}); // <-- the rule node
	col.forEach(function(val){ // the values fro the array (e.g. testArr1)
		b(r,o({class:"cl",text:col})) // add placeholders to the rule node
	})
	return r;
}

var testArr1=[ // the data
	["1","perception",2,4,6], // one item
	["2","mood",4,2,5],
	["3","consciousness",3,3,4],
	["4","cognition",5,4,4]
];

/**testArr1.forEach(function(item){
	b(view,rule(item)) // updating the view
})*/

b(view,rule(["1","Awareness","4"]))


// IMPLEMENT SERVICE FOR MENU 