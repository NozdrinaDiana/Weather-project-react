import "./styles.css";
import Weather from "./Weather";


export default function App() {
  return (
    <div>
    <div className="App">
        <Weather defaultCity="New York" />
        </div>
     <footer className="footer">
      <a class="githab"
        href="https://github.com/NozdrinaDiana/Weather-project-react"
        target="_blank" rel="noreferrer" >Open-source code </a>  by Diana Nozdrina
    </footer>
    </div>
  );
}