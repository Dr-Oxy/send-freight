import "./App.css";
import Header from "./components/Header";
import PageTitle from "./components/PageTitle";
import Service from "./components/Service";
import ImportExport from "./components/ImportExport";
import CargoServices from "./components/CargoServices";
import AdditionalServices from "./components/AdditionalServices";

function App() {
  return (
    <div className="App">
      <Header />
      <PageTitle />

      <main className="container">
        <Service />
        <ImportExport />
        <CargoServices />
        <AdditionalServices />
      </main>
    </div>
  );
}

export default App;
