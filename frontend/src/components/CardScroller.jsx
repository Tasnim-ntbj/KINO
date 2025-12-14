export default function CardScroller() {
  return (
    <div className="carousel carousel-center w-full p-4 space-x-4 bg-base-200 rounded-box overflow-x-auto scroll-smooth snap-x snap-mandatory">
      
      <div className="carousel-item snap-center">
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure><img src="https://picsum.photos/300/200?1" alt="" /></figure>
          <div className="card-body">
            <h2 className="card-title">Card One</h2>
            <p>Content here.</p>
          </div>
        </div>
      </div>

      <div className="carousel-item snap-center">
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure><img src="https://picsum.photos/300/200?2" alt="" /></figure>
          <div className="card-body">
            <h2 className="card-title">Card Two</h2>
            <p>Content here.</p>
          </div>
        </div>
      </div>

      <div className="carousel-item snap-center">
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure><img src="https://picsum.photos/300/200?3" alt="" /></figure>
          <div className="card-body">
            <h2 className="card-title">Card Three</h2>
            <p>More text.</p>
          </div>
        </div>
      </div>

      <div className="carousel-item snap-center">
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure><img src="https://picsum.photos/300/200?4" alt="" /></figure>
          <div className="card-body">
            <h2 className="card-title">Card Four</h2>
            <p>More text.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
