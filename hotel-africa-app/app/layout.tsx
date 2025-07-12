import './globals.css';
export const metadata = {
  title: 'Hotel Africa',
  description: 'Book stays, flights, and more across Africa.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}
