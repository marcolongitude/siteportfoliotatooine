type FeedbackStateProps = {
  title: string;
  description: string;
};

export function FeedbackState({ title, description }: FeedbackStateProps) {
  return (
    <div className="rounded-xl border border-dashed border-border px-6 py-12 text-center">
      <p className="font-medium">{title}</p>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
