console.log('Started callback-example');

// the wrong way:
// 
// var data = load()
// var info = process()
// send(info)

// the node way:

load(process(send));

function load(loaded) {
	console.log('load');
	if (loaded) {
		setTimeout(function() {
			loaded('Some Data');
		}, 500);
	}
}

function process(processed) {
	console.log('process');
	if (processed) {
		setTimeout(function() {
			processed('Some Info');
		}, 500);
	}
}

function send(info) {
	console.log('send');
	console.log(info);
}

console.log('exiting callback example');
