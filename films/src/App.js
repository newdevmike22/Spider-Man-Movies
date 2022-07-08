import movies from "./comps/movies";
import Movie from "./comps/Movie";
import Spidey from "./assets/spider-man-2.png";
import Title from "./assets/spidey-title.png";

const App = () => {

  const today = new Date();

  return (
    <div className="container">
      <div className="heading"> 
        <img className="spidey" src={Spidey} width="1100px" height="auto" alt="Spider-Man" />
        <h1 className="title-image">
          <img src={Title} width="800px" height="auto" alt="Spider-Man" />
        </h1>
        <h1 className="title">
          The Cinematic Universe
        </h1>
      </div>
      <div className="row row-cols-1 row-cols-md-3">
        {movies.map((movie) => {
          return (
            <div className="col mb-4">
              <Movie key={movie.id} {...movie}/>
            </div>
          )
        })}
      </div>
      <footer>
        <h1>
          &copy; Mike Dodson
          <span> {today.getFullYear()}</span>.
        </h1>
        <div className="social-icons">
          <a href="https://github.com/newdevmike22" className="social-icon"><i class="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/michael-dodson-197231b9/" className="social-icon"><i class="fab fa-linkedin"></i></a>
        </div>
      </footer>
    </div>
  )
}

export default App;
