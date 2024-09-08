import "./globals.css";
import { Navbar } from "@/components";


export const metadata = {
  title: "Nafis || Portfolio",
  description: "Cool 3D website to showcase my skill",
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
