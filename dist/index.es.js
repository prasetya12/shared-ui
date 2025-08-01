(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode('/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){.ui-lib *,.ui-lib :before,.ui-lib :after,.ui-lib ::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-pan-x:initial;--tw-pan-y:initial;--tw-pinch-zoom:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-divide-x-reverse:0;--tw-border-style:solid;--tw-divide-y-reverse:0;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-animation-delay:0s;--tw-animation-direction:normal;--tw-animation-duration:initial;--tw-animation-fill-mode:none;--tw-animation-iteration-count:1;--tw-enter-opacity:1;--tw-enter-rotate:0;--tw-enter-scale:1;--tw-enter-translate-x:0;--tw-enter-translate-y:0;--tw-exit-opacity:1;--tw-exit-rotate:0;--tw-exit-scale:1;--tw-exit-translate-x:0;--tw-exit-translate-y:0}}}@layer theme{.ui-lib,.ui-lib :host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-800:oklch(44.8% .119 151.328);--color-purple-300:oklch(82.7% .119 306.383);--color-purple-700:oklch(49.6% .265 301.924);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-sm:24rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wider:.05em;--ease-in-out:cubic-bezier(.4,0,.2,1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{.ui-lib *,.ui-lib :after,.ui-lib :before,.ui-lib ::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}.ui-lib ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}.ui-lib html,.ui-lib :host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}.ui-lib hr{height:0;color:inherit;border-top-width:1px}.ui-lib abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.ui-lib h1,.ui-lib h2,.ui-lib h3,.ui-lib h4,.ui-lib h5,.ui-lib h6{font-size:inherit;font-weight:inherit}.ui-lib a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}.ui-lib b,.ui-lib strong{font-weight:bolder}.ui-lib code,.ui-lib kbd,.ui-lib samp,.ui-lib pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}.ui-lib small{font-size:80%}.ui-lib sub,.ui-lib sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}.ui-lib sub{bottom:-.25em}.ui-lib sup{top:-.5em}.ui-lib table{text-indent:0;border-color:inherit;border-collapse:collapse}.ui-lib :-moz-focusring{outline:auto}.ui-lib progress{vertical-align:baseline}.ui-lib summary{display:list-item}.ui-lib ol,.ui-lib ul,.ui-lib menu{list-style:none}.ui-lib img,.ui-lib svg,.ui-lib video,.ui-lib canvas,.ui-lib audio,.ui-lib iframe,.ui-lib embed,.ui-lib object{vertical-align:middle;display:block}.ui-lib img,.ui-lib video{max-width:100%;height:auto}.ui-lib button,.ui-lib input,.ui-lib select,.ui-lib optgroup,.ui-lib textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}.ui-lib ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}.ui-lib :where(select:is([multiple],[size])) optgroup{font-weight:bolder}.ui-lib :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}.ui-lib ::file-selector-button{margin-inline-end:4px}.ui-lib ::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){.ui-lib ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){.ui-lib ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}.ui-lib textarea{resize:vertical}.ui-lib ::-webkit-search-decoration{-webkit-appearance:none}.ui-lib ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}.ui-lib ::-webkit-datetime-edit{display:inline-flex}.ui-lib ::-webkit-datetime-edit-fields-wrapper{padding:0}.ui-lib ::-webkit-datetime-edit{padding-block:0}.ui-lib ::-webkit-datetime-edit-year-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-month-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-day-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-hour-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-minute-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-second-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-millisecond-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-meridiem-field{padding-block:0}.ui-lib :-moz-ui-invalid{box-shadow:none}.ui-lib button,.ui-lib input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}.ui-lib ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}.ui-lib ::-webkit-inner-spin-button{height:auto}.ui-lib ::-webkit-outer-spin-button{height:auto}.ui-lib [hidden]:where(:not([hidden=until-found])){display:none!important}.ui-lib *{border-color:var(--border);outline-color:var(--ring)}@supports (color:color-mix(in lab,red,red)){.ui-lib *{outline-color:color-mix(in oklab,var(--ring)50%,transparent)}}.ui-lib{background-color:var(--background);color:var(--foreground)}}@layer components;@layer utilities{.ui-lib .pointer-events-none{pointer-events:none}.ui-lib .collapse{visibility:collapse}.ui-lib .invisible{visibility:hidden}.ui-lib .visible{visibility:visible}.ui-lib .sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.ui-lib .not-sr-only{clip:auto;white-space:normal;width:auto;height:auto;margin:0;padding:0;position:static;overflow:visible}.ui-lib .absolute{position:absolute}.ui-lib .fixed{position:fixed}.ui-lib .relative{position:relative}.ui-lib .static{position:static}.ui-lib .sticky{position:sticky}.ui-lib .inset-0{inset:calc(var(--spacing)*0)}.ui-lib .top-0{top:calc(var(--spacing)*0)}.ui-lib .top-1{top:calc(var(--spacing)*1)}.ui-lib .top-1\\/2{top:50%}.ui-lib .top-16{top:calc(var(--spacing)*16)}.ui-lib .right-0{right:calc(var(--spacing)*0)}.ui-lib .right-2{right:calc(var(--spacing)*2)}.ui-lib .left-0{left:calc(var(--spacing)*0)}.ui-lib .isolate{isolation:isolate}.ui-lib .isolation-auto{isolation:auto}.ui-lib .z-30{z-index:30}.ui-lib .z-40{z-index:40}.ui-lib .z-50{z-index:50}.ui-lib .container{width:100%}@media (min-width:40rem){.ui-lib .container{max-width:40rem}}@media (min-width:48rem){.ui-lib .container{max-width:48rem}}@media (min-width:64rem){.ui-lib .container{max-width:64rem}}@media (min-width:80rem){.ui-lib .container{max-width:80rem}}@media (min-width:96rem){.ui-lib .container{max-width:96rem}}.ui-lib .-mx-1{margin-inline:calc(var(--spacing)*-1)}.ui-lib .mx-auto{margin-inline:auto}.ui-lib .my-1{margin-block:calc(var(--spacing)*1)}.ui-lib .mt-1{margin-top:calc(var(--spacing)*1)}.ui-lib .mt-6{margin-top:calc(var(--spacing)*6)}.ui-lib .mt-8{margin-top:calc(var(--spacing)*8)}.ui-lib .mt-24{margin-top:calc(var(--spacing)*24)}.ui-lib .mr-1{margin-right:calc(var(--spacing)*1)}.ui-lib .mr-2{margin-right:calc(var(--spacing)*2)}.ui-lib .mr-4{margin-right:calc(var(--spacing)*4)}.ui-lib .mb-3{margin-bottom:calc(var(--spacing)*3)}.ui-lib .mb-4{margin-bottom:calc(var(--spacing)*4)}.ui-lib .mb-6{margin-bottom:calc(var(--spacing)*6)}.ui-lib .ml-0{margin-left:calc(var(--spacing)*0)}.ui-lib .ml-1{margin-left:calc(var(--spacing)*1)}.ui-lib .ml-4{margin-left:calc(var(--spacing)*4)}.ui-lib .block{display:block}.ui-lib .contents{display:contents}.ui-lib .flex{display:flex}.ui-lib .flow-root{display:flow-root}.ui-lib .grid{display:grid}.ui-lib .hidden{display:none}.ui-lib .inline{display:inline}.ui-lib .inline-block{display:inline-block}.ui-lib .inline-flex{display:inline-flex}.ui-lib .inline-grid{display:inline-grid}.ui-lib .inline-table{display:inline-table}.ui-lib .list-item{display:list-item}.ui-lib .table{display:table}.ui-lib .table-caption{display:table-caption}.ui-lib .table-cell{display:table-cell}.ui-lib .table-column{display:table-column}.ui-lib .table-column-group{display:table-column-group}.ui-lib .table-footer-group{display:table-footer-group}.ui-lib .table-header-group{display:table-header-group}.ui-lib .table-row{display:table-row}.ui-lib .table-row-group{display:table-row-group}.ui-lib .h-3{height:calc(var(--spacing)*3)}.ui-lib .h-3\\.5{height:calc(var(--spacing)*3.5)}.ui-lib .h-4{height:calc(var(--spacing)*4)}.ui-lib .h-6{height:calc(var(--spacing)*6)}.ui-lib .h-8{height:calc(var(--spacing)*8)}.ui-lib .h-9{height:calc(var(--spacing)*9)}.ui-lib .h-10{height:calc(var(--spacing)*10)}.ui-lib .h-11{height:calc(var(--spacing)*11)}.ui-lib .h-12{height:calc(var(--spacing)*12)}.ui-lib .h-14{height:calc(var(--spacing)*14)}.ui-lib .h-16{height:calc(var(--spacing)*16)}.ui-lib .h-36{height:calc(var(--spacing)*36)}.ui-lib .h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.ui-lib .h-full{height:100%}.ui-lib .h-px{height:1px}.ui-lib .h-screen{height:100vh}.ui-lib .max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}.ui-lib .max-h-full{max-height:100%}.ui-lib .w-3{width:calc(var(--spacing)*3)}.ui-lib .w-3\\.5{width:calc(var(--spacing)*3.5)}.ui-lib .w-4{width:calc(var(--spacing)*4)}.ui-lib .w-6{width:calc(var(--spacing)*6)}.ui-lib .w-8{width:calc(var(--spacing)*8)}.ui-lib .w-10{width:calc(var(--spacing)*10)}.ui-lib .w-12{width:calc(var(--spacing)*12)}.ui-lib .w-28{width:calc(var(--spacing)*28)}.ui-lib .w-\\[150px\\]{width:150px}.ui-lib .w-auto{width:auto}.ui-lib .w-full{width:100%}.ui-lib .max-w-7xl{max-width:var(--container-7xl)}.ui-lib .max-w-none{max-width:none}.ui-lib .max-w-sm{max-width:var(--container-sm)}.ui-lib .min-w-\\[8rem\\]{min-width:8rem}.ui-lib .min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.ui-lib .flex-1{flex:1}.ui-lib .shrink{flex-shrink:1}.ui-lib .grow{flex-grow:1}.ui-lib .border-collapse{border-collapse:collapse}.ui-lib .origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}.ui-lib .translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .translate-none{translate:none}.ui-lib .scale-3d{scale:var(--tw-scale-x)var(--tw-scale-y)var(--tw-scale-z)}.ui-lib .rotate-180{rotate:180deg}.ui-lib .transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.ui-lib .cursor-default{cursor:default}.ui-lib .touch-pinch-zoom{--tw-pinch-zoom:pinch-zoom;touch-action:var(--tw-pan-x,)var(--tw-pan-y,)var(--tw-pinch-zoom,)}.ui-lib .resize{resize:both}.ui-lib .appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.ui-lib .grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.ui-lib .flex-col{flex-direction:column}.ui-lib .flex-wrap{flex-wrap:wrap}.ui-lib .items-center{align-items:center}.ui-lib .items-start{align-items:flex-start}.ui-lib .justify-between{justify-content:space-between}.ui-lib .justify-center{justify-content:center}.ui-lib .justify-start{justify-content:flex-start}.ui-lib .gap-2{gap:calc(var(--spacing)*2)}.ui-lib .gap-3{gap:calc(var(--spacing)*3)}.ui-lib .gap-4{gap:calc(var(--spacing)*4)}.ui-lib .gap-6{gap:calc(var(--spacing)*6)}.ui-lib .gap-8{gap:calc(var(--spacing)*8)}.ui-lib :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}.ui-lib :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}.ui-lib :where(.space-y-reverse>:not(:last-child)){--tw-space-y-reverse:1}.ui-lib :where(.space-x-reverse>:not(:last-child)){--tw-space-x-reverse:1}.ui-lib :where(.divide-x>:not(:last-child)){--tw-divide-x-reverse:0;border-inline-style:var(--tw-border-style);border-inline-start-width:calc(1px*var(--tw-divide-x-reverse));border-inline-end-width:calc(1px*calc(1 - var(--tw-divide-x-reverse)))}.ui-lib :where(.divide-y>:not(:last-child)){--tw-divide-y-reverse:0;border-bottom-style:var(--tw-border-style);border-top-style:var(--tw-border-style);border-top-width:calc(1px*var(--tw-divide-y-reverse));border-bottom-width:calc(1px*calc(1 - var(--tw-divide-y-reverse)))}.ui-lib :where(.divide-y-reverse>:not(:last-child)){--tw-divide-y-reverse:1}.ui-lib .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.ui-lib .overflow-hidden{overflow:hidden}.ui-lib .overflow-visible{overflow:visible}.ui-lib .overflow-x-hidden{overflow-x:hidden}.ui-lib .overflow-y-auto{overflow-y:auto}.ui-lib .rounded{border-radius:.25rem}.ui-lib .rounded-full{border-radius:3.40282e38px}.ui-lib .rounded-lg{border-radius:var(--radius)}.ui-lib .rounded-md{border-radius:calc(var(--radius) - 2px)}.ui-lib .rounded-sm{border-radius:calc(var(--radius) - 4px)}.ui-lib .rounded-s{border-start-start-radius:.25rem;border-end-start-radius:.25rem}.ui-lib .rounded-ss{border-start-start-radius:.25rem}.ui-lib .rounded-e{border-start-end-radius:.25rem;border-end-end-radius:.25rem}.ui-lib .rounded-se{border-start-end-radius:.25rem}.ui-lib .rounded-ee{border-end-end-radius:.25rem}.ui-lib .rounded-es{border-end-start-radius:.25rem}.ui-lib .rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.ui-lib .rounded-l{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.ui-lib .rounded-tl{border-top-left-radius:.25rem}.ui-lib .rounded-r{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.ui-lib .rounded-tr{border-top-right-radius:.25rem}.ui-lib .rounded-b{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.ui-lib .rounded-br{border-bottom-right-radius:.25rem}.ui-lib .rounded-bl{border-bottom-left-radius:.25rem}.ui-lib .border{border-style:var(--tw-border-style);border-width:1px}.ui-lib .border-x{border-inline-style:var(--tw-border-style);border-inline-width:1px}.ui-lib .border-y{border-block-style:var(--tw-border-style);border-block-width:1px}.ui-lib .border-s{border-inline-start-style:var(--tw-border-style);border-inline-start-width:1px}.ui-lib .border-e{border-inline-end-style:var(--tw-border-style);border-inline-end-width:1px}.ui-lib .border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.ui-lib .border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.ui-lib .border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.ui-lib .border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.ui-lib .border-gray-100{border-color:var(--color-gray-100)}.ui-lib .border-gray-200{border-color:var(--color-gray-200)}.ui-lib .border-gray-300{border-color:var(--color-gray-300)}.ui-lib .border-green-200{border-color:var(--color-green-200)}.ui-lib .border-input{border-color:var(--input)}.ui-lib .border-purple-300{border-color:var(--color-purple-300)}.ui-lib .border-white{border-color:var(--color-white)}.ui-lib .border-white\\/30{border-color:#ffffff4d}@supports (color:color-mix(in lab,red,red)){.ui-lib .border-white\\/30{border-color:color-mix(in oklab,var(--color-white)30%,transparent)}}.ui-lib .bg-\\[\\#8220ff\\]\\/10{background-color:#8220ff1a}.ui-lib .bg-black{background-color:var(--color-black)}.ui-lib .bg-black\\/20{background-color:#0003}@supports (color:color-mix(in lab,red,red)){.ui-lib .bg-black\\/20{background-color:color-mix(in oklab,var(--color-black)20%,transparent)}}.ui-lib .bg-destructive{background-color:var(--destructive)}.ui-lib .bg-gray-50{background-color:var(--color-gray-50)}.ui-lib .bg-green-100{background-color:var(--color-green-100)}.ui-lib .bg-muted{background-color:var(--muted)}.ui-lib .bg-popover{background-color:var(--popover)}.ui-lib .bg-primary,.ui-lib .bg-primary\\/10{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .bg-primary\\/10{background-color:color-mix(in oklab,var(--primary)10%,transparent)}}.ui-lib .bg-secondary{background-color:var(--secondary)}.ui-lib .bg-transparent{background-color:#0000}.ui-lib .bg-white{background-color:var(--color-white)}.ui-lib .bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.ui-lib .from-\\[\\#8220ff\\]{--tw-gradient-from:#8220ff;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.ui-lib .to-\\[\\#a020f0\\]{--tw-gradient-to:#a020f0;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.ui-lib .bg-repeat{background-repeat:repeat}.ui-lib .mask-no-clip{-webkit-mask-clip:no-clip;mask-clip:no-clip}.ui-lib .mask-repeat{-webkit-mask-repeat:repeat;mask-repeat:repeat}.ui-lib .object-contain{object-fit:contain}.ui-lib .p-1{padding:calc(var(--spacing)*1)}.ui-lib .p-2{padding:calc(var(--spacing)*2)}.ui-lib .p-4{padding:calc(var(--spacing)*4)}.ui-lib .px-2{padding-inline:calc(var(--spacing)*2)}.ui-lib .px-3{padding-inline:calc(var(--spacing)*3)}.ui-lib .px-4{padding-inline:calc(var(--spacing)*4)}.ui-lib .px-8{padding-inline:calc(var(--spacing)*8)}.ui-lib .py-1{padding-block:calc(var(--spacing)*1)}.ui-lib .py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.ui-lib .py-2{padding-block:calc(var(--spacing)*2)}.ui-lib .py-8{padding-block:calc(var(--spacing)*8)}.ui-lib .pt-4{padding-top:calc(var(--spacing)*4)}.ui-lib .pt-6{padding-top:calc(var(--spacing)*6)}.ui-lib .pt-12{padding-top:calc(var(--spacing)*12)}.ui-lib .pr-0{padding-right:calc(var(--spacing)*0)}.ui-lib .pr-6{padding-right:calc(var(--spacing)*6)}.ui-lib .pr-8{padding-right:calc(var(--spacing)*8)}.ui-lib .pb-6{padding-bottom:calc(var(--spacing)*6)}.ui-lib .pb-20{padding-bottom:calc(var(--spacing)*20)}.ui-lib .pl-2{padding-left:calc(var(--spacing)*2)}.ui-lib .text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.ui-lib .text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.ui-lib .text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.ui-lib .font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.ui-lib .font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.ui-lib .font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.ui-lib .tracking-wider{--tw-tracking:var(--tracking-wider);letter-spacing:var(--tracking-wider)}.ui-lib .text-wrap{text-wrap:wrap}.ui-lib .text-clip{text-overflow:clip}.ui-lib .text-ellipsis{text-overflow:ellipsis}.ui-lib .whitespace-nowrap{white-space:nowrap}.ui-lib .text-\\[\\#8220ff\\]{color:#8220ff}.ui-lib .text-black{color:var(--color-black)}.ui-lib .text-gray-400{color:var(--color-gray-400)}.ui-lib .text-gray-500{color:var(--color-gray-500)}.ui-lib .text-gray-600{color:var(--color-gray-600)}.ui-lib .text-gray-700{color:var(--color-gray-700)}.ui-lib .text-gray-900{color:var(--color-gray-900)}.ui-lib .text-green-800{color:var(--color-green-800)}.ui-lib .text-muted-foreground{color:var(--muted-foreground)}.ui-lib .text-popover-foreground{color:var(--popover-foreground)}.ui-lib .text-primary{color:var(--primary)}.ui-lib .text-primary-foreground{color:var(--primary-foreground)}.ui-lib .text-purple-700{color:var(--color-purple-700)}.ui-lib .text-secondary-foreground{color:var(--secondary-foreground)}.ui-lib .text-white{color:var(--color-white)}.ui-lib .capitalize{text-transform:capitalize}.ui-lib .lowercase{text-transform:lowercase}.ui-lib .normal-case{text-transform:none}.ui-lib .uppercase{text-transform:uppercase}.ui-lib .italic{font-style:italic}.ui-lib .not-italic{font-style:normal}.ui-lib .diagonal-fractions{--tw-numeric-fraction:diagonal-fractions;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .lining-nums{--tw-numeric-figure:lining-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .oldstyle-nums{--tw-numeric-figure:oldstyle-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .proportional-nums{--tw-numeric-spacing:proportional-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .slashed-zero{--tw-slashed-zero:slashed-zero;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .stacked-fractions{--tw-numeric-fraction:stacked-fractions;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .normal-nums{font-variant-numeric:normal}.ui-lib .line-through{text-decoration-line:line-through}.ui-lib .no-underline{text-decoration-line:none}.ui-lib .overline{text-decoration-line:overline}.ui-lib .underline{text-decoration-line:underline}.ui-lib .underline-offset-4{text-underline-offset:4px}.ui-lib .antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ui-lib .subpixel-antialiased{-webkit-font-smoothing:auto;-moz-osx-font-smoothing:auto}.ui-lib .opacity-50{opacity:.5}.ui-lib .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .ring{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .inset-ring{--tw-inset-ring-shadow:inset 0 0 0 1px var(--tw-inset-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .outline{outline-style:var(--tw-outline-style);outline-width:1px}.ui-lib .blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#0000001a))drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000f));--tw-drop-shadow:drop-shadow(0 1px 2px #0000001a)drop-shadow(0 1px 1px #0000000f);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .grayscale{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .invert{--tw-invert:invert(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .sepia{--tw-sepia:sepia(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .backdrop-blur{--tw-backdrop-blur:blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-grayscale{--tw-backdrop-grayscale:grayscale(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-invert{--tw-backdrop-invert:invert(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-sepia{--tw-backdrop-sepia:sepia(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .duration-200{--tw-duration:.2s;transition-duration:.2s}.ui-lib .duration-300{--tw-duration:.3s;transition-duration:.3s}.ui-lib .ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ui-lib .outline-none{--tw-outline-style:none;outline-style:none}.ui-lib .select-none{-webkit-user-select:none;user-select:none}.ui-lib :where(.divide-x-reverse>:not(:last-child)){--tw-divide-x-reverse:1}.ui-lib .ring-inset{--tw-ring-inset:inset}.ui-lib .zoom-in{--tw-enter-scale:0}.ui-lib .zoom-out{--tw-exit-scale:0}@media (hover:hover){.ui-lib .group-hover\\:bg-\\[\\#8220ff\\]\\/20:is(:where(.group):hover *){background-color:#8220ff33}.ui-lib .group-hover\\:text-\\[\\#8220ff\\]:is(:where(.group):hover *){color:#8220ff}.ui-lib .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x)var(--tw-scale-y)}.ui-lib .hover\\:bg-accent:hover{background-color:var(--accent)}.ui-lib .hover\\:bg-destructive\\/90:hover{background-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-destructive\\/90:hover{background-color:color-mix(in oklab,var(--destructive)90%,transparent)}}.ui-lib .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.ui-lib .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.ui-lib .hover\\:bg-primary\\/90:hover{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-primary\\/90:hover{background-color:color-mix(in oklab,var(--primary)90%,transparent)}}.ui-lib .hover\\:bg-secondary\\/50:hover{background-color:var(--secondary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-secondary\\/50:hover{background-color:color-mix(in oklab,var(--secondary)50%,transparent)}}.ui-lib .hover\\:bg-secondary\\/80:hover{background-color:var(--secondary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-secondary\\/80:hover{background-color:color-mix(in oklab,var(--secondary)80%,transparent)}}.ui-lib .hover\\:bg-white\\/10:hover{background-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-white\\/10:hover{background-color:color-mix(in oklab,var(--color-white)10%,transparent)}}.ui-lib .hover\\:text-accent-foreground:hover{color:var(--accent-foreground)}.ui-lib .hover\\:text-gray-500:hover{color:var(--color-gray-500)}.ui-lib .hover\\:text-gray-700:hover{color:var(--color-gray-700)}.ui-lib .hover\\:text-purple-700:hover{color:var(--color-purple-700)}.ui-lib .hover\\:text-white\\/80:hover{color:#fffc}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:text-white\\/80:hover{color:color-mix(in oklab,var(--color-white)80%,transparent)}}.ui-lib .hover\\:underline:hover{text-decoration-line:underline}.ui-lib .hover\\:shadow-xl:hover{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.ui-lib .focus\\:border-ring:focus{border-color:var(--ring)}.ui-lib .focus\\:bg-accent:focus{background-color:var(--accent)}.ui-lib .focus\\:text-accent-foreground:focus{color:var(--accent-foreground)}.ui-lib .focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .focus\\:ring-ring:focus{--tw-ring-color:var(--ring)}.ui-lib .focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.ui-lib .focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .focus-visible\\:ring-ring:focus-visible{--tw-ring-color:var(--ring)}.ui-lib .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.ui-lib .focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.ui-lib .disabled\\:pointer-events-none:disabled{pointer-events:none}.ui-lib .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.ui-lib .disabled\\:opacity-50:disabled{opacity:.5}.ui-lib .data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.ui-lib .data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.ui-lib .data-\\[placeholder\\]\\:text-muted-foreground[data-placeholder]{color:var(--muted-foreground)}.ui-lib .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:calc(var(--spacing)*1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side=bottom]{--tw-enter-translate-y:calc(2*var(--spacing)*-1)}.ui-lib .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side=left]{--tw-enter-translate-x:calc(2*var(--spacing))}.ui-lib .data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:calc(var(--spacing)*1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side=right]{--tw-enter-translate-x:calc(2*var(--spacing)*-1)}.ui-lib .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side=top]{--tw-enter-translate-y:calc(2*var(--spacing))}.ui-lib .data-\\[state\\=closed\\]\\:animate-out[data-state=closed]{animation:exit var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none)}.ui-lib .data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed]{--tw-exit-opacity:0}.ui-lib .data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed]{--tw-exit-scale:.95}.ui-lib .data-\\[state\\=open\\]\\:animate-in[data-state=open]{animation:enter var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none)}.ui-lib .data-\\[state\\=open\\]\\:bg-secondary\\/50[data-state=open]{background-color:var(--secondary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .data-\\[state\\=open\\]\\:bg-secondary\\/50[data-state=open]{background-color:color-mix(in oklab,var(--secondary)50%,transparent)}}.ui-lib .data-\\[state\\=open\\]\\:fade-in-0[data-state=open]{--tw-enter-opacity:0}.ui-lib .data-\\[state\\=open\\]\\:zoom-in-95[data-state=open]{--tw-enter-scale:.95}@media (min-width:40rem){.ui-lib .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.ui-lib .sm\\:px-6{padding-inline:calc(var(--spacing)*6)}}@media (min-width:48rem){.ui-lib .md\\:mb-0{margin-bottom:calc(var(--spacing)*0)}.ui-lib .md\\:h-40{height:calc(var(--spacing)*40)}.ui-lib .md\\:w-1\\/3{width:33.3333%}.ui-lib .md\\:w-2\\/3{width:66.6667%}.ui-lib .md\\:w-40{width:calc(var(--spacing)*40)}.ui-lib .md\\:w-42{width:calc(var(--spacing)*42)}.ui-lib .md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.ui-lib .md\\:flex-row{flex-direction:row}.ui-lib .md\\:items-center{align-items:center}.ui-lib .md\\:justify-between{justify-content:space-between}.ui-lib .md\\:gap-4{gap:calc(var(--spacing)*4)}.ui-lib .md\\:px-6{padding-inline:calc(var(--spacing)*6)}.ui-lib .md\\:pr-8{padding-right:calc(var(--spacing)*8)}}@media (min-width:64rem){.ui-lib .lg\\:col-span-2{grid-column:span 2/span 2}.ui-lib .lg\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.ui-lib .lg\\:gap-6{gap:calc(var(--spacing)*6)}.ui-lib .lg\\:px-6{padding-inline:calc(var(--spacing)*6)}.ui-lib .lg\\:px-8{padding-inline:calc(var(--spacing)*8)}}@media (min-width:80rem){.ui-lib .xl\\:flex{display:flex}.ui-lib .xl\\:hidden{display:none}.ui-lib .xl\\:inline{display:inline}}.ui-lib .dark\\:border-gray-700:is(.dark *){border-color:var(--color-gray-700)}.ui-lib .dark\\:bg-gray-900:is(.dark *){background-color:var(--color-gray-900)}.ui-lib .dark\\:text-white:is(.dark *){color:var(--color-white)}.ui-lib .\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}@property --tw-animation-delay{syntax:"*";inherits:false;initial-value:0s}@property --tw-animation-direction{syntax:"*";inherits:false;initial-value:normal}@property --tw-animation-duration{syntax:"*";inherits:false}@property --tw-animation-fill-mode{syntax:"*";inherits:false;initial-value:none}@property --tw-animation-iteration-count{syntax:"*";inherits:false;initial-value:1}@property --tw-enter-opacity{syntax:"*";inherits:false;initial-value:1}@property --tw-enter-rotate{syntax:"*";inherits:false;initial-value:0}@property --tw-enter-scale{syntax:"*";inherits:false;initial-value:1}@property --tw-enter-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-enter-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-opacity{syntax:"*";inherits:false;initial-value:1}@property --tw-exit-rotate{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-scale{syntax:"*";inherits:false;initial-value:1}@property --tw-exit-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-translate-y{syntax:"*";inherits:false;initial-value:0}.ui-lib{--radius:.625rem;--background:oklch(100% 0 0);--foreground:oklch(14.5% 0 0);--card:oklch(100% 0 0);--card-foreground:oklch(14.5% 0 0);--popover:oklch(100% 0 0);--popover-foreground:oklch(14.5% 0 0);--primary:oklch(20.5% 0 0);--primary-foreground:oklch(98.5% 0 0);--secondary:oklch(97% 0 0);--secondary-foreground:oklch(20.5% 0 0);--muted:oklch(97% 0 0);--muted-foreground:oklch(55.6% 0 0);--accent:oklch(97% 0 0);--accent-foreground:oklch(20.5% 0 0);--destructive:oklch(57.7% .245 27.325);--border:oklch(92.2% 0 0);--input:oklch(92.2% 0 0);--ring:oklch(70.8% 0 0);--chart-1:oklch(64.6% .222 41.116);--chart-2:oklch(60% .118 184.704);--chart-3:oklch(39.8% .07 227.392);--chart-4:oklch(82.8% .189 84.429);--chart-5:oklch(76.9% .188 70.08);--sidebar:oklch(98.5% 0 0);--sidebar-foreground:oklch(14.5% 0 0);--sidebar-primary:oklch(20.5% 0 0);--sidebar-primary-foreground:oklch(98.5% 0 0);--sidebar-accent:oklch(97% 0 0);--sidebar-accent-foreground:oklch(20.5% 0 0);--sidebar-border:oklch(92.2% 0 0);--sidebar-ring:oklch(70.8% 0 0);font-family:system-ui,Avenir,Helvetica,Arial,sans-serif;font-weight:400;line-height:1.5}.ui-lib .dark{--background:oklch(14.5% 0 0);--foreground:oklch(98.5% 0 0);--card:oklch(20.5% 0 0);--card-foreground:oklch(98.5% 0 0);--popover:oklch(20.5% 0 0);--popover-foreground:oklch(98.5% 0 0);--primary:oklch(92.2% 0 0);--primary-foreground:oklch(20.5% 0 0);--secondary:oklch(26.9% 0 0);--secondary-foreground:oklch(98.5% 0 0);--muted:oklch(26.9% 0 0);--muted-foreground:oklch(70.8% 0 0);--accent:oklch(26.9% 0 0);--accent-foreground:oklch(98.5% 0 0);--destructive:oklch(70.4% .191 22.216);--border:oklch(100% 0 0/.1);--input:oklch(100% 0 0/.15);--ring:oklch(55.6% 0 0);--chart-1:oklch(48.8% .243 264.376);--chart-2:oklch(69.6% .17 162.48);--chart-3:oklch(76.9% .188 70.08);--chart-4:oklch(62.7% .265 303.9);--chart-5:oklch(64.5% .246 16.439);--sidebar:oklch(20.5% 0 0);--sidebar-foreground:oklch(98.5% 0 0);--sidebar-primary:oklch(48.8% .243 264.376);--sidebar-primary-foreground:oklch(98.5% 0 0);--sidebar-accent:oklch(26.9% 0 0);--sidebar-accent-foreground:oklch(98.5% 0 0);--sidebar-border:oklch(100% 0 0/.1);--sidebar-ring:oklch(55.6% 0 0)}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-pan-x{syntax:"*";inherits:false}@property --tw-pan-y{syntax:"*";inherits:false}@property --tw-pinch-zoom{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-divide-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-divide-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-ordinal{syntax:"*";inherits:false}@property --tw-slashed-zero{syntax:"*";inherits:false}@property --tw-numeric-figure{syntax:"*";inherits:false}@property --tw-numeric-spacing{syntax:"*";inherits:false}@property --tw-numeric-fraction{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@keyframes enter{0%{opacity:var(--tw-enter-opacity,1);transform:translate3d(var(--tw-enter-translate-x,0),var(--tw-enter-translate-y,0),0)scale3d(var(--tw-enter-scale,1),var(--tw-enter-scale,1),var(--tw-enter-scale,1))rotate(var(--tw-enter-rotate,0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity,1);transform:translate3d(var(--tw-exit-translate-x,0),var(--tw-exit-translate-y,0),0)scale3d(var(--tw-exit-scale,1),var(--tw-exit-scale,1),var(--tw-exit-scale,1))rotate(var(--tw-exit-rotate,0))}}')),document.head.appendChild(i)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import * as Wt from "react";
import Me, { createContext as Vt, useContext as Dt, useCallback as xe, useState as ce, useRef as _e, useEffect as re } from "react";
import { Globe as Ut } from "lucide-react";
var ke = { exports: {} }, fe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function Gt() {
  if (Ye) return fe;
  Ye = 1;
  var o = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function t(s, r, n) {
    var a = null;
    if (n !== void 0 && (a = "" + n), r.key !== void 0 && (a = "" + r.key), "key" in r) {
      n = {};
      for (var l in r)
        l !== "key" && (n[l] = r[l]);
    } else n = r;
    return r = n.ref, {
      $$typeof: o,
      type: s,
      key: a,
      ref: r !== void 0 ? r : null,
      props: n
    };
  }
  return fe.Fragment = e, fe.jsx = t, fe.jsxs = t, fe;
}
var pe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function Ht() {
  return qe || (qe = 1, process.env.NODE_ENV !== "production" && function() {
    function o(f) {
      if (f == null) return null;
      if (typeof f == "function")
        return f.$$typeof === z ? null : f.displayName || f.name || null;
      if (typeof f == "string") return f;
      switch (f) {
        case b:
          return "Fragment";
        case E:
          return "Profiler";
        case _:
          return "StrictMode";
        case v:
          return "Suspense";
        case $:
          return "SuspenseList";
        case P:
          return "Activity";
      }
      if (typeof f == "object")
        switch (typeof f.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), f.$$typeof) {
          case p:
            return "Portal";
          case A:
            return (f.displayName || "Context") + ".Provider";
          case k:
            return (f._context.displayName || "Context") + ".Consumer";
          case R:
            var S = f.render;
            return f = f.displayName, f || (f = S.displayName || S.name || "", f = f !== "" ? "ForwardRef(" + f + ")" : "ForwardRef"), f;
          case T:
            return S = f.displayName || null, S !== null ? S : o(f.type) || "Memo";
          case x:
            S = f._payload, f = f._init;
            try {
              return o(f(S));
            } catch {
            }
        }
      return null;
    }
    function e(f) {
      return "" + f;
    }
    function t(f) {
      try {
        e(f);
        var S = !1;
      } catch {
        S = !0;
      }
      if (S) {
        S = console;
        var O = S.error, N = typeof Symbol == "function" && Symbol.toStringTag && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return O.call(
          S,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          N
        ), e(f);
      }
    }
    function s(f) {
      if (f === b) return "<>";
      if (typeof f == "object" && f !== null && f.$$typeof === x)
        return "<...>";
      try {
        var S = o(f);
        return S ? "<" + S + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var f = U.A;
      return f === null ? null : f.getOwner();
    }
    function n() {
      return Error("react-stack-top-frame");
    }
    function a(f) {
      if (Q.call(f, "key")) {
        var S = Object.getOwnPropertyDescriptor(f, "key").get;
        if (S && S.isReactWarning) return !1;
      }
      return f.key !== void 0;
    }
    function l(f, S) {
      function O() {
        q || (q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          S
        ));
      }
      O.isReactWarning = !0, Object.defineProperty(f, "key", {
        get: O,
        configurable: !0
      });
    }
    function c() {
      var f = o(this.type);
      return I[f] || (I[f] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), f = this.props.ref, f !== void 0 ? f : null;
    }
    function u(f, S, O, N, M, G, ne, F) {
      return O = G.ref, f = {
        $$typeof: g,
        type: f,
        key: S,
        props: G,
        _owner: M
      }, (O !== void 0 ? O : null) !== null ? Object.defineProperty(f, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(f, "ref", { enumerable: !1, value: null }), f._store = {}, Object.defineProperty(f._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(f, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(f, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ne
      }), Object.defineProperty(f, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: F
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    }
    function d(f, S, O, N, M, G, ne, F) {
      var V = S.children;
      if (V !== void 0)
        if (N)
          if (K(V)) {
            for (N = 0; N < V.length; N++)
              h(V[N]);
            Object.freeze && Object.freeze(V);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(V);
      if (Q.call(S, "key")) {
        V = o(f);
        var J = Object.keys(S).filter(function(he) {
          return he !== "key";
        });
        N = 0 < J.length ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}", X[V + N] || (J = 0 < J.length ? "{" + J.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          N,
          V,
          J,
          V
        ), X[V + N] = !0);
      }
      if (V = null, O !== void 0 && (t(O), V = "" + O), a(S) && (t(S.key), V = "" + S.key), "key" in S) {
        O = {};
        for (var te in S)
          te !== "key" && (O[te] = S[te]);
      } else O = S;
      return V && l(
        O,
        typeof f == "function" ? f.displayName || f.name || "Unknown" : f
      ), u(
        f,
        V,
        G,
        M,
        r(),
        O,
        ne,
        F
      );
    }
    function h(f) {
      typeof f == "object" && f !== null && f.$$typeof === g && f._store && (f._store.validated = 1);
    }
    var m = Me, g = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), A = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), P = Symbol.for("react.activity"), z = Symbol.for("react.client.reference"), U = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = Object.prototype.hasOwnProperty, K = Array.isArray, W = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(f) {
        return f();
      }
    };
    var q, I = {}, B = m.react_stack_bottom_frame.bind(
      m,
      n
    )(), j = W(s(n)), X = {};
    pe.Fragment = b, pe.jsx = function(f, S, O, N, M) {
      var G = 1e4 > U.recentlyCreatedOwnerStacks++;
      return d(
        f,
        S,
        O,
        !1,
        N,
        M,
        G ? Error("react-stack-top-frame") : B,
        G ? W(s(f)) : j
      );
    }, pe.jsxs = function(f, S, O, N, M) {
      var G = 1e4 > U.recentlyCreatedOwnerStacks++;
      return d(
        f,
        S,
        O,
        !0,
        N,
        M,
        G ? Error("react-stack-top-frame") : B,
        G ? W(s(f)) : j
      );
    };
  }()), pe;
}
var Je;
function Kt() {
  return Je || (Je = 1, process.env.NODE_ENV === "production" ? ke.exports = Gt() : ke.exports = Ht()), ke.exports;
}
var i = Kt();
function vt(o) {
  var e, t, s = "";
  if (typeof o == "string" || typeof o == "number") s += o;
  else if (typeof o == "object") if (Array.isArray(o)) {
    var r = o.length;
    for (e = 0; e < r; e++) o[e] && (t = vt(o[e])) && (s && (s += " "), s += t);
  } else for (t in o) o[t] && (s && (s += " "), s += t);
  return s;
}
function bt() {
  for (var o, e, t = 0, s = "", r = arguments.length; t < r; t++) (o = arguments[t]) && (e = vt(o)) && (s && (s += " "), s += e);
  return s;
}
const Xe = (o) => typeof o == "boolean" ? `${o}` : o === 0 ? "0" : o, Ze = bt, Yt = (o, e) => (t) => {
  var s;
  if ((e == null ? void 0 : e.variants) == null) return Ze(o, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
  const { variants: r, defaultVariants: n } = e, a = Object.keys(r).map((u) => {
    const d = t == null ? void 0 : t[u], h = n == null ? void 0 : n[u];
    if (d === null) return null;
    const m = Xe(d) || Xe(h);
    return r[u][m];
  }), l = t && Object.entries(t).reduce((u, d) => {
    let [h, m] = d;
    return m === void 0 || (u[h] = m), u;
  }, {}), c = e == null || (s = e.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((u, d) => {
    let { class: h, className: m, ...g } = d;
    return Object.entries(g).every((p) => {
      let [b, _] = p;
      return Array.isArray(_) ? _.includes({
        ...n,
        ...l
      }[b]) : {
        ...n,
        ...l
      }[b] === _;
    }) ? [
      ...u,
      h,
      m
    ] : u;
  }, []);
  return Ze(o, a, c, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
}, Ue = "-", qt = (o) => {
  const e = Xt(o), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: s
  } = o;
  return {
    getClassGroupId: (a) => {
      const l = a.split(Ue);
      return l[0] === "" && l.length !== 1 && l.shift(), kt(l, e) || Jt(a);
    },
    getConflictingClassGroupIds: (a, l) => {
      const c = t[a] || [];
      return l && s[a] ? [...c, ...s[a]] : c;
    }
  };
}, kt = (o, e) => {
  var a;
  if (o.length === 0)
    return e.classGroupId;
  const t = o[0], s = e.nextPart.get(t), r = s ? kt(o.slice(1), s) : void 0;
  if (r)
    return r;
  if (e.validators.length === 0)
    return;
  const n = o.join(Ue);
  return (a = e.validators.find(({
    validator: l
  }) => l(n))) == null ? void 0 : a.classGroupId;
}, Qe = /^\[(.+)\]$/, Jt = (o) => {
  if (Qe.test(o)) {
    const e = Qe.exec(o)[1], t = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, Xt = (o) => {
  const {
    theme: e,
    classGroups: t
  } = o, s = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const r in t)
    Ae(t[r], s, r, e);
  return s;
}, Ae = (o, e, t, s) => {
  o.forEach((r) => {
    if (typeof r == "string") {
      const n = r === "" ? e : et(e, r);
      n.classGroupId = t;
      return;
    }
    if (typeof r == "function") {
      if (Zt(r)) {
        Ae(r(s), e, t, s);
        return;
      }
      e.validators.push({
        validator: r,
        classGroupId: t
      });
      return;
    }
    Object.entries(r).forEach(([n, a]) => {
      Ae(a, et(e, n), t, s);
    });
  });
}, et = (o, e) => {
  let t = o;
  return e.split(Ue).forEach((s) => {
    t.nextPart.has(s) || t.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(s);
  }), t;
}, Zt = (o) => o.isThemeGetter, Qt = (o) => {
  if (o < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, t = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  const r = (n, a) => {
    t.set(n, a), e++, e > o && (e = 0, s = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(n) {
      let a = t.get(n);
      if (a !== void 0)
        return a;
      if ((a = s.get(n)) !== void 0)
        return r(n, a), a;
    },
    set(n, a) {
      t.has(n) ? t.set(n, a) : r(n, a);
    }
  };
}, Te = "!", Ie = ":", es = Ie.length, ts = (o) => {
  const {
    prefix: e,
    experimentalParseClassName: t
  } = o;
  let s = (r) => {
    const n = [];
    let a = 0, l = 0, c = 0, u;
    for (let p = 0; p < r.length; p++) {
      let b = r[p];
      if (a === 0 && l === 0) {
        if (b === Ie) {
          n.push(r.slice(c, p)), c = p + es;
          continue;
        }
        if (b === "/") {
          u = p;
          continue;
        }
      }
      b === "[" ? a++ : b === "]" ? a-- : b === "(" ? l++ : b === ")" && l--;
    }
    const d = n.length === 0 ? r : r.substring(c), h = ss(d), m = h !== d, g = u && u > c ? u - c : void 0;
    return {
      modifiers: n,
      hasImportantModifier: m,
      baseClassName: h,
      maybePostfixModifierPosition: g
    };
  };
  if (e) {
    const r = e + Ie, n = s;
    s = (a) => a.startsWith(r) ? n(a.substring(r.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: a,
      maybePostfixModifierPosition: void 0
    };
  }
  if (t) {
    const r = s;
    s = (n) => t({
      className: n,
      parseClassName: r
    });
  }
  return s;
}, ss = (o) => o.endsWith(Te) ? o.substring(0, o.length - 1) : o.startsWith(Te) ? o.substring(1) : o, rs = (o) => {
  const e = Object.fromEntries(o.orderSensitiveModifiers.map((s) => [s, !0]));
  return (s) => {
    if (s.length <= 1)
      return s;
    const r = [];
    let n = [];
    return s.forEach((a) => {
      a[0] === "[" || e[a] ? (r.push(...n.sort(), a), n = []) : n.push(a);
    }), r.push(...n.sort()), r;
  };
}, is = (o) => ({
  cache: Qt(o.cacheSize),
  parseClassName: ts(o),
  sortModifiers: rs(o),
  ...qt(o)
}), os = /\s+/, ns = (o, e) => {
  const {
    parseClassName: t,
    getClassGroupId: s,
    getConflictingClassGroupIds: r,
    sortModifiers: n
  } = e, a = [], l = o.trim().split(os);
  let c = "";
  for (let u = l.length - 1; u >= 0; u -= 1) {
    const d = l[u], {
      isExternal: h,
      modifiers: m,
      hasImportantModifier: g,
      baseClassName: p,
      maybePostfixModifierPosition: b
    } = t(d);
    if (h) {
      c = d + (c.length > 0 ? " " + c : c);
      continue;
    }
    let _ = !!b, E = s(_ ? p.substring(0, b) : p);
    if (!E) {
      if (!_) {
        c = d + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (E = s(p), !E) {
        c = d + (c.length > 0 ? " " + c : c);
        continue;
      }
      _ = !1;
    }
    const k = n(m).join(":"), A = g ? k + Te : k, R = A + E;
    if (a.includes(R))
      continue;
    a.push(R);
    const v = r(E, _);
    for (let $ = 0; $ < v.length; ++$) {
      const T = v[$];
      a.push(A + T);
    }
    c = d + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function as() {
  let o = 0, e, t, s = "";
  for (; o < arguments.length; )
    (e = arguments[o++]) && (t = jt(e)) && (s && (s += " "), s += t);
  return s;
}
const jt = (o) => {
  if (typeof o == "string")
    return o;
  let e, t = "";
  for (let s = 0; s < o.length; s++)
    o[s] && (e = jt(o[s])) && (t && (t += " "), t += e);
  return t;
};
function ls(o, ...e) {
  let t, s, r, n = a;
  function a(c) {
    const u = e.reduce((d, h) => h(d), o());
    return t = is(u), s = t.cache.get, r = t.cache.set, n = l, l(c);
  }
  function l(c) {
    const u = s(c);
    if (u)
      return u;
    const d = ns(c, t);
    return r(c, d), d;
  }
  return function() {
    return n(as.apply(null, arguments));
  };
}
const D = (o) => {
  const e = (t) => t[o] || [];
  return e.isThemeGetter = !0, e;
}, St = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ct = /^\((?:(\w[\w-]*):)?(.+)\)$/i, cs = /^\d+\/\d+$/, ds = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, us = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, hs = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, fs = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ps = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ae = (o) => cs.test(o), L = (o) => !!o && !Number.isNaN(Number(o)), se = (o) => !!o && Number.isInteger(Number(o)), $e = (o) => o.endsWith("%") && L(o.slice(0, -1)), ee = (o) => ds.test(o), gs = () => !0, ms = (o) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  us.test(o) && !hs.test(o)
), _t = () => !1, xs = (o) => fs.test(o), ys = (o) => ps.test(o), ws = (o) => !y(o) && !w(o), vs = (o) => de(o, Pt, _t), y = (o) => St.test(o), ie = (o) => de(o, Ot, ms), ze = (o) => de(o, Cs, L), tt = (o) => de(o, Lt, _t), bs = (o) => de(o, Nt, ys), je = (o) => de(o, Rt, xs), w = (o) => Ct.test(o), ge = (o) => ue(o, Ot), ks = (o) => ue(o, _s), st = (o) => ue(o, Lt), js = (o) => ue(o, Pt), Ss = (o) => ue(o, Nt), Se = (o) => ue(o, Rt, !0), de = (o, e, t) => {
  const s = St.exec(o);
  return s ? s[1] ? e(s[1]) : t(s[2]) : !1;
}, ue = (o, e, t = !1) => {
  const s = Ct.exec(o);
  return s ? s[1] ? e(s[1]) : t : !1;
}, Lt = (o) => o === "position" || o === "percentage", Nt = (o) => o === "image" || o === "url", Pt = (o) => o === "length" || o === "size" || o === "bg-size", Ot = (o) => o === "length", Cs = (o) => o === "number", _s = (o) => o === "family-name", Rt = (o) => o === "shadow", Ls = () => {
  const o = D("color"), e = D("font"), t = D("text"), s = D("font-weight"), r = D("tracking"), n = D("leading"), a = D("breakpoint"), l = D("container"), c = D("spacing"), u = D("radius"), d = D("shadow"), h = D("inset-shadow"), m = D("text-shadow"), g = D("drop-shadow"), p = D("blur"), b = D("perspective"), _ = D("aspect"), E = D("ease"), k = D("animate"), A = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], R = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], v = () => [...R(), w, y], $ = () => ["auto", "hidden", "clip", "visible", "scroll"], T = () => ["auto", "contain", "none"], x = () => [w, y, c], P = () => [ae, "full", "auto", ...x()], z = () => [se, "none", "subgrid", w, y], U = () => ["auto", {
    span: ["full", se, w, y]
  }, se, w, y], Q = () => [se, "auto", w, y], K = () => ["auto", "min", "max", "fr", w, y], W = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], q = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], I = () => ["auto", ...x()], B = () => [ae, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...x()], j = () => [o, w, y], X = () => [...R(), st, tt, {
    position: [w, y]
  }], f = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], S = () => ["auto", "cover", "contain", js, vs, {
    size: [w, y]
  }], O = () => [$e, ge, ie], N = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    w,
    y
  ], M = () => ["", L, ge, ie], G = () => ["solid", "dashed", "dotted", "double"], ne = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], F = () => [L, $e, st, tt], V = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    p,
    w,
    y
  ], J = () => ["none", L, w, y], te = () => ["none", L, w, y], he = () => [L, w, y], be = () => [ae, "full", ...x()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ee],
      breakpoint: [ee],
      color: [gs],
      container: [ee],
      "drop-shadow": [ee],
      ease: ["in", "out", "in-out"],
      font: [ws],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ee],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ee],
      shadow: [ee],
      spacing: ["px", L],
      text: [ee],
      "text-shadow": [ee],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", ae, y, w, _]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [L, y, w, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": A()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": A()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: v()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: $()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": $()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": $()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: T()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": T()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": T()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: P()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": P()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": P()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: P()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: P()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: P()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: P()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: P()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: P()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [se, "auto", w, y]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ae, "full", "auto", l, ...x()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [L, ae, "auto", "initial", "none", y]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", L, w, y]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", L, w, y]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [se, "first", "last", "none", w, y]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": z()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: U()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Q()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Q()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": z()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: U()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Q()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Q()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": K()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": K()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: x()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": x()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": x()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...W(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...q(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...q()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...W()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...q(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...q(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": W()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...q(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...q()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: x()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: x()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: x()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: x()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: x()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: x()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: x()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: x()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: x()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: I()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: I()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: I()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: I()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: I()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: I()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: I()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: I()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: I()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": x()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": x()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: B()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...B()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          l,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...B()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          l,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [a]
          },
          ...B()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...B()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...B()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...B()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", t, ge, ie]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [s, w, ze]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", $e, y]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ks, y, e]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [r, w, y]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [L, "none", w, ze]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          n,
          ...x()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", w, y]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", w, y]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: j()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: j()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...G(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [L, "from-font", "auto", w, ie]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: j()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [L, "auto", w, y]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: x()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", w, y]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", w, y]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: X()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: f()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: S()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, se, w, y],
          radial: ["", w, y],
          conic: [se, w, y]
        }, Ss, bs]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: j()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: O()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: O()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: O()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: j()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: j()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: j()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: N()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": N()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": N()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": N()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": N()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": N()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": N()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": N()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": N()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": N()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": N()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": N()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": N()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": N()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": N()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: M()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": M()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": M()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": M()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": M()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": M()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": M()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": M()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": M()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": M()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": M()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...G(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...G(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: j()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": j()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": j()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": j()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": j()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": j()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": j()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": j()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": j()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: j()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...G(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [L, w, y]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", L, ge, ie]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: j()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          d,
          Se,
          je
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: j()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", h, Se, je]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": j()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: M()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: j()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [L, ie]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": j()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": M()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": j()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", m, Se, je]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": j()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [L, w, y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ne(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ne()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [L]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": F()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": F()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": j()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": j()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": F()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": F()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": j()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": j()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": F()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": F()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": j()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": j()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": F()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": F()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": j()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": j()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": F()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": F()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": j()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": j()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": F()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": F()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": j()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": j()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": F()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": F()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": j()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": j()
      }],
      "mask-image-radial": [{
        "mask-radial": [w, y]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": F()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": F()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": j()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": j()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": R()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [L]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": F()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": F()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": j()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": j()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: X()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: f()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: S()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", w, y]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          w,
          y
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: V()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [L, w, y]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [L, w, y]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          g,
          Se,
          je
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": j()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", L, w, y]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [L, w, y]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", L, w, y]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [L, w, y]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", L, w, y]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          w,
          y
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": V()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [L, w, y]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [L, w, y]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", L, w, y]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [L, w, y]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", L, w, y]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [L, w, y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [L, w, y]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", L, w, y]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": x()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": x()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": x()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", w, y]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [L, "initial", w, y]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", E, w, y]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [L, w, y]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", k, w, y]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [b, w, y]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": v()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: J()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": J()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": J()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": J()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: te()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": te()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": te()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": te()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: he()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": he()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": he()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [w, y, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: v()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: be()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": be()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": be()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": be()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: j()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: j()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", w, y]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": x()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": x()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": x()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": x()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": x()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": x()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": x()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": x()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": x()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": x()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": x()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": x()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": x()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": x()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": x()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": x()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": x()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": x()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", w, y]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...j()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [L, ge, ie, ze]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...j()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Ns = /* @__PURE__ */ ls(Ls);
function $t(...o) {
  return Ns(bt(o));
}
function Le(o, e) {
  if (o) {
    const t = o.split(":");
    if (t.length >= 3 && t[0] && t[2] !== "443")
      return o;
  }
  return e;
}
const Ps = Yt(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-secondary/50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "bg-transparent border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-secondary/50",
        link: "underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-[#8220ff] to-[#a020f0] text-white hover:shadow-xl hover:scale-105 transition-all duration-300 border border-purple-300"
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "w-10 h-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Fe = Wt.forwardRef(
  ({ className: o, variant: e, size: t, ...s }, r) => /* @__PURE__ */ i.jsx("button", { className: $t(Ps({ variant: e, size: t, className: o })), ref: r, ...s })
);
Fe.displayName = "Button";
const Y = ({ href: o, children: e, className: t = "", target: s = "_self", rel: r = "noopener noreferrer", onClick: n }) => {
  const a = (l) => {
    s !== "_blank" && (l.preventDefault(), window.location.href = o), n && n(l);
  };
  return /* @__PURE__ */ i.jsx(
    "a",
    {
      href: o,
      className: t,
      target: s,
      rel: r,
      onClick: a,
      "aria-label": typeof e == "string" ? e : void 0,
      children: e
    }
  );
}, Os = (o, e, t, s) => {
  var n, a, l, c;
  const r = [t, {
    code: e,
    ...s || {}
  }];
  if ((a = (n = o == null ? void 0 : o.services) == null ? void 0 : n.logger) != null && a.forward)
    return o.services.logger.forward(r, "warn", "react-i18next::", !0);
  oe(r[0]) && (r[0] = `react-i18next:: ${r[0]}`), (c = (l = o == null ? void 0 : o.services) == null ? void 0 : l.logger) != null && c.warn ? o.services.logger.warn(...r) : console != null && console.warn && console.warn(...r);
}, rt = {}, Be = (o, e, t, s) => {
  oe(t) && rt[t] || (oe(t) && (rt[t] = /* @__PURE__ */ new Date()), Os(o, e, t, s));
}, zt = (o, e) => () => {
  if (o.isInitialized)
    e();
  else {
    const t = () => {
      setTimeout(() => {
        o.off("initialized", t);
      }, 0), e();
    };
    o.on("initialized", t);
  }
}, We = (o, e, t) => {
  o.loadNamespaces(e, zt(o, t));
}, it = (o, e, t, s) => {
  if (oe(t) && (t = [t]), o.options.preload && o.options.preload.indexOf(e) > -1) return We(o, t, s);
  t.forEach((r) => {
    o.options.ns.indexOf(r) < 0 && o.options.ns.push(r);
  }), o.loadLanguages(e, zt(o, s));
}, Rs = (o, e, t = {}) => !e.languages || !e.languages.length ? (Be(e, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: e.languages
}), !0) : e.hasLoadedNamespace(o, {
  lng: t.lng,
  precheck: (s, r) => {
    if (t.bindI18n && t.bindI18n.indexOf("languageChanging") > -1 && s.services.backendConnector.backend && s.isLanguageChangingTo && !r(s.isLanguageChangingTo, o)) return !1;
  }
}), oe = (o) => typeof o == "string", $s = (o) => typeof o == "object" && o !== null, zs = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Es = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
}, Ms = (o) => Es[o], As = (o) => o.replace(zs, Ms);
let Ve = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: As
};
const Ts = (o = {}) => {
  Ve = {
    ...Ve,
    ...o
  };
}, Is = () => Ve;
let Et;
const Fs = (o) => {
  Et = o;
}, Bs = () => Et, Ws = {
  type: "3rdParty",
  init(o) {
    Ts(o.options.react), Fs(o);
  }
}, Vs = Vt();
class Ds {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(e) {
    e.forEach((t) => {
      this.usedNamespaces[t] || (this.usedNamespaces[t] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const Us = (o, e) => {
  const t = _e();
  return re(() => {
    t.current = o;
  }, [o, e]), t.current;
}, Mt = (o, e, t, s) => o.getFixedT(e, t, s), Gs = (o, e, t, s) => xe(Mt(o, e, t, s), [o, e, t, s]), At = (o, e = {}) => {
  var R, v, $, T;
  const {
    i18n: t
  } = e, {
    i18n: s,
    defaultNS: r
  } = Dt(Vs) || {}, n = t || s || Bs();
  if (n && !n.reportNamespaces && (n.reportNamespaces = new Ds()), !n) {
    Be(n, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const x = (z, U) => oe(U) ? U : $s(U) && oe(U.defaultValue) ? U.defaultValue : Array.isArray(z) ? z[z.length - 1] : z, P = [x, {}, !1];
    return P.t = x, P.i18n = {}, P.ready = !1, P;
  }
  (R = n.options.react) != null && R.wait && Be(n, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const a = {
    ...Is(),
    ...n.options.react,
    ...e
  }, {
    useSuspense: l,
    keyPrefix: c
  } = a;
  let u = r || ((v = n.options) == null ? void 0 : v.defaultNS);
  u = oe(u) ? [u] : u || ["translation"], (T = ($ = n.reportNamespaces).addUsedNamespaces) == null || T.call($, u);
  const d = (n.isInitialized || n.initializedStoreOnce) && u.every((x) => Rs(x, n, a)), h = Gs(n, e.lng || null, a.nsMode === "fallback" ? u : u[0], c), m = () => h, g = () => Mt(n, e.lng || null, a.nsMode === "fallback" ? u : u[0], c), [p, b] = ce(m);
  let _ = u.join();
  e.lng && (_ = `${e.lng}${_}`);
  const E = Us(_), k = _e(!0);
  re(() => {
    const {
      bindI18n: x,
      bindI18nStore: P
    } = a;
    k.current = !0, !d && !l && (e.lng ? it(n, e.lng, u, () => {
      k.current && b(g);
    }) : We(n, u, () => {
      k.current && b(g);
    })), d && E && E !== _ && k.current && b(g);
    const z = () => {
      k.current && b(g);
    };
    return x && (n == null || n.on(x, z)), P && (n == null || n.store.on(P, z)), () => {
      k.current = !1, n && x && (x == null || x.split(" ").forEach((U) => n.off(U, z))), P && n && P.split(" ").forEach((U) => n.store.off(U, z));
    };
  }, [n, _]), re(() => {
    k.current && d && b(m);
  }, [n, c, d]);
  const A = [p, n, d];
  if (A.t = p, A.i18n = n, A.ready = d, d || !d && !l) return A;
  throw new Promise((x) => {
    e.lng ? it(n, e.lng, u, () => x()) : We(n, u, () => x());
  });
}, C = (o) => typeof o == "string", me = () => {
  let o, e;
  const t = new Promise((s, r) => {
    o = s, e = r;
  });
  return t.resolve = o, t.reject = e, t;
}, ot = (o) => o == null ? "" : "" + o, Hs = (o, e, t) => {
  o.forEach((s) => {
    e[s] && (t[s] = e[s]);
  });
}, Ks = /###/g, nt = (o) => o && o.indexOf("###") > -1 ? o.replace(Ks, ".") : o, at = (o) => !o || C(o), ye = (o, e, t) => {
  const s = C(e) ? e.split(".") : e;
  let r = 0;
  for (; r < s.length - 1; ) {
    if (at(o)) return {};
    const n = nt(s[r]);
    !o[n] && t && (o[n] = new t()), Object.prototype.hasOwnProperty.call(o, n) ? o = o[n] : o = {}, ++r;
  }
  return at(o) ? {} : {
    obj: o,
    k: nt(s[r])
  };
}, lt = (o, e, t) => {
  const {
    obj: s,
    k: r
  } = ye(o, e, Object);
  if (s !== void 0 || e.length === 1) {
    s[r] = t;
    return;
  }
  let n = e[e.length - 1], a = e.slice(0, e.length - 1), l = ye(o, a, Object);
  for (; l.obj === void 0 && a.length; )
    n = `${a[a.length - 1]}.${n}`, a = a.slice(0, a.length - 1), l = ye(o, a, Object), l != null && l.obj && typeof l.obj[`${l.k}.${n}`] < "u" && (l.obj = void 0);
  l.obj[`${l.k}.${n}`] = t;
}, Ys = (o, e, t, s) => {
  const {
    obj: r,
    k: n
  } = ye(o, e, Object);
  r[n] = r[n] || [], r[n].push(t);
}, Ne = (o, e) => {
  const {
    obj: t,
    k: s
  } = ye(o, e);
  if (t && Object.prototype.hasOwnProperty.call(t, s))
    return t[s];
}, qs = (o, e, t) => {
  const s = Ne(o, t);
  return s !== void 0 ? s : Ne(e, t);
}, Tt = (o, e, t) => {
  for (const s in e)
    s !== "__proto__" && s !== "constructor" && (s in o ? C(o[s]) || o[s] instanceof String || C(e[s]) || e[s] instanceof String ? t && (o[s] = e[s]) : Tt(o[s], e[s], t) : o[s] = e[s]);
  return o;
}, le = (o) => o.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Js = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const Xs = (o) => C(o) ? o.replace(/[&<>"'\/]/g, (e) => Js[e]) : o;
class Zs {
  constructor(e) {
    this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    const t = this.regExpMap.get(e);
    if (t !== void 0)
      return t;
    const s = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, s), this.regExpQueue.push(e), s;
  }
}
const Qs = [" ", ",", "?", "!", ";"], er = new Zs(20), tr = (o, e, t) => {
  e = e || "", t = t || "";
  const s = Qs.filter((a) => e.indexOf(a) < 0 && t.indexOf(a) < 0);
  if (s.length === 0) return !0;
  const r = er.getRegExp(`(${s.map((a) => a === "?" ? "\\?" : a).join("|")})`);
  let n = !r.test(o);
  if (!n) {
    const a = o.indexOf(t);
    a > 0 && !r.test(o.substring(0, a)) && (n = !0);
  }
  return n;
}, De = (o, e, t = ".") => {
  if (!o) return;
  if (o[e])
    return Object.prototype.hasOwnProperty.call(o, e) ? o[e] : void 0;
  const s = e.split(t);
  let r = o;
  for (let n = 0; n < s.length; ) {
    if (!r || typeof r != "object")
      return;
    let a, l = "";
    for (let c = n; c < s.length; ++c)
      if (c !== n && (l += t), l += s[c], a = r[l], a !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof a) > -1 && c < s.length - 1)
          continue;
        n += c - n + 1;
        break;
      }
    r = a;
  }
  return r;
}, we = (o) => o == null ? void 0 : o.replace("_", "-"), sr = {
  type: "logger",
  log(o) {
    this.output("log", o);
  },
  warn(o) {
    this.output("warn", o);
  },
  error(o) {
    this.output("error", o);
  },
  output(o, e) {
    var t, s;
    (s = (t = console == null ? void 0 : console[o]) == null ? void 0 : t.apply) == null || s.call(t, console, e);
  }
};
class Pe {
  constructor(e, t = {}) {
    this.init(e, t);
  }
  init(e, t = {}) {
    this.prefix = t.prefix || "i18next:", this.logger = e || sr, this.options = t, this.debug = t.debug;
  }
  log(...e) {
    return this.forward(e, "log", "", !0);
  }
  warn(...e) {
    return this.forward(e, "warn", "", !0);
  }
  error(...e) {
    return this.forward(e, "error", "");
  }
  deprecate(...e) {
    return this.forward(e, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, t, s, r) {
    return r && !this.debug ? null : (C(e[0]) && (e[0] = `${s}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new Pe(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new Pe(this.logger, e);
  }
}
var Z = new Pe();
class Re {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return e.split(" ").forEach((s) => {
      this.observers[s] || (this.observers[s] = /* @__PURE__ */ new Map());
      const r = this.observers[s].get(t) || 0;
      this.observers[s].set(t, r + 1);
    }), this;
  }
  off(e, t) {
    if (this.observers[e]) {
      if (!t) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(t);
    }
  }
  emit(e, ...t) {
    this.observers[e] && Array.from(this.observers[e].entries()).forEach(([r, n]) => {
      for (let a = 0; a < n; a++)
        r(...t);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([r, n]) => {
      for (let a = 0; a < n; a++)
        r.apply(r, [e, ...t]);
    });
  }
}
class ct extends Re {
  constructor(e, t = {
    ns: ["translation"],
    defaultNS: "translation"
  }) {
    super(), this.data = e || {}, this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const t = this.options.ns.indexOf(e);
    t > -1 && this.options.ns.splice(t, 1);
  }
  getResource(e, t, s, r = {}) {
    var u, d;
    const n = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator, a = r.ignoreJSONStructure !== void 0 ? r.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let l;
    e.indexOf(".") > -1 ? l = e.split(".") : (l = [e, t], s && (Array.isArray(s) ? l.push(...s) : C(s) && n ? l.push(...s.split(n)) : l.push(s)));
    const c = Ne(this.data, l);
    return !c && !t && !s && e.indexOf(".") > -1 && (e = l[0], t = l[1], s = l.slice(2).join(".")), c || !a || !C(s) ? c : De((d = (u = this.data) == null ? void 0 : u[e]) == null ? void 0 : d[t], s, n);
  }
  addResource(e, t, s, r, n = {
    silent: !1
  }) {
    const a = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let l = [e, t];
    s && (l = l.concat(a ? s.split(a) : s)), e.indexOf(".") > -1 && (l = e.split("."), r = t, t = l[1]), this.addNamespaces(t), lt(this.data, l, r), n.silent || this.emit("added", e, t, s, r);
  }
  addResources(e, t, s, r = {
    silent: !1
  }) {
    for (const n in s)
      (C(s[n]) || Array.isArray(s[n])) && this.addResource(e, t, n, s[n], {
        silent: !0
      });
    r.silent || this.emit("added", e, t, s);
  }
  addResourceBundle(e, t, s, r, n, a = {
    silent: !1,
    skipCopy: !1
  }) {
    let l = [e, t];
    e.indexOf(".") > -1 && (l = e.split("."), r = s, s = t, t = l[1]), this.addNamespaces(t);
    let c = Ne(this.data, l) || {};
    a.skipCopy || (s = JSON.parse(JSON.stringify(s))), r ? Tt(c, s, n) : c = {
      ...c,
      ...s
    }, lt(this.data, l, c), a.silent || this.emit("added", e, t, s);
  }
  removeResourceBundle(e, t) {
    this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
  }
  hasResourceBundle(e, t) {
    return this.getResource(e, t) !== void 0;
  }
  getResourceBundle(e, t) {
    return t || (t = this.options.defaultNS), this.getResource(e, t);
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const t = this.getDataByLanguage(e);
    return !!(t && Object.keys(t) || []).find((r) => t[r] && Object.keys(t[r]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var It = {
  processors: {},
  addPostProcessor(o) {
    this.processors[o.name] = o;
  },
  handle(o, e, t, s, r) {
    return o.forEach((n) => {
      var a;
      e = ((a = this.processors[n]) == null ? void 0 : a.process(e, t, s, r)) ?? e;
    }), e;
  }
};
const dt = {}, ut = (o) => !C(o) && typeof o != "boolean" && typeof o != "number";
class Oe extends Re {
  constructor(e, t = {}) {
    super(), Hs(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Z.create("translator");
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e, t = {
    interpolation: {}
  }) {
    const s = {
      ...t
    };
    if (e == null) return !1;
    const r = this.resolve(e, s);
    return (r == null ? void 0 : r.res) !== void 0;
  }
  extractFromKey(e, t) {
    let s = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    s === void 0 && (s = ":");
    const r = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let n = t.ns || this.options.defaultNS || [];
    const a = s && e.indexOf(s) > -1, l = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !tr(e, s, r);
    if (a && !l) {
      const c = e.match(this.interpolator.nestingRegexp);
      if (c && c.length > 0)
        return {
          key: e,
          namespaces: C(n) ? [n] : n
        };
      const u = e.split(s);
      (s !== r || s === r && this.options.ns.indexOf(u[0]) > -1) && (n = u.shift()), e = u.join(r);
    }
    return {
      key: e,
      namespaces: C(n) ? [n] : n
    };
  }
  translate(e, t, s) {
    let r = typeof t == "object" ? {
      ...t
    } : t;
    if (typeof r != "object" && this.options.overloadTranslationOptionHandler && (r = this.options.overloadTranslationOptionHandler(arguments)), typeof options == "object" && (r = {
      ...r
    }), r || (r = {}), e == null) return "";
    Array.isArray(e) || (e = [String(e)]);
    const n = r.returnDetails !== void 0 ? r.returnDetails : this.options.returnDetails, a = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator, {
      key: l,
      namespaces: c
    } = this.extractFromKey(e[e.length - 1], r), u = c[c.length - 1];
    let d = r.nsSeparator !== void 0 ? r.nsSeparator : this.options.nsSeparator;
    d === void 0 && (d = ":");
    const h = r.lng || this.language, m = r.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((h == null ? void 0 : h.toLowerCase()) === "cimode")
      return m ? n ? {
        res: `${u}${d}${l}`,
        usedKey: l,
        exactUsedKey: l,
        usedLng: h,
        usedNS: u,
        usedParams: this.getUsedParamsDetails(r)
      } : `${u}${d}${l}` : n ? {
        res: l,
        usedKey: l,
        exactUsedKey: l,
        usedLng: h,
        usedNS: u,
        usedParams: this.getUsedParamsDetails(r)
      } : l;
    const g = this.resolve(e, r);
    let p = g == null ? void 0 : g.res;
    const b = (g == null ? void 0 : g.usedKey) || l, _ = (g == null ? void 0 : g.exactUsedKey) || l, E = ["[object Number]", "[object Function]", "[object RegExp]"], k = r.joinArrays !== void 0 ? r.joinArrays : this.options.joinArrays, A = !this.i18nFormat || this.i18nFormat.handleAsObject, R = r.count !== void 0 && !C(r.count), v = Oe.hasDefaultValue(r), $ = R ? this.pluralResolver.getSuffix(h, r.count, r) : "", T = r.ordinal && R ? this.pluralResolver.getSuffix(h, r.count, {
      ordinal: !1
    }) : "", x = R && !r.ordinal && r.count === 0, P = x && r[`defaultValue${this.options.pluralSeparator}zero`] || r[`defaultValue${$}`] || r[`defaultValue${T}`] || r.defaultValue;
    let z = p;
    A && !p && v && (z = P);
    const U = ut(z), Q = Object.prototype.toString.apply(z);
    if (A && z && U && E.indexOf(Q) < 0 && !(C(k) && Array.isArray(z))) {
      if (!r.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const K = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(b, z, {
          ...r,
          ns: c
        }) : `key '${l} (${this.language})' returned an object instead of string.`;
        return n ? (g.res = K, g.usedParams = this.getUsedParamsDetails(r), g) : K;
      }
      if (a) {
        const K = Array.isArray(z), W = K ? [] : {}, q = K ? _ : b;
        for (const I in z)
          if (Object.prototype.hasOwnProperty.call(z, I)) {
            const B = `${q}${a}${I}`;
            v && !p ? W[I] = this.translate(B, {
              ...r,
              defaultValue: ut(P) ? P[I] : void 0,
              joinArrays: !1,
              ns: c
            }) : W[I] = this.translate(B, {
              ...r,
              joinArrays: !1,
              ns: c
            }), W[I] === B && (W[I] = z[I]);
          }
        p = W;
      }
    } else if (A && C(k) && Array.isArray(p))
      p = p.join(k), p && (p = this.extendTranslation(p, e, r, s));
    else {
      let K = !1, W = !1;
      !this.isValidLookup(p) && v && (K = !0, p = P), this.isValidLookup(p) || (W = !0, p = l);
      const I = (r.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && W ? void 0 : p, B = v && P !== p && this.options.updateMissing;
      if (W || K || B) {
        if (this.logger.log(B ? "updateKey" : "missingKey", h, u, l, B ? P : p), a) {
          const S = this.resolve(l, {
            ...r,
            keySeparator: !1
          });
          S && S.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let j = [];
        const X = this.languageUtils.getFallbackCodes(this.options.fallbackLng, r.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && X && X[0])
          for (let S = 0; S < X.length; S++)
            j.push(X[S]);
        else this.options.saveMissingTo === "all" ? j = this.languageUtils.toResolveHierarchy(r.lng || this.language) : j.push(r.lng || this.language);
        const f = (S, O, N) => {
          var G;
          const M = v && N !== p ? N : I;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(S, u, O, M, B, r) : (G = this.backendConnector) != null && G.saveMissing && this.backendConnector.saveMissing(S, u, O, M, B, r), this.emit("missingKey", S, u, O, p);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && R ? j.forEach((S) => {
          const O = this.pluralResolver.getSuffixes(S, r);
          x && r[`defaultValue${this.options.pluralSeparator}zero`] && O.indexOf(`${this.options.pluralSeparator}zero`) < 0 && O.push(`${this.options.pluralSeparator}zero`), O.forEach((N) => {
            f([S], l + N, r[`defaultValue${N}`] || P);
          });
        }) : f(j, l, P));
      }
      p = this.extendTranslation(p, e, r, g, s), W && p === l && this.options.appendNamespaceToMissingKey && (p = `${u}${d}${l}`), (W || K) && this.options.parseMissingKeyHandler && (p = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${u}${d}${l}` : l, K ? p : void 0, r));
    }
    return n ? (g.res = p, g.usedParams = this.getUsedParamsDetails(r), g) : p;
  }
  extendTranslation(e, t, s, r, n) {
    var c, u;
    if ((c = this.i18nFormat) != null && c.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...s
      }, s.lng || this.language || r.usedLng, r.usedNS, r.usedKey, {
        resolved: r
      });
    else if (!s.skipInterpolation) {
      s.interpolation && this.interpolator.init({
        ...s,
        interpolation: {
          ...this.options.interpolation,
          ...s.interpolation
        }
      });
      const d = C(e) && (((u = s == null ? void 0 : s.interpolation) == null ? void 0 : u.skipOnVariables) !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let h;
      if (d) {
        const g = e.match(this.interpolator.nestingRegexp);
        h = g && g.length;
      }
      let m = s.replace && !C(s.replace) ? s.replace : s;
      if (this.options.interpolation.defaultVariables && (m = {
        ...this.options.interpolation.defaultVariables,
        ...m
      }), e = this.interpolator.interpolate(e, m, s.lng || this.language || r.usedLng, s), d) {
        const g = e.match(this.interpolator.nestingRegexp), p = g && g.length;
        h < p && (s.nest = !1);
      }
      !s.lng && r && r.res && (s.lng = this.language || r.usedLng), s.nest !== !1 && (e = this.interpolator.nest(e, (...g) => (n == null ? void 0 : n[0]) === g[0] && !s.context ? (this.logger.warn(`It seems you are nesting recursively key: ${g[0]} in key: ${t[0]}`), null) : this.translate(...g, t), s)), s.interpolation && this.interpolator.reset();
    }
    const a = s.postProcess || this.options.postProcess, l = C(a) ? [a] : a;
    return e != null && (l != null && l.length) && s.applyPostProcessor !== !1 && (e = It.handle(l, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...r,
        usedParams: this.getUsedParamsDetails(s)
      },
      ...s
    } : s, this)), e;
  }
  resolve(e, t = {}) {
    let s, r, n, a, l;
    return C(e) && (e = [e]), e.forEach((c) => {
      if (this.isValidLookup(s)) return;
      const u = this.extractFromKey(c, t), d = u.key;
      r = d;
      let h = u.namespaces;
      this.options.fallbackNS && (h = h.concat(this.options.fallbackNS));
      const m = t.count !== void 0 && !C(t.count), g = m && !t.ordinal && t.count === 0, p = t.context !== void 0 && (C(t.context) || typeof t.context == "number") && t.context !== "", b = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      h.forEach((_) => {
        var E, k;
        this.isValidLookup(s) || (l = _, !dt[`${b[0]}-${_}`] && ((E = this.utils) != null && E.hasLoadedNamespace) && !((k = this.utils) != null && k.hasLoadedNamespace(l)) && (dt[`${b[0]}-${_}`] = !0, this.logger.warn(`key "${r}" for languages "${b.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), b.forEach((A) => {
          var $;
          if (this.isValidLookup(s)) return;
          a = A;
          const R = [d];
          if (($ = this.i18nFormat) != null && $.addLookupKeys)
            this.i18nFormat.addLookupKeys(R, d, A, _, t);
          else {
            let T;
            m && (T = this.pluralResolver.getSuffix(A, t.count, t));
            const x = `${this.options.pluralSeparator}zero`, P = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (m && (R.push(d + T), t.ordinal && T.indexOf(P) === 0 && R.push(d + T.replace(P, this.options.pluralSeparator)), g && R.push(d + x)), p) {
              const z = `${d}${this.options.contextSeparator}${t.context}`;
              R.push(z), m && (R.push(z + T), t.ordinal && T.indexOf(P) === 0 && R.push(z + T.replace(P, this.options.pluralSeparator)), g && R.push(z + x));
            }
          }
          let v;
          for (; v = R.pop(); )
            this.isValidLookup(s) || (n = v, s = this.getResource(A, _, v, t));
        }));
      });
    }), {
      res: s,
      usedKey: r,
      exactUsedKey: n,
      usedLng: a,
      usedNS: l
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, t, s, r = {}) {
    var n;
    return (n = this.i18nFormat) != null && n.getResource ? this.i18nFormat.getResource(e, t, s, r) : this.resourceStore.getResource(e, t, s, r);
  }
  getUsedParamsDetails(e = {}) {
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], s = e.replace && !C(e.replace);
    let r = s ? e.replace : e;
    if (s && typeof e.count < "u" && (r.count = e.count), this.options.interpolation.defaultVariables && (r = {
      ...this.options.interpolation.defaultVariables,
      ...r
    }), !s) {
      r = {
        ...r
      };
      for (const n of t)
        delete r[n];
    }
    return r;
  }
  static hasDefaultValue(e) {
    const t = "defaultValue";
    for (const s in e)
      if (Object.prototype.hasOwnProperty.call(e, s) && t === s.substring(0, t.length) && e[s] !== void 0)
        return !0;
    return !1;
  }
}
class ht {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Z.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = we(e), !e || e.indexOf("-") < 0) return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = we(e), !e || e.indexOf("-") < 0) return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (C(e) && e.indexOf("-") > -1) {
      let t;
      try {
        t = Intl.getCanonicalLocales(e)[0];
      } catch {
      }
      return t && this.options.lowerCaseLng && (t = t.toLowerCase()), t || (this.options.lowerCaseLng ? e.toLowerCase() : e);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
  }
  isSupportedCode(e) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let t;
    return e.forEach((s) => {
      if (t) return;
      const r = this.formatLanguageCode(s);
      (!this.options.supportedLngs || this.isSupportedCode(r)) && (t = r);
    }), !t && this.options.supportedLngs && e.forEach((s) => {
      if (t) return;
      const r = this.getScriptPartFromCode(s);
      if (this.isSupportedCode(r)) return t = r;
      const n = this.getLanguagePartFromCode(s);
      if (this.isSupportedCode(n)) return t = n;
      t = this.options.supportedLngs.find((a) => {
        if (a === n) return a;
        if (!(a.indexOf("-") < 0 && n.indexOf("-") < 0) && (a.indexOf("-") > 0 && n.indexOf("-") < 0 && a.substring(0, a.indexOf("-")) === n || a.indexOf(n) === 0 && n.length > 1))
          return a;
      });
    }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t;
  }
  getFallbackCodes(e, t) {
    if (!e) return [];
    if (typeof e == "function" && (e = e(t)), C(e) && (e = [e]), Array.isArray(e)) return e;
    if (!t) return e.default || [];
    let s = e[t];
    return s || (s = e[this.getScriptPartFromCode(t)]), s || (s = e[this.formatLanguageCode(t)]), s || (s = e[this.getLanguagePartFromCode(t)]), s || (s = e.default), s || [];
  }
  toResolveHierarchy(e, t) {
    const s = this.getFallbackCodes((t === !1 ? [] : t) || this.options.fallbackLng || [], e), r = [], n = (a) => {
      a && (this.isSupportedCode(a) ? r.push(a) : this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`));
    };
    return C(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && n(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && n(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && n(this.getLanguagePartFromCode(e))) : C(e) && n(this.formatLanguageCode(e)), s.forEach((a) => {
      r.indexOf(a) < 0 && n(this.formatLanguageCode(a));
    }), r;
  }
}
const ft = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, pt = {
  select: (o) => o === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class rr {
  constructor(e, t = {}) {
    this.languageUtils = e, this.options = t, this.logger = Z.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e, t = {}) {
    const s = we(e === "dev" ? "en" : e), r = t.ordinal ? "ordinal" : "cardinal", n = JSON.stringify({
      cleanedCode: s,
      type: r
    });
    if (n in this.pluralRulesCache)
      return this.pluralRulesCache[n];
    let a;
    try {
      a = new Intl.PluralRules(s, {
        type: r
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), pt;
      if (!e.match(/-|_/)) return pt;
      const c = this.languageUtils.getLanguagePartFromCode(e);
      a = this.getRule(c, t);
    }
    return this.pluralRulesCache[n] = a, a;
  }
  needsPlural(e, t = {}) {
    let s = this.getRule(e, t);
    return s || (s = this.getRule("dev", t)), (s == null ? void 0 : s.resolvedOptions().pluralCategories.length) > 1;
  }
  getPluralFormsOfKey(e, t, s = {}) {
    return this.getSuffixes(e, s).map((r) => `${t}${r}`);
  }
  getSuffixes(e, t = {}) {
    let s = this.getRule(e, t);
    return s || (s = this.getRule("dev", t)), s ? s.resolvedOptions().pluralCategories.sort((r, n) => ft[r] - ft[n]).map((r) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${r}`) : [];
  }
  getSuffix(e, t, s = {}) {
    const r = this.getRule(e, s);
    return r ? `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${r.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, s));
  }
}
const gt = (o, e, t, s = ".", r = !0) => {
  let n = qs(o, e, t);
  return !n && r && C(t) && (n = De(o, t, s), n === void 0 && (n = De(e, t, s))), n;
}, Ee = (o) => o.replace(/\$/g, "$$$$");
class ir {
  constructor(e = {}) {
    var t;
    this.logger = Z.create("interpolator"), this.options = e, this.format = ((t = e == null ? void 0 : e.interpolation) == null ? void 0 : t.format) || ((s) => s), this.init(e);
  }
  init(e = {}) {
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: t,
      escapeValue: s,
      useRawValueToEscape: r,
      prefix: n,
      prefixEscaped: a,
      suffix: l,
      suffixEscaped: c,
      formatSeparator: u,
      unescapeSuffix: d,
      unescapePrefix: h,
      nestingPrefix: m,
      nestingPrefixEscaped: g,
      nestingSuffix: p,
      nestingSuffixEscaped: b,
      nestingOptionsSeparator: _,
      maxReplaces: E,
      alwaysFormat: k
    } = e.interpolation;
    this.escape = t !== void 0 ? t : Xs, this.escapeValue = s !== void 0 ? s : !0, this.useRawValueToEscape = r !== void 0 ? r : !1, this.prefix = n ? le(n) : a || "{{", this.suffix = l ? le(l) : c || "}}", this.formatSeparator = u || ",", this.unescapePrefix = d ? "" : h || "-", this.unescapeSuffix = this.unescapePrefix ? "" : d || "", this.nestingPrefix = m ? le(m) : g || le("$t("), this.nestingSuffix = p ? le(p) : b || le(")"), this.nestingOptionsSeparator = _ || ",", this.maxReplaces = E || 1e3, this.alwaysFormat = k !== void 0 ? k : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, s) => (t == null ? void 0 : t.source) === s ? (t.lastIndex = 0, t) : new RegExp(s, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(e, t, s, r) {
    var g;
    let n, a, l;
    const c = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, u = (p) => {
      if (p.indexOf(this.formatSeparator) < 0) {
        const k = gt(t, c, p, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(k, void 0, s, {
          ...r,
          ...t,
          interpolationkey: p
        }) : k;
      }
      const b = p.split(this.formatSeparator), _ = b.shift().trim(), E = b.join(this.formatSeparator).trim();
      return this.format(gt(t, c, _, this.options.keySeparator, this.options.ignoreJSONStructure), E, s, {
        ...r,
        ...t,
        interpolationkey: _
      });
    };
    this.resetRegExp();
    const d = (r == null ? void 0 : r.missingInterpolationHandler) || this.options.missingInterpolationHandler, h = ((g = r == null ? void 0 : r.interpolation) == null ? void 0 : g.skipOnVariables) !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (p) => Ee(p)
    }, {
      regex: this.regexp,
      safeValue: (p) => this.escapeValue ? Ee(this.escape(p)) : Ee(p)
    }].forEach((p) => {
      for (l = 0; n = p.regex.exec(e); ) {
        const b = n[1].trim();
        if (a = u(b), a === void 0)
          if (typeof d == "function") {
            const E = d(e, n, r);
            a = C(E) ? E : "";
          } else if (r && Object.prototype.hasOwnProperty.call(r, b))
            a = "";
          else if (h) {
            a = n[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${b} for interpolating ${e}`), a = "";
        else !C(a) && !this.useRawValueToEscape && (a = ot(a));
        const _ = p.safeValue(a);
        if (e = e.replace(n[0], _), h ? (p.regex.lastIndex += a.length, p.regex.lastIndex -= n[0].length) : p.regex.lastIndex = 0, l++, l >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t, s = {}) {
    let r, n, a;
    const l = (c, u) => {
      const d = this.nestingOptionsSeparator;
      if (c.indexOf(d) < 0) return c;
      const h = c.split(new RegExp(`${d}[ ]*{`));
      let m = `{${h[1]}`;
      c = h[0], m = this.interpolate(m, a);
      const g = m.match(/'/g), p = m.match(/"/g);
      (((g == null ? void 0 : g.length) ?? 0) % 2 === 0 && !p || p.length % 2 !== 0) && (m = m.replace(/'/g, '"'));
      try {
        a = JSON.parse(m), u && (a = {
          ...u,
          ...a
        });
      } catch (b) {
        return this.logger.warn(`failed parsing options string in nesting for key ${c}`, b), `${c}${d}${m}`;
      }
      return a.defaultValue && a.defaultValue.indexOf(this.prefix) > -1 && delete a.defaultValue, c;
    };
    for (; r = this.nestingRegexp.exec(e); ) {
      let c = [];
      a = {
        ...s
      }, a = a.replace && !C(a.replace) ? a.replace : a, a.applyPostProcessor = !1, delete a.defaultValue;
      const u = /{.*}/.test(r[1]) ? r[1].lastIndexOf("}") + 1 : r[1].indexOf(this.formatSeparator);
      if (u !== -1 && (c = r[1].slice(u).split(this.formatSeparator).map((d) => d.trim()).filter(Boolean), r[1] = r[1].slice(0, u)), n = t(l.call(this, r[1].trim(), a), a), n && r[0] === e && !C(n)) return n;
      C(n) || (n = ot(n)), n || (this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`), n = ""), c.length && (n = c.reduce((d, h) => this.format(d, h, s.lng, {
        ...s,
        interpolationkey: r[1].trim()
      }), n.trim())), e = e.replace(r[0], n), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const or = (o) => {
  let e = o.toLowerCase().trim();
  const t = {};
  if (o.indexOf("(") > -1) {
    const s = o.split("(");
    e = s[0].toLowerCase().trim();
    const r = s[1].substring(0, s[1].length - 1);
    e === "currency" && r.indexOf(":") < 0 ? t.currency || (t.currency = r.trim()) : e === "relativetime" && r.indexOf(":") < 0 ? t.range || (t.range = r.trim()) : r.split(";").forEach((a) => {
      if (a) {
        const [l, ...c] = a.split(":"), u = c.join(":").trim().replace(/^'+|'+$/g, ""), d = l.trim();
        t[d] || (t[d] = u), u === "false" && (t[d] = !1), u === "true" && (t[d] = !0), isNaN(u) || (t[d] = parseInt(u, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}, mt = (o) => {
  const e = {};
  return (t, s, r) => {
    let n = r;
    r && r.interpolationkey && r.formatParams && r.formatParams[r.interpolationkey] && r[r.interpolationkey] && (n = {
      ...n,
      [r.interpolationkey]: void 0
    });
    const a = s + JSON.stringify(n);
    let l = e[a];
    return l || (l = o(we(s), r), e[a] = l), l(t);
  };
}, nr = (o) => (e, t, s) => o(we(t), s)(e);
class ar {
  constructor(e = {}) {
    this.logger = Z.create("formatter"), this.options = e, this.init(e);
  }
  init(e, t = {
    interpolation: {}
  }) {
    this.formatSeparator = t.interpolation.formatSeparator || ",";
    const s = t.cacheInBuiltFormats ? mt : nr;
    this.formats = {
      number: s((r, n) => {
        const a = new Intl.NumberFormat(r, {
          ...n
        });
        return (l) => a.format(l);
      }),
      currency: s((r, n) => {
        const a = new Intl.NumberFormat(r, {
          ...n,
          style: "currency"
        });
        return (l) => a.format(l);
      }),
      datetime: s((r, n) => {
        const a = new Intl.DateTimeFormat(r, {
          ...n
        });
        return (l) => a.format(l);
      }),
      relativetime: s((r, n) => {
        const a = new Intl.RelativeTimeFormat(r, {
          ...n
        });
        return (l) => a.format(l, n.range || "day");
      }),
      list: s((r, n) => {
        const a = new Intl.ListFormat(r, {
          ...n
        });
        return (l) => a.format(l);
      })
    };
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = mt(t);
  }
  format(e, t, s, r = {}) {
    const n = t.split(this.formatSeparator);
    if (n.length > 1 && n[0].indexOf("(") > 1 && n[0].indexOf(")") < 0 && n.find((l) => l.indexOf(")") > -1)) {
      const l = n.findIndex((c) => c.indexOf(")") > -1);
      n[0] = [n[0], ...n.splice(1, l)].join(this.formatSeparator);
    }
    return n.reduce((l, c) => {
      var h;
      const {
        formatName: u,
        formatOptions: d
      } = or(c);
      if (this.formats[u]) {
        let m = l;
        try {
          const g = ((h = r == null ? void 0 : r.formatParams) == null ? void 0 : h[r.interpolationkey]) || {}, p = g.locale || g.lng || r.locale || r.lng || s;
          m = this.formats[u](l, p, {
            ...d,
            ...r,
            ...g
          });
        } catch (g) {
          this.logger.warn(g);
        }
        return m;
      } else
        this.logger.warn(`there was no format function for ${u}`);
      return l;
    }, e);
  }
}
const lr = (o, e) => {
  o.pending[e] !== void 0 && (delete o.pending[e], o.pendingCount--);
};
class cr extends Re {
  constructor(e, t, s, r = {}) {
    var n, a;
    super(), this.backend = e, this.store = t, this.services = s, this.languageUtils = s.languageUtils, this.options = r, this.logger = Z.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = r.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5, this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350, this.state = {}, this.queue = [], (a = (n = this.backend) == null ? void 0 : n.init) == null || a.call(n, s, r.backend, r);
  }
  queueLoad(e, t, s, r) {
    const n = {}, a = {}, l = {}, c = {};
    return e.forEach((u) => {
      let d = !0;
      t.forEach((h) => {
        const m = `${u}|${h}`;
        !s.reload && this.store.hasResourceBundle(u, h) ? this.state[m] = 2 : this.state[m] < 0 || (this.state[m] === 1 ? a[m] === void 0 && (a[m] = !0) : (this.state[m] = 1, d = !1, a[m] === void 0 && (a[m] = !0), n[m] === void 0 && (n[m] = !0), c[h] === void 0 && (c[h] = !0)));
      }), d || (l[u] = !0);
    }), (Object.keys(n).length || Object.keys(a).length) && this.queue.push({
      pending: a,
      pendingCount: Object.keys(a).length,
      loaded: {},
      errors: [],
      callback: r
    }), {
      toLoad: Object.keys(n),
      pending: Object.keys(a),
      toLoadLanguages: Object.keys(l),
      toLoadNamespaces: Object.keys(c)
    };
  }
  loaded(e, t, s) {
    const r = e.split("|"), n = r[0], a = r[1];
    t && this.emit("failedLoading", n, a, t), !t && s && this.store.addResourceBundle(n, a, s, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2, t && s && (this.state[e] = 0);
    const l = {};
    this.queue.forEach((c) => {
      Ys(c.loaded, [n], a), lr(c, e), t && c.errors.push(t), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach((u) => {
        l[u] || (l[u] = {});
        const d = c.loaded[u];
        d.length && d.forEach((h) => {
          l[u][h] === void 0 && (l[u][h] = !0);
        });
      }), c.done = !0, c.errors.length ? c.callback(c.errors) : c.callback());
    }), this.emit("loaded", l), this.queue = this.queue.filter((c) => !c.done);
  }
  read(e, t, s, r = 0, n = this.retryTimeout, a) {
    if (!e.length) return a(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: s,
        tried: r,
        wait: n,
        callback: a
      });
      return;
    }
    this.readingCalls++;
    const l = (u, d) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const h = this.waitingReads.shift();
        this.read(h.lng, h.ns, h.fcName, h.tried, h.wait, h.callback);
      }
      if (u && d && r < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, s, r + 1, n * 2, a);
        }, n);
        return;
      }
      a(u, d);
    }, c = this.backend[s].bind(this.backend);
    if (c.length === 2) {
      try {
        const u = c(e, t);
        u && typeof u.then == "function" ? u.then((d) => l(null, d)).catch(l) : l(null, u);
      } catch (u) {
        l(u);
      }
      return;
    }
    return c(e, t, l);
  }
  prepareLoading(e, t, s = {}, r) {
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), r && r();
    C(e) && (e = this.languageUtils.toResolveHierarchy(e)), C(t) && (t = [t]);
    const n = this.queueLoad(e, t, s, r);
    if (!n.toLoad.length)
      return n.pending.length || r(), null;
    n.toLoad.forEach((a) => {
      this.loadOne(a);
    });
  }
  load(e, t, s) {
    this.prepareLoading(e, t, {}, s);
  }
  reload(e, t, s) {
    this.prepareLoading(e, t, {
      reload: !0
    }, s);
  }
  loadOne(e, t = "") {
    const s = e.split("|"), r = s[0], n = s[1];
    this.read(r, n, "read", void 0, void 0, (a, l) => {
      a && this.logger.warn(`${t}loading namespace ${n} for language ${r} failed`, a), !a && l && this.logger.log(`${t}loaded namespace ${n} for language ${r}`, l), this.loaded(e, a, l);
    });
  }
  saveMissing(e, t, s, r, n, a = {}, l = () => {
  }) {
    var c, u, d, h, m;
    if ((u = (c = this.services) == null ? void 0 : c.utils) != null && u.hasLoadedNamespace && !((h = (d = this.services) == null ? void 0 : d.utils) != null && h.hasLoadedNamespace(t))) {
      this.logger.warn(`did not save key "${s}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(s == null || s === "")) {
      if ((m = this.backend) != null && m.create) {
        const g = {
          ...a,
          isUpdate: n
        }, p = this.backend.create.bind(this.backend);
        if (p.length < 6)
          try {
            let b;
            p.length === 5 ? b = p(e, t, s, r, g) : b = p(e, t, s, r), b && typeof b.then == "function" ? b.then((_) => l(null, _)).catch(l) : l(null, b);
          } catch (b) {
            l(b);
          }
        else
          p(e, t, s, r, l, g);
      }
      !e || !e[0] || this.store.addResource(e[0], t, s, r);
    }
  }
}
const xt = () => ({
  debug: !1,
  initAsync: !0,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: !1,
  supportedLngs: !1,
  nonExplicitSupportedLngs: !1,
  load: "all",
  preload: !1,
  simplifyPluralSuffix: !0,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: !1,
  saveMissing: !1,
  updateMissing: !1,
  saveMissingTo: "fallback",
  saveMissingPlurals: !0,
  missingKeyHandler: !1,
  missingInterpolationHandler: !1,
  postProcess: !1,
  postProcessPassResolved: !1,
  returnNull: !1,
  returnEmptyString: !0,
  returnObjects: !1,
  joinArrays: !1,
  returnedObjectHandler: !1,
  parseMissingKeyHandler: !1,
  appendNamespaceToMissingKey: !1,
  appendNamespaceToCIMode: !1,
  overloadTranslationOptionHandler: (o) => {
    let e = {};
    if (typeof o[1] == "object" && (e = o[1]), C(o[1]) && (e.defaultValue = o[1]), C(o[2]) && (e.tDescription = o[2]), typeof o[2] == "object" || typeof o[3] == "object") {
      const t = o[3] || o[2];
      Object.keys(t).forEach((s) => {
        e[s] = t[s];
      });
    }
    return e;
  },
  interpolation: {
    escapeValue: !0,
    format: (o) => o,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  },
  cacheInBuiltFormats: !0
}), yt = (o) => {
  var e, t;
  return C(o.ns) && (o.ns = [o.ns]), C(o.fallbackLng) && (o.fallbackLng = [o.fallbackLng]), C(o.fallbackNS) && (o.fallbackNS = [o.fallbackNS]), ((t = (e = o.supportedLngs) == null ? void 0 : e.indexOf) == null ? void 0 : t.call(e, "cimode")) < 0 && (o.supportedLngs = o.supportedLngs.concat(["cimode"])), typeof o.initImmediate == "boolean" && (o.initAsync = o.initImmediate), o;
}, Ce = () => {
}, dr = (o) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(o)).forEach((t) => {
    typeof o[t] == "function" && (o[t] = o[t].bind(o));
  });
};
class ve extends Re {
  constructor(e = {}, t) {
    if (super(), this.options = yt(e), this.services = {}, this.logger = Z, this.modules = {
      external: []
    }, dr(this), t && !this.isInitialized && !e.isClone) {
      if (!this.options.initAsync)
        return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init(e = {}, t) {
    this.isInitializing = !0, typeof e == "function" && (t = e, e = {}), e.defaultNS == null && e.ns && (C(e.ns) ? e.defaultNS = e.ns : e.ns.indexOf("translation") < 0 && (e.defaultNS = e.ns[0]));
    const s = xt();
    this.options = {
      ...s,
      ...this.options,
      ...yt(e)
    }, this.options.interpolation = {
      ...s.interpolation,
      ...this.options.interpolation
    }, e.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = e.keySeparator), e.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = e.nsSeparator);
    const r = (u) => u ? typeof u == "function" ? new u() : u : null;
    if (!this.options.isClone) {
      this.modules.logger ? Z.init(r(this.modules.logger), this.options) : Z.init(null, this.options);
      let u;
      this.modules.formatter ? u = this.modules.formatter : u = ar;
      const d = new ht(this.options);
      this.store = new ct(this.options.resources, this.options);
      const h = this.services;
      h.logger = Z, h.resourceStore = this.store, h.languageUtils = d, h.pluralResolver = new rr(d, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), this.options.interpolation.format && this.options.interpolation.format !== s.interpolation.format && this.logger.warn("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"), u && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (h.formatter = r(u), h.formatter.init && h.formatter.init(h, this.options), this.options.interpolation.format = h.formatter.format.bind(h.formatter)), h.interpolator = new ir(this.options), h.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, h.backendConnector = new cr(r(this.modules.backend), h.resourceStore, h, this.options), h.backendConnector.on("*", (g, ...p) => {
        this.emit(g, ...p);
      }), this.modules.languageDetector && (h.languageDetector = r(this.modules.languageDetector), h.languageDetector.init && h.languageDetector.init(h, this.options.detection, this.options)), this.modules.i18nFormat && (h.i18nFormat = r(this.modules.i18nFormat), h.i18nFormat.init && h.i18nFormat.init(this)), this.translator = new Oe(this.services, this.options), this.translator.on("*", (g, ...p) => {
        this.emit(g, ...p);
      }), this.modules.external.forEach((g) => {
        g.init && g.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, t || (t = Ce), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const u = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      u.length > 0 && u[0] !== "dev" && (this.options.lng = u[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((u) => {
      this[u] = (...d) => this.store[u](...d);
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((u) => {
      this[u] = (...d) => (this.store[u](...d), this);
    });
    const l = me(), c = () => {
      const u = (d, h) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(h), t(d, h);
      };
      if (this.languages && !this.isInitialized) return u(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, u);
    };
    return this.options.resources || !this.options.initAsync ? c() : setTimeout(c, 0), l;
  }
  loadResources(e, t = Ce) {
    var n, a;
    let s = t;
    const r = C(e) ? e : this.language;
    if (typeof e == "function" && (s = e), !this.options.resources || this.options.partialBundledLanguages) {
      if ((r == null ? void 0 : r.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return s();
      const l = [], c = (u) => {
        if (!u || u === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(u).forEach((h) => {
          h !== "cimode" && l.indexOf(h) < 0 && l.push(h);
        });
      };
      r ? c(r) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((d) => c(d)), (a = (n = this.options.preload) == null ? void 0 : n.forEach) == null || a.call(n, (u) => c(u)), this.services.backendConnector.load(l, this.options.ns, (u) => {
        !u && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), s(u);
      });
    } else
      s(null);
  }
  reloadResources(e, t, s) {
    const r = me();
    return typeof e == "function" && (s = e, e = void 0), typeof t == "function" && (s = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), s || (s = Ce), this.services.backendConnector.reload(e, t, (n) => {
      r.resolve(), s(n);
    }), r;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && It.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1)) {
      for (let t = 0; t < this.languages.length; t++) {
        const s = this.languages[t];
        if (!(["cimode", "dev"].indexOf(s) > -1) && this.store.hasLanguageSomeTranslations(s)) {
          this.resolvedLanguage = s;
          break;
        }
      }
      !this.resolvedLanguage && this.languages.indexOf(e) < 0 && this.store.hasLanguageSomeTranslations(e) && (this.resolvedLanguage = e, this.languages.unshift(e));
    }
  }
  changeLanguage(e, t) {
    this.isLanguageChangingTo = e;
    const s = me();
    this.emit("languageChanging", e);
    const r = (l) => {
      this.language = l, this.languages = this.services.languageUtils.toResolveHierarchy(l), this.resolvedLanguage = void 0, this.setResolvedLanguage(l);
    }, n = (l, c) => {
      c ? this.isLanguageChangingTo === e && (r(c), this.translator.changeLanguage(c), this.isLanguageChangingTo = void 0, this.emit("languageChanged", c), this.logger.log("languageChanged", c)) : this.isLanguageChangingTo = void 0, s.resolve((...u) => this.t(...u)), t && t(l, (...u) => this.t(...u));
    }, a = (l) => {
      var d, h;
      !e && !l && this.services.languageDetector && (l = []);
      const c = C(l) ? l : l && l[0], u = this.store.hasLanguageSomeTranslations(c) ? c : this.services.languageUtils.getBestMatchFromCodes(C(l) ? [l] : l);
      u && (this.language || r(u), this.translator.language || this.translator.changeLanguage(u), (h = (d = this.services.languageDetector) == null ? void 0 : d.cacheUserLanguage) == null || h.call(d, u)), this.loadResources(u, (m) => {
        n(m, u);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(e), s;
  }
  getFixedT(e, t, s) {
    const r = (n, a, ...l) => {
      let c;
      typeof a != "object" ? c = this.options.overloadTranslationOptionHandler([n, a].concat(l)) : c = {
        ...a
      }, c.lng = c.lng || r.lng, c.lngs = c.lngs || r.lngs, c.ns = c.ns || r.ns, c.keyPrefix !== "" && (c.keyPrefix = c.keyPrefix || s || r.keyPrefix);
      const u = this.options.keySeparator || ".";
      let d;
      return c.keyPrefix && Array.isArray(n) ? d = n.map((h) => `${c.keyPrefix}${u}${h}`) : d = c.keyPrefix ? `${c.keyPrefix}${u}${n}` : n, this.t(d, c);
    };
    return C(e) ? r.lng = e : r.lngs = e, r.ns = t, r.keyPrefix = s, r;
  }
  t(...e) {
    var t;
    return (t = this.translator) == null ? void 0 : t.translate(...e);
  }
  exists(...e) {
    var t;
    return (t = this.translator) == null ? void 0 : t.exists(...e);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e, t = {}) {
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const s = t.lng || this.resolvedLanguage || this.languages[0], r = this.options ? this.options.fallbackLng : !1, n = this.languages[this.languages.length - 1];
    if (s.toLowerCase() === "cimode") return !0;
    const a = (l, c) => {
      const u = this.services.backendConnector.state[`${l}|${c}`];
      return u === -1 || u === 0 || u === 2;
    };
    if (t.precheck) {
      const l = t.precheck(this, a);
      if (l !== void 0) return l;
    }
    return !!(this.hasResourceBundle(s, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || a(s, e) && (!r || a(n, e)));
  }
  loadNamespaces(e, t) {
    const s = me();
    return this.options.ns ? (C(e) && (e = [e]), e.forEach((r) => {
      this.options.ns.indexOf(r) < 0 && this.options.ns.push(r);
    }), this.loadResources((r) => {
      s.resolve(), t && t(r);
    }), s) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const s = me();
    C(e) && (e = [e]);
    const r = this.options.preload || [], n = e.filter((a) => r.indexOf(a) < 0 && this.services.languageUtils.isSupportedCode(a));
    return n.length ? (this.options.preload = r.concat(n), this.loadResources((a) => {
      s.resolve(), t && t(a);
    }), s) : (t && t(), Promise.resolve());
  }
  dir(e) {
    var r, n;
    if (e || (e = this.resolvedLanguage || (((r = this.languages) == null ? void 0 : r.length) > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    try {
      const a = new Intl.Locale(e);
      if (a && a.getTextInfo) {
        const l = a.getTextInfo();
        if (l && l.direction) return l.direction;
      }
    } catch {
    }
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], s = ((n = this.services) == null ? void 0 : n.languageUtils) || new ht(xt());
    return e.toLowerCase().indexOf("-latn") > 1 ? "ltr" : t.indexOf(s.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance(e = {}, t) {
    return new ve(e, t);
  }
  cloneInstance(e = {}, t = Ce) {
    const s = e.forkResourceStore;
    s && delete e.forkResourceStore;
    const r = {
      ...this.options,
      ...e,
      isClone: !0
    }, n = new ve(r);
    if ((e.debug !== void 0 || e.prefix !== void 0) && (n.logger = n.logger.clone(e)), ["store", "services", "language"].forEach((l) => {
      n[l] = this[l];
    }), n.services = {
      ...this.services
    }, n.services.utils = {
      hasLoadedNamespace: n.hasLoadedNamespace.bind(n)
    }, s) {
      const l = Object.keys(this.store.data).reduce((c, u) => (c[u] = {
        ...this.store.data[u]
      }, c[u] = Object.keys(c[u]).reduce((d, h) => (d[h] = {
        ...c[u][h]
      }, d), c[u]), c), {});
      n.store = new ct(l, r), n.services.resourceStore = n.store;
    }
    return n.translator = new Oe(n.services, r), n.translator.on("*", (l, ...c) => {
      n.emit(l, ...c);
    }), n.init(r, t), n.translator.options = r, n.translator.backendConnector.services.utils = {
      hasLoadedNamespace: n.hasLoadedNamespace.bind(n)
    }, n;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const H = ve.createInstance();
H.createInstance = ve.createInstance;
H.createInstance;
H.dir;
H.init;
H.loadResources;
H.reloadResources;
H.use;
H.changeLanguage;
H.getFixedT;
H.t;
H.exists;
H.setDefaultNamespace;
H.hasLoadedNamespace;
H.loadNamespaces;
H.loadLanguages;
var Ge = {
  nav: {
    pricing: "Pricing",
    contact: "Contact",
    languages: "Languages",
    login: "Login",
    get_started: "Get Started",
    product: {
      title: "Product",
      explore: "Explore our product",
      platform_overview: "Platform Overview",
      platform_overview_desc: "Unified CNAPP platform",
      benefits: "Benefits",
      benefits_desc: "See how Plexicus transforms security",
      use_cases: "Use Cases",
      use_cases_desc: "Real-world implementation examples",
      aspm: "ASPM",
      aspm_desc: "Application Security Posture Management",
      cspm: "CSPM",
      cspm_desc: "Cloud Security Posture Management",
      container_security: "Container Security",
      container_security_desc: "Container and Kubernetes security",
      cwpp: "CWPP",
      cwpp_desc: "Cloud Workload Protection Platform",
      ciem: "CIEM",
      ciem_desc: "Cloud Infrastructure Entitlement Management"
    },
    solutions: {
      title: "Solutions",
      explore: "Explore our solutions",
      fintech: "FinTech",
      fintech_desc: "Security solutions for financial technology",
      healthtech: "HealthTech",
      healthtech_desc: "HIPAA compliant security solutions",
      hrtech: "HRTech",
      hrtech_desc: "Security for human resources technology",
      group_companies: "Group Companies",
      group_companies_desc: "Solutions for corporate groups and holdings",
      agencies: "Agencies",
      agencies_desc: "Security for digital and marketing agencies",
      startups: "Startups",
      startups_desc: "Scalable security for growing companies",
      enterprise: "Enterprise",
      enterprise_desc: "Comprehensive security for large organizations",
      mobile_apps: "Mobile Apps",
      mobile_apps_desc: "Security for iOS and Android applications",
      manufacturing: "Manufacturing",
      manufacturing_desc: "Security for industrial and IoT systems",
      government: "Government",
      government_desc: "Security solutions for government agencies",
      retailtech: "RetailTech",
      retailtech_desc: "Security for e-commerce and retail platforms"
    },
    developers: {
      title: "Developers",
      documentation: "Documentation",
      documentation_desc: "Technical guides and references",
      api_references: "API References",
      api_references_desc: "Comprehensive API documentation",
      github_apps: "GitHub Apps",
      github_apps_desc: "Integrate Plexicus with your repositories",
      plexalyzer_action: "Plexalyzer Action",
      plexalyzer_action_desc: "Automate security in your CI/CD pipeline"
    },
    resources: {
      title: "Resources",
      support: "Support",
      support_desc: "Plexicus provides comprehensive support to help you get the most out of our platform.",
      explore: "Explore our resources",
      blog: "Blog",
      blog_desc: "Latest news and security insights",
      youtube_channel: "YouTube Channel",
      youtube_channel_desc: "Video tutorials and webinars",
      branding_assets: "Branding Assets",
      branding_assets_desc: "Logos and brand guidelines",
      changelogs: "Changelogs",
      changelogs_desc: "Latest product updates",
      feature_requests: "Feature Requests",
      feature_requests_desc: "Submit and vote on new features",
      integrations: "Integrations",
      integrations_desc: "Connect your tools and platforms",
      comparison_overview: "Comparison Overview",
      comparison_overview_desc: "See how Plexicus compares to other security tools"
    }
  },
  footer: {
    tagline: "Elevate your cybersecurity strategy with Plexicus",
    social_media: {
      twitter: "Twitter",
      linkedin: "LinkedIn",
      github: "GitHub",
      instagram: "Instagram"
    },
    sections: {
      products: {
        title: "Products",
        links: {
          platform_overview: "Platform Overview",
          aspm: "ASPM",
          cspm: "CSPM",
          container_security: "Container Security",
          cwpp: "CWPP",
          ciem: "CIEM",
          benefits: "Benefits",
          use_cases: "Use Cases",
          pricing: "Pricing"
        }
      },
      resources: {
        title: "Resources",
        links: {
          blog: "Blog",
          documentation: "Documentation",
          case_studies: "Case Studies",
          security_resources: "Security Resources"
        }
      },
      company: {
        title: "Company",
        links: {
          about_us: "About Us",
          contact: "Contact",
          careers: "Careers",
          privacy_policy: "Privacy Policy"
        }
      }
    },
    policies: {
      privacy_policy: "Privacy Policy",
      management_policy: "Management Policy",
      legal_notice: "Legal Notice"
    },
    readiness: "SOC2 Type II Readiness"
  }
};
Ge.nav;
Ge.footer;
var He = {
  nav: {
    pricing: "Precios",
    contact: "Contacto",
    languages: "Idiomas",
    login: "Iniciar Sesión",
    get_started: "Comenzar",
    product: {
      title: "Producto",
      explore: "Explora nuestro producto",
      platform_overview: "Resumen de la Plataforma",
      platform_overview_desc: "Plataforma CNAPP unificada",
      benefits: "Beneficios",
      benefits_desc: "Descubra cómo Plexicus transforma la seguridad",
      use_cases: "Casos de Uso",
      use_cases_desc: "Ejemplos de implementación en el mundo real",
      aspm: "ASPM",
      aspm_desc: "Gestión de la Postura de Seguridad de las Aplicaciones",
      cspm: "CSPM",
      cspm_desc: "Gestión de la Postura de Seguridad en la Nube",
      container_security: "Seguridad de Contenedores",
      container_security_desc: "Seguridad para contenedores y Kubernetes",
      cwpp: "CWPP",
      cwpp_desc: "Plataforma de Protección de Cargas de Trabajo en la Nube"
    },
    solutions: {
      title: "Soluciones",
      explore: "Explora nuestras soluciones",
      fintech: "FinTech",
      fintech_desc: "Soluciones de seguridad para tecnología financiera",
      healthtech: "HealthTech",
      healthtech_desc: "Soluciones de seguridad compatibles con HIPAA",
      hrtech: "HRTech",
      hrtech_desc: "Seguridad para la tecnología de recursos humanos",
      group_companies: "Grupos de Empresas",
      group_companies_desc: "Soluciones para grupos corporativos y holdings",
      agencies: "Agencias",
      agencies_desc: "Seguridad para agencias digitales y de marketing",
      startups: "Startups",
      startups_desc: "Seguridad escalable para empresas en crecimiento",
      enterprise: "Empresas",
      enterprise_desc: "Seguridad integral para grandes organizaciones",
      mobile_apps: "Aplicaciones Móviles",
      mobile_apps_desc: "Seguridad para aplicaciones de iOS y Android",
      manufacturing: "Industria",
      manufacturing_desc: "Seguridad para sistemas industriales e IoT",
      government: "Gobierno",
      government_desc: "Soluciones de seguridad para agencias gubernamentales",
      retailtech: "RetailTech",
      retailtech_desc: "Seguridad para plataformas de comercio electrónico y minoristas"
    },
    developers: {
      title: "Desarrolladores",
      documentation: "Documentación",
      documentation_desc: "Guías técnicas y referencias",
      api_references: "Referencias de API",
      api_references_desc: "Documentación completa de la API",
      github_apps: "Aplicaciones de GitHub",
      github_apps_desc: "Integre Plexicus con sus repositorios",
      plexalyzer_action: "Acción Plexalyzer",
      plexalyzer_action_desc: "Automatice la seguridad en su pipeline de CI/CD"
    },
    resources: {
      title: "Recursos",
      support: "Soporte",
      support_desc: "Plexicus proporciona soporte integral para ayudarte a aprovechar al máximo nuestra plataforma.",
      explore: "Explora nuestros recursos",
      blog: "Blog",
      blog_desc: "Últimas noticias y perspectivas de seguridad",
      youtube_channel: "Canal de YouTube",
      youtube_channel_desc: "Tutoriales en video y seminarios web",
      branding_assets: "Activos de Marca",
      branding_assets_desc: "Logotipos y pautas de la marca",
      changelogs: "Registros de Cambios",
      changelogs_desc: "Últimas actualizaciones del producto",
      feature_requests: "Solicitudes de Características",
      feature_requests_desc: "Envíe y vote por nuevas características",
      integrations: "Integraciones",
      integrations_desc: "Conecte sus herramientas y plataformas",
      comparison_overview: "Resumen Comparativo",
      comparison_overview_desc: "Vea cómo se compara Plexicus con otras herramientas de seguridad"
    }
  },
  footer: {
    tagline: "Eleve su estrategia de ciberseguridad con Plexicus",
    social_media: {
      twitter: "Twitter",
      linkedin: "LinkedIn",
      github: "GitHub",
      instagram: "Instagram"
    },
    sections: {
      products: {
        title: "Productos",
        links: {
          platform_overview: "Resumen de la plataforma",
          aspm: "ASPM",
          cspm: "CSPM",
          container_security: "Seguridad de contenedores",
          cwpp: "CWPP",
          ciem: "CIEM",
          benefits: "Beneficios",
          use_cases: "Casos de Uso",
          pricing: "Precios"
        }
      },
      resources: {
        title: "Recursos",
        links: {
          blog: "Blog",
          documentation: "Documentación",
          case_studies: "Casos de Estudio",
          security_resources: "Recursos de Seguridad"
        }
      },
      company: {
        title: "Compañía",
        links: {
          about_us: "Sobre Nosotros",
          contact: "Contacto",
          careers: "Empleo",
          privacy_policy: "Política de Privacidad"
        }
      }
    },
    policies: {
      privacy_policy: "Política de Privacidad",
      management_policy: "Política de Gestión",
      legal_notice: "Aviso Legal"
    },
    readiness: "Preparación para SOC2 Tipo II"
  }
};
He.nav;
He.footer;
var Ke = {
  nav: {
    pricing: "Prezzi",
    contact: "Contatti",
    languages: "Lingue",
    login: "Accedi",
    get_started: "Inizia",
    product: {
      title: "Prodotto",
      explore: "Esplora il nostro prodotto",
      platform_overview: "Panoramica della Piattaforma",
      platform_overview_desc: "Piattaforma CNAPP unificata",
      benefits: "Vantaggi",
      benefits_desc: "Scopri come Plexicus trasforma la sicurezza",
      use_cases: "Casi d'Uso",
      use_cases_desc: "Esempi di implementazione reali",
      aspm: "ASPM",
      aspm_desc: "Gestione della Postura di Sicurezza delle Applicazioni",
      cspm: "CSPM",
      cspm_desc: "Gestione della Postura di Sicurezza del Cloud",
      container_security: "Sicurezza dei Container",
      container_security_desc: "Sicurezza per container e Kubernetes",
      cwpp: "CWPP",
      cwpp_desc: "Piattaforma di Protezione dei Carichi di Lavoro in Cloud"
    },
    solutions: {
      title: "Soluzioni",
      explore: "Esplora le nostre soluzioni",
      fintech: "FinTech",
      fintech_desc: "Soluzioni di sicurezza per la tecnologia finanziaria",
      healthtech: "HealthTech",
      healthtech_desc: "Soluzioni di sicurezza conformi a HIPAA",
      hrtech: "HRTech",
      hrtech_desc: "Sicurezza per la tecnologia delle risorse umane",
      group_companies: "Gruppi Aziendali",
      group_companies_desc: "Soluzioni per gruppi aziendali e holding",
      agencies: "Agenzie",
      agencies_desc: "Sicurezza per agenzie digitali e di marketing",
      startups: "Startup",
      startups_desc: "Sicurezza scalabile per aziende in crescita",
      enterprise: "Aziende",
      enterprise_desc: "Sicurezza completa per grandi organizzazioni",
      mobile_apps: "App Mobili",
      mobile_apps_desc: "Sicurezza per applicazioni iOS e Android",
      manufacturing: "Manifatturiero",
      manufacturing_desc: "Sicurezza per sistemi industriali e IoT",
      government: "Governo",
      government_desc: "Soluzioni di sicurezza per enti governativi",
      retailtech: "RetailTech",
      retailtech_desc: "Sicurezza per piattaforme di e-commerce e vendita al dettaglio"
    },
    developers: {
      title: "Sviluppatori",
      documentation: "Documentazione",
      documentation_desc: "Guide tecniche e riferimenti",
      api_references: "Riferimenti API",
      api_references_desc: "Documentazione API completa",
      github_apps: "App di GitHub",
      github_apps_desc: "Integra Plexicus con i tuoi repository",
      plexalyzer_action: "Azione Plexalyzer",
      plexalyzer_action_desc: "Automatizza la sicurezza nella tua pipeline CI/CD"
    },
    resources: {
      title: "Risorse",
      support: "Supporto",
      support_desc: "Plexicus offre un supporto completo per aiutarti a ottenere il massimo dalla nostra piattaforma.",
      explore: "Esplora le nostre risorse",
      blog: "Blog",
      blog_desc: "Ultime notizie e approfondimenti sulla sicurezza",
      youtube_channel: "Canale YouTube",
      youtube_channel_desc: "Tutorial video e webinar",
      branding_assets: "Asset del Marchio",
      branding_assets_desc: "Loghi e linee guida del marchio",
      changelogs: "Changelog",
      changelogs_desc: "Ultimi aggiornamenti del prodotto",
      feature_requests: "Richieste di Funzionalità",
      feature_requests_desc: "Invia e vota per nuove funzionalità",
      integrations: "Integrazioni",
      integrations_desc: "Collega i tuoi strumenti e le tue piattaforme",
      comparison_overview: "Panoramica Comparativa",
      comparison_overview_desc: "Scopri come Plexicus si confronta con altri strumenti di sicurezza"
    }
  },
  footer: {
    tagline: "Eleva la tua strategia di cybersecurity con Plexicus",
    social_media: {
      twitter: "Twitter",
      linkedin: "LinkedIn",
      github: "GitHub",
      instagram: "Instagram"
    },
    sections: {
      products: {
        title: "Prodotti",
        links: {
          platform_overview: "Panoramica della piattaforma",
          aspm: "ASPM",
          cspm: "CSPM",
          container_security: "Sicurezza dei contenitori",
          cwpp: "CWPP",
          ciem: "CIEM",
          benefits: "Vantaggi",
          use_cases: "Casi d'Uso",
          pricing: "Prezzi"
        }
      },
      resources: {
        title: "Risorse",
        links: {
          blog: "Blog",
          documentation: "Documentazione",
          case_studies: "Casi di Studio",
          security_resources: "Risorse di Sicurezza"
        }
      },
      company: {
        title: "Azienda",
        links: {
          about_us: "Chi Siamo",
          contact: "Contatti",
          careers: "Lavora con noi",
          privacy_policy: "Informativa sulla Privacy"
        }
      }
    },
    policies: {
      privacy_policy: "Informativa sulla Privacy",
      management_policy: "Politica di Gestione",
      legal_notice: "Note Legali"
    },
    readiness: "Conformità SOC2 Tipo II"
  }
};
Ke.nav;
Ke.footer;
const ur = ["en", "es", "it"];
H.use(Ws).init({
  lng: "en",
  supportedLngs: ur,
  resources: {
    en: { translation: Ge },
    es: { translation: He },
    it: { translation: Ke }
  },
  fallbackLng: "en",
  react: { useSuspense: !1 }
});
const Ft = "https://www.plexicus.ai", Bt = "https://blog.plexicus.ai", wt = "https://app.plexicus.ai", mr = ({
  lang: o,
  fullSiteUrl: e = "http://localhost:8000",
  fullBlogUrl: t = "http://localhost:9000"
}) => {
  const [s, r] = ce("/"), [n, a] = ce(!1), [l, c] = ce(null), u = _e(null), { t: d, i18n: h } = At();
  re(() => {
    h.changeLanguage(o), r(o !== "en" ? `/${o}/` : "/");
  }, []);
  const [m, g] = ce(!1);
  re(() => {
    const v = () => {
      const $ = window.scrollY;
      g($ > 50);
    };
    return window.addEventListener("scroll", v), v(), () => {
      window.removeEventListener("scroll", v);
    };
  }, []);
  const p = xe((v) => {
    u.current && (clearTimeout(u.current), u.current = null), c(v);
  }, []), b = _e([]), _ = xe(() => {
    const v = setTimeout(() => {
      c(null);
    }, 150);
    u.current = v, b.current.push(v);
  }, []);
  re(() => () => {
    u.current && clearTimeout(u.current), b.current.forEach(clearTimeout), b.current = [];
  }, []);
  const E = xe(
    (v) => {
      c(l === v ? null : v);
    },
    [l]
  ), k = Le(e, Ft), A = Le(t, Bt), R = {
    products: {
      title: d("nav.product.title"),
      shortTitle: d("footer.sections.products.title"),
      image: "product-diagram",
      items: [
        {
          title: d("nav.product.platform_overview"),
          description: d("nav.product.platform_overview_desc"),
          href: `${k}${s}products/cnapp-platform`,
          icon: /* @__PURE__ */ i.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ i.jsx("circle", { cx: "12", cy: "12", r: "10" }),
                /* @__PURE__ */ i.jsx("path", { d: "M12 16v-4" }),
                /* @__PURE__ */ i.jsx("path", { d: "M12 8h.01" })
              ]
            }
          )
        },
        {
          title: d("nav.product.benefits"),
          description: d("nav.product.benefits_desc"),
          href: `${k}${s}products/benefits`,
          icon: /* @__PURE__ */ i.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ i.jsx("path", { d: "m9 12 2 2 4-4" }),
                /* @__PURE__ */ i.jsx("path", { d: "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" }),
                /* @__PURE__ */ i.jsx("path", { d: "M22 19H2" })
              ]
            }
          )
        },
        {
          title: d("nav.product.use_cases"),
          description: d("nav.product.use_cases_desc"),
          href: `${k}${s}products/use-cases`,
          icon: /* @__PURE__ */ i.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ i.jsx("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }),
                /* @__PURE__ */ i.jsx("path", { d: "M8 12h8" }),
                /* @__PURE__ */ i.jsx("path", { d: "M12 8v8" })
              ]
            }
          )
        },
        {
          title: d("nav.product.aspm"),
          description: d("nav.product.aspm_desc"),
          href: `${k}${s}products/aspm`,
          icon: /* @__PURE__ */ i.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: /* @__PURE__ */ i.jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" })
            }
          )
        },
        {
          title: d("nav.product.cspm"),
          description: d("nav.product.cspm_desc"),
          href: `${k}${s}products/cspm`,
          icon: /* @__PURE__ */ i.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: /* @__PURE__ */ i.jsx("path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" })
            }
          )
        },
        {
          title: d("nav.product.container_security"),
          description: d("nav.product.container_security_desc"),
          href: `${k}${s}products/container`,
          icon: /* @__PURE__ */ i.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ i.jsx("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }),
                /* @__PURE__ */ i.jsx("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }),
                /* @__PURE__ */ i.jsx("line", { x1: "12", y1: "22.08", x2: "12", y2: "12" })
              ]
            }
          )
        },
        {
          title: d("nav.product.cwpp"),
          description: d("nav.product.cwpp_desc"),
          href: `${k}${s}products/cwpp`,
          icon: /* @__PURE__ */ i.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ i.jsx("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }),
                /* @__PURE__ */ i.jsx("circle", { cx: "12", cy: "16", r: "1" }),
                /* @__PURE__ */ i.jsx("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
              ]
            }
          )
        },
        {
          title: d("nav.product.ciem"),
          description: d("nav.product.ciem_desc"),
          href: `${k}${s}products/ciem`,
          icon: /* @__PURE__ */ i.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: "lucide lucide-cloud-cog-icon lucide-cloud-cog", children: [
            /* @__PURE__ */ i.jsx("path", { d: "m10.852 19.772-.383.924" }),
            /* @__PURE__ */ i.jsx("path", { d: "m13.148 14.228.383-.923" }),
            /* @__PURE__ */ i.jsx("path", { d: "M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923" }),
            /* @__PURE__ */ i.jsx("path", { d: "m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544" }),
            /* @__PURE__ */ i.jsx("path", { d: "m14.772 15.852.923-.383" }),
            /* @__PURE__ */ i.jsx("path", { d: "m14.772 18.148.923.383" }),
            /* @__PURE__ */ i.jsx("path", { d: "M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" }),
            /* @__PURE__ */ i.jsx("path", { d: "m9.228 15.852-.923-.383" }),
            /* @__PURE__ */ i.jsx("path", { d: "m9.228 18.148-.923.383" })
          ] })
        }
      ]
    },
    solutions: {
      title: d("nav.solutions.title"),
      link: "/solutions",
      shortTitle: "Solutions",
      image: "solutions-diagram",
      items: [
        {
          title: d("nav.solutions.fintech"),
          description: d("nav.solutions.fintech_desc"),
          href: `${k}${s}solutions/fintech`,
          icon: /* @__PURE__ */ i.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ i.jsx("rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }),
                /* @__PURE__ */ i.jsx("line", { x1: "2", x2: "22", y1: "10", y2: "10" })
              ]
            }
          )
        },
        {
          title: d("nav.solutions.healthtech"),
          description: d("nav.solutions.healthtech_desc"),
          href: `${k}${s}solutions/healthtech`,
          icon: /* @__PURE__ */ i.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: /* @__PURE__ */ i.jsx("path", { d: "M22 12h-4l-3 9L9 3l-3 9H2" })
            }
          )
        },
        {
          title: d("nav.solutions.hrtech"),
          description: d("nav.solutions.hrtech_desc"),
          href: `${k}${s}solutions/hrtech`,
          icon: /* @__PURE__ */ i.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ i.jsx("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
                /* @__PURE__ */ i.jsx("circle", { cx: "9", cy: "7", r: "4" }),
                /* @__PURE__ */ i.jsx("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
                /* @__PURE__ */ i.jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
              ]
            }
          )
        },
        {
          title: d("nav.solutions.group_companies"),
          description: d("nav.solutions.group_companies_desc"),
          href: `${k}${s}solutions/group-companies`,
          icon: /* @__PURE__ */ i.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ i.jsx("rect", { x: "2", y: "7", width: "20", height: "14", rx: "2", ry: "2" }),
                /* @__PURE__ */ i.jsx("path", { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" })
              ]
            }
          )
        },
        {
          title: d("nav.solutions.agencies"),
          description: d("nav.solutions.agencies_desc"),
          href: `${k}${s}solutions/agencies`,
          icon: /* @__PURE__ */ i.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ i.jsx("path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }),
                /* @__PURE__ */ i.jsx("path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" })
              ]
            }
          )
        },
        {
          title: d("nav.solutions.startups"),
          description: d("nav.solutions.startups_desc"),
          href: `${k}${s}solutions/startups`,
          icon: /* @__PURE__ */ i.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ i.jsx("path", { d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" }),
                /* @__PURE__ */ i.jsx("path", { d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" }),
                /* @__PURE__ */ i.jsx("path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" }),
                /* @__PURE__ */ i.jsx("path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" })
              ]
            }
          )
        },
        {
          title: d("nav.solutions.enterprise"),
          description: d("nav.solutions.enterprise_desc"),
          href: `${k}${s}solutions/enterprise`,
          icon: /* @__PURE__ */ i.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ i.jsx("path", { d: "M2 20h20" }),
                /* @__PURE__ */ i.jsx("path", { d: "M5 20V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v14" }),
                /* @__PURE__ */ i.jsx("path", { d: "M12 3v4" }),
                /* @__PURE__ */ i.jsx("path", { d: "M5 8h14" }),
                /* @__PURE__ */ i.jsx("path", { d: "M7 14h2" }),
                /* @__PURE__ */ i.jsx("path", { d: "M15 14h2" }),
                /* @__PURE__ */ i.jsx("path", { d: "M7 10h2" }),
                /* @__PURE__ */ i.jsx("path", { d: "M15 10h2" })
              ]
            }
          )
        },
        {
          title: d("nav.solutions.mobile_apps"),
          description: d("nav.solutions.mobile_apps_desc"),
          href: `${k}${s}solutions/mobile-apps`,
          icon: /* @__PURE__ */ i.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ i.jsx("rect", { x: "5", y: "2", width: "14", height: "20", rx: "2", ry: "2" }),
                /* @__PURE__ */ i.jsx("line", { x1: "12", y1: "18", x2: "12.01", y2: "18" })
              ]
            }
          )
        },
        {
          title: d("nav.solutions.manufacturing"),
          description: d("nav.solutions.manufacturing_desc"),
          href: `${k}${s}solutions/manufacturing`,
          icon: /* @__PURE__ */ i.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: /* @__PURE__ */ i.jsx("path", { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" })
            }
          )
        },
        {
          title: d("nav.solutions.government"),
          description: d("nav.solutions.government_desc"),
          href: `${k}${s}solutions/government`,
          icon: /* @__PURE__ */ i.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ i.jsx("path", { d: "M2 20h20" }),
                /* @__PURE__ */ i.jsx("path", { d: "M12 4v6" }),
                /* @__PURE__ */ i.jsx("path", { d: "M4 20V10l8-6 8 6v10" }),
                /* @__PURE__ */ i.jsx("path", { d: "M15 12v8" }),
                /* @__PURE__ */ i.jsx("path", { d: "M9 12v8" })
              ]
            }
          )
        },
        {
          title: d("nav.solutions.retailtech"),
          description: d("nav.solutions.retailtech_desc"),
          href: `${k}${s}solutions/retailtech`,
          icon: /* @__PURE__ */ i.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ i.jsx("circle", { cx: "9", cy: "21", r: "1" }),
                /* @__PURE__ */ i.jsx("circle", { cx: "20", cy: "21", r: "1" }),
                /* @__PURE__ */ i.jsx("path", { d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" })
              ]
            }
          )
        }
      ]
    },
    developers: {
      title: d("nav.developers.title"),
      shortTitle: "Developers",
      image: "developers-diagram",
      items: [
        {
          title: d("nav.developers.documentation"),
          description: d("nav.developers.documentation_desc"),
          href: "https://docs.plexicus.com",
          icon: /* @__PURE__ */ i.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ i.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                /* @__PURE__ */ i.jsx("polyline", { points: "14 2 14 8 20 8" }),
                /* @__PURE__ */ i.jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
                /* @__PURE__ */ i.jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
                /* @__PURE__ */ i.jsx("polyline", { points: "10 9 9 9 8 9" })
              ]
            }
          )
        },
        {
          title: d("nav.developers.api_references"),
          description: d("nav.developers.api_references_desc"),
          href: "https://docs.plexicus.com/api",
          icon: /* @__PURE__ */ i.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ i.jsx("path", { d: "m18 16 4-4-4-4" }),
                /* @__PURE__ */ i.jsx("path", { d: "m6 8-4 4 4 4" }),
                /* @__PURE__ */ i.jsx("path", { d: "m14.5 4-5 16" })
              ]
            }
          )
        },
        {
          title: d("nav.developers.github_apps"),
          description: d("nav.developers.github_apps_desc"),
          href: "https://github.com/apps/plexicus",
          icon: /* @__PURE__ */ i.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ i.jsx("path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }),
                /* @__PURE__ */ i.jsx("path", { d: "M9 18c-4.51 2-5-2-7-2" })
              ]
            }
          )
        },
        {
          title: d("nav.developers.plexalyzer_action"),
          description: d("nav.developers.plexalyzer_action_desc"),
          href: "https://github.com/marketplace/actions/plexicus-runner-action",
          icon: /* @__PURE__ */ i.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: /* @__PURE__ */ i.jsx("path", { d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" })
            }
          )
        }
      ]
    },
    resources: {
      title: d("nav.resources.title"),
      shortTitle: d("nav.resources.title"),
      image: "resources-diagram",
      items: [
        {
          title: d("nav.resources.blog"),
          description: d("nav.resources.blog_desc"),
          href: A,
          icon: /* @__PURE__ */ i.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ i.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                /* @__PURE__ */ i.jsx("path", { d: "M14 3v5h5M16 13H8M16 17H8M10 9H8" })
              ]
            }
          )
        },
        {
          title: d("nav.resources.youtube_channel"),
          description: d("nav.resources.youtube_channel_desc"),
          href: "https://youtube.com/@plexicus",
          icon: /* @__PURE__ */ i.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ i.jsx("path", { d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" }),
                /* @__PURE__ */ i.jsx("path", { d: "m10 15 5-3-5-3z" })
              ]
            }
          )
        },
        {
          title: d("nav.resources.branding_assets"),
          description: d("nav.resources.branding_assets_desc"),
          href: `${k}${s}branding-assets`,
          icon: /* @__PURE__ */ i.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ i.jsx("path", { d: "M12 19c.5 0 1-.1 1.4-.4.8-.4 1.4-1.1 1.6-2 .3-1.4-.5-2.8-1.9-3.2-.3-.1-.6-.1-.9-.1-.5 0-1 .1-1.4.4-.8.4-1.4 1.1-1.6 2-.3 1.4.5 2.8 1.9 3.2.3.1.6.1.9.1z" }),
                /* @__PURE__ */ i.jsx("path", { d: "m14.5 12.5 2.7-2.7c1.2-1.2 1.8-2.7 1.8-4.3 0-3.1-2.5-5.5-5.5-5.5-1.6 0-3.1.6-4.3 1.8L6.5 4.5" }),
                /* @__PURE__ */ i.jsx("path", { d: "m4.5 6.5 2.7-2.7c.3-.3.6-.4 1-.4.8 0 1.5.7 1.5 0 .4-.1.7-.4 1 0L6.5 8.5" }),
                /* @__PURE__ */ i.jsx("path", { d: "m3.5 13.5 5-5" }),
                /* @__PURE__ */ i.jsx("path", { d: "m5 19 5-5" }),
                /* @__PURE__ */ i.jsx("path", { d: "m17.5 6.5-5 5" }),
                /* @__PURE__ */ i.jsx("path", { d: "m16 17-5-5" })
              ]
            }
          )
        },
        {
          title: d("nav.resources.changelogs"),
          description: d("nav.resources.changelogs_desc"),
          href: "https://plexicus.canny.io/changelog",
          icon: /* @__PURE__ */ i.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ i.jsx("path", { d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" }),
                /* @__PURE__ */ i.jsx("path", { d: "m9 12 2 2 4-4" })
              ]
            }
          )
        },
        {
          title: d("nav.resources.feature_requests"),
          description: d("nav.resources.feature_requests_desc"),
          href: "https://plexicus.canny.io/feature-requests",
          icon: /* @__PURE__ */ i.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: /* @__PURE__ */ i.jsx("path", { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" })
            }
          )
        },
        {
          title: d("nav.resources.integrations"),
          description: d("nav.resources.integrations_desc"),
          href: `${k}${s}integrations`,
          icon: /* @__PURE__ */ i.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ i.jsx("path", { d: "M9 12l2 2 4-4" }),
                /* @__PURE__ */ i.jsx("path", { d: "M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" }),
                /* @__PURE__ */ i.jsx("path", { d: "M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" }),
                /* @__PURE__ */ i.jsx("path", { d: "M12 21c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" }),
                /* @__PURE__ */ i.jsx("path", { d: "M12 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" })
              ]
            }
          )
        },
        {
          title: d("nav.resources.comparison_overview"),
          description: d("nav.resources.comparison_overview_desc"),
          href: `${k}${s}comparison/overview`,
          icon: /* @__PURE__ */ i.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ i.jsx("path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" }),
                /* @__PURE__ */ i.jsx("circle", { cx: "12", cy: "12", r: "3" })
              ]
            }
          )
        },
        {
          title: d("nav.resources.support"),
          description: d("nav.resources.support_desc"),
          href: `${k}${s}support`,
          icon: /* @__PURE__ */ i.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              className: "text-primary",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ i.jsx("path", { d: "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z" }),
                /* @__PURE__ */ i.jsx("path", { d: "M21 16v2a4 4 0 0 1-4 4h-5" })
              ]
            }
          )
        }
      ]
    }
  };
  return /* @__PURE__ */ i.jsxs(
    "header",
    {
      className: "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 py-1",
      style: {
        background: m ? "#8220ff" : "transparent",
        boxShadow: m ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
        transition: "all 0.3s ease-in-out",
        minHeight: "64px"
      },
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: "container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl", children: [
          /* @__PURE__ */ i.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ i.jsx(
            Y,
            {
              href: `${k}${s}`,
              className: "flex items-center gap-2 overflow-visible",
              "aria-label": "Plexicus Home",
              children: /* @__PURE__ */ i.jsx("div", { className: "relative w-auto h-14 flex items-center", children: /* @__PURE__ */ i.jsx(
                "img",
                {
                  src: "/images/plexicus-logo-white.png",
                  alt: "Plexicus Logo",
                  className: $t("object-contain max-h-full max-w-none w-28", m ? "md:w-40" : "md:w-42"),
                  style: {
                    // maxWidth: isScrolled ? "180px" : "220px",
                    transition: "max-width 0.3s ease-in-out"
                  }
                }
              ) })
            }
          ) }),
          /* @__PURE__ */ i.jsxs("nav", { className: "hidden xl:flex md:gap-4 lg:gap-6", "aria-label": "Main Navigation", children: [
            Object.entries(R).filter(([v]) => v === "products").map(([v, $]) => /* @__PURE__ */ i.jsx(
              "div",
              {
                className: "relative group",
                onMouseEnter: () => p(v),
                onMouseLeave: _,
                children: /* @__PURE__ */ i.jsxs(
                  "button",
                  {
                    className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 px-2 flex items-center whitespace-nowrap",
                    "aria-expanded": l === v,
                    "aria-haspopup": "true",
                    onClick: () => E(v),
                    children: [
                      /* @__PURE__ */ i.jsx("span", { className: "hidden xl:inline", children: $.title }),
                      /* @__PURE__ */ i.jsx("span", { className: "xl:hidden", children: $.shortTitle }),
                      /* @__PURE__ */ i.jsx(
                        "svg",
                        {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "16",
                          height: "16",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          className: `ml-1 transition-transform duration-200 ${l === v ? "transform rotate-180" : ""}`,
                          "aria-hidden": "true",
                          children: /* @__PURE__ */ i.jsx("path", { d: "m6 9 6 6 6-6" })
                        }
                      )
                    ]
                  }
                )
              },
              v
            )),
            /* @__PURE__ */ i.jsx(
              Y,
              {
                href: `${k}${s}pricing`,
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 whitespace-nowrap",
                children: d("nav.pricing")
              }
            ),
            Object.entries(R).filter(([v]) => v === "solutions" || v === "developers" || v === "resources").map(([v, $]) => /* @__PURE__ */ i.jsx(
              "div",
              {
                className: "relative group",
                onMouseEnter: () => p(v),
                onMouseLeave: _,
                children: /* @__PURE__ */ i.jsxs(
                  "button",
                  {
                    className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 px-2 flex items-center whitespace-nowrap",
                    "aria-expanded": l === v,
                    "aria-haspopup": "true",
                    onClick: () => E(v),
                    children: [
                      /* @__PURE__ */ i.jsx("span", { className: "hidden xl:inline", children: $.title }),
                      /* @__PURE__ */ i.jsx("span", { className: "xl:hidden", children: $.shortTitle }),
                      /* @__PURE__ */ i.jsx(
                        "svg",
                        {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "16",
                          height: "16",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          className: `ml-1 transition-transform duration-200 ${l === v ? "transform rotate-180" : ""}`,
                          "aria-hidden": "true",
                          children: /* @__PURE__ */ i.jsx("path", { d: "m6 9 6 6 6-6" })
                        }
                      )
                    ]
                  }
                )
              },
              v
            )),
            /* @__PURE__ */ i.jsx(
              Y,
              {
                href: `${k}${s}contact`,
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 whitespace-nowrap",
                children: d("nav.contact")
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "flex flex-end", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ i.jsx(
                Y,
                {
                  href: `${wt}/login`,
                  className: "text-sm font-medium text-white hover:text-white/80 transition-colors whitespace-nowrap",
                  children: d("nav.login")
                }
              ),
              /* @__PURE__ */ i.jsx(Y, { href: `${wt}/register`, children: /* @__PURE__ */ i.jsx(Fe, { className: "bg-white text-[#8220ff] font-medium px-4 lg:px-6 py-2 rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap", children: d("nav.get_started") }) })
            ] }),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "flex xl:hidden p-2 rounded-md hover:bg-white/10 transition-colors text-white",
                onClick: () => a(!n),
                "aria-label": n ? "Close menu" : "Open menu",
                "aria-expanded": n,
                children: n ? /* @__PURE__ */ i.jsxs(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "h-6 w-6",
                    "aria-hidden": "true",
                    children: [
                      /* @__PURE__ */ i.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                      /* @__PURE__ */ i.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                    ]
                  }
                ) : /* @__PURE__ */ i.jsxs(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "h-6 w-6",
                    "aria-hidden": "true",
                    children: [
                      /* @__PURE__ */ i.jsx("line", { x1: "4", x2: "20", y1: "12", y2: "12" }),
                      /* @__PURE__ */ i.jsx("line", { x1: "4", x2: "20", y1: "6", y2: "6" }),
                      /* @__PURE__ */ i.jsx("line", { x1: "4", x2: "20", y1: "18", y2: "18" })
                    ]
                  }
                )
              }
            )
          ] })
        ] }),
        l && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "fixed inset-0 bg-black/20 z-30",
              onClick: () => c(null),
              "aria-hidden": "true",
              style: { top: "64px" }
            }
          ),
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "absolute left-0 right-0 top-16 z-40 bg-white shadow-xl border-t border-gray-100 transition-all duration-300 transform",
              onMouseEnter: () => p(l),
              onMouseLeave: _,
              role: "menu",
              "aria-labelledby": `menu-button-${l}`,
              children: /* @__PURE__ */ i.jsx("div", { className: "container mx-auto py-8 px-4 md:px-6 max-w-7xl", children: /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col md:flex-row", children: [
                /* @__PURE__ */ i.jsxs("div", { className: "w-full md:w-1/3 pr-0 md:pr-8 mb-6 md:mb-0 flex flex-col", children: [
                  /* @__PURE__ */ i.jsx("div", { className: "relative h-36 md:h-40 w-full rounded-lg overflow-hidden bg-white border border-gray-100 mb-4", children: /* @__PURE__ */ i.jsxs("div", { className: "absolute inset-0 flex items-center justify-center", children: [
                    l === "products" && /* @__PURE__ */ i.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ i.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ i.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ i.jsx(
                            "rect",
                            {
                              x: "40",
                              y: "30",
                              width: "320",
                              height: "240",
                              rx: "12",
                              fill: "white",
                              filter: "url(#shadowEffect)"
                            }
                          ),
                          /* @__PURE__ */ i.jsx("rect", { x: "40", y: "30", width: "320", height: "40", rx: "12", fill: "#8220ff", fillOpacity: "0.9" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "65", cy: "50", r: "8", fill: "white", fillOpacity: "0.6" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "90", cy: "50", r: "8", fill: "white", fillOpacity: "0.6" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "115", cy: "50", r: "8", fill: "white", fillOpacity: "0.6" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "40", y: "70", width: "80", height: "200", fill: "#f5f5f7" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "55", y: "90", width: "50", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.7" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "55", y: "110", width: "40", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "55", y: "130", width: "45", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "55", y: "150", width: "35", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "55", y: "170", width: "50", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "140", y: "90", width: "200", height: "70", rx: "8", fill: "#8220ff", fillOpacity: "0.1" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "155", y: "105", width: "170", height: "40", rx: "4", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "175", cy: "125", r: "15", fill: "#8220ff", fillOpacity: "0.8" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "200", y: "115", width: "110", height: "8", rx: "4", fill: "white" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "200", y: "130", width: "80", height: "6", rx: "3", fill: "white", fillOpacity: "0.7" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "140", y: "180", width: "95", height: "80", rx: "8", fill: "#f0f0f5" }),
                          /* @__PURE__ */ i.jsx(
                            "path",
                            {
                              d: "M150 240 L170 220 L190 230 L210 200",
                              stroke: "#8220ff",
                              strokeWidth: "3",
                              strokeLinecap: "round"
                            }
                          ),
                          /* @__PURE__ */ i.jsx("circle", { cx: "170", cy: "220", r: "4", fill: "#8220ff" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "190", cy: "230", r: "4", fill: "#8220ff" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "210", cy: "200", r: "4", fill: "#8220ff" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "245", y: "180", width: "95", height: "80", rx: "8", fill: "#f0f0f5" }),
                          /* @__PURE__ */ i.jsx(
                            "circle",
                            {
                              cx: "293",
                              cy: "220",
                              r: "30",
                              fill: "transparent",
                              stroke: "#8220ff",
                              strokeWidth: "8",
                              strokeDasharray: "120 180"
                            }
                          ),
                          /* @__PURE__ */ i.jsx("circle", { cx: "293", cy: "220", r: "30", fill: "transparent", stroke: "#e0e0e5", strokeWidth: "8" }),
                          /* @__PURE__ */ i.jsx("text", { x: "283", y: "225", fontFamily: "Arial", fontSize: "12", fill: "#8220ff", fontWeight: "bold", children: "75%" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "320", cy: "50", r: "12", fill: "white", fillOpacity: "0.2" }),
                          /* @__PURE__ */ i.jsx("path", { d: "M314 50 L320 56 L326 50", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "30", cy: "30", r: "5", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "350", cy: "280", r: "7", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "370", cy: "50", r: "4", fill: "#8220ff", fillOpacity: "0.4" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "20", cy: "250", r: "6", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ i.jsx(
                            "path",
                            {
                              d: "M15 100 C30 120, 20 150, 35 160",
                              stroke: "#8220ff",
                              strokeWidth: "1.5",
                              strokeDasharray: "4 4"
                            }
                          ),
                          /* @__PURE__ */ i.jsx(
                            "path",
                            {
                              d: "M370 120 C350 140, 360 170, 380 190",
                              stroke: "#8220ff",
                              strokeWidth: "1.5",
                              strokeDasharray: "4 4"
                            }
                          ),
                          /* @__PURE__ */ i.jsx("defs", { children: /* @__PURE__ */ i.jsxs(
                            "filter",
                            {
                              id: "shadowEffect",
                              x: "0",
                              y: "0",
                              width: "400",
                              height: "300",
                              filterUnits: "userSpaceOnUse",
                              colorInterpolationFilters: "sRGB",
                              children: [
                                /* @__PURE__ */ i.jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                                /* @__PURE__ */ i.jsx(
                                  "feColorMatrix",
                                  {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  }
                                ),
                                /* @__PURE__ */ i.jsx("feOffset", { dy: "4" }),
                                /* @__PURE__ */ i.jsx("feGaussianBlur", { stdDeviation: "6" }),
                                /* @__PURE__ */ i.jsx(
                                  "feColorMatrix",
                                  {
                                    type: "matrix",
                                    values: "0 0 0 0 0.51 0 0 0 0 0.125 0 0 0 0 1 0 0 0 0.15 0"
                                  }
                                ),
                                /* @__PURE__ */ i.jsx("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                                /* @__PURE__ */ i.jsx("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })
                              ]
                            }
                          ) })
                        ]
                      }
                    ) }),
                    l === "solutions" && /* @__PURE__ */ i.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ i.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ i.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ i.jsx(
                            "circle",
                            {
                              cx: "200",
                              cy: "150",
                              r: "40",
                              fill: "#8220ff",
                              fillOpacity: "0.1",
                              stroke: "#8220ff",
                              strokeWidth: "2"
                            }
                          ),
                          /* @__PURE__ */ i.jsx("circle", { cx: "100", cy: "150", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "300", cy: "150", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "200", cy: "70", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "200", cy: "230", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ i.jsx("path", { d: "M125 150 L160 150", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ i.jsx("path", { d: "M240 150 L275 150", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ i.jsx("path", { d: "M200 95 L200 130", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ i.jsx("path", { d: "M200 170 L200 205", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ i.jsx("polygon", { points: "158,145 158,155 168,150", fill: "#8220ff" }),
                          /* @__PURE__ */ i.jsx("polygon", { points: "242,145 242,155 232,150", fill: "#8220ff" }),
                          /* @__PURE__ */ i.jsx("polygon", { points: "195,128 205,128 200,138", fill: "#8220ff" }),
                          /* @__PURE__ */ i.jsx("polygon", { points: "195,172 205,172 200,162", fill: "#8220ff" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "100", cy: "150", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "300", cy: "150", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "200", cy: "70", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "200", cy: "230", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "200", cy: "150", r: "20", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "200", cy: "150", r: "10", fill: "#8220ff", fillOpacity: "0.4" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "150", cy: "100", r: "5", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "250", cy: "100", r: "5", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "150", cy: "200", r: "5", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "250", cy: "200", r: "5", fill: "#8220ff", fillOpacity: "0.2" })
                        ]
                      }
                    ) }),
                    l === "resources" && /* @__PURE__ */ i.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ i.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ i.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ i.jsxs("g", { filter: "url(#resourcesShadow)", children: [
                            /* @__PURE__ */ i.jsx("rect", { x: "140", y: "80", width: "120", height: "140", rx: "4", fill: "url(#bookGradient)" }),
                            /* @__PURE__ */ i.jsx(
                              "rect",
                              {
                                x: "140",
                                y: "80",
                                width: "120",
                                height: "140",
                                rx: "4",
                                stroke: "#8220ff",
                                strokeWidth: "2",
                                fill: "none"
                              }
                            ),
                            /* @__PURE__ */ i.jsx("path", { d: "M160 100 L240 100", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ i.jsx("path", { d: "M160 120 L240 120", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ i.jsx("path", { d: "M160 140 L240 140", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ i.jsx("path", { d: "M160 160 L240 160", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ i.jsx("path", { d: "M160 180 L240 180", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ i.jsx("path", { d: "M230 80 L230 110 L220 100 L210 110 L210 80", fill: "#8220ff", fillOpacity: "0.3" }),
                            /* @__PURE__ */ i.jsxs("g", { transform: "translate(-10, -10) rotate(-5)", children: [
                              /* @__PURE__ */ i.jsx(
                                "rect",
                                {
                                  x: "80",
                                  y: "120",
                                  width: "80",
                                  height: "100",
                                  rx: "4",
                                  fill: "white",
                                  stroke: "#8220ff",
                                  strokeWidth: "1.5"
                                }
                              ),
                              /* @__PURE__ */ i.jsx("path", { d: "M90 135 L150 135", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" }),
                              /* @__PURE__ */ i.jsx("path", { d: "M90 150 L150 150", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" }),
                              /* @__PURE__ */ i.jsx("path", { d: "M90 165 L150 165", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" }),
                              /* @__PURE__ */ i.jsx("path", { d: "M90 180 L120 180", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" })
                            ] }),
                            /* @__PURE__ */ i.jsxs("g", { transform: "translate(10, -10) rotate(5)", children: [
                              /* @__PURE__ */ i.jsx(
                                "rect",
                                {
                                  x: "240",
                                  y: "120",
                                  width: "80",
                                  height: "60",
                                  rx: "4",
                                  fill: "#f0f0f5",
                                  stroke: "#8220ff",
                                  strokeWidth: "1.5"
                                }
                              ),
                              /* @__PURE__ */ i.jsx("polygon", { points: "270,140 290,150 270,160", fill: "#8220ff" }),
                              /* @__PURE__ */ i.jsx(
                                "rect",
                                {
                                  x: "245",
                                  y: "125",
                                  width: "70",
                                  height: "50",
                                  rx: "2",
                                  stroke: "#8220ff",
                                  strokeWidth: "1",
                                  fill: "none"
                                }
                              )
                            ] })
                          ] }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "200", cy: "50", r: "15", fill: "#8220ff", fillOpacity: "0.1" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "200", cy: "50", r: "10", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "200", cy: "50", r: "5", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "150", cy: "60", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "250", cy: "60", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "120", cy: "150", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "280", cy: "150", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ i.jsxs("defs", { children: [
                            /* @__PURE__ */ i.jsxs(
                              "linearGradient",
                              {
                                id: "bookGradient",
                                x1: "140",
                                y1: "80",
                                x2: "260",
                                y2: "220",
                                gradientUnits: "userSpaceOnUse",
                                children: [
                                  /* @__PURE__ */ i.jsx("stop", { offset: "0%", stopColor: "#f0f0f5" }),
                                  /* @__PURE__ */ i.jsx("stop", { offset: "100%", stopColor: "#ffffff" })
                                ]
                              }
                            ),
                            /* @__PURE__ */ i.jsx("filter", { id: "resourcesShadow", x: "-10%", y: "-10%", width: "120%", height: "120%", children: /* @__PURE__ */ i.jsx("feDropShadow", { dx: "2", dy: "4", stdDeviation: "4", floodColor: "#8220ff", floodOpacity: "0.2" }) })
                          ] })
                        ]
                      }
                    ) }),
                    l === "developers" && /* @__PURE__ */ i.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ i.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ i.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "20", y: "20", width: "280", height: "200", rx: "8", fill: "#1E1E1E" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "20", y: "20", width: "280", height: "30", rx: "8", fill: "#333333" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "40", cy: "35", r: "6", fill: "#FF5F56" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "60", cy: "35", r: "6", fill: "#FFBD2E" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "80", cy: "35", r: "6", fill: "#27C93F" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "40", y: "70", width: "120", height: "10", rx: "2", fill: "#9CDCFE", fillOpacity: "0.7" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "40", y: "90", width: "180", height: "10", rx: "2", fill: "#CE9178", fillOpacity: "0.7" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "60", y: "110", width: "200", height: "10", rx: "2", fill: "#6A9955", fillOpacity: "0.7" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "60", y: "130", width: "160", height: "10", rx: "2", fill: "#569CD6", fillOpacity: "0.7" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "40", y: "150", width: "140", height: "10", rx: "2", fill: "#DCDCAA", fillOpacity: "0.7" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "60", y: "170", width: "180", height: "10", rx: "2", fill: "#4EC9B0", fillOpacity: "0.7" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "40", y: "190", width: "160", height: "10", rx: "2", fill: "#C586C0", fillOpacity: "0.7" }),
                          /* @__PURE__ */ i.jsx("text", { x: "30", y: "75", fontSize: "10", fill: "#858585", children: "1" }),
                          /* @__PURE__ */ i.jsx("text", { x: "30", y: "95", fontSize: "10", fill: "#858585", children: "2" }),
                          /* @__PURE__ */ i.jsx("text", { x: "30", y: "115", fontSize: "10", fill: "#858585", children: "3" }),
                          /* @__PURE__ */ i.jsx("text", { x: "30", y: "135", fontSize: "10", fill: "#858585", children: "4" }),
                          /* @__PURE__ */ i.jsx("text", { x: "30", y: "155", fontSize: "10", fill: "#858585", children: "5" }),
                          /* @__PURE__ */ i.jsx("text", { x: "30", y: "175", fontSize: "10", fill: "#858585", children: "6" }),
                          /* @__PURE__ */ i.jsx("text", { x: "30", y: "195", fontSize: "10", fill: "#858585", children: "7" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "80", y: "130", width: "310", height: "130", rx: "8", fill: "#1E1E1E", filter: "url(#shadow)" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "80", y: "130", width: "310", height: "25", rx: "8", fill: "#333333" }),
                          /* @__PURE__ */ i.jsx("text", { x: "235", y: "147", fontSize: "12", fill: "#FFFFFF", textAnchor: "middle", children: "Terminal" }),
                          /* @__PURE__ */ i.jsx("text", { x: "90", y: "170", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "$ git clone https://github.com/plexicus/plexicus-sdk.git" }),
                          /* @__PURE__ */ i.jsx("text", { x: "90", y: "185", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "Cloning into 'plexicus-sdk'..." }),
                          /* @__PURE__ */ i.jsx("text", { x: "90", y: "200", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "remote: Counting objects: 100% (1234/1234)" }),
                          /* @__PURE__ */ i.jsx("text", { x: "90", y: "215", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "$ cd plexicus-sdk && npm install" }),
                          /* @__PURE__ */ i.jsx("text", { x: "90", y: "230", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "added 1024 packages in 4.2s" }),
                          /* @__PURE__ */ i.jsx("text", { x: "90", y: "245", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "$ npm run dev" }),
                          /* @__PURE__ */ i.jsxs("g", { transform: "translate(320, 240) scale(0.8)", children: [
                            /* @__PURE__ */ i.jsx("circle", { cx: "0", cy: "0", r: "25", fill: "white" }),
                            /* @__PURE__ */ i.jsx(
                              "path",
                              {
                                d: "M0 -20c-11.046 0-20 8.954-20 20 0 8.837 5.732 16.338 13.678 18.98 1 .184 1.365-.434 1.365-.964 0-.476-.018-1.733-.027-3.4-5.564 1.21-6.736-2.68-6.736-2.68-.91-2.31-2.22-2.924-2.22-2.924-1.815-1.24.137-1.215.137-1.215 2.006.14 3.06 2.06 3.06 2.06 1.783 3.057 4.675 2.174 5.815 1.663.18-1.29.697-2.174 1.268-2.674-4.442-.505-9.112-2.22-9.112-9.87 0-2.18.78-3.964 2.06-5.36-.207-.505-.893-2.54.195-5.29 0 0 1.68-.538 5.5 2.05 1.595-.443 3.305-.665 5.005-.673 1.7.008 3.41.23 5.005.673 3.82-2.588 5.495-2.05 5.495-2.05 1.09 2.75.405 4.785.198 5.29 1.28 1.396 2.055 3.18 2.055 5.36 0 7.67-4.677 9.36-9.13 9.855.718.62 1.358 1.842 1.358 3.712 0 2.68-.024 4.84-.024 5.5 0 .535.36 1.16 1.375.964C14.275 16.33 20 8.83 20 0 20-11.046 11.046-20 0-20z",
                                fill: "#1B1F23",
                                transform: "translate(0, 0)"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ i.jsx("defs", { children: /* @__PURE__ */ i.jsx("filter", { id: "shadow", x: "0", y: "0", width: "400", height: "300", filterUnits: "userSpaceOnUse", children: /* @__PURE__ */ i.jsx("feDropShadow", { dx: "2", dy: "4", stdDeviation: "3", floodColor: "#000000", floodOpacity: "0.3" }) }) })
                        ]
                      }
                    ) })
                  ] }) }),
                  /* @__PURE__ */ i.jsxs("div", { className: "bg-gray-50 rounded-lg p-4", children: [
                    /* @__PURE__ */ i.jsx("h3", { className: "text-xl font-bold text-[#8220ff]", children: R[l].title }),
                    /* @__PURE__ */ i.jsx("p", { className: "text-gray-700", children: d(l === "products" ? "nav.product.explore" : l === "solutions" ? "nav.solutions.explore" : "nav.resources.explore") })
                  ] })
                ] }),
                /* @__PURE__ */ i.jsx("div", { className: "w-full md:w-2/3", children: /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: R[l].items.filter((v) => l !== "resources" || !v.title.startsWith("vs ")).map((v, $) => /* @__PURE__ */ i.jsxs(
                  Y,
                  {
                    href: v.href,
                    className: "flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors group",
                    onClick: () => c(null),
                    children: [
                      /* @__PURE__ */ i.jsx("div", { className: "w-12 h-12 bg-[#8220ff]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#8220ff]/20 transition-colors", children: Me.cloneElement(v.icon, { width: 16, height: 16 }) }),
                      /* @__PURE__ */ i.jsxs("div", { className: "flex-1", children: [
                        /* @__PURE__ */ i.jsx("h4", { className: "font-semibold text-gray-900 group-hover:text-[#8220ff] transition-colors", children: v.title }),
                        /* @__PURE__ */ i.jsx("p", { className: "text-sm text-gray-600 mt-1", children: v.description })
                      ] })
                    ]
                  },
                  $
                )) }) })
              ] }) })
            }
          )
        ] }),
        n && /* @__PURE__ */ i.jsx("div", { className: "fixed inset-0 bg-black/20 z-40 xl:hidden", onClick: () => a(!1) }),
        /* @__PURE__ */ i.jsx(
          "div",
          {
            className: `xl:hidden fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out ${n ? "translate-x-0" : "translate-x-full"}`,
            style: { top: "64px", height: "calc(100vh - 64px)", overflow: "auto" },
            children: /* @__PURE__ */ i.jsx("div", { className: "overflow-y-auto h-full p-4 pb-20", children: /* @__PURE__ */ i.jsxs("div", { className: "space-y-4", children: [
              Object.entries(R).map(([v, $]) => /* @__PURE__ */ i.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ i.jsx("h3", { className: "font-semibold", children: $.title }),
                /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-1 gap-2", children: $.items.map((T, x) => /* @__PURE__ */ i.jsxs(
                  Y,
                  {
                    href: T.href,
                    className: "flex items-center p-2 rounded-md bg-gray-50 hover:bg-gray-100",
                    onClick: () => a(!1),
                    children: [
                      /* @__PURE__ */ i.jsx("div", { className: "w-8 h-8 bg-primary/10 rounded-md mr-2 flex items-center justify-center", children: Me.cloneElement(T.icon, { width: 16, height: 16 }) }),
                      /* @__PURE__ */ i.jsx("span", { className: "text-sm", children: T.title })
                    ]
                  },
                  x
                )) })
              ] }, v)),
              /* @__PURE__ */ i.jsx(
                Y,
                {
                  href: `${k}${s}pricing`,
                  className: "block py-2 text-sm font-medium",
                  onClick: () => a(!1),
                  children: d("nav.pricing")
                }
              ),
              /* @__PURE__ */ i.jsx(
                Y,
                {
                  href: `${k}${s}contact`,
                  className: "block py-2 text-sm font-medium",
                  onClick: () => a(!1),
                  children: d("nav.contact")
                }
              ),
              /* @__PURE__ */ i.jsx("div", { className: "pt-4 border-t border-gray-100", children: /* @__PURE__ */ i.jsx(Fe, { className: "w-full bg-gradient-primary", onClick: () => a(!1), children: "Get Started" }) })
            ] }) })
          }
        )
      ]
    }
  );
};
function hr() {
  var t;
  const o = (s) => {
    localStorage.setItem("scrollPosition", String(window == null ? void 0 : window.scrollY));
    const r = window.location.pathname;
    let a = r.match(/^\/([a-z]{2})\//) ? r.replace(/^\/[a-z]{2}\//, `/${s}/`) : `/${s}${r}`;
    a = a.startsWith("/en/") ? a.replace(/^\/en/, "") : a, console.log({ newPath: a }), window.location.href = a;
  };
  re(() => {
    const s = localStorage.getItem("scrollPosition");
    s && (window.scrollTo(0, parseInt(s)), localStorage.removeItem("scrollPosition"));
  }, []);
  const e = ((t = window.location.pathname.match(/^\/([a-z]{2})\//)) == null ? void 0 : t[1]) || "en";
  return /* @__PURE__ */ i.jsx(i.Fragment, { children: /* @__PURE__ */ i.jsxs("div", { className: "relative inline-flex items-center w-[150px]", children: [
    /* @__PURE__ */ i.jsx(Ut, { className: "absolute  text-muted-foreground pointer-events-none", style: { left: 1, paddingLeft: 6, width: 22 } }),
    /* @__PURE__ */ i.jsxs(
      "select",
      {
        defaultValue: e,
        className: "appearance-none w-full  pr-6 py-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring dark:bg-gray-900 dark:text-white dark:border-gray-700",
        style: { paddingLeft: 30 },
        onChange: (s) => o(s.target.value),
        children: [
          /* @__PURE__ */ i.jsx("option", { value: "en", children: "English" }),
          /* @__PURE__ */ i.jsx("option", { value: "es", children: "Spanish" }),
          /* @__PURE__ */ i.jsx("option", { value: "it", children: "Italian" })
        ]
      }
    ),
    /* @__PURE__ */ i.jsx(
      "svg",
      {
        className: "pointer-events-none absolute  top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        style: { right: 3, marginRight: 4 },
        children: /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" })
      }
    )
  ] }) });
}
function xr({ lang: o, fullSiteUrl: e = "http://localhost:8000", fullBlogUrl: t = "http://localhost:9000", showLanguageSelector: s = !0 }) {
  const [r, n] = ce("/"), { t: a, i18n: l } = At();
  re(() => {
    l.changeLanguage(o), n(o !== "en" ? `/${o}/` : "/");
  }, []);
  const c = Le(e, Ft), u = Le(t, Bt), d = [
    {
      alt: a("footer.social_media.twitter"),
      link: "https://x.com/plexicus_ai/",
      icon: /* @__PURE__ */ i.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 24 24", children: /* @__PURE__ */ i.jsxs("g", { fill: "none", "fill-rule": "evenodd", children: [
        /* @__PURE__ */ i.jsx("path", { d: "m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" }),
        /* @__PURE__ */ i.jsx("path", { fill: "currentColor", d: "M19.753 4.659a1 1 0 0 0-1.506-1.317l-5.11 5.84L8.8 3.4A1 1 0 0 0 8 3H4a1 1 0 0 0-.8 1.6l6.437 8.582l-5.39 6.16a1 1 0 0 0 1.506 1.317l5.11-5.841L15.2 20.6a1 1 0 0 0 .8.4h4a1 1 0 0 0 .8-1.6l-6.437-8.582l5.39-6.16ZM16.5 19L6 5h1.5L18 19z" })
      ] }) })
    },
    {
      alt: a("footer.social_media.linkedin"),
      link: "https://www.linkedin.com/company/plexicus/",
      icon: /* @__PURE__ */ i.jsx("svg", { className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ i.jsx(
        "path",
        {
          fillRule: "evenodd",
          d: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
          clipRule: "evenodd"
        }
      ) })
    },
    {
      alt: a("footer.social_media.github"),
      link: "https://github.com/apps/plexicus",
      icon: /* @__PURE__ */ i.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 64 64", children: /* @__PURE__ */ i.jsx("path", { fill: "currentColor", d: "M32 1.8c-17 0-31 13.8-31 31C1 46.4 9.9 58 22.3 62.2c1.6.3 2.1-.7 2.1-1.4s0-2.7-.1-5.4c-8.6 2-10.4-4.2-10.4-4.2c-1.4-3.5-3.5-4.5-3.5-4.5c-2.8-2 .1-2 .1-2c3.1.1 4.8 3.2 4.8 3.2c2.7 4.8 7.3 3.4 9 2.5c.3-2 1.1-3.4 2-4.2c-6.8-.7-14.1-3.4-14.1-15.2c0-3.4 1.3-6.1 3.2-8.2c-.3-.7-1.4-3.9.3-8.2c0 0 2.7-.8 8.6 3.2c2.5-.7 5.1-1.1 7.8-1.1s5.4.3 7.8 1.1c5.9-3.9 8.5-3.2 8.5-3.2c1.7 4.2.7 7.5.3 8.2c2 2.1 3.2 4.9 3.2 8.2c0 11.8-7.3 14.5-14.1 15.2c1.1 1 2.1 3 2.1 5.8c0 4.2-.1 7.5-.1 8.5c0 .8.6 1.7 2.1 1.4C54.1 57.8 63 46.3 63 32.6c-.1-17-14-30.8-31-30.8" }) })
    },
    {
      alt: a("footer.social_media.instagram"),
      link: "https://www.instagram.com/plexicus_ai/",
      icon: /* @__PURE__ */ i.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 64 64", children: [
        /* @__PURE__ */ i.jsx("path", { fill: "currentColor", d: "M62.9 19.2c-.1-3.2-.7-5.5-1.4-7.6S59.7 7.8 58 6.1s-3.4-2.7-5.4-3.5s-4.2-1.3-7.6-1.4C41.5 1 40.5 1 32 1s-9.4 0-12.8.1s-5.5.7-7.6 1.4s-3.8 1.9-5.5 3.6s-2.8 3.4-3.5 5.5c-.8 2-1.3 4.2-1.4 7.6S1 23.5 1 32s0 9.4.1 12.8s.7 5.5 1.4 7.6s1.8 3.8 3.5 5.5s3.5 2.8 5.5 3.5s4.2 1.3 7.6 1.4c3.4.2 4.3.2 12.8.2s9.4 0 12.8-.1s5.5-.7 7.6-1.4s3.8-1.8 5.5-3.5s2.8-3.5 3.5-5.5s1.3-4.2 1.4-7.6c.1-3.2.1-4.2.1-12.7s.2-9.6.1-13m-5.6 25.3c-.1 3-.7 4.6-1.1 5.8c-.6 1.4-1.3 2.5-2.4 3.5c-1.1 1.1-2.1 1.7-3.5 2.4c-1.1.4-2.7 1-5.8 1.1H32.1c-8.2 0-9.3 0-12.5-.1c-3-.1-4.6-.7-5.8-1.1c-1.4-.6-2.5-1.3-3.5-2.4c-1.1-1.1-1.7-2.1-2.4-3.5c-.4-1.1-1-2.7-1.1-5.8V32c0-8.3 0-9.3.1-12.5c.1-3 .7-4.6 1.1-5.8c.6-1.4 1.3-2.5 2.3-3.5c1.1-1.1 2.1-1.7 3.5-2.3c1.1-.4 2.7-1 5.8-1.1c3.2-.1 4.2-.1 12.5-.1s9.3 0 12.5.1c3 .1 4.6.7 5.8 1.1c1.4.6 2.5 1.3 3.5 2.3c1.1 1.1 1.7 2.1 2.4 3.5c.4 1.1 1 2.7 1.1 5.8c.1 3.2.1 4.2.1 12.5s-.1 9.3-.2 12.5" }),
        /* @__PURE__ */ i.jsx("path", { fill: "currentColor", d: "M32 16.1c-8.9 0-15.9 7.2-15.9 15.9c0 8.9 7.2 15.9 15.9 15.9s16-7 16-15.9s-7.1-15.9-16-15.9m0 26.3c-5.8 0-10.4-4.7-10.4-10.4S26.3 21.6 32 21.6c5.8 0 10.4 4.6 10.4 10.4S37.8 42.4 32 42.4" }),
        /* @__PURE__ */ i.jsx("circle", { cx: "48.7", cy: "15.4", r: "3.7", fill: "currentColor" })
      ] })
    }
  ], h = [
    {
      title: a("footer.sections.products.title"),
      items: [
        {
          link: `${c}${r}products/cnapp-platform`,
          text: a("footer.sections.products.links.platform_overview")
        },
        {
          link: `${c}${r}products/benefits`,
          text: a("footer.sections.products.links.benefits")
        },
        {
          link: `${c}${r}products/use-cases`,
          text: a("footer.sections.products.links.use_cases")
        },
        {
          link: `${c}${r}products/aspm`,
          text: a("footer.sections.products.links.aspm")
        },
        {
          link: `${c}${r}products/cspm`,
          text: a("footer.sections.products.links.cspm")
        },
        {
          link: `${c}${r}products/container`,
          text: a("footer.sections.products.links.container_security")
        },
        {
          link: `${c}${r}products/cwpp`,
          text: a("footer.sections.products.links.cwpp")
        },
        {
          link: `${c}${r}products/ciem`,
          text: a("footer.sections.products.links.ciem")
        }
      ]
    },
    {
      title: a("footer.sections.resources.title"),
      items: [
        {
          link: `${u}`,
          text: a("footer.sections.resources.links.blog")
        },
        {
          link: "https://docs.plexicus.com/",
          text: a("footer.sections.resources.links.documentation")
        },
        {
          text: a("nav.resources.branding_assets"),
          link: `${c}${r}branding-assets`
        },
        {
          text: a("nav.resources.changelogs"),
          link: "https://plexicus.canny.io/changelog"
        },
        {
          text: a("nav.resources.youtube_channel"),
          link: "https://youtube.com/@plexicus"
        },
        {
          text: a("nav.resources.feature_requests"),
          link: "https://plexicus.canny.io/feature-requests"
        },
        {
          text: a("nav.resources.integrations"),
          link: `${c}${r}integrations`
        },
        {
          text: a("nav.resources.comparison_overview"),
          link: `${c}${r}comparison/overview`
        }
      ]
    },
    {
      title: a("footer.sections.company.title"),
      items: [
        {
          link: `${c}${r}contact`,
          text: a("footer.sections.company.links.contact")
        },
        {
          link: `${c}${r}privacy`,
          text: a("footer.sections.company.links.privacy_policy")
        },
        {
          link: `${c}${r}pricing`,
          text: a("footer.sections.products.links.pricing")
        },
        {
          link: `${c}${r}support`,
          text: a("nav.resources.support")
        }
      ]
    }
  ];
  return /* @__PURE__ */ i.jsx("footer", { className: "bg-gray-50 border-t border-gray-200", children: /* @__PURE__ */ i.jsxs("div", { className: "container mx-auto px-4 md:px-6 pt-12 pb-6", children: [
    /* @__PURE__ */ i.jsxs("div", { id: "footer-grid", className: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ i.jsx(Y, { href: `${c}${r}`, className: "flex items-center gap-2 mb-4", children: /* @__PURE__ */ i.jsx("img", { src: "/images/plexicus-logo-color.png", alt: "Plexicus S.L.", className: "h-10 w-auto" }) }),
        /* @__PURE__ */ i.jsx("p", { className: "text-gray-600 mb-4 max-w-sm", children: a("footer.tagline") }),
        /* @__PURE__ */ i.jsx("div", { id: "social_links", className: "flex justify-start items-center gap-4", children: d.map(({ link: m, icon: g, alt: p }) => /* @__PURE__ */ i.jsxs(Y, { target: "_blank", href: m, className: "text-gray-400 hover:text-gray-500", children: [
          /* @__PURE__ */ i.jsx("span", { className: "sr-only", children: p }),
          g
        ] }, m)) }),
        s && /* @__PURE__ */ i.jsx("div", { className: "mt-6", children: /* @__PURE__ */ i.jsx(hr, {}) })
      ] }),
      h.map(({ title: m, items: g }) => /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("h3", { className: "text-sm font-semibold text-purple-700 tracking-wider uppercase mb-4", children: m }),
        /* @__PURE__ */ i.jsx("ul", { className: "space-y-2", children: g.map(({ link: p, text: b }) => /* @__PURE__ */ i.jsx("li", { children: /* @__PURE__ */ i.jsx(Y, { href: p, className: "text-gray-600 hover:text-purple-700", children: b }) }, b)) })
      ] }, m))
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "mt-8 pt-6 border-t border-gray-200", children: /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col md:flex-row md:justify-between md:items-center mb-3 gap-4", children: [
      /* @__PURE__ */ i.jsxs("p", { className: "text-gray-500 text-sm flex flex-col md:flex-row gap-3 ", children: [
        /* @__PURE__ */ i.jsx("div", { children: "© 2025 PLEXICUS, S.L" }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx(Y, { href: `${c}${r}privacy`, className: "underline hover:text-gray-700 ml-0 ", children: a("footer.policies.privacy_policy") }),
          " ",
          "·",
          " ",
          /* @__PURE__ */ i.jsx(Y, { href: `${c}${r}management`, className: "underline hover:text-gray-700", children: a("footer.policies.management_policy") }),
          " ",
          "·",
          " ",
          /* @__PURE__ */ i.jsx(Y, { href: `${c}${r}legal`, className: "underline hover:text-gray-700", children: a("footer.policies.legal_notice") })
        ] })
      ] }),
      /* @__PURE__ */ i.jsx("div", { children: /* @__PURE__ */ i.jsxs("div", { className: "inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full border border-green-200", children: [
        /* @__PURE__ */ i.jsx("svg", { className: "w-4 h-4 mr-1", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ i.jsx(
          "path",
          {
            d: "M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ) }),
        a("footer.readiness")
      ] }) })
    ] }) })
  ] }) });
}
const fr = "G-Y274FMXQNP", yr = ({ trackingId: o = fr, ...e }) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
  /* @__PURE__ */ i.jsx("script", { async: !0, src: `https://www.googletagmanager.com/gtag/js?id=${o}` }),
  /* @__PURE__ */ i.jsx(
    "script",
    {
      ...e,
      dangerouslySetInnerHTML: {
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', '${o}');
          `
      }
    }
  )
] }), wr = () => xe(
  (e, t, s, r) => {
    typeof window.gtag == "function" ? (window.gtag("event", e, {
      event_category: t,
      event_label: s,
      ...r !== void 0 && { value: r }
      // Conditionally add value
    }), console.log(`Google Analytics event sent: ${e}`, {
      event_category: t,
      event_label: s,
      value: r
    })) : console.warn("gtag is not defined. Google Analytics script might not be loaded.");
  },
  []
  // No dependencies, so the function reference is stable
);
export {
  xr as FooterPlexicus,
  yr as GoogleAnalytics,
  mr as NavbarPlexicus,
  hr as SelectLanguage,
  wr as useTrackClick
};
