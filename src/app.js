import Main from "./components/main";
import Nav from "./components/navbar";

const App = () => {
    return (
        <div className="app">
            <Nav />
            <hr />
            <Main />
        </div>
    );
}

export default App;