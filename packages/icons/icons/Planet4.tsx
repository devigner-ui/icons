import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPlanet4 = forwardRef<SVGSVGElement, IconProps>(function IconPlanet4(
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
          <path
            d="M18 14a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3 11s2.28 2 5.78 2c2.39 0 3.65-1.18 4.72-1.5 2-.59 3.5-.5 3.5-.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3 16s1.6-.09 3.76.5c1.14.32 2.5 1.5 5.06 1.5 2.3 0 4.12-.75 5.18-1.33"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.53 4.04a2 2 0 0 0-.3-.53q.5-.14.6 0 .07.17-.3.53m-3.42 1.98q-.5.15-.61 0-.07-.17.3-.53a2 2 0 0 0 .3.53m0 0a9 9 0 0 0 1.8-.82c.7-.4 1.28-.82 1.62-1.16a2 2 0 0 1-3.42 1.98m-.31-.53a2 2 0 0 1 3.42-1.98c-.45.13-1.1.42-1.8.82s-1.28.83-1.62 1.16"
            fill="currentColor"
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
            d="M17.2 17.49a14 14 0 0 1-5.38 1.26 9 9 0 0 1-3.35-.69l-.91-.41-.2-.1a5 5 0 0 0-.8-.32 14 14 0 0 0-4.01-.48h-.06a8 8 0 0 0 14.71.74"
            fill="currentColor"
          />
          <path
            d="m3.04 10.05.45.39.02.01.33.25q.36.27 1.07.63c.94.46 2.27.92 3.87.92a6 6 0 0 0 2.55-.56l.76-.38.22-.1c.3-.16.64-.33.98-.43a13 13 0 0 1 3.73-.52h.05a8 8 0 0 0-14.03-.21"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.85 15.57a8 8 0 0 0-.16-3.77l-.73-.05h-.22q-.23 0-.68.03c-.58.05-1.4.16-2.35.44q-.28.09-.72.32l-.2.1-.85.41a7.5 7.5 0 0 1-3.16.7 10.3 10.3 0 0 1-6.23-2.15l-.03-.02H2.5v-.01l.48-.56-.48.56-.1-.09a8 8 0 0 0-.31 3.79l.37-.02.03.75-.03-.75h.4a17 17 0 0 1 4.09.53 7 7 0 0 1 1.26.52l.83.38c.74.3 1.62.57 2.77.57 2.14 0 4.33-.86 5.32-1.4l.66-.37z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.53 4.04a2 2 0 0 0-.3-.53q.5-.14.6 0 .07.17-.3.53m-3.42 1.98q-.5.15-.61 0-.07-.17.3-.53a2 2 0 0 0 .3.53m0 0a9 9 0 0 0 1.8-.82c.7-.4 1.28-.82 1.62-1.16a2 2 0 0 1-3.42 1.98m-.31-.53a2 2 0 0 1 3.42-1.98c-.45.13-1.1.42-1.8.82s-1.28.83-1.62 1.16"
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
            d="M17.85 15.57a8 8 0 0 0-.16-3.77l-.73-.05h-.22q-.23 0-.68.03c-.58.05-1.4.17-2.35.44q-.28.09-.72.32l-.2.1-.85.41a7.5 7.5 0 0 1-3.16.7 10.3 10.3 0 0 1-6.23-2.15l-.03-.02H2.5l.48-.57-.48.56-.1-.09a8 8 0 0 0-.31 3.79l.37-.02.03.75-.03-.75h.4a17 17 0 0 1 4.09.53q.53.17 1.03.41l.23.11.83.38c.74.3 1.62.57 2.77.57 2.14 0 4.33-.86 5.32-1.4l.66-.37z"
            fill="currentColor"
          />
          <path
            d="M17.2 17.49a14 14 0 0 1-5.38 1.26 9 9 0 0 1-3.35-.69l-.91-.41-.2-.1a5 5 0 0 0-.8-.32 14 14 0 0 0-4.01-.48h-.06a8 8 0 0 0 14.71.74"
            fill="currentColor"
          />
          <path
            d="m3.04 10.05.45.39.02.01.33.25q.36.27 1.07.63c.94.46 2.27.92 3.87.92a6 6 0 0 0 2.55-.56l.76-.38.22-.1c.3-.16.64-.33.98-.43a13 13 0 0 1 3.73-.52h.02L17 11l.05-.74h.02a8 8 0 0 0-14.03-.21"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.53 4.04a2 2 0 0 0-.3-.53q.5-.14.6 0 .07.17-.3.53m-3.42 1.98q-.5.15-.61 0-.07-.17.3-.53a2 2 0 0 0 .3.53m0 0a9 9 0 0 0 1.8-.82c.7-.4 1.28-.82 1.62-1.16a2 2 0 0 1-3.42 1.98m-.31-.53a2 2 0 0 1 3.42-1.98c-.45.13-1.1.42-1.8.82s-1.28.83-1.62 1.16"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPlanet4;
