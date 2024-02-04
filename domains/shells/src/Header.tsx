export const Header = ({ linkComponent }: { linkComponent: any }) => {
  const Link = linkComponent;

  return (
    <header className="shells-flex shells-justify-between shells-p-4 dark:shells-bg-slate-800 ">
      <p className="shells-font-bold">Cisco</p>
      <div className="shells-flex shells-gap-4">
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    </header>
  );
};
