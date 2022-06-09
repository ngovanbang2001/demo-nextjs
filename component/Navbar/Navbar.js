import Link from "next/link";
import styles from "./Navbar.module.scss";
export default function Navbar() {
  return (
    <nav className={styles.header}>
      <Link href="/">
        <h1>My Next App</h1>
      </Link>
      <Link href="/post">Post</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
