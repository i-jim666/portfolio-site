import "./global.sass";
import { DM_Sans } from "next/font/google";

const DM_Sans_Font = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Ishtiaque Ali Jim",
  description: "Site under development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={DM_Sans_Font.className}>{children}</body>
    </html>
  );
}
