type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="mb-10 space-y-2">
      <h1 className="flex items-center gap-2 text-3xl font-semibold tracking-tight">
        <span className="size-2 rounded-full bg-primary" aria-hidden />
        {title}
      </h1>
      {description ? (
        <p className="max-w-2xl text-muted-foreground">{description}</p>
      ) : null}
    </header>
  );
}
