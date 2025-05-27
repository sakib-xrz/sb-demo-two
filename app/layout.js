/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-page-custom-font */

export const metadata = {
  title: "Onovo - Creative Portfolio Agency HTML5 Template",
  description:
    "Creative studio at the intersection of art, design and technology.",
  authors: [{ name: "bslthemes" }],
  viewport: "width=device-width, initial-scale=1",
  other: {
    HandheldFriendly: "true",
  },
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Fonts */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Epilogue%3Aital%2Cwght%400%2C100%3B0%2C200%3B0%2C300%3B0%2C400%3B0%2C500%3B0%2C600%3B0%2C700%3B0%2C800%3B0%2C900%3B1%2C100%3B1%2C200%3B1%2C300%3B1%2C400%3B1%2C500%3B1%2C600%3B1%2C700%3B1%2C800%3B1%2C900&#038;display=swap"
          type="text/css"
          media="all"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin="anonymous"
        />

        {/* CSS STYLES */}
        <link
          rel="stylesheet"
          href="/assets/css/vendors/bootstrap.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/assets/fonts/font-awesome/css/font-awesome.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/assets/css/vendors/magnific-popup.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/assets/css/vendors/splitting.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/assets/css/vendors/swiper.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/assets/css/vendors/animate.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/assets/css/vendors/jquery.pagepiling.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/assets/css/style.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/assets/css/custom-services.css"
          type="text/css"
          media="all"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
