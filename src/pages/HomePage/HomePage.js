import { useState, useEffect } from "react";
import HomeContents from "../../components/HomeContents/HomeContents";
import HomePageModal from "./HomePageModal";
import images from "../../components/HomeContents/HomeImages";

export default function HomePage() {
  const [backgroundState, setBackgroundState] = useState({
    background: images[1],
  });

  const [modalState, setIsModalState] = useState(true);

  const closeModal = () => {
    setIsModalState();
  };

  const changeBackground = () => {
    setInterval(async () => {
      let changeImg = await images[Math.floor(Math.random() * images.length)];
      setBackgroundState({ background: changeImg });
    }, 8000);
  };

  useEffect(() => {
    changeBackground();
  }, []);

  let style = {
    width: "100%",
    height: "75vh",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundState.background})`,
    // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${images[1]})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
  };

  return (
    <>
      <main className="page" style={style}>
        <div style={{ width: "60%" }}>
          <h1
            style={{
              color: "white",
              textAlign: "center",
              paddingBottom: "35px",
            }}
          >
            ADOPT AND GET BACK MORE THAN WHAT’S HUMANLY POSSIBLE
            <br />
            <a href="/#homec" style={{ color: "white" }}>
              <i class="fas fa-arrow-circle-down"></i>
            </a>
          </h1>
        </div>
      </main>
      <main id="homec" className="page">
        <HomeContents />
      </main>
      <HomePageModal modalState={modalState} closeModal={closeModal} />
    </>
  );
}
