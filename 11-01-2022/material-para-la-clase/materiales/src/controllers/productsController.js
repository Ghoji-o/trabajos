const fs = require('fs');
const { format } = require('path');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		//Hay que pasarles datos, para pasarle productos, vamos a usar fs para leer los datos del json
		//const productosJson = fs.readFileSync('../data/productsDataBase.json', 'utf-8');
		
		//Este json tenemos que convertirlo en un objeto de javascript
		//const productos = JSON.parse(productosJson);
		res.render('products', { products });
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const idProduct = req.params.id;
		const productDetail = products.filter(element => element.id == idProduct);

		res.render('detail', { productDetail });
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form');
	},
	
	// Create -  Method to store
	store: (req, res) => {
		
		let newProduct = {
			//agrega el id de lo que escribi en el form/ del nuevo producto
			id:products[products.length-1].id + 1,

			//toma los datos del fomr
			...req.body,
			price: parseInt(req.body.price),
			discount: parseInt(req.body.discount)
		};

		//El push es para agregar el nuevo producto en el json
		products.push(newProduct);

		//Cambiar todos los datos a formato json
		let productsNew = JSON.stringify(products, null,' ');

		//reescribir el json
		fs.writeFileSync(productsFilePath, productsNew, 'utf-8');
		res.render('product-create-form')
	},

	// Update - Form to edit
	edit: (req, res) => {
		const idProduct = req.params.id;
		const productEdit = products.filter(element => element.id == idProduct);
		res.render('product-edit-form', { productEdit });
	},

	// Update - Method to update
	update: (req, res) => {
		const idProduct = req.params.id;
		const productUpdate = products.filter(element => element.id != idProduct);

		const productEdited = {
			id: parseInt(idProduct),
			...req.body,
			price: parseInt(req.body.price),
			discount: parseInt(req.body.discount)
		}

		productUpdate.push(productEdited);
		let editedProducts = JSON.stringify(productUpdate, null,' ');

		fs.writeFileSync(productsFilePath, editedProducts, 'utf-8');
		res.render('products', { products })
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		const idProduct = req.params.id;
		const productDelete = products.filter(element => element.id != idProduct);
		let deletedProducts = JSON.stringify(productDelete, null,' ');

		fs.writeFileSync(productsFilePath, deletedProducts, 'utf-8');
		res.render('products', { products })
	}
};

module.exports = controller;