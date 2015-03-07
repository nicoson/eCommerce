module.exports = {
	user: {
		name: {type: String, required: true},
		password: {type: String, required: true},
		gender: {type: Boolean, default: true}
	},
	commodity: {
		id: {type: String},
		name: {type: String},
		price: {type: Number},
		imgSrc: {type: String}
	},
	cart:{
		uId: {type: String},
		cId: {type: String},
		cName: {type: String},
		cPrice: {type: Number},
		cImgSrc: {type: String},
		cQuantity: {type: Number, default: 1},
		cStatus: {type: Boolean, default: false}
	}
};