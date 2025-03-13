
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import RatingCard from './RatingCard';
import { cn } from '@/lib/utils';

interface CategorySectionProps {
  title: string;
  description?: string;
  viewAllLink: string;
  items: {
    id: string;
    name: string;
    image: string;
    category: string;
    goodRatings: number;
    badRatings: number;
  }[];
  className?: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  description,
  viewAllLink,
  items,
  className,
}) => {
  return (
    <section className={cn("py-10", className)}>
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div className="space-y-2 mb-4 md:mb-0">
            <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
            {description && (
              <p className="text-muted-foreground">{description}</p>
            )}
          </div>
          <Link
            to={viewAllLink}
            className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            View all
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 animate-fade-in">
          {items.map((item) => (
            <RatingCard
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              category={item.category}
              goodRatings={item.goodRatings}
              badRatings={item.badRatings}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
