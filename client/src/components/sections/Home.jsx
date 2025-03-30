import Hero from "@/components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <section id="home" className="min-h-screen">
      <div>
        <Header />
        <Hero />
        <Footer />
      </div>
    </section>
  );
};

export default Home;
