// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "../ui/select"
// import { DEFAULT_LANGUAGE } from "../../contants/LanguageData"
import { Globe } from "lucide-react"
export function SelectLanguage() {
    return (
        // <>
        //     <Select defaultValue={DEFAULT_LANGUAGE.code}>
        //         <SelectTrigger className="w-[150px] px-2 ">
        //             <Globe className="text-gray-600 w-5"/><SelectValue placeholder="Theme" />
        //         </SelectTrigger>
        //         <SelectContent>
        //         <SelectItem value="en" key={0}>English</SelectItem>
        //         <SelectItem value="id" key={1}>Indonesia</SelectItem>


        //             {/* {LANGUAGES.map((lang, index) => (
        //                 <SelectItem value={lang.code} key={index}>{lang.name}</SelectItem>
        //             ))} */}
        //         </SelectContent>
        //     </Select>
        // </>
        <>
            <div className="relative inline-flex items-center w-[150px]">
                <Globe className="absolute left-2 h-4 w-4 text-muted-foreground pointer-events-none" />
                <select
                    defaultValue="en"
                    className="appearance-none w-full pl-8 pr-6 py-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring dark:bg-gray-900 dark:text-white dark:border-gray-700"
                >
                    <option value="en">English</option>
                    <option value="id">Indonesia</option>
                </select>
                <svg
                    className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </>
    )
}