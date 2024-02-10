import Image from "next/image";
import Hero from "./components/Main/Hero";
import Stat from "./components/Main/Stat";
import Contacts from "./components/Main/Contacts";
import Gallery from './components/Main/Gallery';

export default function Home() {
  return (
    <main>
      <Hero/>
      <Stat/>
      <Gallery/>
      <Contacts/>
    </main>
  );
}
