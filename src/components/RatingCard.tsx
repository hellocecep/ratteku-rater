
import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

interface RatingCardProps {
  id: string;
  name: string;
  image: string;
  category: string;
  goodRatings: number;
  badRatings: number;
  className?: string;
  isFeatured?: boolean;
}

const RatingCard: React.FC<RatingCardProps> = ({
  id,
  name,
  image,
  category,
  goodRatings,
  badRatings,
  className,
  isFeatured = false,
}) => {
  const [good, setGood] = useState(goodRatings);
  const [bad, setBad] = useState(badRatings);
  const [userVoted, setUserVoted] = useState<'good' | 'bad' | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const totalRatings = good + bad;
  const goodPercentage = totalRatings > 0 ? Math.round((good / totalRatings) * 100) : 0;
  const badPercentage = totalRatings > 0 ? Math.round((bad / totalRatings) * 100) : 0;

  const handleRating = (type: 'good' | 'bad') => {
    if (userVoted === type) {
      return;
    }

    if (userVoted) {
      // Change vote
      if (type === 'good') {
        setGood(good + 1);
        setBad(bad - 1);
      } else {
        setGood(good - 1);
        setBad(bad + 1);
      }
    } else {
      // New vote
      if (type === 'good') {
        setGood(good + 1);
      } else {
        setBad(bad + 1);
      }
    }

    setUserVoted(type);
    toast({
      title: type === 'good' ? "Rated Good!" : "Rated Bad!",
      description: `You've rated ${name} as ${type === 'good' ? 'good' : 'bad'}.`,
      variant: type === 'good' ? 'default' : 'destructive',
    });
  };

  const containerClass = cn(
    "overflow-hidden transition-all duration-300 hover:shadow-hover",
    isFeatured 
      ? "ratteku-neutral-card p-0"
      : "bg-white shadow rounded-lg p-0",
    className
  );

  return (
    <div className={containerClass}>
      <div className="relative aspect-square overflow-hidden">
        <div className={cn(
          "w-full h-full bg-gray-200",
          !imageLoaded && "animate-pulse"
        )}>
          <img
            src={image}
            alt={name}
            className={cn(
              "w-full h-full object-cover transition-opacity duration-500",
              imageLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium">
          {category}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">{name}</h3>
        
        <div className="flex justify-between mb-2">
          <div className="flex items-center text-sm">
            <span className="text-gray-500">Ratings:</span>
            <span className="ml-1 font-medium">{totalRatings.toLocaleString()}</span>
          </div>
        </div>
        
        <div className="h-3 bg-gray-200 rounded-full mb-4 overflow-hidden">
          {totalRatings > 0 ? (
            <div 
              className="h-full bg-gradient-to-r from-ratteku-good to-ratteku-good-dark"
              style={{ width: `${goodPercentage}%` }}
            ></div>
          ) : (
            <div className="h-full bg-gray-300 w-full"></div>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <button 
            onClick={() => handleRating('good')}
            className={cn(
              "flex items-center space-x-1 px-3 py-2 rounded-md transition-colors",
              userVoted === 'good' 
                ? "bg-ratteku-good-light text-ratteku-good-dark" 
                : "bg-gray-100 text-gray-700 hover:bg-ratteku-good-light hover:text-ratteku-good-dark"
            )}
          >
            <ThumbsUp className="h-4 w-4" />
            <span className="font-medium">{good.toLocaleString()}</span>
          </button>
          
          <button 
            onClick={() => handleRating('bad')}
            className={cn(
              "flex items-center space-x-1 px-3 py-2 rounded-md transition-colors",
              userVoted === 'bad' 
                ? "bg-ratteku-bad-light text-ratteku-bad-dark" 
                : "bg-gray-100 text-gray-700 hover:bg-ratteku-bad-light hover:text-ratteku-bad-dark"
            )}
          >
            <span className="font-medium">{bad.toLocaleString()}</span>
            <ThumbsDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
