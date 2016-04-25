function HasItems(exe) {
	var defaultBonuses = {
		str: 0,
		dex: 0,
		intl: 0,
		hp: 0,
		mp: 0,
		range: 0,
		speed: 0,
		dodge: 0,
		armor: 0,
		resist: 0
	};

	exe.items = {
		head: {
			where: "head",
			sprite: '',
			name: '',
			bonus: defaultBonuses,
			type: ''
		},
		body: {
			where: "body",
			sprite: '',
			name: '',
			bonus: defaultBonuses,
			type: ''
		},
		leftArm: {
			where: "leftArm",
			sprite: '',
			name: '',
			bonus: defaultBonuses,
			type: ''
		},
		rightArm: {
			where: "rightArm",
			sprite: '',
			name: '',
			bonus: defaultBonuses,
			type: ''
		},
		legs: {
			where: "legs",
			sprite: '',
			name: '',
			bonus: defaultBonuses,
			type: ''
		},
		amulet: {
			where: "amulet",
			sprite: '',
			name: '',
			bonus: defaultBonuses,
			type: ''
		},
		ringLeft: {
			where: "ringLeft",
			sprite: '',
			name: '',
			bonus: defaultBonuses,
			type: ''
		},
		ringRight: {
			where: "ringRight",
			sprite: '',
			name: '',
			bonus: defaultBonuses,
			type: ''
		},
		boots: {
			where: "boots",
			sprite: '',
			name: '',
			bonus: defaultBonuses,
			type: ''
		}
	}

	exe.bonusAttr = function (attr) {
		var someAttr = 0;
		for (var value in exe.items) {
			if (exe.items[value].bonus[attr])
				someAttr += exe.items[value].bonus[attr];
		}
		return someAttr;
	}

	exe.confirmItems = function () {
		exe.strReady = exe.str + exe.bonusAttr('str');
		exe.dexReady = exe.dex + exe.bonusAttr('dex');
		exe.intlReady = exe.intl + exe.bonusAttr('intl');

		exe.maxHpReady = exe.maxHp + exe.bonusAttr('hp');
		exe.maxMpReady = exe.maxMp + exe.bonusAttr('mp');

		exe.rangeReady = exe.range + exe.bonusAttr('range');
		exe.speedReady = exe.speed + exe.bonusAttr('speed');

		exe.dodgeReady = exe.dodge + exe.bonusAttr('dodge');
		exe.armorReady = exe.armor + exe.bonusAttr('armor');
		exe.resistReady = exe.resist + exe.bonusAttr('magic');
	}

	exe.destroyItem = function (where) {
		exe.items[where] = {
			where: where,
			sprite: '',
			name: '',
			bonus: defaultBonuses,
			type: ''
		}
	}


	exe.addItem = function (bodyPart, name, sprite, bonusObj, type) {
		switch (bodyPart) {
		case "head":
			this.items.head = {
				where: "head",
				sprite: sprite,
				name: name,
				bonus: bonusObj,
				type: type
			};
			break
		case "body":
			this.items.body = {
				where: "body",
				sprite: sprite,
				name: name,
				bonus: bonusObj,
				type: type 
			};
			break
		case "leftArm":
			this.items.leftArm = {
				where: "leftArm",
				sprite: sprite,
				name: name,
				bonus: bonusObj,
				type: type,
			};
			break
		case "rightArm":
			this.items.rightArm = {
				where: "rightArm",
				sprite: sprite,
				name: name,
				bonus: bonusObj,
				type: type
			};
			break
		case "legs":
			this.items.legs = {
				where: "legs",
				sprite: sprite,
				name: name,
				bonus: bonusObj,
				type: type
			};
			break
		case "amulet":
			this.items.amulet = {
				where: "amulet",
				sprite: sprite,
				name: name,
				bonus: bonusObj,
				type: type
			};
			break
		case "ringLeft":
			this.items.ringLeft = {
				where: "ringLeft",
				sprite: sprite,
				name: name,
				bonus: bonusObj,
				type: type
			};
			break
		case "ringRight":
			this.items.ringRight = {
				where: "ringRight",
				sprite: sprite,
				name: name,
				bonus: bonusObj,
				type: type
			};
			break
		case "boots":
			this.items.boots = {
				where: "boots",
				sprite: sprite,
				name: name,
				bonus: bonusObj,
				type: type
			};
			break

		}
	}



}