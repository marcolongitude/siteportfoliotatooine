import Link from 'next/link';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-heading text-6xl text-primary">404</p>
      <h1 className="mt-4 text-2xl">Página não encontrada</h1>
      <p className="mt-2 text-muted-foreground">
        Esse endereço não existe neste portfólio.
      </p>
      <Button asChild className="mt-6">
        <Link href="/">Voltar para o início</Link>
      </Button>
    </div>
  );
};

export default NotFound;
