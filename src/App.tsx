import { NavbarPlexicus } from "./components/Navbar";
import { FooterPlexicus } from "./components/Footer";
import i18n from "i18next";
import { supportedLngs } from "./i18n";

function getLanguageFromUrl(): string {
  const path = window.location.pathname;
  const parts = path.split("/");
  // Assuming the language code is the first segment after the base URL
  const languageCode =  supportedLngs.includes(parts[1]) ? parts[1] : "en"; // Default to 'en' if no code is found
  return languageCode;
}

function App() {
  const language = getLanguageFromUrl();
console.log(language)
  // Set the language for i18next
  i18n.changeLanguage(language);

  return (
    <div className="h-screen bg-black">
      <div className='flex'>
        <NavbarPlexicus lang={language} fullSiteUrl={`https://plexicus.ai`}/>
      </div>
      <div className="h-screen"></div>
      <div className="mt-24">
        <FooterPlexicus lang={language} fullSiteUrl={`https://plexicus.ai:443`}/>
      </div>
    </div>
  );
}

export default App;
