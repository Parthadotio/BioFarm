import React from "react";

const Home = () => {
  return (
    <main className="py-20">
      <section id="home" className="h-screen">
        <h1>Welcome to BioFarm</h1>
        <p>Your gateway to sustainable farming solutions.</p>
      </section>

      <section id="marketplace" className="h-screen">
        Marketplace
      </section>
      <section id="community" className="h-screen">Community</section>

      <section id="about" className="h-screen">
        <h2>About Us</h2>
        <p>
          BioFarm is dedicated to promoting eco-friendly agricultural practices
          through innovative technology and community engagement.
        </p>
      </section>
    </main>
  );
};

export default Home;
