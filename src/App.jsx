import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Testimonial from "./components/Testimonial";
import Data from "./Data";
import "./App.css";
import "./components/css/Testimonial.css"

function App() {
  return (
    <main className="outer-container">
      <div className="inner-container">
        <Header />
        <section className="testimonial-container">
        {Data.map(({ id, name, profile, verification, review }) => (
          <Testimonial
            key={id}
            id={id}
            name={name}
            profile={profile}
            verification={verification}
            review={review}
          />
        ))}
        </section>
      </div>
    </main>
  );
}

export default App;
