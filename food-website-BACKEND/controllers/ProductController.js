const path = require("path");
const ProductModel = require("../models/ProductModel");

class ProductController {
  addProducts(data, file) {
    return new Promise(async (res, rej) => {
      try {
        if (!data || !file) {
          return rej({ status: 0, msg: "Data or file missing" });
        }

        const { title, discount, subText, timeFrame } = data;

        const imagePath = `/uploads/${file.filename}`;

        const product = new ProductModel({
          title,
          discount,
          subText,
          timeFrame,
          image: imagePath,
        });

        await product.save();
        res({ status: 1, msg: "product added" });
      } catch (err) {
        console.log("internal server error from product ctr", err.message);
        rej({ status: 0, msg: "product not added" });
      }
    });
  }

  getProducts() {
    return new Promise(async (res, rej) => {
      try {
        const products = await ProductModel.find();
        if (products) {
          res({
            status: 1,
            message: "all products",
            products,
            length: products.length,
          });
        } else {
          rej({ status: 0, message: "error during fetch products" });
        }
      } catch (err) {
        console.log("internal server error from  products ctr", err.message);
      }
    });
  }
}

module.exports = ProductController;
