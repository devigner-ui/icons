import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGift = forwardRef<SVGSVGElement, IconProps>(function IconGift(
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
            d="M22 12H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 2v20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M13 12a4 4 0 0 0 4 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M11 12a4 4 0 0 1-4 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 10.04a3.25 3.25 0 0 1 2.46-3.15 2.2 2.2 0 0 1 2.65 2.65A3.25 3.25 0 0 1 13.96 12H12z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12 10.04a3.25 3.25 0 0 0-2.46-3.15A2.2 2.2 0 0 0 6.9 9.54 3.25 3.25 0 0 0 10.04 12H12z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
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
            d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.91 11.25H2v1.5h8.16A3.25 3.25 0 0 1 7 15.25a.75.75 0 0 0 0 1.5 4.8 4.8 0 0 0 4.25-2.63V22h1.5v-7.88A4.8 4.8 0 0 0 17 16.75a.75.75 0 0 0 0-1.5 3.25 3.25 0 0 1-3.16-2.5H22v-1.5h-4.91q.53-.67.75-1.53a2.94 2.94 0 0 0-3.56-3.56q-.87.22-1.53.75V2h-1.5v4.91a4 4 0 0 0-1.53-.75 2.94 2.94 0 0 0-3.56 3.56q.22.87.75 1.53m4.34 0H10a2.5 2.5 0 0 1-2.39-1.9 1.44 1.44 0 0 1 1.75-1.74A2.5 2.5 0 0 1 11.25 10zm2.75 0h-1.25v-1.24a2.5 2.5 0 0 1 1.9-2.4c1.05-.26 2 .7 1.74 1.75A2.5 2.5 0 0 1 14 11.25"
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
            d="M11.25 2c-4.22 0-6.4.08-7.79 1.46C2.08 4.85 2 7.03 2 11.25h4.91a4 4 0 0 1-.75-1.53 2.94 2.94 0 0 1 3.56-3.56q.87.22 1.53.75z"
            fill="currentColor"
          />
          <path
            d="M2 12.75c0 4.22.08 6.4 1.46 7.79C4.85 21.92 7.03 22 11.25 22v-7.88A4.8 4.8 0 0 1 7 16.75a.75.75 0 0 1 0-1.5 3.25 3.25 0 0 0 3.16-2.5z"
            fill="currentColor"
          />
          <path
            d="M12.75 22c4.22 0 6.4-.08 7.79-1.46 1.38-1.39 1.46-3.57 1.46-7.79h-8.16a3.25 3.25 0 0 0 3.16 2.5.75.75 0 0 1 0 1.5 4.8 4.8 0 0 1-4.25-2.63z"
            fill="currentColor"
          />
          <path
            d="M22 11.25c0-4.22-.08-6.4-1.46-7.79C19.15 2.08 16.97 2 12.75 2v4.91q.67-.53 1.53-.75a2.94 2.94 0 0 1 3.56 3.56q-.22.87-.75 1.53z"
            fill="currentColor"
          />
          <path
            d="M9.36 7.61a2.5 2.5 0 0 1 1.89 2.42v1.22h-1.22a2.5 2.5 0 0 1-2.42-1.9 1.44 1.44 0 0 1 1.75-1.74"
            fill="currentColor"
          />
          <path
            d="M12.75 10.03v1.22h1.21a2.5 2.5 0 0 0 2.43-1.9 1.44 1.44 0 0 0-1.75-1.74 2.5 2.5 0 0 0-1.89 2.42"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconGift;
