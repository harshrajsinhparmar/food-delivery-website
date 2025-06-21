const {Router} =require("express");
const ProductController =require("../controllers/ProductController");
const ProductRouter = Router();
const upload = require("../middleware/upload");


ProductRouter.get("/",(req,res)=>{
const result =new ProductController().getProducts();
result.then((success)=>{
    res.send(success);
}).catch((err)=> {
    res.send(err);
});
});


ProductRouter.post("/add-product",upload.single("image"), async (req,res)=>{
try {
    const result = await new ProductController().addProducts(req.body, req.file);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 0, msg: "Server error" });
  }
});
module.exports =ProductRouter;