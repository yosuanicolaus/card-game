import PlayModal from "./PlayModal";

function Home() {
  return (
    <div className="d-flex flex-column text-center justify-content-center align-items-center min-vh-100 bg-gradient">
      <div className="display-2">Blackjack</div>

      <PlayModal />

      <footer className="fixed-bottom opacity-25">
        copyright yosuanicolaus 2022
      </footer>
    </div>
  );
}

export default Home;
