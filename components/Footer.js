import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Link
          href="https://www.instagram.com/dalet.architettura/"
          target="blank"
          title="instagram"
        >
          <Image src="/instagram.svg" width={30} height={30} alt="instagram" />
        </Link>
      </footer>
    </>
  );
}
