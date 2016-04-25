function Hero(name) {
	this.name = name;
}

Hero.prototype = new Animal();
var hero = new Hero('Василій');
HasItems(hero); // confirmItems() destroyItem('head','body', ~~) addItem('where, name, sprite, bonusObj, type')

function makeVIrtualMap() {
	var mappart = {
	idInDom: '',
	x: 0,
	y: 0,
	objIn: {},
	secondaryObjIn: {},
	};
}

