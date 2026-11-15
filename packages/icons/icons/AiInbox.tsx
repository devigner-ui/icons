import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiInbox = forwardRef<SVGSVGElement, IconProps>(function IconAiInbox(
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
            d="M10.15 20.5H6A3.5 3.5 0 0 1 2.5 17V7A3.5 3.5 0 0 1 6 3.5h12A3.5 3.5 0 0 1 21.5 7v10a3.5 3.5 0 0 1-3.5 3.5h-5.45"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.5 13.5h4.6c.6 0 1.1.4 1.3 1l.4 1c.2.6.7 1 1.3 1h3.8c.6 0 1.1-.4 1.3-1l.4-1c.2-.6.7-1 1.3-1h4.6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 5.9c.23 1.72.88 2.37 2.6 2.6-1.72.23-2.37.88-2.6 2.6-.23-1.72-.88-2.37-2.6-2.6 1.72-.23 2.37-.88 2.6-2.6Z"
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
            d="M6 3.5h12A3.5 3.5 0 0 1 21.5 7v10a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 17V7A3.5 3.5 0 0 1 6 3.5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.5 13.5h4.6c.6 0 1.1.4 1.3 1l.4 1c.2.6.7 1 1.3 1h3.8c.6 0 1.1-.4 1.3-1l.4-1c.2-.6.7-1 1.3-1h4.6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />
          <path
            d="M12 5.9c.23 1.72.88 2.37 2.6 2.6-1.72.23-2.37.88-2.6 2.6-.23-1.72-.88-2.37-2.6-2.6 1.72-.23 2.37-.88 2.6-2.6Z"
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
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6 2.75h12A4.6 4.6 0 0 1 21 4a4.6 4.6 0 0 1 1.25 3v10A4.6 4.6 0 0 1 21 20a4.6 4.6 0 0 1-3 1.25H6A4.6 4.6 0 0 1 3 20a4.6 4.6 0 0 1-1.25-3V7A4.6 4.6 0 0 1 3 4a4.6 4.6 0 0 1 3-1.25z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M6.1 12.75c.61 0 1.28-.08 1.85.18.75.35 1.04 1.02 1.32 1.73.13.32.22.78.51.99.31.22.85.1 1.2.1.98 0 1.98.05 2.95 0 .49-.02.61-.62.75-.97.28-.7.52-1.37 1.2-1.76.62-.35 1.34-.27 2.02-.27h4.35v1.5h-5.06c-.2 0-.4-.03-.56.07-.38.22-.5.86-.64 1.23-.36.9-.93 1.63-1.97 1.7-1.08.07-2.2 0-3.28 0-.71 0-1.38 0-1.97-.49-.5-.43-.7-1.05-.93-1.65-.12-.29-.2-.67-.51-.81-.16-.07-.35-.05-.51-.05H1.75v-1.5z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 5.5c.12.93.33 1.47.73 1.87s.94.61 1.87.73a.4.4 0 0 1 0 .8c-.93.12-1.47.33-1.87.73s-.61.94-.73 1.87a.4.4 0 0 1-.8 0c-.12-.93-.33-1.47-.73-1.87S9.93 9.02 9 8.9a.4.4 0 0 1 0-.8c.93-.12 1.47-.32 1.87-.73s.61-.94.73-1.87a.4.4 0 0 1 .8 0z"
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
          <path
            d="M6 2.75h12A4.6 4.6 0 0 1 21 4a4.6 4.6 0 0 1 1.25 3v5.75h-3.82c-.73 0-1.62-.13-2.3.15-.82.33-1.12 1.06-1.43 1.82-.15.38-.27 1.02-.8 1.03q-1.42.02-2.86 0c-.35 0-.91.12-1.23-.09-.33-.2-.42-.71-.56-1.05-.29-.72-.6-1.4-1.38-1.71-.68-.28-1.57-.15-2.3-.15H1.75V7A4.6 4.6 0 0 1 3 4a4.6 4.6 0 0 1 3-1.25zM22.25 17A4.6 4.6 0 0 1 21 20a4.6 4.6 0 0 1-3 1.25H6A4.6 4.6 0 0 1 3 20a4.6 4.6 0 0 1-1.25-3v-2.75h4.9c.2 0 .46-.04.66.04.34.14.43.57.55.88.25.61.45 1.24 1 1.66.58.45 1.25.42 1.95.42 1.03 0 2.08.04 3.11 0 1.05-.03 1.68-.72 2.04-1.63.16-.4.28-1.1.69-1.3.18-.1.4-.07.59-.07h5.01zM12 5.15a.4.4 0 0 0-.4.35c-.12.93-.33 1.47-.73 1.87s-.94.61-1.87.73a.4.4 0 0 0 0 .8c.93.12 1.47.33 1.87.73s.61.94.73 1.87a.4.4 0 0 0 .8 0c.12-.93.33-1.47.73-1.87s.94-.61 1.87-.73a.4.4 0 0 0 0-.8c-.93-.12-1.47-.32-1.87-.73s-.61-.94-.73-1.87a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiInbox;
