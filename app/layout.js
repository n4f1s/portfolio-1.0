import Navbar from "@/components/Navbar";
import "./globals.css";


export const metadata = {
  // title: "Nafis || Portfolio",
  // description: "Cool 3D website to showcase my skill",
  title: {
    template:
      "Nafis || Portfolio",
    default:
      "Nafis || Portfolio",
  },
  description:
    "Cool 3D website to showcase my skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
