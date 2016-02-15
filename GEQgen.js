/* GEQgen.js
* Version:	1.1
* Author:	Scott Troyer
* Site: 	http://scotttroyer.com
*/

function highlightall(id) { // automagically highlights textarea fields when clicked
    document.getElementById(id).focus();
    document.getElementById(id).select();
}

function empty(target){ // empty the Preset Name placeholder text
	if(target.value=="Preset Name")	{
		target.value= "";
	}
}

function clean() { // sanitize the Preset Name input
    var str=document.getElementById("name");
    var regex=/[^a-z0-9-\s]/gi;
    str.value=str.value.replace(regex ,"");
    xmlupdate(); // update the XML
}

function m(sender, event) { // update the graph after a value change
	var dB = sender.value; // assign the band value to dB
	var posY = 150 - (+sender.value * 10); // convert dB to px position
	var band = sender.id.replace('b','g'); // switch the b- id prefix to g- for graphing
	document.getElementById(band).style.top = posY + "px"; // move the graph band position
	document.getElementById(band).innerText = dB; // apply the dB value to the graph label
	xmlupdate(); // update the XML
}

function xmlupdate() { // compile the XML
	var name = document.getElementById('name').value; // grab the preset name
	document.getElementById('filename').innerHTML = name + ".xml"; // update the file name field
	var head = '&lt;?xml version="1.0" encoding="UTF-8"?&gt;\n&lt;document name="' + name + '"&gt;\n	&lt;PGROUP name="geqpreset"&gt;\n'; // generate the head portion of the XML file
	var foot = '	&lt;/PGROUP&gt;\n &lt;/document&gt;'; // generate the foot portion of the XML file
	var loop = ""; // initialize the loop portion of the XML file
    var i; // 4 Accounting Porpoises
    for (i = 1; i <= 31; i++) { // loop 1 to 31
    	var b = (+document.getElementById('b' + (i)).value + 15)/30; // convert value of current band from dB to decimal
		loop += '		&lt;PARAM name="b' + i + '" value="' + b + '"/&gt;\n'; // write current value to current tag and add to loop portion of XML file
	}
	var xml = head + loop + foot; // concatenate head, loop, and foot of XML file
	document.getElementById('xml').innerHTML = xml; // inject XML text into code tag
}
