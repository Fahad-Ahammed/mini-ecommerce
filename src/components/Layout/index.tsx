import Navbar from '../NavBar'
import Footer from '../Footer'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"],weight:["400","500","800"] });
export default function Layout({ children }:any) {
  return (
    <>
      <Navbar />
      <main className={`mt-[55px] lg:mt-[65px] bg-[#f8f8f8] min-h-[calc(100vh-65px)] ${inter.className}`}>{children}</main>
      <Footer />
    </>
  )
}