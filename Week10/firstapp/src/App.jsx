import About from "./components/About";
import Contact from "./components/Contact";
import History from "./components/History";

function App() {
  return (
    <>
      <h1>
        Hello
      </h1>
      <p>This is some text</p>
      <hr/>
      <History country="Canada" city="Toronto" population={3000}/>
      <History country="Australia" city="Sydney" population={4000} />
      <History country="UAE" city="AlHafsa" population={1000}/>
    </>
  );
}

export default App;
