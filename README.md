# ⠸⠸ Lekejs ⠸⠸
Javascript framework for setting up feature rich 
single page applications. Setting up a page layout 
should not be too difficult in a browser. 

Still features as editing and saving the 
current state of the browser 
are not implemented in stable. 

## Component / Usage
o  create an element
e  add event listener
s  select element by id
b  bind element to another
l  set link property
a  set an anchor tag
r  replace properties of an element

tabs   generate a tabset from code
list   generate a visual list from array format
chart  create a plain html chart object
block  create an editable block
alias  rename a function
button generate a button with default styling
image  create image wrapper for easy proper styling attributes
table  generate a table

RegisterService  registering a service object at globals scope
ChangeStage  	 things to do when a service is called

## Objectives>>
time component
log console input save to localStorage and load at startup 
needs to be cleaned up
addressbar (oage loading in document)
keymapping
clipboard >> explained
time related implementations
>> ctrl + f navigation >> explained
>> undo/redo >> explained
router service: switch page, follow link..
menu services(closeUntil, previous panels)
automation > recording macro's <--
list of random mapped sequences
save page option
export data
comopnents html chart
highlighting
the concept of callstack (manglr) 
fetch data from url
export template data
click region event
storage service ? save data collection
directory tree done the right way
search/find serice

better history patterns
controller mappings
text and node compatibility
find out a easy way to mixins, e.d


RegisterService({
	name:"Keymap",
	set:function(){},
	map:{},
})

RegisterService({
	name:"ContextMenu",
	
})

RegisterService({
	name:"FilterData",
	openUntil:function(){}
})




## Query's
document.querySelectorAll(".block")

## Font includes
<link href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap" rel="stylesheet">

## Referency's
https://kiwiirc.com

## Notes
Setup simple cli testing code
Template switching feature (router,page scrolling, e.g.)
create new version package using 7z or rsync script
minification and compression

## Plans
moving b(root   code to one file (to load a page and 
menu at left and get simple routing done
houtleverancier belt vanavond.
