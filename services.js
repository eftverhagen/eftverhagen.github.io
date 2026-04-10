
RegisterService({
	name:"Storage",
	store:window.localStorage,
	set:function(item){
		key=window.localStorage.length+1;
		window.localStorage.setItem("key"+key,item)
	}, // rename to more conventional
	getList:function(listName){
		var parser=JSON.parse;
		return parser(localStorage[listName]);
	},
	appendToList:function(listName,listItem){
		var self=this;
		var list=self.getList(listName);
		list.push(listItem);
		list=JSON.stringify(list);
		return localStorage.setItem(listName,list);
	}, //
	get:function(key){
		return localStorage[key];
	},
	list:function(){
		return Object.keys(localStorage)
			.map(function(key){
				
				return {
					key:localStorage[key]
				};
			});
	},
	save:function(key,value){
		return localStorage[key]=value;
	},
	flush:function(){
		return localStorage.clear();
	}
})

RegisterService({
		name:"Tabsystem",
		tabsets:{},
		addTabset:function(id){
			var self=this;
			self.tabsets[id]=[];
			return self.tabsets[id];
		},
		addTab:function(id,elm){
			var self=this;
			return self.tabsets[id].push(elm);
		},
})
	
function tabs(id,arr){
	var tabset=Tabsystem.addTabset(id);
	var tabsView=o({class:"tabsView"});
	var tabsHeader=(o({class:"tabsHeader"}));
	var wrapper=(o({class:"tabs"}));
	b(wrapper,tabsHeader)
	b(wrapper,tabsView)
	var tabs=arr.map(function(tab,idx){   
		temp=o({class:"tab",text:tab.text});
		tabset.push(temp)
		e(temp,"mousedown",function(){
			r(tabsView,{
				text:tab.content,
			})
		})
		if(idx==0){
			r(tabsView,{
				text:tab.content,
			})
		}
		b(tabsHeader,temp)
	});
	return wrapper;
}

RegisterService({name:"StatusBar",
	statusInfo:"",
	init:function(){
		b(root,o({ // or replace call
			id:"statusBar",
			class:"statusBar",
		}))
	},
	selector:"statusBar",
	value:[],
	update:function(val){
		var self=this;// tool-in
		r(s(self.selector),{
			text:val,
		})
		self.value.push(val);
		return;
	}
})
	
StatusBar.init();

RegisterService({name:"Router",
	routes:{
		Projecten:"Projects",
		Portfolio:"Portfolio",
		Locatie:"Location",
	},
	view:"view",
	switchTo:function(pathId){
		cl("sw test",pathId)
		var self=this;
		var component=s(self.routes[pathId]);
		return r(s(self.view),{
			text:component,
		});
	}
})

RegisterService({name:"Keymap",
	set:function(key,fn){
		/*
		
	e(document,keypress,function(){})
	
	this.key==key;
	
	*
	var self=this;
	self.mappings.push(
	{key,fn}
	)
		*/
	},
	map:{
		"ctrl+k":"<function>",
		"k":"<function>",
	},
})

/*
	# features to implement:
	*
	*
	*
	getList:function(listName){
		var parser=JSON.parse;
		return parser(localStorage[listName]);
	},
	appendToList:function(listName,listItem){
		var self=this;
		var list=self.getList(listName);
		list.push(listItem);
		list=JSON.stringify(list);
		return localStorage.setItem(listName,list);
	},
	
	* Collection name list --> Collections[name]

	

	sidebarRight=o({class:"sidebar-right"});
	b(root,sidebarRight)
	if(!Storage.get("selects")){
		Storage.save("selects",'["Type here.."]')
	}
	function updateView(){
		JSON.parse(Storage.get("selects")).map((val,idx)=>{
			var item=o({class:"block",text:val});
			
			
			
			b(item,e(button("remove"),"click",function(){
				// Storage get selects filter
			})) // 
			b(sidebarRight,item)
		})	
	}
	
	
	RegisterService({
		name:"Collection",
		collections:Storage,
		newCollection:function(name){
			* Save name to storage
			Storage.save(name,[]); // be sure stringify conversion
		},
		insert:function(name,item){
			Storage.appendToList(name,item)

		},
		getList:function(name){
			
			return Storage.getList(name)
		},
		getItem:function(list,item){
			
			return Storage.getList(name)[item];
		},
		init:function(componentId){
			var r=o({id:componentId,class:"listView"});
				
			* get all items from localStorage(parse json)
			loop over the Array
			bind every item to listView handler
			
			do the same thing right after adding to the list

@ check previous code for syntax
@ check terminology for naming methos of this service api



			Storage.save
			self.storage.push
		},
		
		..............................................
		
	})

	check Storage.save conversion

*/

RegisterService({
		name:"Collections",
		store:[],
		new:function(name,id){ // abstraction "Collections"
			var r=o({id,class:"listView"});
			Storage.save(name,"[]") // json conversion
		},
		insert:function(name,item){
			Storage.appendToList(name,item)
		},
		get:function(name){
			return Storage.getList(name); // get"List" / get
		},
		init:function(){
			var self=this;
			var parser=JSON.parse;
			if(!Storage.get("Collections")){
				self.new("Collections")
			}
			return parser(Storage.get("Collections"))
					.map(function(item){
				this.store+=item;
				return item;
			});
		}	
	})
	
	
Collections.new("Feed1")
Collections.init();