
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CategorySection from '@/components/CategorySection';
import FeaturedSection from '@/components/FeaturedSection';
import { Button } from '@/components/ui/button';
import { Search, ThumbsUp, ThumbsDown, Zap } from 'lucide-react';
import { Input } from '@/components/ui/input';

// Sample data for demonstration
const peopleData = [
  {
    id: 'p1',
    name: 'Emma Johnson',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    category: 'People',
    goodRatings: 1243,
    badRatings: 321,
  },
  {
    id: 'p2',
    name: 'David Chen',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    category: 'People',
    goodRatings: 932,
    badRatings: 127,
  },
  {
    id: 'p3',
    name: 'Sarah Wilson',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    category: 'People',
    goodRatings: 756,
    badRatings: 234,
  },
  {
    id: 'p4',
    name: 'Michael Brown',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
    category: 'People',
    goodRatings: 521,
    badRatings: 178,
  },
  {
    id: 'p5',
    name: 'Lucy Zhang',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    category: 'People',
    goodRatings: 489,
    badRatings: 89,
  },
];

const productData = [
  {
    id: 'pd1',
    name: 'Smartphone X',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97',
    category: 'Products',
    goodRatings: 2354,
    badRatings: 423,
  },
  {
    id: 'pd2',
    name: 'Wireless Headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    category: 'Products',
    goodRatings: 1728,
    badRatings: 215,
  },
  {
    id: 'pd3',
    name: 'Coffee Machine',
    image: 'https://images.unsplash.com/photo-1525974160448-038dacadcc71',
    category: 'Products',
    goodRatings: 1432,
    badRatings: 312,
  },
  {
    id: 'pd4',
    name: 'Running Shoes',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    category: 'Products',
    goodRatings: 1243,
    badRatings: 176,
  },
  {
    id: 'pd5',
    name: 'Smart Watch',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    category: 'Products',
    goodRatings: 976,
    badRatings: 124,
  },
];

const placeData = [
  {
    id: 'pl1',
    name: 'Sunset Beach Resort',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
    category: 'Places',
    goodRatings: 1876,
    badRatings: 134,
  },
  {
    id: 'pl2',
    name: 'Mountain View Café',
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814',
    category: 'Places',
    goodRatings: 1654,
    badRatings: 89,
  },
  {
    id: 'pl3',
    name: 'Downtown Art Gallery',
    image: 'https://images.unsplash.com/photo-1577720580179-1e947136bd3a',
    category: 'Places',
    goodRatings: 1432,
    badRatings: 267,
  },
  {
    id: 'pl4',
    name: 'Central Park',
    image: 'https://images.unsplash.com/photo-1534251369789-5067c8b8602a',
    category: 'Places',
    goodRatings: 2143,
    badRatings: 132,
  },
  {
    id: 'pl5',
    name: 'Riverside Restaurant',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
    category: 'Places',
    goodRatings: 1587,
    badRatings: 231,
  },
];

const entertainmentData = [
  {
    id: 'e1',
    name: 'Action Movie 3',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1',
    category: 'Entertainment',
    goodRatings: 2143,
    badRatings: 356,
  },
  {
    id: 'e2',
    name: 'Symphony Orchestra',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6',
    category: 'Entertainment',
    goodRatings: 1876,
    badRatings: 134,
  },
  {
    id: 'e3',
    name: 'Summer Music Festival',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063',
    category: 'Entertainment',
    goodRatings: 2354,
    badRatings: 217,
  },
  {
    id: 'e4',
    name: 'Theater Play "Dreams"',
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35',
    category: 'Entertainment',
    goodRatings: 1654,
    badRatings: 231,
  },
  {
    id: 'e5',
    name: 'New TV Series',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6',
    category: 'Entertainment',
    goodRatings: 1987,
    badRatings: 345,
  },
];

// Best and worst for featured section (based on ratio of good to bad)
const bestItems = [
  {
    id: 'b1',
    name: 'Mountain View Café',
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814',
    category: 'Places',
    goodRatings: 1654,
    badRatings: 89,
  },
  {
    id: 'b2',
    name: 'Lucy Zhang',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    category: 'People',
    goodRatings: 489,
    badRatings: 89,
  },
  {
    id: 'b3',
    name: 'Wireless Headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    category: 'Products',
    goodRatings: 1728,
    badRatings: 215,
  },
];

const worstItems = [
  {
    id: 'w1',
    name: 'Action Movie 3',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1',
    category: 'Entertainment',
    goodRatings: 2143,
    badRatings: 356,
  },
  {
    id: 'w2',
    name: 'Emma Johnson',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    category: 'People',
    goodRatings: 1243,
    badRatings: 321,
  },
  {
    id: 'w3',
    name: 'Downtown Art Gallery',
    image: 'https://images.unsplash.com/photo-1577720580179-1e947136bd3a',
    category: 'Places',
    goodRatings: 1432,
    badRatings: 267,
  },
];

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4 animate-slide-up">
              <div className="inline-block rounded-lg bg-ratteku-neutral px-3 py-1 text-sm">
                Rate anything. Be heard.
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="text-ratteku-good">Good</span> or <span className="text-ratteku-bad">Bad</span>? 
                <br /> 
                Let the world know.
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ratteku is the simplest way to rate anything – people, products, places, and more. No middle ground, just thumbs up or thumbs down.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <div className="relative w-full max-w-sm">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search for anything to rate..."
                    className="w-full pl-9 shadow-sm"
                  />
                </div>
                <Button className="bg-ratteku-good text-white hover:bg-ratteku-good-dark">
                  Start Rating
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-ratteku-good/20 to-transparent w-full h-full rounded-full animate-pulse"></div>
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 p-2 bg-ratteku-good text-white text-xs font-bold rounded-bl-lg z-10">
                  <div className="flex items-center">
                    <ThumbsUp className="h-3 w-3 mr-1" />
                    <span>87%</span>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
                  alt="Ratteku Showcase"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-sm">
                  <h3 className="text-white font-semibold">Latest Trending</h3>
                  <p className="text-white/80 text-sm">See what people are rating right now</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-full shadow-lg animate-float">
                <div className="bg-ratteku-good rounded-full p-2">
                  <ThumbsUp className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="absolute -top-6 -left-6 bg-white p-3 rounded-full shadow-lg animate-float" style={{ animationDelay: '0.3s' }}>
                <div className="bg-ratteku-bad rounded-full p-2">
                  <ThumbsDown className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <FeaturedSection bestItems={bestItems} worstItems={worstItems} />
      
      {/* Content by Categories */}
      <CategorySection 
        title="People" 
        description="Rate public figures, celebrities, or influencers"
        viewAllLink="/category/people"
        items={peopleData}
      />
      
      <CategorySection 
        title="Products" 
        description="Share your experience with various products"
        viewAllLink="/category/products"
        items={productData}
        className="bg-gray-50"
      />
      
      <CategorySection 
        title="Places" 
        description="Rate destinations, restaurants, hotels and more"
        viewAllLink="/category/places"
        items={placeData}
      />
      
      <CategorySection 
        title="Entertainment" 
        description="Movies, TV shows, music, events and more"
        viewAllLink="/category/entertainment"
        items={entertainmentData}
        className="bg-gray-50"
      />
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-ratteku-good-light to-ratteku-neutral">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to start rating?</h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Join thousands of users who are making their opinions count on Ratteku.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-ratteku-good text-white hover:bg-ratteku-good-dark">
                Get Started
                <Zap className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
