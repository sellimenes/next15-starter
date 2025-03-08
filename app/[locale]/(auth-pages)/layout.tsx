export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl my-20 flex flex-col gap-12 items-center">
      {children}
    </div>
  );
}
