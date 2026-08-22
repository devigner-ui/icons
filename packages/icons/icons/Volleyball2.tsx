import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconVolleyball2 = forwardRef<SVGSVGElement, IconProps>(
  function IconVolleyball2(
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
              d="m11.57 12.55.6.46zm-.26-8.9.7.28zM3.5 15.75a.75.75 0 0 0 0 1.5zm16.38 1.17a.75.75 0 1 0 1.24-.84zM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.94 4.81 10.75 10.75 10.75zM21.25 12c0 5.1-4.14 9.25-9.25 9.25v1.5c5.94 0 10.75-4.81 10.75-10.75zM12 2.75c5.1 0 9.25 4.14 9.25 9.25h1.5c0-5.94-4.81-10.75-10.75-10.75zm0-1.5A10.75 10.75 0 0 0 1.25 12h1.5c0-5.1 4.14-9.25 9.25-9.25zm0 11.5h.1v-1.5H12zm-.6-1.21-.42.55 1.18.92.43-.55zm-.1-9.83-.68 1.65 1.39.57.68-1.64zm-.68 1.65a9.9 9.9 0 0 0 .74 9.04l1.28-.8A8.4 8.4 0 0 1 12 3.93zm.36 8.73a9.5 9.5 0 0 1-7.48 3.66v1.5c3.39 0 6.58-1.56 8.66-4.24zm1.11.66a9.4 9.4 0 0 1 7.79 4.17l1.24-.84a10.9 10.9 0 0 0-9.03-4.83z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m21.24 10.74.54-.52zm.21 1.29a.75.75 0 0 0 1.07-1.06zM5.73 19.04a.75.75 0 0 0 0 1.5zM8.2 3.36a.75.75 0 0 0-1.38-.58zm-2.34 8.79a.75.75 0 1 0 1.47-.3zm9.58 5.17a.75.75 0 1 0-.86-1.22zM14.16 6.08a.75.75 0 0 0-.32 1.47zm6.55 5.19.74.76 1.07-1.06-.74-.75zM6.8 2.77c-1.25 3-1.57 6.25-.96 9.38l1.47-.3c-.55-2.83-.26-5.77.87-8.5zm7.76 13.33a15.6 15.6 0 0 1-8.84 2.94v1.5c3.44 0 6.88-1.22 9.7-3.22zm-.73-8.55c2.59.54 4.98 1.83 6.87 3.72l1.06-1.06a15 15 0 0 0-7.61-4.13z"
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
              d="M6.47 3.67a10 10 0 0 0-3.4 12.83h.43c3.15 0 6.13-1.46 8.07-3.95L12 12a9.1 9.1 0 0 1-.69-8.35L12 2q-1.82.01-3.45.61l-.37.77a14.7 14.7 0 0 0-.86 8.48.75.75 0 0 1-1.47.29c-.55-2.82-.35-5.74.62-8.48"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.16 6.08a.75.75 0 1 0-.32 1.47c2.59.54 4.98 1.83 6.87 3.72l1.27 1.3v-.01a10 10 0 0 1-1.24 4.3l-.24-.36a10.1 10.1 0 0 0-8.4-4.5H12a9.1 9.1 0 0 1-.69-8.35L12 2a10 10 0 0 1 9.86 8.3l-.08-.08a15 15 0 0 0-7.62-4.14"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.6" : "1"}
              d="M15.43 17.32a.75.75 0 1 0-.86-1.22 15.6 15.6 0 0 1-8.84 2.94H4.9q-1.12-1.12-1.83-2.54h.43c3.15 0 6.13-1.46 8.07-3.95L12 12h.1a10.1 10.1 0 0 1 8.4 4.5l.24.36a10 10 0 0 1-14 3.65 17.3 17.3 0 0 0 8.7-3.19"
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
              d="m11.76 13.33.26-.34c3.35.08 6.46 1.7 8.42 4.38a10 10 0 0 1-12.07 3.95c2.54-.57 5-1.68 7.12-3.17a.75.75 0 1 0-.86-1.23 18 18 0 0 1-8.41 3.24 10 10 0 0 1-2.3-2.26 12.4 12.4 0 0 0 7.84-4.57"
              fill="currentColor"
            />
            <path
              d="m10.75 12.18-.17.22a11 11 0 0 1-7.51 4.1A10 10 0 0 1 4.87 5a18 18 0 0 0-.1 7.39.75.75 0 1 0 1.47-.3 16.4 16.4 0 0 1 .64-8.68 10 10 0 0 1 3.48-1.28l-.18.43a11 11 0 0 0 .57 9.62"
              fill="currentColor"
            />
            <path
              d="M12.08 11.5a9.4 9.4 0 0 1-.51-8.36L12.05 2a10 10 0 0 1 9.6 7.35 17 17 0 0 0-7.57-3.67.75.75 0 1 0-.3 1.47c2.95.61 5.68 2.07 7.84 4.2v.01l.38.37a10 10 0 0 1-.8 4.18 12.3 12.3 0 0 0-9.12-4.41"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconVolleyball2;
