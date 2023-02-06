import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ContactInfo from "./components/ContactInfo";
import Paragraphs from "./components/Paragraphs";
import Headings from "./components/Headings";

function App() {
  return (
    <div className="App">
      <Header />
      <ContactInfo />
      <Navbar />
      <Headings text={"About our Program"} />
      <Paragraphs
        text={
          "To provide each child with a healthy and happy Pre-K experience in a warm and loving Christian home environment and to ignite his/her excitement for future learning; to build self esteem, self confidence and self reliance. My approach to teaching is hands-on and play-based. Learning styles vary. I believe the best approach to learning is through all of the senses. I promote problem solving, positive social skills and communication every day. My curriculum includes studies of interest to the Pre-K child and I work hard to present these studies as well as necessary kindergarten and life skills in a meaningful way."
        }
      />
    </div>
  );
}

export default App;
