import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCase = forwardRef<SVGSVGElement, IconProps>(function IconCase(
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
            opacity={duotone ? "0.4" : "1"}
            d="M3 12c0 3.77 0 7.66 1.32 8.83S7.76 22 12 22s6.36 0 7.68-1.17S21 15.77 21 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="m14.66 14.2 6-1.8c.6-.18.9-.27 1.09-.48l.1-.14c.15-.24.15-.55.15-1.17 0-2.45 0-3.68-.67-4.5a3 3 0 0 0-.44-.44C20.07 5 18.84 5 16.4 5H7.61c-2.45 0-3.68 0-4.5.67a3 3 0 0 0-.44.44C2 6.93 2 8.16 2 10.6c0 .62 0 .93.15 1.17l.1.14c.19.21.49.3 1.08.48l6.01 1.8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.5 5a2.15 2.15 0 0 0 1.97-1.42l.03-.08.09-.25A2 2 0 0 1 10.32 2h3.36a2 2 0 0 1 1.73 1.25l.09.25.03.08.03.1c.28.78 1.12 1.3 1.94 1.32"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M14 12.5h-4a.5.5 0 0 0-.5.5v2.16c0 .2.12.39.31.47l.7.28a4 4 0 0 0 2.98 0l.7-.28a.5.5 0 0 0 .31-.47V13a.5.5 0 0 0-.5-.5"
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
            opacity={duotone ? "0.4" : "1"}
            d="M10.56 2.25h-.28a2.75 2.75 0 0 0-2.49 2 1.6 1.6 0 0 1-.63.75H9.1l.08-.18V4.8l.01-.02.01-.02v-.02h.01v-.03l.07-.19c.18-.44.6-.75 1.09-.78h3.26a1.25 1.25 0 0 1 1.15.97v.02h.01v.03h.01v.02l.01.02.09.19h1.94l-.09-.06c-.27-.2-.46-.46-.54-.69l-.1-.28a2.75 2.75 0 0 0-2.67-1.72z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.2 5H6.8c-1.68 0-2.52 0-3.17.33a3 3 0 0 0-1.3 1.3C2 7.28 2 8.13 2 9.81c0 .43 0 .64.07.82a1 1 0 0 0 .3.4c.16.13.36.19.77.31l5.36 1.61v1.21c0 .77.46 1.47 1.19 1.77l.56.23a4.7 4.7 0 0 0 3.5 0l.56-.23c.73-.3 1.19-1 1.19-1.77v-1.21l5.36-1.6c.4-.13.61-.2.77-.31a1 1 0 0 0 .3-.4c.07-.19.07-.4.07-.83 0-1.69 0-2.53-.33-3.18a3 3 0 0 0-1.3-1.3C19.72 5 18.88 5 17.19 5m-3.6 7h-3.2a.4.4 0 0 0-.4.4v1.76q.01.27.25.38l.56.23c.76.3 1.62.3 2.38 0l.56-.23a.4.4 0 0 0 .25-.38v-1.75a.4.4 0 0 0-.4-.4"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m3 11.3.14.04 5.36 1.61v1.21c0 .77.46 1.47 1.19 1.77l.56.23a4.7 4.7 0 0 0 3.5 0l.56-.23c.73-.3 1.19-1 1.19-1.77v-1.21l5.36-1.6.14-.05v1c0 3.68-.03 7.39-1.32 8.53C18.36 22 16.24 22 12 22s-6.36 0-7.68-1.17C3.03 19.69 3 15.98 3 12.3z"
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
            d="m10.28 2.26.28-.01h3.16a2.75 2.75 0 0 1 2.49 2 1.6 1.6 0 0 0 .63.75c2.15 0 3.28.04 4.05.67a3 3 0 0 1 .44.44c.67.82.67 2.05.67 4.5 0 .62 0 .93-.15 1.17l-.1.14c-.19.21-.49.3-1.08.48L16 13.8V13a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v.8l-4.67-1.4c-.6-.18-.9-.27-1.08-.48l-.1-.14C2 11.54 2 11.23 2 10.61c0-2.45 0-3.68.67-4.5a3 3 0 0 1 .44-.44C3.88 5.04 5 5 7.16 5l.09-.06c.27-.2.46-.46.54-.69l.1-.28a2.8 2.8 0 0 1 2.39-1.71m4.54 2.56.08.18H9.1l.08-.18V4.8l.01-.02.01-.02v-.02h.01v-.03l.07-.19c.18-.44.6-.75 1.09-.78h3.26a1.25 1.25 0 0 1 1.15.97v.02h.01v.03h.01v.02l.01.02M14 12.5h-4a.5.5 0 0 0-.5.5v2.16c0 .2.12.39.31.47l.7.28a4 4 0 0 0 2.98 0l.7-.28a.5.5 0 0 0 .31-.47V13a.5.5 0 0 0-.5-.5m-5.99 2.87-5-1.5c.03 3.11.2 5.98 1.3 6.96C5.65 22 7.77 22 12 22s6.36 0 7.68-1.17c1.1-.98 1.28-3.85 1.31-6.96l-5 1.5a2 2 0 0 1-1.25 1.65l-.7.28a5.5 5.5 0 0 1-4.08 0l-.7-.28A2 2 0 0 1 8 15.37"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCase;
