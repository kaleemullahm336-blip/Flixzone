function Hero({ search, setSearch }) {
  return (
    <header className="hero">
      <nav className="nav">
        <h1 className="logo">FLIXZONE</h1>
        <button className="sign-btn">Sign In</button>
      </nav>

      <div className="hero-content">
        <h2>Unlimited movies, TV shows and more</h2>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <p>
          Ready to watch? Enter your email or search to get started.
        </p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search movies or shows"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="get-started">Get Started</button>
        </div>
      </div>
    </header>
  );
}

export default Hero;
