import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select"
import { LANGUAGES, DEFAULT_LANGUAGE } from "../../contants/LanguageData"
import { Globe } from "lucide-react"
export function SelectLanguage() {
    return (
        <>
            <Select defaultValue={DEFAULT_LANGUAGE.code}>
                <SelectTrigger className="w-[150px] px-2 ">
                    <Globe className="text-gray-600 w-5"/><SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                    {LANGUAGES.map((lang, index) => (
                        <SelectItem value={lang.code} key={index}>{lang.name}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </>
    )
}