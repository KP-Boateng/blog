import Footer from "./(components)/Footer";
import Header from "./(components)/Header";
import { InriaRegular } from "./(fonts)/font";
import "./globals.css";

export const metadata = {
  title: "KPBoateng.blog",
  description: "Your one-stop site for tech related articles, tutorials, etc.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${InriaRegular.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
