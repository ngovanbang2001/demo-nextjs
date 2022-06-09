import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.scss";
export default function Layout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </>
  );
}
