export const Footer = ({ linkComponent }: { linkComponent: any }) => {
  const Link = linkComponent;

  return (
    <footer className="shells-flex shells-gap-4 shells-flex-col shells-items-center shells-justify-between shells-p-4 dark:shells-bg-slate-800 ">
      <p className="shells-font-bold">Cisco's Footer</p>
      <div className="shells-flex shells-gap-4">
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    </footer>
  );
};
