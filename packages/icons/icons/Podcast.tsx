import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPodcast = forwardRef<SVGSVGElement, IconProps>(function IconPodcast(
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
            d="M9 10a3 3 0 1 1 6 0v3a3 3 0 1 1-6 0z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13 10h2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13 13h2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 10h1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 13h1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.15 16C5.17 16 6 15.17 6 14.15V10a6 6 0 1 1 12 0v4.15c0 1.02.83 1.85 1.85 1.85"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M2 12a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M18 12a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 16v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            d="M10.84 10.55c0-.4-.32-.73-.7-.73H8.58A3.5 3.5 0 0 1 12 6.9c1.69 0 3.1 1.25 3.42 2.9h-2.49c-.38 0-.7.33-.7.74s.31.72.7.72h2.56v1.46h-2.56c-.38 0-.7.32-.7.72s.31.73.7.73h2.49a3.6 3.6 0 0 1-2.72 2.84v2.25c0 .4-.31.73-.7.73a.7.7 0 0 1-.7-.73v-2.25a3.6 3.6 0 0 1-2.72-2.84h1.56c.38 0 .7-.32.7-.73s-.32-.72-.7-.72H8.51v-1.46h1.63c.38 0 .7-.32.7-.72"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 4a6.4 6.4 0 0 0-6.27 6.12q-.53-.3-1.17-.3A2.6 2.6 0 0 0 2 12.48v1.94a2.6 2.6 0 0 0 2.7 2.67 2.47 2.47 0 0 0 2.42-2.52v-4.02A5 5 0 0 1 12 5.45a5 5 0 0 1 4.88 5.1v4.02a2.47 2.47 0 0 0 2.42 2.52h.14c1.41 0 2.56-1.2 2.56-2.67v-1.94a2.6 2.6 0 0 0-2.56-2.66q-.64 0-1.17.3A6.4 6.4 0 0 0 12 4"
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
            d="M10.84 10.55c0-.4-.32-.73-.7-.73H8.58A3.5 3.5 0 0 1 12 6.9c1.69 0 3.1 1.25 3.42 2.9h-2.49c-.39 0-.7.33-.7.74s.31.72.7.72h2.56v1.46h-2.56c-.39 0-.7.32-.7.72s.31.73.7.73h2.49a3.6 3.6 0 0 1-2.72 2.84v2.25c0 .4-.31.73-.7.73a.7.7 0 0 1-.7-.73v-2.25a3.6 3.6 0 0 1-2.72-2.84h1.56c.38 0 .7-.32.7-.73s-.32-.72-.7-.72H8.5v-1.46h1.63c.38 0 .7-.32.7-.72"
            fill="currentColor"
          />
          <path
            d="M12 4a6.4 6.4 0 0 0-6.27 6.12q-.53-.3-1.17-.3A2.6 2.6 0 0 0 2 12.48v1.94a2.6 2.6 0 0 0 2.7 2.67 2.47 2.47 0 0 0 2.42-2.52v-4.02A5 5 0 0 1 12 5.45a5 5 0 0 1 4.88 5.1v4.02a2.47 2.47 0 0 0 2.42 2.52h.14c1.41 0 2.56-1.2 2.56-2.67v-1.94a2.6 2.6 0 0 0-2.56-2.66q-.64 0-1.17.3A6.4 6.4 0 0 0 12 4"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPodcast;
