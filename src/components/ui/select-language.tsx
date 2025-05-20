
import { Globe } from "lucide-react"
import { useEffect } from "react";
export function SelectLanguage() {
     const changeLanguage = (language:string) => {
    localStorage.setItem('scrollPosition', String(window?.scrollY));
    const currentPath = window.location.pathname;
    // Check if the current path already has a language prefix
    const currentLanguageMatch = currentPath.match(/^\/([a-z]{2})\//);

    // If a language prefix exists, replace it with the new language, otherwise add it
    let newPath = currentLanguageMatch
      ? currentPath.replace(/^\/[a-z]{2}\//, `/${language}/`)  // Replace existing language prefix
      : `/${language}${currentPath}`;  // Add language prefix for paths without one

    // Redirect to the new language path
    newPath = newPath.startsWith('/en/') ? newPath.replace(/^\/en/, '') : newPath
    console.log({newPath})
    window.location.href = newPath;
  };
  
  useEffect(() => {
    const savedScrollPosition = localStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition));
      localStorage.removeItem('scrollPosition');  // Clean up after restoring
    }
  }, []);

  const currentLang = window.location.pathname.match(/^\/([a-z]{2})\//)?.[1] || "en";

    return (
       
        <>
            <div className="relative inline-flex items-center w-[150px]">
                <Globe className="absolute  text-muted-foreground pointer-events-none" style={{left:1,paddingLeft:6,width:22}}/>
                <select
                    defaultValue={currentLang}
                    className="appearance-none w-full  pr-6 py-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring dark:bg-gray-900 dark:text-white dark:border-gray-700"
                    style={{paddingLeft:30}}
                    onChange={(e)=>changeLanguage(e.target.value)}
                    
                >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="it">Italian</option>

                </select>
                <svg
                    className="pointer-events-none absolute  top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{right:3,marginRight:4}}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </>
    )
}