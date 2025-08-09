import type { Metadata } from "next";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import "nextra-theme-docs/style.css";
import { Banner, Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";

export const metadata = {
  title: "Documentation | Under The Hood",
  description: "Under The Hood Documentation using Nextra",
  keywords: ["nextra", "documentation"],
};

const banner = (
  <Banner storageKey="some-key">
    Welcome to Under The Hood Documentation 🎉
  </Banner>
);
const navbar = (
  <Navbar
    logo={<b>Under The Hood</b>}
    logoLink="/introduction"
    projectLink="https://github.com/UnderTheHoodDev"
    chatLink="https://discord.gg/"
    // ... Your additional navbar options
  />
);
const footer = <Footer>{new Date().getFullYear()} © Under The Hood.</Footer>;

const search = <Search placeholder="Search docs.."></Search>;

export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/UnderTheHoodDev/uth-documentation"
          footer={footer}
          search={search}
          toc={{
            float: true,
            title: "Table of Contents",
          }}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
