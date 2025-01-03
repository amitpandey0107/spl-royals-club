import { Html, Head, Main, NextScript } from "next/document";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shodat",
  description: "Innovating Insigths, Accelerating Growth",
};
export default function Document() {
  return (
    <Html lang="en">
      <title>SPL Royals Club</title>
      <link rel="icon" href="/img/spl_logo.png" sizes="48x48" />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
        />

        <meta name="title" content="Next Generation AI Solutions for Your Business | Shodat AI" />
        <meta name="description" content="Discover cutting-edge AI solutions to drive innovation and growth in your business with Shodat AI" />
        <meta name="keywords" content="AI solutionsData AnalyticsData-driven insightsBusiness transformation" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
