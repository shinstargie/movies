import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
      </Router>
    </>
  );
}

export default App;

{
  /* <Section>
        <StyledContainer>
          <Modal
            style={modalStyles}
            isOpen={toggleModal}
            onRequestClose={() => setToggleModal(!toggleModal)}
          >
            {currentMovie && (
              <>
                {loading && <TrailerLoading />}

                <h1>{currentMovie.title}</h1>
                <Trailer movie={currentMovie} />
                <p>{currentMovie.overview}</p>
              </>
            )}
          </Modal>

          <MovieContainer>
            {data?.map((movie) => (
              <MovieImage
                key={movie.id}
                src={IMAGE_PATH + `${movie.poster_path}`}
                alt={movie.title}
                onClick={() => openModal(movie)}
              />
            ))}
          </MovieContainer>
        </StyledContainer>
      </Section> */
}

{
  /* 

   function setSortyBy(val: any): void {
    setSort(val.value);
  }
  
  <img
                  className="movie-image"
                  src={IMAGE_PATH + `${movie.poster_path}`}
                  src={BACKDROP_PATH + `${movie.backdrop_path}`}
                  alt={movie.title}
                /> */
}

/* <div className="controls">
            <select
              onChange={(event: React.ChangeEvent<Element>) =>
                setSortyBy(event.target)
              }
              defaultValue={sort}
            >
              <option value="">Select an option</option>
              <option value="release_date.asc">Oldest</option>
              <option value="release_date.desc">Latest</option>
            </select>

            <select
              onChange={(event) => setPage(Number(event.target.value))}
              defaultValue={page}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </div> */
