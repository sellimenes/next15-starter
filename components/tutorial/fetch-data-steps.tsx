export default function FetchDataSteps() {
  return (
    <ol className="flex flex-col gap-6">
      <li className="flex gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-foreground text-background shrink-0">
          1
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-medium">Fetch data from your database</p>
          <p className="text-sm text-muted-foreground">
            Use the Supabase client to fetch data from your database in Server Components.
          </p>
        </div>
      </li>
      <li className="flex gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-foreground text-background shrink-0">
          2
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-medium">Display the data</p>
          <p className="text-sm text-muted-foreground">
            Pass the data to Client Components or display it directly in Server Components.
          </p>
        </div>
      </li>
      <li className="flex gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-foreground text-background shrink-0">
          3
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-medium">Add real-time subscriptions</p>
          <p className="text-sm text-muted-foreground">
            Use Supabase Realtime to subscribe to changes in your database.
          </p>
        </div>
      </li>
    </ol>
  );
}
