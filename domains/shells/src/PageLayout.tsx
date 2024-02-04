import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Container } from "@repo/ui/container";

export const PageLayout = ({
  linkComponent,
  children,
}: {
  linkComponent: any;
  children: ReactNode;
}) => {
  return (
    <div>
      <Header linkComponent={linkComponent} />
      <main className="shells-flex shells-flex-col shells-gap-4 shells-min-h-screen">
        <Container>{children}</Container>
      </main>
      <Footer linkComponent={linkComponent} />
    </div>
  );
};
