import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dalet architettura</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Image
          src="/logo.png"
          width={150}
          height={150}
          alt="Picture of the author"
          className="logo"
        />
        <Header title="Sito Web in costruzione" />
        <div className="contatti">
          <div>Piazza San Giovanni in Monte, 6 40124 | Bologna</div>
          <div>
            <Link href="mailto:dalet.architettura@gmail.com">
              dalet.architettura@gmail.com
            </Link>
          </div>
          <div>+39 051 0860150</div>
          <div>+39 328 668 0536</div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
