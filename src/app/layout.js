// src/app/layout.js
import Navbar from '@/components/layout/Navbar';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}