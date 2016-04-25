// класс з методами і властивостями для всіх істот в грі.
function Animal() {
	var formula = 10;

	this.x = 4;
	this.y = 3;
	this.inDOM = function () {
		return document.getElementById('hex_x' + this.x + '_y' + this.y);
	}

	this.str = 1;
	this.dex = 1;
	this.intl = 1;

	this.hp = 1;
	this.mp = 1;
	this.maxHp = 1;
	this.maxMp = 1;

	this.range = 1;
	this.speed = 1;

	this.dodgeBefore = 1;
	this.armorBefore = 1;
	this.dodge = this.dodgeBefore + this.dex;
	this.armor = this.armorBefore + this.str;

	this.resistBefore = 1;
	this.resist = this.resistBefore + this.intl;

	this.changeHp = function (count) {
		this.hp = this.hp + count;
		if (this.hp <= 0)
			alert(deathMessageUkr + ' ' + this.name);
	}

}

// показуе напрямок руху
Animal.prototype.viewMove = function (moveTo) {
	this.inDOM().style.cssText = "background-color: yellow;";
	this.move(moveTo);
	this.inDOM().style.cssText = "background-color: red;";
}

// зміна координат істоти up down upRight upLeft downLeft downRight,в nextCoor передавати truе для поверненя слiду-
// ючих координат без змін. останні x, y змінять координати; 
Animal.prototype.move = move();

function move(moveTo, nextCoor, x, y) {
	var coorX = this.x;
	var coorY = this.y;

	if (x && y) {
		coorX = x;
		coorY = y;
	}


	if (moveTo === "up") {
		if (document.getElementById('hex_x' + coorX + '_y' + (coorY + 1)) && !nextCoor)
			this.y++;
		else
			return {
				x: coorX,
				y: (coorY + 1),
				elementId: 'hex_x' + coorX + '_y' + (coorY + 1)
			}

	} else if (moveTo === "down") {
		if (document.getElementById('hex_x' + coorX + '_y' + (coorY - 1)) && !nextCoor)
			this.y--;
		else
			return {
				x: coorX,
				y: (coorY - 1),
				elementId: 'hex_x' + coorX + '_y' + (coorY - 1)
			}

	} else if (moveTo === "upLeft") {
		if (coorX % 2) {
			if (document.getElementById('hex_x' + (coorX - 1) + '_y' + coorY) && !nextCoor)
				this.x--;
			else
				return {
					x: (coorX - 1),
					y: coorY,
					elementId: 'hex_x' + (coorX - 1) + '_y' + coorY
				}

		} else {
			if (document.getElementById('hex_x' + (coorX - 1) + '_y' + (coorY + 1)) && !nextCoor) {
				this.x--;
				this.y++;
			} else
				return {
					x: (coorX - 1),
					y: (coorY - 1),
					elementId: 'hex_x' + (coorX - 1) + '_y' + (coorY - 1)
				}

		}
	} else if (moveTo === "downLeft") {
		if (coorX % 2) {
			if (document.getElementById('hex_x' + (coorX - 1) + '_y' + (coorY - 1)) && !nextCoor) {
				this.x--;
				this.y--;
			} else
				return {
					x: (coorX - 1),
					y: (coorY - 1),
					elementId: 'hex_x' + (coorX - 1) + '_y' + (coorY - 1)
				}

		} else {
			if (document.getElementById('hex_x' + (coorX - 1) + '_y' + coorY) && !nextCoor)
				this.x--;
			else
				return {
					x: (coorX - 1),
					y: coorY,
					elementId: 'hex_x' + (coorX - 1) + '_y' + coorY
				}

		}
	} else if (moveTo === "upRight") {
		if (coorX % 2) {
			if (document.getElementById('hex_x' + (coorX + 1) + '_y' + coorY) && !nextCoor)
				this.x++;
			else
				return {
					x: (coorX + 1),
					y: coorY,
					elementId: 'hex_x' + (coorX + 1) + '_y' + coorY
				}

		} else {
			if (document.getElementById('hex_x' + (coorX + 1) + '_y' + (coorY + 1)) && !nextCoor) {
				this.x++;
				this.y++;
			} else
				return {
					x: (coorX + 1),
					y: (coorY + 1),
					elementId: 'hex_x' + (coorX + 1) + '_y' + (coorY + 1)
				}

		}
	} else if (moveTo === "downRight") {
		if (coorX % 2) {
			if (document.getElementById('hex_x' + (coorX + 1) + '_y' + (coorY - 1)) && !nextCoor) {
				this.x++;
				this.y--;
			} else
				return {
					x: (coorX + 1),
					y: (coorY - 1),
					elementId: 'hex_x' + (coorX + 1) + '_y' + (coorY - 1)
				}

		} else {
			if (document.getElementById('hex_x' + (coorX + 1) + '_y' + coorY) && !nextCoor)
				this.x++;
			else
				return {
					x: (coorX + 1),
					y: coorY,
					elementId: 'hex_x' + (coorX + 1) + '_y' + coorY
				}

		}
	} else {
		this.x = x;
		this.y = y;
	}


}