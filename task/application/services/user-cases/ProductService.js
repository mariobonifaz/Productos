"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
class ProductService {
    constructor(productsRepositoy) {
        this.productsRepositoy = productsRepositoy;
    }
    createProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.productsRepositoy.createProduct(product);
            }
            catch (error) {
                throw new Error(`Error creating order: ${error.message}`);
            }
        });
    }
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.productsRepositoy.getAllProducts();
            }
            catch (error) {
                throw new Error(`Error getting all orders: ${error.message}`);
            }
        });
    }
    // Método para eliminar un producto por ID
    deleteProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.productsRepositoy.deleteProductById(id);
            }
            catch (error) {
                throw new Error(`Error deleting product: ${error.message}`);
            }
        });
    }
    // Método para actualizar el stock
    updateStock(productId, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.productsRepositoy.updateProductStock(productId, quantity);
            }
            catch (error) {
                throw new Error(`Error udeiting stock product: ${error.message}`);
            }
        });
    }
}
exports.ProductService = ProductService;
