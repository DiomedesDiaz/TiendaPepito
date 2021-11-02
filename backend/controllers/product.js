import product from "../models/product.js";

const registerProduct = async (req, res) => {
  if (!req.body.name || !req.body.description)
    return res.status(400).send("Incomplete Data");
  const existingProduct = await product.findOne({ name: req.body.name });
  if (existingProduct) return res.status(400).send("The role already exist");

  const productSchema = new product({
    name: req.body.name,
    description: req.body.description,
    dbStatus: true,
  });

  const result = await productSchema.save();
  if (!result) return res.status(400).send("Failed to register role");
  return res.status(200).send({ result });
};

export default { registerProduct };
