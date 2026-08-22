import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWhisk = forwardRef<SVGSVGElement, IconProps>(function IconWhisk(
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
            d="M19.82 12.24c2.55-2.56 2.95-6.56.73-8.79s-6.23-1.82-8.79.73c-2.55 2.56-3.9 7.52-1.68 9.74s7.18.87 9.74-1.68"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m12.9 15.13-6.04 6.04a2.85 2.85 0 0 1-4.03-4.03l6.04-6.04"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.55 3.45c1.2 1.21-1.45 4.67-3.22 6.44s-6.04 5.24-7.25 4.03c-1.2-1.2 2.26-5.48 4.03-7.25s5.23-4.43 6.44-3.22"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.95 2.87c-1.81-.4-4.02.2-5.66 1.84a9.2 9.2 0 0 0-2.57 6.45q.29-.53.63-1.06c.97-1.5 2.31-3.04 3.23-3.96s2.27-2.06 3.58-2.84q.39-.23.8-.43m3.13.05C18.49.32 14 .9 11.24 3.65a10.7 10.7 0 0 0-3.02 7.39c.05 1.27.43 2.5 1.34 3.41.9.9 2.14 1.3 3.41 1.34 2.55.09 5.54-1.18 7.39-3.02 2.75-2.76 3.33-7.25.73-9.85m-1.06 1.06c-.05-.04-.18-.13-.59-.05q-.62.13-1.5.66a18 18 0 0 0-3.3 2.61c-.85.86-2.12 2.33-3.02 3.72q-.7 1.07-.94 1.83-.11.36-.09.53l.02.1h.01l.02.02.1.02q.15.02.52-.09a7 7 0 0 0 1.83-.94c1.4-.9 2.86-2.17 3.72-3.03a18 18 0 0 0 2.61-3.28q.53-.89.66-1.51c.08-.41 0-.54-.05-.59m-7.18 10.3q.53-.29 1.06-.63c1.5-.97 3.05-2.31 3.96-3.23s2.06-2.27 2.84-3.58q.24-.39.43-.8a6.3 6.3 0 0 1-1.84 5.67 9.2 9.2 0 0 1-6.45 2.57"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.27 11.7c.14 1.03.53 2 1.28 2.75a4.7 4.7 0 0 0 2.75 1.28l-5.44 5.44a2.85 2.85 0 0 1-4.03-4.03z"
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
            d="M11.23 3.65C14 .9 18.48.32 21.08 2.92s2.02 7.09-.73 9.85a10.7 10.7 0 0 1-7.39 3.02l-.66-.06-5.44 5.44a2.85 2.85 0 0 1-4.03-4.03l5.44-5.43-.06-.67a10.7 10.7 0 0 1 3.02-7.39m1.06 1.06a6.3 6.3 0 0 1 5.66-1.84q-.4.2-.8.43c-1.3.78-2.66 1.93-3.57 2.84a27 27 0 0 0-3.23 3.96q-.35.52-.63 1.06V11a9.2 9.2 0 0 1 2.57-6.28m7.14-.78c.41-.08.54 0 .59.05s.13.18.05.59q-.13.62-.66 1.5a18 18 0 0 1-2.61 3.3c-.86.85-2.33 2.12-3.72 3.02q-1.06.7-1.83.94-.36.11-.53.09l-.1-.02v-.01l-.02-.02-.02-.1q-.02-.15.09-.52c.15-.5.48-1.14.94-1.83a25 25 0 0 1 3.03-3.72 18 18 0 0 1 3.28-2.61q.9-.53 1.51-.66m-5.53 9.72q-.52.34-1.06.63h.18c2.1.08 4.69-1 6.27-2.57a6.3 6.3 0 0 0 1.84-5.66 10 10 0 0 1-.43.8 20 20 0 0 1-2.84 3.57c-.91.92-2.46 2.26-3.96 3.23"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconWhisk;
