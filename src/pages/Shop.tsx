import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, X, Plus, Minus, ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  seller: string;
  category: string;
}

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isSignedIn, setIsSignedIn] = useState(false); // This will be replaced with actual auth check
  const [currentPage, setCurrentPage] = useState(0);

  // Sample products
  const products: Product[] = [
    {
      id: 1,
      name: "Kurut",
      price: 15.99,
      image: "/placeholder.svg",
      description: "Traditional dried cheese balls, a staple of Kyrgyz cuisine. Perfect for snacking or cooking.",
      seller: "Traditional Foods Co.",
      category: "Food"
    },
    {
      id: 2,
      name: "Kalpak",
      price: 45.99,
      image: "/placeholder.svg",
      description: "Traditional Kyrgyz felt hat, handcrafted with authentic materials and traditional patterns.",
      seller: "Heritage Crafts",
      category: "Clothing"
    },
    {
      id: 3,
      name: "Chapan",
      price: 89.99,
      image: "/placeholder.svg",
      description: "Elegant traditional robe, perfect for special occasions and cultural celebrations.",
      seller: "Kyrgyz Traditions",
      category: "Clothing"
    },
    {
      id: 4,
      name: "Shyrdak",
      price: 125.99,
      image: "/placeholder.svg",
      description: "Handwoven felt carpet with traditional Kyrgyz patterns, a beautiful home decoration.",
      seller: "Artisan Weavers",
      category: "Home"
    }
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const itemsPerPage = 8; // 2x4 grid
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    setCurrentPage(Math.max(0, currentPage - 1));
  };

  const handleNextPage = () => {
    setCurrentPage(Math.min(totalPages - 1, currentPage + 1));
  };

  const handleAddToCart = () => {
    if (!isSignedIn) {
      alert("Please sign in to add items to cart!");
      return;
    }
    // Add to cart logic will be implemented with backend
    alert(`Added ${quantity} ${selectedProduct?.name}(s) to cart!`);
    setSelectedProduct(null);
    setQuantity(1);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="px-4 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-title text-3xl md:text-4xl text-primary mb-8 text-center">
            Shop
          </h1>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pixel-border"
              />
            </div>
          </div>

          {/* Products Grid */}
          <div className="relative">
            {/* Navigation Arrows */}
            {totalPages > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePreviousPage}
                  disabled={currentPage === 0}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 pixel-border z-10"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages - 1}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 pixel-border z-10"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </>
            )}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {currentProducts.map((product) => (
              <div
                key={product.id}
                className="pixel-border bg-card p-4 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="aspect-square bg-muted rounded mb-4 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <h3 className="font-nav text-lg text-primary mb-2">{product.name}</h3>
                <p className="font-body text-sm text-muted-foreground mb-2">{product.category}</p>
                <p className="font-title text-xl text-foreground">${product.price}</p>
                <p className="font-body text-xs text-muted-foreground mt-1">by {product.seller}</p>
              </div>
            ))}
            </div>
          </div>

          {/* Page Indicator */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              <span className="font-body text-sm text-muted-foreground">
                Page {currentPage + 1} of {totalPages}
              </span>
            </div>
          )}

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="font-body text-muted-foreground">No products found matching your search.</p>
            </div>
          )}
        </div>
      </main>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="pixel-border bg-card p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h2 className="font-title text-2xl text-primary">{selectedProduct.name}</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedProduct(null)}
                className="pixel-border"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex gap-6 mb-6">
              <div className="w-32 h-32 bg-muted rounded flex-shrink-0">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="flex-1">

                <div className="space-y-4">
                  <div>
                    <p className="font-body text-sm text-muted-foreground">Category: {selectedProduct.category}</p>
                    <p className="font-body text-sm text-muted-foreground">Seller: {selectedProduct.seller}</p>
                  </div>

                  <p className="font-body text-foreground">{selectedProduct.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="font-title text-2xl text-primary">${selectedProduct.price}</span>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="pixel-border"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="font-nav text-lg w-8 text-center">{quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setQuantity(quantity + 1)}
                        className="pixel-border"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <Button
                    onClick={handleAddToCart}
                    className="w-full pixel-border pixel-hover bg-primary text-primary-foreground font-nav flex items-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </Button>

                  {!isSignedIn && (
                    <p className="font-body text-xs text-muted-foreground text-center">
                      Sign in required to add items to cart
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Shop;
