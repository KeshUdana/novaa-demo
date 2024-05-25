import "./index.scss";
import "./../../app/App.scss";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="layout w-full">
        <NavBar />
        {children}
        <Footer />
      </div>
    </>
  );
}
