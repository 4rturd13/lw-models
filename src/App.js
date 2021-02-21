import { Header } from "./components/Header";
import { SocialNetworks } from "./components/SocialNetworks";
import { MediaNavigationTabs } from "./components/MediaNavigationTabs";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <SocialNetworks />
        <MediaNavigationTabs />
      </div>
    </div>
  );
}

export default App;
