/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from 'react';

/**
 * useTrackClick Custom Hook
 *
 * This hook provides a function to send a custom click event to Google Analytics.
 * It assumes that the Google Analytics gtag.js script has been loaded
 * and initialized, making the global 'gtag' function available.
 *
 * @returns {function(string, string, string, number?): void} A function to call
 * when a click event needs to be tracked.
 * - eventName: The name of the event (e.g., 'button_click', 'link_click').
 * - eventCategory: The category of the event (e.g., 'Interaction', 'Navigation').
 * - eventLabel: A label for the event (e.g., 'Submit Button', 'Product Link').
 * - value (optional): A numerical value associated with the event.
 */
export const useTrackClick = () => {
  const trackClick = useCallback(
    (eventName: string, eventCategory: string, eventLabel: string, value?: number) => {
      // Check if gtag is defined before calling it
      if (typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', eventName, {
          event_category: eventCategory,
          event_label: eventLabel,
          ...(value !== undefined && { value: value }), // Conditionally add value
        });
        console.log(`Google Analytics event sent: ${eventName}`, {
          event_category: eventCategory,
          event_label: eventLabel,
          value: value,
        });
      } else {
        console.warn('gtag is not defined. Google Analytics script might not be loaded.');
      }
    },
    [] // No dependencies, so the function reference is stable
  );

  return trackClick;
};

