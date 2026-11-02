import "@/styles/globals.css";
import "@/styles/style.css";
import "@/styles/vendor.css";
import "@/styles/react-datepicker.css";

import Providers from "./providers";

export const metadata = {
  title: "weareprintlab",
  description:
    "Weareprintlab is a platform that allows you to create and sell custom print-on-demand products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
