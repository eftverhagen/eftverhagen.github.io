saveButton=e(button("Save"),"click",function(){
	var contents=Array.from(document.querySelectorAll(".block"));
		contents=JSON.stringify(contents.map(elm=>{
		return elm.textContent;
	}))
	Storage.save("template",contents);
	cl("Contents have been saved..")
});

var a1=[];
a1.push(saveButton)

newButton=e(button("New"),"click",function(){
	var contents=Array.from(document.querySelectorAll(".block"));
		contents.push("Type here...");
		contents=JSON.stringify(contents.map(elm=>{
		return elm.textContent;
	}))
	Storage.save("template",contents);
})

a1.push(newButton)

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
scr1=block("fffade away");
b(view,scr1) /* type to record press mousebutton to re-type text */
e(scr1,"keypress",function(){
	recordTimestamp(this)
})

function compareTimestamp(a,b){
	return b-a;
}
/* source mapping */
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
	keyboard controller related
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
/*
	END; keyboard controller related
*/
b(view,img("./0xf.gif"))
