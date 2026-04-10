cl=console.log;
root=document.querySelector("[root]");
ipsum="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
mState={
	menu:{
		open:{
			id:0,
			open:false
		},
	},
	elements:[],
	timestamps:[],
	services:{
		cursor: {
			x:0,
			y:0,
		},
		seed:0
	}
};

var d={
  value:{},
  fn(prop){
    this.value[prop]=prop;
    return this;
  }
};

function alias(id,fn,context){
    context = context?context:window;
    return context[id]=fn;
}

function RegisterService(service){
	alias(service.name,service)
	_[service.name]=service;
}

function StateChange(service){
	
}

function o(args){
	let r=document.createElement("div");
	/*
	e(r,"mouseover",function(){
		StatusBar.update(this.target.textContent); // depends on what value you want to display
	})
	*/
	mState.elements.push(r);
	mState[args.id]=r;
	for(let prop in args){
		switch(prop){
			case "type":{		 // no array means 0/0 // only stacked		
				if(args[prop]=="iframe"){
					r=document.createElement("iframe");
				}
			}
			break;
			case "text":{		 // no array means 0/0 // only stacked		
				if(typeof args[prop]=="string"){
					r.textContent=args[prop];
				}else if(typeof args[prop]=="object"){
					for (let node of args[prop]) {
						r.appendChild(node);
					}
				}
			}
			break;
			case "class":
				r.setAttribute("class", args[prop]);
				mState[args[prop]]=r;
			break;
			case "node":{
				if(typeof args[prop]=="object"){ // this could be used dynamically
					for (let node of args[prop]) {
						r.appendChild(node);
					}
				}else{
					r.appendChild(args[prop])
				}
			}
  			break;
			case "editable":
				r.setAttribute("contentEditable",true);
  			break;
  			case "id":
				r.setAttribute("id",args[prop])
				// mState .value. [identifier] links to element
  				mState[args[prop]]=r;
  			break;
  			default:
				r.setAttribute(prop,args[prop]);
  				cl("We're stable..")
  			break;
		}
	}
	return r;
}

function a(text,ref){
	var a=document.createElement("a");
		a.textContent=text;
		a.setAttribute("href",ref)
	return a;
}

function r(elm,props){
	for(let prop in props){
		if(prop=="text"){ // for content switching	
			elm.innerHTML="";
			if(typeof props[prop]=="object"){
				if(props[prop].length>0){
					props[prop].forEach(function(item){
						if(typeof item=="object"){
							elm.appendChild(item)
						}else{
							elm.textContent+=item; //str
						}
					})
				}else{
					elm.appendChild(props[prop])
				}
			}
			if(typeof props[prop]=="string"){
				elm.textContent=props[prop];
			}
		}else{
			elm[prop]=props[prop];
		}
		// style properties handler
	}
	return elm;
}

function y(elm,props){ // setter -/- get element properties
	for(let prop in props){
		elm.style[prop]=props[prop];
	}
	return elm;
}

function e(elm,type,fn){
	elm.addEventListener(type,function(e){
		fn.call(e)
	});
  return elm;
}

function s(id){
  return mState[id];
}

function b(elm, sibling){ // if
  elm.appendChild(sibling);
  return elm;
}

function bb(elm, siblings) {
	for(let sibling of siblings){
		elm.appendChild(sibling); // err message;
	}
}

function input(args){
	let r=document.createElement("input");
	for(let prop in args){
		switch(prop){
			case "text":
				r.value=args[prop];
			break;
			case "class":
				r.setAttribute("class",args[prop]);
			break;
  			break;
  			case "id":
				r.setAttribute("id",args[prop])
  				mState[args[prop]]=r;
  			break;
  			default:
				r.setAttribute(prop,args[prop]);
  				cl("We're stable..")
  			break;
		}
	}
	return r;
}

function text(text){
	let div=document.createElement("div");
		div.innerText=text;
		div.setAttribute("class","text")
	return div;
}

function img(src){
	var img=document.createElement("div");
		y(img,{
			backgroundImage:"url("+ src +")",
			backgroundSize:"cover",
			width:"32px",
			height:"32px",
			
		})
	return img;
}

function l(elm,pathName){ // key down enter
	return e(elm,"click",function(){
		window.open(pathName,"_blank")
	});
}

function chart(arr,size=2){
	var elm=o({
		class:"chart",
	});
	arr.map(function(val){
		b(elm,y(o({	class:"bar",}),{
			height:val*size+"px",
		}))
	})	
	return elm;
}
// chart([1,20,22,12,5])
function grid(props){
	return grid;
}

function button(text){
	var button=o({
		text,
		class:"button"
	});
	// hover color
	e(button,"mouseover",function(){
		y(this.target,{
			backgroundColor:"rgba(0,0,0,0.6)",
		})
	})
	e(button,"mouseout",function(){
		y(this.target,{
			backgroundColor:"rgba(0,0,0,0.2)", // or reset to last value
		})
	})
	
	return button;
}

function list(id,arr){
	var r=o({id,class:"list"});
	arr.map(function(item){
		b(r,o({class:"listItem",text:item}))
	})
	return r;
}

function block(text){ // props handler 
	var elm=r(o({
		class:"block",
		text:text,
	}),{
		contentEditable:"true",
	});

	e(elm,"paste",function(){//
		this.preventDefault();
		cl(this.originalEvent)
		var text = (this.originalEvent || this).clipboardData.getData('text/plain');
			document.execCommand("insertHTML", false, text);
	});
	
	e(elm,"mouseup",function(){
		Storage.appendToList("selects",window.getSelection().toString())
		sidebarRight.innerHTML="";
		updateView()
		/* load the thing again*/
	})
	return elm;
}

function barIndicator(value){}

