import "@/styles/globals.css";
import "@/styles/style.css";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "react-quill/dist/quill.snow.css";
import "gridjs/dist/theme/mermaid.css";
import "react-datepicker/dist/react-datepicker.css";

import { Montserrat } from "next/font/google";
import Providers from "./providers";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "weareprintlab",
  description:
    "Weareprintlab is a platform that allows you to create and sell custom print-on-demand products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body
        style={{
          fontFamily: "Montserrat, sans-serif",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
