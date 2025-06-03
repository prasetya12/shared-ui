import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getFullsiteUrl(url: string, redirect: string): string {
  if (url) {
    const splitUrlPort = url.split(':');

    if (
      splitUrlPort.length >= 3 && 
      splitUrlPort[0] && 
      splitUrlPort[2] !== '443'
    ) {
      return url;
    }
  }

  return redirect;
}
