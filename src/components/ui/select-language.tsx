import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select"
import {  DEFAULT_LANGUAGE } from "../../contants/LanguageData"
import { Globe } from "lucide-react"
export function SelectLanguage() {
    return (
        <>
            <Select defaultValue={DEFAULT_LANGUAGE.code}>
                <SelectTrigger className="w-[150px] px-2 ">
                    <Globe className="text-gray-600 w-5"/><SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="en" key={0}>English</SelectItem>
                <SelectItem value="id" key={1}>Indonesia</SelectItem>


                    {/* {LANGUAGES.map((lang, index) => (
                        <SelectItem value={lang.code} key={index}>{lang.name}</SelectItem>
                    ))} */}
                </SelectContent>
            </Select>
        </>
    )
}