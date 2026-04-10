view=o({class:"view",id:"view"});
b(root,view)
if(!Storage.get("template")){
	Storage.save("template",'["Type here.."]')
}

/*
	function view blocks or the a1 array idea
	1 ) load blocks from menubutton
*/
function loadBlocks(){
	JSON.parse(Storage.get("template")).map(val=>{
		b(view,block(val))
	})	
}

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
//updateView()
/*
left=o({class:"left",text:"Hello1"})
right=o({class:"right"text:"Hello2"})
r(right,{contentEditable:"true"})
split=o({class:"split"})

b(right,split)
b(root,left)
b(root,right)
not clear u'r actully linking to pages;;
*/
menuData=[
"Portfolio",
"Projecten",
"Locatie"];
fixedMenu=o({id:"fixedMenu"});
// b(root,fixedMenu)
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
	text:"Hallo welkom, kopje koffie?, oke download squirrelmail"
});
portfolio=o({
	id:"Portfolio",
	text:ipsum
});
tab1=tabs("tab1",[
	{
		text:"Texts\files",
		content:ipsum,
	},
	{
		text:"Cognitive",
		content: chart([2,48,,44,30,23])
	},	{
		text:"Mood",
		content: chart([2,4,9,3,2,5,10])
	},
	{
		text:"Dos",
		content: "johan marcel omar mohammed sergio mike reduwan martijn brenda machiel nadine renzo boy arjen kim luuk wouter bart simon marc erwin twan sticks fred andrew liselot wim jolanda jolanda myrthe bram gerrit every remco jamal barbara;bastiaan;wardak,joris;james;jan;gerrit hol;bor,jaap"
	},	
]);
b(projects,tab1)
b(root,projects)
mainMenu=o({class:"topMenu"});
a=tabs("tabs2",[
	{
		text:"Products",
		content: // inline stack 0/0 here
			e(block("o0"),"click",function(){
				Router.switchTo("Projecten")
			}),
	},
	{
		text:"Location",
		content: "koffie zetten kan pannenkoeken bakke" // the rest of buttons
	},
	{
		text:"E-Mail",
		content: "koffie zetten kan pannenkoeken bakke" // the rest of buttons
	},	
	{
		text:"Phone",
		content: "koffie zetten kan pannenkoeken bakke"
	}]);
y(a,{width:"100%"})
b(mainMenu,a)
b(root,mainMenu)

leftMenu=o({class:"sidebar-left"});

b(leftMenu,e(button("Blocks"),"click",function(){
	a1.forEach(function(item){
		b(view,item)
	})
	loadBlocks()
}))

b(leftMenu,e(button("Activity"),"click",function(){
	a2=`
	zepen,
	opfrissen,
	wekker,
	kleding wassen,
	kop onder de kraan
	hairfix,
	haren wassen,
	scheren,
	frisdrank,
	rusten,
	fietsen,
	lachen,
	eten,
	raam open,
	achtergrond tekenen,
	stuk lopen,
	wandelen,
	checklist voor de nacht
	douchen(douchen, douchen, douchen..)
	oefeningen,
	roken,
	lichaam insmeren,
	parfum,
	spray,
	airwick,
	thee drinken,
	hobbie,
	tuinieren,
	computer,
	fitness,
	koken,
	in de spiegel kijken.
	
	`.split(",").map(function(item){
		b(view,o({class:"tile",text:item}))
	})
}))


b(root,leftMenu)

b(leftMenu,button("Searchlists"))

b(leftMenu,e(button("Factors"),"click",function(){ // comments
	a2=`
	nutrition,
	medicatie,
	structuur,
	sport,
	motivatie,
	opdrachten/tasks
	psychische toestand,
	lichaamlijke condities,
	voorbereiding,
	beweging,
	kamer opruimen,
	kleding wassen,
	algemene verzorging,
	douchen,
	water drinken,
	eten,
	studeren,
	tijdmanagement
	`.split(",").map(function(item){
		b(view,o({class:"tile",text:item}))
	})
}))

b(leftMenu,button("Dosfiles"))

/*
iframe1=o({type:"iframe",width:"400px",height:"400px"});
iframe1.src="www.youtube.com";
b(view,iframe1)
*/