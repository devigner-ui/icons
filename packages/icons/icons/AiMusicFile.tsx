import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiMusicFile = forwardRef<SVGSVGElement, IconProps>(function IconAiMusicFile(
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
            d="M13.7 21.5H15c3.3 0 4.5-1.2 4.5-4.5V8L14 2.5H9C5.7 2.5 4.5 3.7 4.5 7v10c0 3.3 1.2 4.5 4.5 4.5h2.3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 2.5V6c0 1.1.9 2 2 2h3.5M8.3 16.5a1.7 1.7 0 1 0 3.4 0 1.7 1.7 0 1 0-3.4 0Zm3.4 0V11l3-1"
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
            d="M14 2.5H9C5.7 2.5 4.5 3.7 4.5 7v10c0 3.3 1.2 4.5 4.5 4.5h6c3.3 0 4.5-1.2 4.5-4.5V8Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14 2.5V6c0 1.1.9 2 2 2h3.5M8.3 16.5a1.7 1.7 0 1 0 3.4 0 1.7 1.7 0 1 0-3.4 0Zm3.4 0V11l3-1"
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
            d="M20.25 17c-.01 1.75-.39 3.17-1.23 4.02-.85.84-2.27 1.22-4.02 1.23H9c-1.75-.01-3.17-.39-4.02-1.23-.84-.85-1.22-2.27-1.23-4.02V7c.01-1.75.39-3.17 1.23-4.02.85-.84 2.27-1.22 4.02-1.23h5q.3 0 .53.22l.22.22v2.88c0 .62-.12 1.33.37 1.81.48.49 1.19.37 1.81.37h2.88l.22.22q.2.22.22.53z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M16.93 7.25c-.62 0-1.33.12-1.81-.37-.49-.48-.37-1.19-.37-1.81V2.19l5.06 5.06zM10 14.05q.48 0 .95.2v-3.23a.75.75 0 0 1 .53-.74l2.98-1a.75.75 0 0 1 .48 1.43l-2.49.83v4.96c0 .62-.31 1.33-.72 1.73s-1.1.72-1.73.72-1.33-.32-1.73-.72-.72-1.11-.72-1.73.32-1.33.72-1.73 1.1-.72 1.73-.72"
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
            d="M20.25 17c-.01 1.75-.39 3.17-1.23 4.02-.85.84-2.27 1.22-4.02 1.23H9c-1.75-.01-3.17-.39-4.02-1.23-.84-.85-1.22-2.27-1.23-4.02V7c.01-1.75.39-3.17 1.23-4.02.85-.84 2.27-1.22 4.02-1.23h4.25v3.32c0 1.06 0 2.06.8 2.87.82.81 1.82.81 2.88.81h3.32zm-3.32-9.75c-.62 0-1.33.12-1.81-.37-.49-.48-.37-1.19-.37-1.81V2.19l5.06 5.06zm-8.66 7.52c-.4.4-.72 1.1-.72 1.73s.32 1.33.72 1.73 1.1.72 1.73.72 1.33-.31 1.73-.72.72-1.1.72-1.73v-4.96l2.49-.83a.75.75 0 0 0-.48-1.42l-2.98 1-.15.06a.8.8 0 0 0-.38.67v3.24a3 3 0 0 0-.95-.2c-.62 0-1.33.3-1.73.71z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiMusicFile;
