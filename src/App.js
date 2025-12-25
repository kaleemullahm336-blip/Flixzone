import { useState } from "react";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import FAQ from "./components/FAQ";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Hero search={search} setSearch={setSearch} />
      <Trending search={search} />
      <FAQ />
    </>
  );
}

export default App;
