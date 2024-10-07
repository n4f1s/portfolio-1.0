import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageTwo from "@/components/PageTwo";

export default function PagesLayout({ children }) {
    return (
        <>
            <Navbar />
            <PageTwo backgroundColor="#050816">
                {children}
            </PageTwo>
            <Footer />
        </>
    );
}