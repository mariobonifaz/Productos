import { Product } from "../../domain/entities/Product";
import { ProductsRepository } from "../repositories/ProductsRepository";
import ProductModel from "../../domain/entities/ProductModel";

export class PostgresProductsRepository implements ProductsRepository {
    async createProduct(product: Product): Promise<Product> {
        try {
            const newProduct = await ProductModel.create({
                nombre: product.nombre,
                precio: product.precio,
                stock: product.stock
            });
            return newProduct;
        } catch (error) {
            throw new Error(`Error creating product: ${(error as Error).message}`);
        }
    }

    async getAllProducts(): Promise<Product[]> {
        try {
            const products = await ProductModel.findAll();
            return products;
        } catch (error) {
            throw new Error(`Error retrieving products: ${(error as Error).message}`);
        }
    }

    // Implementación de deleteProductById
    async deleteProductById(id: string): Promise<void> {
        try {
            const result = await ProductModel.destroy({
                where: { id }
            });
            if (result === 0) {
                throw new Error("Product not found");
            }
        } catch (error) {
            throw new Error(`Error deleting product: ${(error as Error).message}`);
        }
    }

    // Implementación de updateProductStock
    async updateProductStock(productId: number, quantity: number): Promise<void> {
        const product = await ProductModel.findByPk(productId);
        if (!product) {
            throw new Error('Product not found');
        }
        product.stock -= quantity;
        await product.save();
    }
}
