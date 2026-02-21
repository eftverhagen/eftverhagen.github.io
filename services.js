
RegisterService({
	name:"Storage",
	store:window.localStorage,
	set:function(item){
		key=window.localStorage.length+1;
		window.localStorage.setItem("key"+key,item)
	},
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

RegisterService({
	name:"StatusBar",
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

RegisterService({
	name:"Router",
	routes:{
		Projecten:"Projects",
		Portfolio:"Portfolio",
		test:"Page 3",
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

RegisterService({
	name:"Keymap",
	set:function(){},
	map:{
		"ctrl+k":"<function>",
	},
})