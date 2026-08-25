import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { Product } from '../model/products';

const statusLabel: Record<Product['status'], string> = {
  mvp: 'MVP no ar',
  api: 'API em staging'
};

type ProductCardProps = {
  product: Product;
  featured?: boolean;
};

export function ProductCard({ product, featured = false }: ProductCardProps) {
  return (
    <Card
      className={cn(
        'lift h-full hover:border-primary/30',
        featured && 'border-primary/40 bg-primary/5'
      )}
    >
      <CardHeader>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant={product.status === 'mvp' ? 'default' : 'secondary'}>
            {statusLabel[product.status]}
          </Badge>
        </div>
        {featured ? (
          <h2 className="text-2xl">{product.name}</h2>
        ) : (
          <h3 className="text-base">{product.name}</h3>
        )}
        <CardDescription>{product.tagline}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{product.description}</p>
        <ul className="flex flex-wrap gap-2">
          {product.stack.map((item) => (
            <li key={item}>
              <Badge variant="outline">{item}</Badge>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        {product.links.map((link) => (
          <Button
            key={link.href}
            asChild
            size="sm"
            variant={link.primary ? 'default' : 'outline'}
          >
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.label}
              <ArrowUpRight className="icon-nudge" />
            </a>
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
}
