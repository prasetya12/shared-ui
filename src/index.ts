import GoogleAnalytics from './components/GTM'
import { gtmTrackingCode as trackingId} from './constants/Gtm';

const gtm = GoogleAnalytics({trackingId})
import './index.css'
export {NavbarPlexicus} from "./components/Navbar"
export {FooterPlexicus} from "./components/Footer"
export { SelectLanguage } from "./components/ui/select-language"

export {gtm}