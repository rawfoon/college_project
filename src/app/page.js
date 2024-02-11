
import Hero from "./components/Main/Hero";
import Stat from "./components/Main/Stat";
import Contacts from "./components/Main/Contacts";
import Gallery from './components/Main/Gallery';
import Cards from "./components/Main/Cards";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Cards/>
      <Stat/>
      <Gallery/>
      <Contacts/>
    </main>
  );
}
