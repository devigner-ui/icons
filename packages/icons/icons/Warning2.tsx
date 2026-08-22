import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWarning2 = forwardRef<SVGSVGElement, IconProps>(function IconWarning2(
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
            d="M12.67 7.75V13"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.75 8.58v6.84c0 1.12-.6 2.16-1.57 2.73l-5.94 3.43c-.97.56-2.17.56-3.15 0l-5.94-3.43a3.2 3.2 0 0 1-1.57-2.73V8.58c0-1.12.6-2.16 1.57-2.73l5.94-3.43a3.2 3.2 0 0 1 3.15 0l5.94 3.43c.97.57 1.57 1.6 1.57 2.73"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 16.2v.1"
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
            d="M21.75 8.58v6.84c0 1.12-.6 2.16-1.57 2.73l-5.94 3.43c-.97.56-2.17.56-3.15 0l-5.94-3.43a3.2 3.2 0 0 1-1.57-2.73V8.58c0-1.12.6-2.16 1.57-2.73l5.94-3.43a3.2 3.2 0 0 1 3.15 0l5.94 3.43c.97.57 1.57 1.6 1.57 2.73"
            fill="currentColor"
          />
          <path
            d="M12.67 13.75a.76.76 0 0 1-.75-.75V7.75c0-.41.34-.75.75-.75s.75.34.75.75V13c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M12.67 17.25a1 1 0 0 1-.38-.08 1 1 0 0 1-.33-.21q-.13-.15-.22-.33a1 1 0 0 1-.07-.38 1 1 0 0 1 .29-.71q.14-.13.33-.21a1 1 0 0 1 1.09.21q.13.14.21.33a1 1 0 0 1 .08.38 1 1 0 0 1-.08.38q-.08.18-.21.33a1 1 0 0 1-.71.29"
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
            d="m20.18 5.85-5.94-3.43a3.2 3.2 0 0 0-3.15 0L5.16 5.85a3.2 3.2 0 0 0-1.57 2.73v6.84c0 1.12.6 2.16 1.57 2.73l5.94 3.43c.97.56 2.17.56 3.15 0l5.94-3.43a3.2 3.2 0 0 0 1.57-2.73V8.58a3.2 3.2 0 0 0-1.58-2.73m-8.26 1.9c0-.41.34-.75.75-.75s.75.34.75.75V13c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75zm1.67 8.88q-.07.18-.21.33a1 1 0 0 1-1.09.21 1 1 0 0 1-.33-.21q-.13-.15-.22-.33a1 1 0 0 1-.07-.38 1 1 0 0 1 .29-.71q.14-.13.33-.21a1 1 0 0 1 1.09.21q.13.14.21.33a1 1 0 0 1 .08.38 1 1 0 0 1-.08.38"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconWarning2;
