import Video from './components/Video';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Video bgColor="red" title="React JS Tutorial Video" />
      <Video bgColor="green" title="Node JS Tutorial Video" />
    </div>
  );
}

export default App;
