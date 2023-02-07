import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ContactInfo from "./components/ContactInfo";
import Paragraphs from "./components/Paragraphs";
import Headings from "./components/Headings";
import ContactCard from "./components/ContactCard";
import MobileNavbar from "./components/MobileNavbar";
import Offerings from "./components/Offerings";
import ImageSlider from "./components/ImageSlider";

const topImages = [
  "https://media.istockphoto.com/id/1346927889/photo/colorful-garden-of-the-gods.jpg?s=612x612&w=0&k=20&c=v-JlOKOsUf5XRbzBB9uifKfUTDoighTmqKMkpgT7FGY=",
  "https://media.gettyimages.com/id/162499166/photo/garden-of-the-gods-colorado-springs.jpg?s=612x612&w=gi&k=20&c=ruEWwOANAo0IhYI40iuYZ1EvkFTh4tQ_sjrIvXNUbjc=",
];

function App() {
  return (
    <div className="App animated animatedFadeInUp fadeInUp">
      <Header id="home" />
      <ContactInfo />
      <Navbar />
      <MobileNavbar />
      <div id="top-image-slider">
        <ImageSlider images={topImages} />
      </div>
      <Headings text={"About our Program"} id="my-program" />
      <Paragraphs
        text={
          "To provide each child with a healthy and happy Pre-K experience in a warm and loving Christian home environment and to ignite his/her excitement for future learning; to build self esteem, self confidence and self reliance. My approach to teaching is hands-on and play-based. Learning styles vary. I believe the best approach to learning is through all of the senses. I promote problem solving, positive social skills and communication every day. My curriculum includes studies of interest to the Pre-K child and I work hard to present these studies as well as necessary kindergarten and life skills in a meaningful way."
        }
      />
      <Headings text={"What we Offer"} />
      <Offerings />
      <Headings text={"Our Facilities"} />
      <div id="facilities-image-slider">
        <ImageSlider images={topImages} />
      </div>
      <Headings text={"Meet your Teacher!"} />
      <Paragraphs
        text={
          "I am passionate about teaching preschool! I have been working in the field of early childhood education for almost 20 years beginning in high school. I am a member of NAEYC, CAEYC and am licensed with the state of Colorado. After 10 years of working in the public school system in Nevada I moved to Colorado Springs and began working at a childcare center and did so for over two years. At that time, I decided to open my own preschool classroom. I have been teaching preschool-age students in my home as a licensed family childcare provider for over five years. My husband and I have been married 9 years. We have a beautifully blended family with six children whose ages range from 17- 25. We have one dog named Rosie and a cat named Ophelia. I enjoy being able to teach children from my home. I love working with them and seeing their faces light up when they learn something new! I’m excited to have your child join our class and look forward to teaching, as well as learning from them. I truly believe each child has amazing potential and gifts already inside of them. Thank you for considering becoming a part of the Leaps & Bounds Preschool family!"
        }
      />
      <Headings text="Contact" id="contact" />
      <ContactCard />
    </div>
  );
}

export default App;
