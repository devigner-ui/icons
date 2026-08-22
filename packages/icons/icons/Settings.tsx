import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSettings = forwardRef<SVGSVGElement, IconProps>(function IconSettings(
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
      {!fill ? (
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
          <circle
            cx="12"
            cy="12.0005"
            r="3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.77 2.15C13.4 2 12.93 2 12 2s-1.4 0-1.77.15a2 2 0 0 0-1.08 1.09 2 2 0 0 0-.14.86 1.58 1.58 0 0 1-2.36 1.35 3 3 0 0 0-.82-.3 2 2 0 0 0-1.48.4c-.31.24-.54.64-1.01 1.45s-.7 1.21-.75 1.6a2 2 0 0 0 .4 1.48c.14.2.35.36.67.56.47.3.78.8.78 1.36s-.3 1.06-.78 1.36q-.47.28-.67.56a2 2 0 0 0-.4 1.48c.05.39.28.8.75 1.6s.7 1.21 1.01 1.45a2 2 0 0 0 1.48.4q.34-.05.82-.3c.5-.27 1.09-.28 1.57 0s.77.8.79 1.35c.01.38.05.64.14.87a2 2 0 0 0 1.08 1.08c.37.15.84.15 1.77.15s1.4 0 1.77-.15a2 2 0 0 0 1.08-1.08c.09-.23.13-.49.14-.87.02-.56.3-1.07.8-1.35a1.6 1.6 0 0 1 1.56 0q.48.25.82.3a2 2 0 0 0 1.48-.4c.31-.24.54-.64 1.01-1.45s.7-1.21.75-1.6a2 2 0 0 0-.4-1.48 2 2 0 0 0-.67-.56c-.47-.3-.78-.8-.78-1.36s.3-1.06.78-1.36a2 2 0 0 0 1.07-2.03c-.05-.4-.28-.8-.75-1.61-.47-.8-.7-1.21-1.01-1.45a2 2 0 0 0-1.48-.4q-.34.05-.82.3c-.5.27-1.09.28-1.57 0s-.77-.8-.79-1.35a3 3 0 0 0-.14-.86 2 2 0 0 0-1.08-1.09"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.28 2.15C13.9 2 13.44 2 12.5 2s-1.4 0-1.78.15a2 2 0 0 0-1.09 1.09c-.1.22-.13.48-.14.86-.02.56-.31 1.07-.8 1.35s-1.08.27-1.58 0a3 3 0 0 0-.82-.3 2 2 0 0 0-1.5.4c-.31.24-.55.64-1.02 1.45s-.7 1.21-.75 1.6a2 2 0 0 0 1.08 2.04c.47.3.78.8.78 1.36s-.3 1.06-.78 1.36q-.48.28-.68.56c-.33.42-.47.95-.4 1.48.05.39.28.8.75 1.6s.7 1.21 1.03 1.45c.42.33.96.47 1.49.4.24-.03.48-.13.82-.3.5-.27 1.1-.28 1.58 0 .49.28.78.8.8 1.35.01.38.05.64.14.87a2 2 0 0 0 1.1 1.08c.36.15.83.15 1.77.15s1.4 0 1.78-.15a2 2 0 0 0 1.09-1.08c.1-.23.13-.49.14-.87a1.6 1.6 0 0 1 .8-1.35 1.6 1.6 0 0 1 1.58 0c.34.17.58.27.82.3.53.07 1.07-.07 1.5-.4.31-.24.55-.64 1.02-1.45s.7-1.21.75-1.6a2 2 0 0 0-.4-1.48c-.15-.2-.35-.36-.68-.56-.47-.3-.78-.8-.78-1.36s.3-1.06.78-1.36a2 2 0 0 0 1.08-2.03c-.05-.4-.28-.8-.75-1.61-.47-.8-.7-1.21-1.03-1.45a2 2 0 0 0-1.49-.4 3 3 0 0 0-.82.3c-.5.27-1.1.28-1.58 0-.49-.28-.78-.8-.8-1.35a3 3 0 0 0-.14-.86 2 2 0 0 0-1.1-1.09"
            fill="currentColor"
          />
          <path
            d="M15.52 12a3 3 0 0 1-3.02 3 3 3 0 0 1-3.02-3 3 3 0 0 1 3.02-3 3 3 0 0 1 3.02 3"
            fill="currentColor"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.28 2.15C13.9 2 13.44 2 12.5 2s-1.4 0-1.78.15a2 2 0 0 0-1.09 1.09c-.1.22-.13.48-.14.86-.02.56-.31 1.07-.8 1.35s-1.08.27-1.58 0a3 3 0 0 0-.82-.3 2 2 0 0 0-1.5.4c-.31.24-.55.64-1.02 1.45s-.7 1.21-.75 1.6a2 2 0 0 0 1.08 2.04c.47.3.78.8.78 1.36s-.3 1.06-.78 1.36q-.48.28-.68.56c-.33.42-.47.95-.4 1.48.05.39.28.8.75 1.6s.7 1.21 1.03 1.45c.42.33.96.47 1.49.4.24-.03.48-.13.82-.3.5-.27 1.1-.28 1.58 0 .49.28.78.8.8 1.35.01.38.05.64.14.87a2 2 0 0 0 1.1 1.08c.36.15.83.15 1.77.15s1.4 0 1.78-.15a2 2 0 0 0 1.09-1.08c.1-.23.13-.49.14-.87a1.6 1.6 0 0 1 .8-1.35 1.6 1.6 0 0 1 1.58 0c.34.17.58.27.82.3.53.07 1.07-.07 1.5-.4.31-.24.55-.64 1.02-1.45s.7-1.21.75-1.6a2 2 0 0 0-.4-1.48c-.15-.2-.35-.36-.68-.56-.47-.3-.78-.8-.78-1.36s.3-1.06.78-1.36a2 2 0 0 0 1.08-2.03c-.05-.4-.28-.8-.75-1.61-.47-.8-.7-1.21-1.03-1.45a2 2 0 0 0-1.49-.4 3 3 0 0 0-.82.3c-.5.27-1.1.28-1.58 0-.49-.28-.78-.8-.8-1.35a3 3 0 0 0-.14-.86 2 2 0 0 0-1.1-1.09M12.5 15a3 3 0 0 0 3.02-3 3 3 0 0 0-3.02-3 3 3 0 0 0-3.02 3 3 3 0 0 0 3.02 3"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSettings;
