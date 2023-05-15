import { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="bg-gradient-to-r from-deg2 to-deg1 w-full h-screen px-40 py-32">
      <h1>App</h1>
      {children}
    </div>
  );
}
