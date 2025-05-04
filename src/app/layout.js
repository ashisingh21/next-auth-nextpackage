// app/layout.js (or layout.tsx)
import './globals.css';
import SessionWrapper from './SessionWrapper'; // Adjust path if it's in a components folder

export const metadata = {
  title: 'My App',
  description: 'A Next.js app with auth',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>{children}</SessionWrapper>
      </body>
    </html>
  );
}
