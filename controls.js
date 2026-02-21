	var body=document.body;
	var cl=console.log;
	var mState={
		keydown:[],
		keymap:{},
		size:20,
	};
	var damn=` 
		keydown.fn(booo
	`; 
	var damnFn=function(evt){};
	var booo=function(evt){
			var map={
				"ArrowUp":"up",
				"ArrowLeft":"left",
				"ArrowRight":"right",
				"ArrowDown":"down",
			};
			view={ // create dom node(state) not needed =>
				direction:map[evt.key],
				value:10, //*< --- 
				spawnPoint
			};
			draw(body,visualize(view)) // elm=>body
	}
	var setsize=function(evt){
		if(typeof evt.value=="number"){
			// set size of; e.g 1 + 0 = 10, 20= 20 in px
			// read from mState (global state)
			// 
			
			cl("Number")
		}
	}

	// delete the syntax onversion method and use direct map 
	function convert(string){ /* evaluate string for code*/	
			var r=""; string.split(".").map(function(syntax,idx){
					if(syntax=="keydown"){ // listeners on keydown
							mState.keydown.push(booo)
							mState.keydown.push(setsize)
					}
			})		
			mState.keydown.forEach(function(evt){ // evt bind
					body.addEventListener("keydown",evt)
			})
			return 202;
	}

	// new event listener
	mState.keydown.push(booo)
	convert(damn)


