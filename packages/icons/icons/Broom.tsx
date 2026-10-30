import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBroom = forwardRef<SVGSVGElement, IconProps>(function IconBroom(
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
            d="M9.37 5.67 5.95 7.75 4.39 5.19a2 2 0 0 1 .67-2.75 2 2 0 0 1 2.75.67z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M8.7 20.44a2.45 2.45 0 0 0 3.54 1.03l6.43-3.91a2.46 2.46 0 0 0 .7-3.62l-2.76-3.74a4 4 0 0 0-5.3-1.04l-3.15 1.92a4 4 0 0 0-1.51 5.18"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m5.13 8.22 5.13-3.12 2.08 3.41-5.13 3.12z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m13.81 16.81 1.65 2.71"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m11.25 18.37 1.65 2.71"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m16.37 15.25 1.65 2.71"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
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
            opacity={duotone ? "0.4" : "1"}
            d="M9.39 5.67 5.97 7.75 4.41 5.19a2 2 0 0 1 .67-2.75 2 2 0 0 1 2.75.67z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m11.34 9.16-3.16 1.92a4 4 0 0 0-1.51 5.18l2.05 4.18a2.45 2.45 0 0 0 3.54 1.03l6.43-3.91a2.46 2.46 0 0 0 .71-3.62l-2.77-3.74a3.97 3.97 0 0 0-5.29-1.04"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.28 5.1 5.15 8.22l2.08 3.41 5.13-3.12z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m13.83 16.81 1.65 2.71"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m11.27 18.37 1.65 2.71"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m16.39 15.25 1.65 2.71"
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
            d="M9.35 5.57 5.88 7.68 4.3 5.08a2.03 2.03 0 0 1 3.47-2.11z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m18.79 17.64-.01.01-1.3.79-1.3.79-1.3.79-1.3.79-1.3.79h-.01a2.5 2.5 0 0 1-3.6-1.05l-2.08-4.24a4.05 4.05 0 0 1 1.53-5.26l3.21-1.95a4 4 0 0 1 5.37 1.05l2.81 3.8a2.5 2.5 0 0 1-.72 3.69"
            fill="currentColor"
          />
          <path
            d="M12.42 8.66a4 4 0 0 0-1.09.46l-3.21 1.95q-.53.32-.91.75l-.01-.01-1.65-2.73a1 1 0 0 1 .33-1.39l3.47-2.11c.48-.29 1.1-.14 1.39.33l1.66 2.73z"
            fill="currentColor"
          />
          <path
            d="m16.18 19.23-1.3.79-1.67-2.75a.8.8 0 0 1 .25-1.05.8.8 0 0 1 1.05.25z"
            fill="currentColor"
          />
          <path
            d="m13.58 20.82-1.3.79-1.67-2.75a.76.76 0 0 1 .25-1.05.8.8 0 0 1 1.05.25z"
            fill="currentColor"
          />
          <path
            d="m18.78 17.65-1.3.79-1.67-2.75a.8.8 0 0 1 .25-1.05.8.8 0 0 1 1.05.25z"
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
            d="M8.82 4.9 7.54 2.78a2.1 2.1 0 0 0-2.32-.96 2.05 2.05 0 0 0-1.19 3.02l1.32 2.17c.15.23.46.31.69.17l2.61-1.59a.5.5 0 0 0 .17-.69"
            fill="currentColor"
          />
          <path
            d="m19.74 14.21-2.81-3.8a4.05 4.05 0 0 0-4.28-1.51l-.01-.02-1.66-2.73c-.3-.47-.92-.62-1.39-.33L6.12 7.93a1 1 0 0 0-.34 1.39l1.65 2.73.01.01a4.05 4.05 0 0 0-.61 4.51l2.08 4.24a2.5 2.5 0 0 0 3.43 1.15c.1-.05.13-.17.07-.27l-1.56-2.58a.76.76 0 0 1 .25-1.05.8.8 0 0 1 1.05.25l1.57 2.58a.2.2 0 0 0 .27.07l.96-.58a.2.2 0 0 0 .07-.27l-1.57-2.58a.8.8 0 0 1 .25-1.05.8.8 0 0 1 1.05.25l1.57 2.58a.2.2 0 0 0 .27.07l.96-.58a.2.2 0 0 0 .07-.27l-1.57-2.58a.8.8 0 0 1 .25-1.05.8.8 0 0 1 1.05.25l1.58 2.57a.2.2 0 0 0 .27.06 2.5 2.5 0 0 0 .54-3.57"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBroom;
