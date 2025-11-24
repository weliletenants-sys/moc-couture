import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { useCart } from "@/contexts/CartContext";
import { products } from "@/lib/cart";
import heroImage from "@/assets/hero-image.jpg";
import product1 from "@/assets/product1.jpg";
import product2 from "@/assets/product2.jpg";
import product3 from "@/assets/product3.jpg";

const Home = () => {
  const { items, addToCart } = useCart();

  const productImages = [product1, product2, product3];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar cartItemCount={items.length} />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <div className="text-6xl md:text-8xl font-display font-bold mb-4 text-[hsl(25,40%,25%)] tracking-tight">
            MoC Couture
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 text-foreground">
            Handcrafted with <span className="text-gradient">Love</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground/90 font-light">
            Unique crochet and fabric creations, each piece telling its own story
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/gallery">
              <Button size="lg" className="bg-gradient-warm hover:opacity-90 text-lg px-8 shadow-elegant">
                Explore Collection
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="text-lg px-8 border-2">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            Featured Pieces
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Discover our carefully crafted collection
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="overflow-hidden hover-lift bg-card border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={productImages[index]}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-display font-semibold mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      UGX {(product.price * 3700).toLocaleString()}
                    </span>
                    <Button 
                      onClick={() => addToCart(product)}
                      variant="default"
                      className="bg-gradient-warm hover:opacity-90"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/gallery">
              <Button size="lg" variant="outline" className="border-2">
                View Full Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Crafted with Passion
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Every piece from MoC Couture is a labor of love, combining traditional 
            crochet techniques with modern fabric artistry. We believe in creating 
            timeless pieces that bring warmth and character to your life.
          </p>
          <Link to="/about">
            <Button size="lg" className="bg-gradient-warm hover:opacity-90">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
