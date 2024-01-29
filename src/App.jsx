// Write your Color component here
const Color = ({ color }) => {
  return <div className={color}></div>
}

const App = () => {
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className="red">red</div>
      </div>
      <div id="colors-list">
        <Color color="violet" />
        <Color color="red"  />
        <Color color="blue"  />
      </div>
    </div>
  );
};

export default App;
