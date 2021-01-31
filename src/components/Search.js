const Search = (props) => {
  return (
    <div>
      <label className="form-label">Filter trips by length</label>
      <input
        value={props.length}
        onChange={(event) => props.setLength(event.target.value)}
        type="range"
        className="form-range"
        min="1"
        max="5"
        id="customRange2"
      />
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Search
        </span>
        <input
          onChange={(event) => props.setQuery(event.target.value)}
          type="text"
          className="form-control"
          placeholder="Trip name"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
    </div>
  );
};
export default Search;
