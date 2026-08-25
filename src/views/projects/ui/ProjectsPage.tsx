import { PageHeader } from '@/shared/ui/PageHeader';
import { revealDelay } from '@/shared/config/motion';
import { products } from '../model/products';
import { ProductCard } from './ProductCard';
import { cn } from '@/lib/utils';

export function ProjectsPage() {
  const featured = products.filter((product) => product.featured);
  const others = products.filter((product) => !product.featured);

  return (
    <div className="space-y-12">
      <PageHeader
        title="Projetos"
        description="O que está no ar como produto. Estudos, rascunhos e repositórios sem andamento ficam de fora."
      />

      <div className="grid gap-4">
        {featured.map((product, index) => (
          <div key={product.id} className={cn('reveal', revealDelay(index + 1))}>
            <ProductCard product={product} featured />
          </div>
        ))}
      </div>

      {others.length > 0 ? (
        <section className="reveal delay-300 space-y-4">
          <div className="space-y-1">
            <h2 className="text-xl">Também no ar</h2>
            <p className="text-sm text-muted-foreground">
              Serviços publicados, ainda sem produto completo para o usuário
              final.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {others.map((product, index) => (
              <div
                key={product.id}
                className={cn('reveal', revealDelay(index + 2))}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
