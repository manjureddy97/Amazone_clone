import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

function Layout({ children, title, description, keywords, author }) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />

        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />

        <title>{title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
      <main style={{ minHeight: "72vh" }}>
        {" "}
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
}
Layout.defaultProps = {
  title: "Puja app,Pooja App book-now",
  description: "Online puja services, digital puja services",
  keywords: "puja,yagas,marrages,homas,vratas",
  author: "Prakasha Mandir",
};

export default Layout;
