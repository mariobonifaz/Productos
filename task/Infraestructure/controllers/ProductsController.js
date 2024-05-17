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
exports.ProductController = void 0;
class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield this.productService.createProduct(req.body);
                res.status(201).json(product);
            }
            catch (err) {
                if (err instanceof Error) {
                    res.status(400).json({ error: err.message });
                }
                else {
                    res.status(500).json({ error: "Internal server error" });
                }
            }
        });
    }
    getAllProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield this.productService.getAllProducts();
                res.status(200).json(product);
            }
            catch (err) {
                if (err instanceof Error) {
                    res.status(400).json({ error: err.message });
                }
                else {
                    res.status(500).json({ error: "Internal server error" });
                }
            }
        });
    }
    // Método para eliminar un producto por ID
    deleteProductById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield this.productService.deleteProductById(id);
                res.status(204).json({});
            }
            catch (err) {
                if (err instanceof Error) {
                    res.status(500).json({ message: err.message });
                }
            }
        });
    }
}
exports.ProductController = ProductController;
