import { Card, CardHeader } from '@/components/ui/card';

export default function Loading() {
  return (
    <div className="space-y-12">
      <Card>
        <CardHeader className="space-y-3">
          <div className="h-5 w-24 animate-pulse rounded bg-muted" />
          <div className="h-7 w-1/3 animate-pulse rounded bg-muted" />
          <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
        </CardHeader>
      </Card>
      <Card className="max-w-xl">
        <CardHeader className="space-y-3">
          <div className="h-5 w-28 animate-pulse rounded bg-muted" />
          <div className="h-6 w-1/2 animate-pulse rounded bg-muted" />
        </CardHeader>
      </Card>
    </div>
  );
}
