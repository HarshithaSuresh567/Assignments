import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Button from "./components/Button";
import ImageCard from "./components/ImageCard";
import List from "./components/List";
import Grid from "./components/Grid";
import Table from "./components/Table";
import Form from "./components/Form";

function App() {
  return (
    <div className="bg-gray-100 space-y-10">
      <Navbar />
      <Hero />
      <Button />
      <ImageCard />
      <List />
      <Grid />
      <Table />
      <Form />
    </div>
  );
}

export default App;
