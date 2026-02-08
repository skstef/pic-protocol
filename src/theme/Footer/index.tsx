import type { ReactNode } from "react";
import { Footer as CustomFooter } from "../../components/Footer";

// Docusaurus theme override: this footer will be rendered on all pages
// (docs, blog, and regular pages) via the default Layout.
export default function Footer(): ReactNode {
  return <CustomFooter />;
}

