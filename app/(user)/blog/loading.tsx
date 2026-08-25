import { Card, CardHeader } from '@/components/ui/card';

export default function Loading() {
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <Card key={index}>
          <CardHeader className="space-y-3">
            <div className="h-4 w-24 animate-pulse rounded bg-muted" />
            <div className="h-6 w-3/4 animate-pulse rounded bg-muted" />
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
