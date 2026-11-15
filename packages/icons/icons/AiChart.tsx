import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiChart = forwardRef<SVGSVGElement, IconProps>(function IconAiChart(
  { className, variant = "Outline", strokeWidth = "1.5", ...rest },
  ref,
) {
  /* The four drawings are two booleans: filled or stroked, and whether the
     secondary shapes drop to half tone. */
  const fill = variant === "Bold" || variant === "Bulk";
  const duotone = variant === "TwoTone" || variant === "Bulk";

  /* Decorative by default: an icon sitting beside its own text label is read
     out twice otherwise. Naming it with aria-label or aria-labelledby promotes
     it to an image instead. */
  const labelled =
    rest["aria-label"] != null || rest["aria-labelledby"] != null;
  const a11y: SVGProps<SVGSVGElement> = labelled
    ? { role: "img" }
    : { "aria-hidden": true };

  /* Bold and Bulk cut the body around the sparkle with the same rounded
     shape as AiClipboard: a 1.5 circle round each tip, joined by small
     curves, so the gap matches across the AI icons. */
  const cut = useId();

  return (
    <>
      {variant === "Broken" ? (
        <svg
          ref={ref}
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          {...a11y}
          {...rest}
        >
          <path
            d="M9.1 3.1c.62-.19 1.1-.17 1.69.2.91.6.91 1.56.91 3.5v1.5c0 1.89 0 2.83.59 3.41.58.59 1.52.59 3.41.59h1.5c1.94 0 2.9 0 3.5.91.6.92.28 1.6-.33 2.97q-.23.52-.52 1m-1.47 1.88A9.5 9.5 0 0 1 2.83 8.89"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.65 6.87a8 8 0 0 0-4.52-4.52c-1.53-.6-2.93.8-2.93 2.45v4a1 1 0 0 0 1 1h4c1.66 0 3.05-1.39 2.45-2.93"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M4.5 2.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : !fill ? (
        <svg
          ref={ref}
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          {...a11y}
          {...rest}
        >
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.1 3.1c.62-.19 1.1-.17 1.69.2.91.6.91 1.56.91 3.5v1.5c0 1.89 0 2.83.59 3.41.58.59 1.52.59 3.41.59h1.5c1.94 0 2.9 0 3.5.91.6.92.28 1.6-.33 2.97A9.5 9.5 0 0 1 2.83 8.89"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.65 6.87a8 8 0 0 0-4.52-4.52c-1.53-.6-2.93.8-2.93 2.45v4a1 1 0 0 0 1 1h4c1.66 0 3.05-1.39 2.45-2.93"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M4.5 2.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : duotone ? (
        <svg
          ref={ref}
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          {...a11y}
          {...rest}
        >
          <mask id={cut} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="white" />
            <path d="M3 2a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.83 8.91c1.11-3.15 3.05-5 6.29-5.81l.36-.09.33-.03.32.04.33.1.16.08.17.1.16.12.14.12.12.14.1.15.1.16.07.17.1.39.07.45.02.25.02.27v.59l.01.34v2.82l.01.28.02.5.05.45.07.37.1.33.15.27.2.24.23.2.27.14.33.1.38.08.44.04.5.02h.59l.32.01h2.83l.3.01.26.02.25.02.45.06.4.11.16.08.16.08.15.1.14.13.12.14.12.16.1.17.08.17.1.32.04.32-.03.34-.09.35-.13.39-.18.43-.22.48-.33.67-.38.64-.43.6-.47.57-.5.52-.55.48-.57.43-.61.4-.64.34-.66.29-.68.24-.7.2-.72.13-.73.08-.75.03-.75-.03-.74-.1-.73-.15-.7-.2-.7-.26-.65-.3-.64-.36-.6-.4-.57-.44-.53-.49-.5-.53-.45-.56-.41-.6-.37-.63-.32-.67-.27-.69-.22-.72-.15-.73-.1-.74-.05-.74.02-.73.07-.72.13-.72.17-.7z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M21.65 6.87a8 8 0 0 0-4.52-4.52c-1.53-.6-2.93.8-2.93 2.45v4a1 1 0 0 0 1 1h4c1.66 0 3.05-1.39 2.45-2.93"
            fill="currentColor"
          />
          <path
            d="M4.9 1.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          ref={ref}
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          {...a11y}
          {...rest}
        >
          <mask id={cut} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="white" />
            <path d="M3 2a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            d="M2.83 8.91c1.11-3.15 3.05-5 6.29-5.81l.36-.09.33-.03.32.04.33.1.16.08.17.1.16.12.14.12.12.14.1.15.1.16.07.17.1.39.07.45.02.25.02.27v.59l.01.34v2.82l.01.28.02.5.05.45.07.37.1.33.15.27.2.24.23.2.27.14.33.1.38.08.44.04.5.02h.59l.32.01h2.83l.3.01.26.02.25.02.45.06.4.11.16.08.16.08.15.1.14.13.12.14.12.16.1.17.08.17.1.32.04.32-.03.34-.09.35-.13.39-.18.43-.22.48-.33.67-.38.64-.43.6-.47.57-.5.52-.55.48-.57.43-.61.4-.64.34-.66.29-.68.24-.7.2-.72.13-.73.08-.75.03-.75-.03-.74-.1-.73-.15-.7-.2-.7-.26-.65-.3-.64-.36-.6-.4-.57-.44-.53-.49-.5-.53-.45-.56-.41-.6-.37-.63-.32-.67-.27-.69-.22-.72-.15-.73-.1-.74-.05-.74.02-.73.07-.72.13-.72.17-.7z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M21.65 6.87a8 8 0 0 0-4.52-4.52c-1.53-.6-2.93.8-2.93 2.45v4a1 1 0 0 0 1 1h4c1.66 0 3.05-1.39 2.45-2.93"
            fill="currentColor"
          />
          <path
            d="M4.9 1.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiChart;
