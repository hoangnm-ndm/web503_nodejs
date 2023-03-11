import axios from "axios";

export const getAll = async (req, res) => {
  try {
    const { data: products } = await axios.get(
      "http://localhost:3001/products"
    );
    if (products.length === 0) {
      res.send({
        messenger: "Danh sách sản phẩm trống",
      });
    }
    return res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ messenger: err });
  }
};

export const getDetail = async (req, res) => {
  try {
    const { data: product } = await axios.get(
      `http://localhost:3001/products/${req.params.id}`
    );
    if (!product) {
      res.send({
        messenger: "Không tìm thấy sản phẩm",
      });
    }
    return res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ messenger: err });
  }
};

export const create = async (req, res) => {
  try {
    const { data: product } = await axios.post(
      `http://localhost:3001/products/`,
      req.body
    );
    if (!product) {
      res.send({
        messenger: "Thêm sản phẩm không thành công",
      });
    }
    return res.json(product);
  } catch (err) {
    res.status(500).json({ messenger: err });
  }
};

export const remove = async (req, res) => {
  try {
    await axios.delete(`http://localhost:3001/products/${req.params.id}`);
    return res.status(200).json({
      message: "Sản phẩm đã được xóa thành công",
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const update = async (req, res) => {
  try {
    const { data: product } = await axios.put(
      `http://localhost:3001/${req.params.id}`,
      req.body
    );
    if (!product) {
      res.send({
        messenger: "Update sản phẩm không thành công",
      });
    }
    return res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ messenger: err });
  }
};
