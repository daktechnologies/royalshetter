import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Package, ShieldCheck, Clock } from "lucide-react";

const ProductDetailModal = ({ isOpen, onClose, product }) => {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-secondary-900">
            {product.name}
          </DialogTitle>
          <DialogDescription>
            Category: {product.category}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {/* Left: Product Image */}
          <div className="relative rounded-xl overflow-hidden bg-gray-100 h-64 md:h-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.stock && (
              <Badge className="absolute top-4 left-4 bg-green-500 hover:bg-green-600">
                In Stock
              </Badge>
            )}
          </div>

          {/* Right: Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                  ))}
                </div>
                <span className="text-sm text-gray-500">({product.reviews} Customer Reviews)</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-secondary-700">₹{product.price.toLocaleString()}</span>
                <span className="text-lg text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Our {product.name} is built with high-quality materials, ensuring maximum durability and comfort. 
              Ideal for {product.category === 'Office Portable Cabin' ? 'professional work environments' : 'on-site requirements'}.
            </p>

            <div className="grid grid-cols-2 gap-4 border-y py-4">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <ShieldCheck className="text-secondary-600" size={18} />
                1 Year Warranty
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Clock className="text-secondary-600" size={18} />
                Fast Installation
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Package className="text-secondary-600" size={18} />
                Easy Transport
              </div>
            </div>

            <button
              disabled={!product.stock}
              className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                product.stock
                  ? 'bg-secondary-700 text-white hover:bg-secondary-800 shadow-lg shadow-secondary-200'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <ShoppingCart size={20} />
              {product.stock ? 'Book Now / Add to Cart' : 'Currently Unavailable'}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;