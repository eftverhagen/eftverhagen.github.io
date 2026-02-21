/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%% Leke Menu */
// does not include css 
menuStructure = [
 	{
	    text: "Dictea",
	    event: {type:"open",path:0},
	    list: [
	      {
	        text: "Mangler",
	        event: {type:"route",path:"mangler"
	        }
	      },
	      {
	        text: "Langcheckup",
	        event: {type:"route",path:"langcheckup"}
	      },
	      {
	        text: "Dictionary",
	        event: {type:"route",path:"dictionary"
	        }
	      },
	      {
	        text: "Recognite",
	        event: {type:"route",path:"dictionary"
	        }
	      },
	      {
	        text: "Recognite",
	        event: {type:"route",path:"dictionary"
	        }
	      },
	      	      {
	        text: "Recognite",
	        event: {type:"route",path:"dictionary"
	        }
	      },
	      	      {
	        text: "Recognite",
	        event: {type:"route",path:"dictionary"
	        }
	      },		      
	    ],
	},
	{
	    text: "Leke.js",
	    event: {type:"open",path:1},
	    list: [
	       {
	        text: "Quick start",
	        event: {type:"route",path:"langcheckup"}
	      },   
	      {
	        text: "API Reference",
	        event: {type:"route",path:"mangler"
	        }
	      },
	      {
	        text: "Downloads",
	        event: {type:"route",path:"leke/downloads"
	        }
	      },
	    ]
  	},
	{
	    text: "Noteshare",
	    event: {type:"open",path:2},
	    list:[
		    {
		        text: "Quick start",
		        event: {type:"route",path:"noteshare"}
		    },
			{
		        text: "Register",
		        event: {type:"ref",path:"http://pinterest.com/"}
		    },
	    ]
	},
];





function toggle(id){
	for(let item of menuStructure){
		if(item.event.type=="open"){
			s("level"+item.event.path).style.height="calc(0%)";
		}
	}
	if(typeof id!=="undefined"){
		if(mState.menu.open.id==id&&mState.menu.open.open==true){
		mState.menu.open={id,open:false};
			s("level"+id).style.height="0px";
		}else{
			mState.menu.open={id,open:true};
			s("level"+id).style.height="400px";
		}
	}

}

function drawMenu(menuStructure){
	function menuAction(menuItem){
		switch(menuItem.event.type){
			case "open":
				toggle(menuItem.event.path);
			break;
			case "close":
				mState.menu.open.open=false;
				toggle()
			break;
			case "route":
				_.router.init(menuItem.event.path);
				mState.menu.open.open=false;
				toggle();
			break;
			case "ref":
				window.open(menuItem.event.path)
			break;
			default:
				cl("No matching route found..")
			break;
		}
	}

	b(root,o({id:"menu",class:"menu"}))

	for(let menuItem of menuStructure){
		b(s("menu"),e(o({class:"item", text:menuItem.text}),"click",function(){		
			menuAction(menuItem)
		}))
		function drawLevel(menuItem,rows=4){
			const list=menuItem.list
			const len=list.length;
			const divs=Math.ceil(len/rows);
			let itemIndex=0;rows=3;
			if(menuItem.event.type=="open"){
				b(root,o({id:"level"+menuItem.event.path, class:"level", siblings:[
					o({class:"bar", text:menuItem.text,siblings:[
						e(o({class:"close-btn",text:"x"}),"mousedown",()=> menuAction(menuItem))
						]})
					]})
				)
			}
			for(let i=0;i<divs;i++){
				// create division
				b(s("level"+menuItem.event.path),o({id:"division"+i,class:"division"}))

				for(let x=0;x<rows;x++){
					let li=menuItem.list[itemIndex];
					if(typeof li=="object"){
						if(menuItem.event.type=="open"){
							// create level
							itemIndex++;
							b(s("division"+i),e(o({id:"level"+li.event.path,class:"item", text:li.text}),"click",function(){
								menuAction(li)
							}))					
						}else{
							itemIndex++;
							b(s("division"+i),e(o({class:"item", text:li.text}),"click",function(){
								menuAction(li)
							}))
						}						
					}else{
						b(s("division"+i),o({class:"empty",text:"hello"}))
					}
	
				}
			}

		}
		drawLevel(menuItem);
	}

	e(document.body,"mousedown",function(){
		if(mState.menu.open.open==true){
			if(_.y<s("level"+mState.menu.open.id).offsetTop){
				menuAction({event:{type:"close"}})
			}
		}

	})
}

drawMenu(menuStructure)