import type { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div className="ui-container ui-mx-auto ui-flex ui-flex-col ui-gap-8">
      {children}
    </div>
  );
}
