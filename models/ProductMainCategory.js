import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Product from "./Product.js";
import MainCategory from "./MainCategory.js";

const { DataTypes } = Sequelize;

const ProductMainCategory = db.define(
	"product_main_categories",
	{
		product_main_category_id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		product_id: {
			type: DataTypes.STRING,
		},
		main_category_id: {
			type: DataTypes.STRING,
		},
	},
	{
		freezeTableName: true,
	}
);

Product.hasMany(ProductMainCategory, { foreignKey: "product_id" });
ProductMainCategory.belongsTo(Product, { foreignKey: "product_id" });

MainCategory.hasMany(ProductMainCategory, { foreignKey: "main_category_id" });
ProductMainCategory.belongsTo(MainCategory, { foreignKey: "main_category_id" });

export default ProductMainCategory;
