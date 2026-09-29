import type { PropsWithChildren } from "react";

export function Container({
  children,
}: PropsWithChildren): React.JSX.Element {
  return (
    <div className="mx-auto w-full max-w-7xl px-8 sm:px-12 lg:px-20">
      {children}
    </div>
  );
}