import shows from "../data/showsData";

function Trending({ search }) {
  const filteredShows = shows.filter((show) =>
    show.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="trending">
      <h2>Trending Now</h2>

      <div className="trending-row">
        {filteredShows.length === 0 && <p>No shows found</p>}

        {filteredShows.map((show) => (
          <img
            key={show.id}
            src={show.image}
            alt={show.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Trending;
