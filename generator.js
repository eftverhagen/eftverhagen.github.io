/*
lekejs

// some ideas
drawer
typescript
automating
record timestamp, 
line markup, 
set size on kbd,
mappings

*/



var cl=console.log;
var spawnPoint={ // set global
    left: 90,
    top: 90,
};

// fn : calculate max value from array
function max(array) {
    return array.reduce((a, b) => {
        return a >= b ? a : b;
    }, 0);
}

// fn : coerce value into "px" value 
function px(value) {
    return value + "px";
}

// fn : create wrapper element
function wrap(width, height) {
    var wrap = document.createElement('div');
        wrap.style.position = "relative";
        wrap.style.display = "block";
        wrap.style.height = px(height);
        wrap.style.width = px(width);
        wrap.style.margin = "10px";
        wrap.style.border = "1px solid rgba(0,0,0,0.5)";
    return wrap;
}

// default line markup
var defaultLine = document.createElement('div');
	defaultLine.style.backgroundColor = "rgba(0,0,0,0.5)";
	defaultLine.style.position = "absolute";

// draw: append dom element to another
function draw(element,child) { 
    element.appendChild(child);
}

function visualize(node){ // single operation

    // object properties
    var line=defaultLine.cloneNode(true);
        line.textContent=node.direction+node.value;
        line.style.fontSize=px(4); // node.size
        line.style.color="rgba(13, 200, 130, 1.0)";

    var size=10; // var containing fontsize

    var d="direction",val="value";
    var x="left",y="top"; // init values

    switch (node.direction){
        case "down":
            line.style.height = px(node.value); // vertical
            line.style.width = px(size);
            // assign spawnpoint properties
            line.style[y] = px(spawnPoint[y]);
            line.style[x] = px(spawnPoint[x]);
            spawnPoint.top+=node.value;
			
			/* if down & up  change nothing to spawnpoint  */
        break;
        case "right":
            line.style.height = px(size); 
            line.style.width = px(node.value); // horizontal
            line.style[y] = px(spawnPoint[y]);
            line.style[x] = px(spawnPoint[x]);
            spawnPoint.left+=node.value;
        break;
        case "up":
            line.style.height = px(node.value); // vertical
            line.style.width = px(size);
            line.style[y] = px(spawnPoint[y]);
            line.style[x] = px(spawnPoint[x]);
            spawnPoint.top-=node.value;
        break;
        case "left":
            line.style.height = px(size);
            line.style.width = px(node.value); // horizontal
            line.style[y] = px(spawnPoint[y]);
            line.style[x] = px(spawnPoint[x]);
            spawnPoint.left-=node.value;
        break;
    }
    return line; // should just output property definitions
};

function sequenceValid(seq, off) {
    var r=false;
    var random = Math.random();
    if (random < 0.30) {
        r = !seq.map((d, idx) => {
            return isPossible(d, seq[idx + 1]);
        }).includes(false);
    } else {
        seq.forEach((d, idx) => {
            if (isPossible(d, seq[idx + 1]) === false) {
                r = false;
            }
        });
    }
    return off ? true : r;
}
function permutation(array) {
    function p(array, temp) {
        var i,
        x;
        if (!array.length) {
            result.push(temp);
        }
        for (i = 0; i < array.length; i++) {
            x = array.splice(i, 1)[0];
            p(array, temp.concat(x));
            array.splice(i, 0, x);
        }
    }

    var result = [];
    p(array, []);
    return result;
}