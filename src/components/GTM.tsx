import React from 'react';
import { gtmTrackingCode } from '../constants/Gtm';
/**
 * GoogleAnalytics Component
 *
 * This component is responsible for injecting the Google Analytics gtag.js
 * script into the document's <head> section. It ensures that Google Analytics
 * is loaded and configured when the component mounts.
 *
 * @param {string} trackingId - The Google Analytics Measurement ID (e.g., "G-XXXXXXXXXX").
 * This ID will be used to configure gtag.
 */
export const GoogleAnalytics: React.FC<{ trackingId: string }> = ({trackingId = gtmTrackingCode}) => {
  return (
    <>
      {/* External gtag.js script */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`} />

      {/* Inline script for dataLayer configuration */}
      <script
        is:inline // This attribute is for Astro, but harmless in React.
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', '${trackingId}');
          `,
        }}
      />
    </>
  );
};