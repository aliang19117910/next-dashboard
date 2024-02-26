import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <meta charset="UTF-8" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
