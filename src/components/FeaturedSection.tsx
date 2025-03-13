
import React from 'react';
import { ThumbsUp, ThumbsDown, Star, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface FeaturedItem {
  id: string;
  name: string;
  image: string;
  category: string;
  goodRatings: number;
  badRatings: number;
}

interface FeaturedSectionProps {
  bestItems: FeaturedItem[];
  worstItems: FeaturedItem[];
  className?: string;
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({
  bestItems,
  worstItems,
  className,
}) => {
  return (
    <section className={cn("py-10 overflow-hidden", className)}>
      <div className="container">
        <h2 className="text-2xl font-bold text-center mb-10">Featured This Month</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Best of the Month */}
          <div className="ratteku-good-card p-6 animate-slide-up">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-ratteku-good rounded-full">
                <ThumbsUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-ratteku-good-dark">Best of the Month</h3>
            </div>

            <div className="space-y-4">
              {bestItems.map((item, index) => (
                <Link to={`/item/${item.id}`} key={item.id}>
                  <div className="flex bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    {index === 0 && (
                      <div className="absolute -left-1 -top-1 bg-yellow-400 text-yellow-900 rounded-br-lg p-1">
                        <Star className="h-4 w-4" />
                      </div>
                    )}
                    <div className="w-20 h-20 flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-3">
                      <div className="flex justify-between">
                        <div>
                          <p className="font-medium text-gray-900 line-clamp-1">{item.name}</p>
                          <p className="text-xs text-gray-500">{item.category}</p>
                        </div>
                        <div className="flex items-center text-ratteku-good">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          <span className="text-sm font-medium">{item.goodRatings.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <Link 
                to="/best-of-month" 
                className="inline-flex items-center text-sm font-medium text-ratteku-good-dark hover:text-ratteku-good transition-colors"
              >
                View all best rated
                <Zap className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* Worst of the Month */}
          <div className="ratteku-bad-card p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-ratteku-bad rounded-full">
                <ThumbsDown className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-ratteku-bad-dark">Worst of the Month</h3>
            </div>

            <div className="space-y-4">
              {worstItems.map((item, index) => (
                <Link to={`/item/${item.id}`} key={item.id}>
                  <div className="flex bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    {index === 0 && (
                      <div className="absolute -left-1 -top-1 bg-yellow-400 text-yellow-900 rounded-br-lg p-1">
                        <Star className="h-4 w-4" />
                      </div>
                    )}
                    <div className="w-20 h-20 flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-3">
                      <div className="flex justify-between">
                        <div>
                          <p className="font-medium text-gray-900 line-clamp-1">{item.name}</p>
                          <p className="text-xs text-gray-500">{item.category}</p>
                        </div>
                        <div className="flex items-center text-ratteku-bad">
                          <ThumbsDown className="h-4 w-4 mr-1" />
                          <span className="text-sm font-medium">{item.badRatings.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <Link 
                to="/worst-of-month" 
                className="inline-flex items-center text-sm font-medium text-ratteku-bad-dark hover:text-ratteku-bad transition-colors"
              >
                View all worst rated
                <Zap className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
