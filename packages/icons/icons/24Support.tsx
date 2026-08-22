import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const Icon24Support = forwardRef<SVGSVGElement, IconProps>(
  function Icon24Support(
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
              d="M18.67 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69a3 3 0 0 0-2.12-.87h-.75c-1.66 0-3-1.33-3-2.97V4.98a3 3 0 0 1 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91a3 3 0 0 1-3 2.97"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.67 9.16c0-.93.76-1.69 1.69-1.69s1.69.76 1.69 1.69c0 1.88-2.67 2.08-3.26 3.87-.12.37.19.74.58.74h2.68"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.71 13.76V8.05a.6.6 0 0 0-.42-.56.6.6 0 0 0-.66.25c-.72 1.16-1.5 2.48-2.18 3.64a.6.6 0 0 0 0 .63c.11.19.32.31.55.31h3.67"
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
              d="M18.67 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69a3 3 0 0 0-2.12-.87h-.75c-1.66 0-3-1.33-3-2.97V4.98a3 3 0 0 1 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91a3 3 0 0 1-3 2.97"
              fill="currentColor"
            />
            <path
              d="M11.05 14.51H8.37c-.44 0-.85-.21-1.11-.57a1.3 1.3 0 0 1-.19-1.16c.35-1.07 1.21-1.65 1.97-2.17.8-.54 1.25-.88 1.25-1.46a.94.94 0 1 0-1.88 0c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75 2.44 2.44 0 0 1 4.88 0c0 1.41-1.06 2.13-1.91 2.71-.53.36-1.03.7-1.28 1.15h2.44c.41 0 .75.34.75.75s-.33.75-.74.75"
              fill="currentColor"
            />
            <path
              d="M16.71 14.51a.76.76 0 0 1-.75-.75v-.69h-1.97a1.36 1.36 0 0 1-1.19-2.06c.68-1.17 1.47-2.5 2.19-3.66a1.33 1.33 0 0 1 2.46.71v3.52h.22c.41 0 .75.34.75.75s-.34.75-.75.75h-.21v.69c0 .41-.33.74-.75.74m-.75-5.87c-.59.96-1.2 1.99-1.75 2.93h1.75z"
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
              d="M18.67 2h-12c-1.66 0-3 1.33-3 2.97v10.91a3 3 0 0 0 3 2.97h.76c.8 0 1.56.31 2.12.87l1.71 1.69c.78.77 2.05.77 2.83 0l1.71-1.69a3 3 0 0 1 2.12-.87h.75c1.66 0 3-1.33 3-2.97V4.97a3 3 0 0 0-3-2.97m-7.62 11.01c.41 0 .75.34.75.75s-.34.75-.75.75H8.37c-.44 0-.85-.21-1.11-.57a1.3 1.3 0 0 1-.19-1.16c.35-1.07 1.21-1.65 1.97-2.17.8-.54 1.25-.88 1.25-1.46a.94.94 0 0 0-.94-.94.94.94 0 0 0-.93.95c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75 2.44 2.44 0 0 1 4.88 0c0 1.41-1.06 2.13-1.91 2.71-.53.36-1.03.7-1.28 1.15zm6.62.07h-.21v.69c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-.69h-1.97a1.36 1.36 0 0 1-1.19-2.06c.68-1.17 1.47-2.5 2.19-3.66a1.33 1.33 0 0 1 2.46.71v3.52h.22c.41 0 .75.34.75.75s-.34.74-.75.74"
              fill="currentColor"
            />
            <path
              d="M15.96 11.58V8.64c-.59.96-1.2 1.99-1.75 2.93z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default Icon24Support;
