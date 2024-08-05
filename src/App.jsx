import person from "../src/assets/images/image-victor.jpg";
import "./App.css";

function App() {
  return (
    <main>
      <div id="top"></div>
      <div id="bottom">
        <div id="middle">
          <img src={person} id="person" />
          <h3>
            Victor Crest <span>26</span>
          </h3>
          <label id="country">London</label>
        </div>
        <hr />
        <div id="about">
          <div className="info">
            <h3>80K</h3>
            <label className="lab">Followers</label>
          </div>
          <div className="info">
            <h3>803K</h3>
            <label className="lab">Likes</label>
          </div>
          <div className="info">
            <h3>1.4K</h3>
            <label className="lab">Photos</label>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
