export function Card(props) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{props.moviesInfo.original_title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {props.moviesInfo.popularity}
          </h6>
          <p className="card-text">{props.moviesInfo.overview}</p>
        </div>

        <button
          className="btn btn-primary"
          onClick={() => {
            props.handleButton(props.moviesInfo);
          }}
        >
          Ver mais informações
        </button>
      </div>
    </>
  );
}
