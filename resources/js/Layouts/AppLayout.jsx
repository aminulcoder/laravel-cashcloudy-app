import Footer from "../components/Footer/Footer";
import Heroarea from "../components/Herosection/Heroarea";
import Navbar from "../components/Navbar/Navbar";

export default function AppLayout({ children }) {
    return (
        <>
            <Navbar />
            <Heroarea></Heroarea>
            <div className="2xl:max-w-[1536px] mx-auto">{children}</div>
            <Footer />
        </>
    );
}
