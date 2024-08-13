"use client"; // Add this at the very top of your file
export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  )
}
