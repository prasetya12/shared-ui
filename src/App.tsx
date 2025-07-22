import { NavbarPlexicus } from "./components/Navbar";
import { FooterPlexicus } from "./components/Footer";
import i18n from "i18next";
import { supportedLngs } from "./i18n";
import {GoogleAnalytics} from "./components/GTM";

import {useTrackClick} from "./hooks/gtm-event-tracker";
function getLanguageFromUrl(): string {
  const path = window.location.pathname;
  const parts = path.split("/");
  // Assuming the language code is the first segment after the base URL
  const languageCode =  supportedLngs.includes(parts[1]) ? parts[1] : "en"; // Default to 'en' if no code is found
  return languageCode;
}

function App() {
  const language = getLanguageFromUrl();
  // Set the language for i18next
  i18n.changeLanguage(language);

  const trackClick = useTrackClick();

  return (
    <div className="h-screen bg-black">
      <GoogleAnalytics trackingId={'123'} />
      <div className='flex'>
        <NavbarPlexicus lang={language} fullSiteUrl={`https://plexicus.ai:443`} fullBlogUrl={`https://blog.plexicus.ai:443`}/>
      </div>
      <div className="h-screen flex items-center justify-center w-full">
        <button className="bg-white text-black" onClick={ () => trackClick('test', 'marketing', 'pricing', 1)}>Test GTM track</button>
      </div>
      <div className="mt-24">
        <FooterPlexicus lang={language} fullSiteUrl={`https://plexicus.ai:443`}/>
      </div>
    </div>
  );
}

export default App;
