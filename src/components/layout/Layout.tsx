import "./index.scss";
import "./../../app/App.scss";
import NavBar from "./NavBar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="layout w-full">
        <NavBar />
        {children}
      </div>
    </>
  );
}
