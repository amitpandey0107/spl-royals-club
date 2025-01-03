
import Head from "next/head";
import Header from "./header";
import Banner from "./banner";
export default function Home() {
    return (
        <div className="main">
            <Head>
                <title>
                    SPL Royals Club
                </title>
                <meta
                    name="title"
                    content="SPL Royals Club"
                />
                <meta
                    name="description"
                    content="Saturday Premiure League cricket club"
                />
                <meta
                    name="keywords"
                    content="A solution for all cricket needs"
                />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
            </Head>

            {/* Header */}
            <Header />

            {/* Banner */}
            <Banner />
            
        </div>
    );
}
