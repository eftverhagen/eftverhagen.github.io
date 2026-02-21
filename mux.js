view=o({class:"view",id:"view"});
b(root,view)
if(!Storage.get("template")){
	Storage.save("template",'["Type here.."]')
}

JSON.parse(Storage.get("template")).map(val=>{
	b(view,block(val))
})

sidebarRight=o({class:"sidebar-right"});
	b(root,sidebarRight)

if(!Storage.get("selects")){
	Storage.save("selects",'["Type here.."]')
}

function updateView(){
	JSON.parse(Storage.get("selects")).map((val,idx)=>{
		var item=o({class:"block",text:val});
		b(item,button("remove"))
		
		/*
			onclick Storage,get selects .filter
			== idx
			Storage.save, contents
		
		*/
		b(sidebarRight,item)
	})	
}

// updateView()

/*
> multiplexor

left=o({
	class:"left",
	text:"Hello1"
	
})
	
right=o({
	class:"right",
	text:"Hello2"
})

r(right,{
	contentEditable:"true"
})

split=o({
	class:"split"
})

b(right,split)
b(root,left)
b(root,right)

*/
menuData=[
"Portfolio",
"Projecten",
"Foto's"];
fixedMenu=o({id:"fixedMenu"});
b(root,fixedMenu)
level=o({class:"level"});
b(fixedMenu,level)
menuData.map(function(val){
	var btn=button(val);
	e(btn,"click",function(){
		Router.switchTo(val)
		//y(level,{display:"block",})
	})
	b(fixedMenu,btn)
})

projects=o({
	id:"Projects",
	text:"Hallo welkom, kopje koffie?, oke download squirrelmail"+ipsum
});

portfolio=o({
	id:"Portfolio",
	text:ipsum
});
/*

	content: first word or untill ; and rest is content method
	"hello;o0o".split(";") -> ['hello', 'o0o']
	
*/
tab1=tabs("tab1",[
	{
		text:"Texten",
		content:ipsum,
	},
	{
		text:"Projects",
		content: "koffie zetten kan pannenkoeken bakke"
	},	{
		text:"Projects",
		content: "koffie zetten kan pannenkoeken bakke"
	},
	{
		text:"Dossier",
		content: "johan marcel omar mohammed sergio reduwan martijn brenda machiel nadine renzo boy arjen kim luuk wouter bart simon marc erwin twan sticks fred andrew liselot wim jolanda jolanda myrthe bram gerrit every remco jamal barbara;bastiaan;wardak,joris;james;jan;gerrit hol;bor,jaap"
	},	
]);
b(projects,tab1)

b(projects,a("hello","https://soundcloud.com/emancipator")) // which color etc.