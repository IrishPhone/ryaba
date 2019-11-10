const vars = [
	"var1",
	"var2",
	"var3",
	"var4",
	"var5",
	"var6",
	"speach"
	];

function dataReceived(data) {
	let output = '';
	data.text.forEach(
		function(value, index, array) {
			output += value + '<br/>';
		}
	);
	for(key in vars) {
		let targ = '{' + vars[key] + '}';
		let dest = $(`[name = ${vars[key]}]`)[0].value;
		output = output.replace(targ, dest);
	}
	$("#result").html(output);
}

function dataError() {
	alert('load error');
}

function buttonPress() {
	$.getJSON('https://api.myjson.com/bins/jcmhn', dataReceived);
}

function main() {
	$("#button").click(buttonPress);	
}

$(document).ready(main);