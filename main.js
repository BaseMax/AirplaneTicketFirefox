/**
*
* @Name : AirplaneTicketFirefox/main.js
* @Version : 1.0
* @Programmer : Max
* @Date : 2019-06-23
* @Released under : https://github.com/BaseMax/AirplaneTicketFirefox/blob/master/LICENSE
* @Repository : https://github.com/BaseMax/AirplaneTicketFirefox
*
**/
document.body.style.border = "25px solid yellow";
let lb=document.querySelectorAll("table tr td input[readonly=readonly]");
console.log(lb[0].value);
console.log(lb[1].value);
let code=document.querySelector("body").innerHTML;
let matches = code.match(/مسير:&nbsp;\<b\>([^<]*)&nbsp;به&nbsp;([^<]*)\<\/b\>/);
// console.log(matches);
if(matches) {
	console.log(matches[1]);
	console.log(matches[2]);
}
let matches = code.match(/تاريخ: <b>\s*([^<]*)\<\/b\>/);
// console.log(matches);
if(matches) {
	console.log(matches[1]);
}
let matches = code.match(/خروج:\s*([^\n]*)/);
// console.log(matches);
if(matches) {
	console.log(matches[1]);
}
let matches = code.match(/ورود:\s*([^\n]*)/);
// console.log(matches);
if(matches) {
	console.log(matches[1]);
}
let matches = code.match(/ماره پرواز:\s*([^\n]*)/);
// console.log(matches);
if(matches) {
	console.log(matches[1]);
}
let matches = code.match(/قابل پرداخت\s*\<\/td\>\s*\<td style\=\"text-align: right; font-weight: bold;\"\>\s*([^\n]*)/);
// console.log(matches);
if(matches) {
	console.log(matches[1]);
}
let lb=document.querySelectorAll("table.Table01 tr");
// console.log(lb);
for(let index=4; index<lb.length;index++) {
	let content=lb[index].innerHTML;
	if(content.includes('<table class="Table02" border="0">')) {
		break;
	}
	// console.log(lb[index]);
	let matches = content.match(/\<td\>\s*\<span[^\>]+\>([^\<]*)\<\/span\>\s*\<\/td\>\s*\<td\>\s*([^\n]*)\s*\<\/td\>\s*\<td\>\s*([^\n]*)\s*\<\/td\>\s*\<td\>\s*([^\n]*)\s*\<\/td\>/);
	// console.log(matches);
	if(matches) {
		console.log(matches[1]);
		console.log(matches[2]);
		console.log(matches[3]);
		console.log(matches[4]);
	}
}
