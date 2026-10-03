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
            d="M21.04 3.94a.75.75 0 0 0-1.06-1.06zM12.2 5.01a.75.75 0 1 0 1.06 1.06zm6.18 6.18-.53.53a.75.75 0 0 0 1.07 0zm-14.8 1.79.64-.4zm-.67-1.1-.67.34.02.03.01.02zm1.5-4.87.35.66zm2.76-1.15.2.72zm5.36-.52.54-.53-.19-.18-.26-.03zm-1.59 15 .4-.64h0zm1.1.67-.4.64.03.01.03.02zm4.87-1.5-.66-.35v0zm1.15-2.76.72.2zm.92-.58a.75.75 0 1 0-1.46-.34zm1-13.29-2.13 2.13 1.07 1.06 2.12-2.13zm-6.72 3.19a3.25 3.25 0 0 1 4.6 0L18.91 5a4.75 4.75 0 0 0-6.72 0zm4.6 0a3.25 3.25 0 0 1 0 4.6l1.06 1.05a4.75 4.75 0 0 0 0-6.71zM4.21 12.59l-.67-1.1-1.28.78.67 1.1zm.54-4.92c.82-.43 1.73-.84 2.62-1.09l-.42-1.44c-1.01.29-2.02.74-2.9 1.2zm2.62-1.09a15 15 0 0 1 5.07-.5q0 0 0 0t0 0 0 0l.08-.74.1-.74q0 0 0 0t0 0h-.01q0 0 0 0l-.13-.02a10 10 0 0 0-1.59-.04c-1.02.03-2.43.17-3.94.6zm-3.8 4.96a2.9 2.9 0 0 1 1.18-3.87l-.7-1.32a4.4 4.4 0 0 0-1.82 5.87zm6.97 9.44 1.1.67.78-1.28-1.1-.67zm7.02-1.12c.47-.88.92-1.89 1.21-2.9l-1.44-.42c-.25.89-.66 1.8-1.1 2.62zm-5.87 1.82a4.4 4.4 0 0 0 5.87-1.82l-1.32-.7a2.9 2.9 0 0 1-3.87 1.18zm.3-15.8 5.85 5.84 1.07-1.06-5.85-5.85zm-9.06 7.49c1.9 3.1 4.5 5.72 7.61 7.61l.78-1.28a21 21 0 0 1-7.11-7.11zm15.84 3.59.2-.8-1.46-.33q-.07.35-.18.71z"
            fill="currentColor"
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
            d="M10.54 5.67 7.12 7.75 5.56 5.19a2 2 0 0 1 .67-2.75 2 2 0 0 1 2.75.67z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m12.49 9.16-3.16 1.92a4 4 0 0 0-1.51 5.18l2.05 4.18a2.45 2.45 0 0 0 3.54 1.03l6.43-3.91a2.46 2.46 0 0 0 .71-3.62l-2.77-3.74a3.97 3.97 0 0 0-5.29-1.04"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.43 5.1 6.3 8.22l2.08 3.41 5.13-3.12z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m14.98 16.81 1.65 2.71"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m12.42 18.37 1.65 2.71"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m17.54 15.25 1.65 2.71"
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
            d="M10.5 5.57 7.03 7.68l-1.58-2.6a2.03 2.03 0 0 1 3.47-2.11z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m19.94 17.64-.01.01-1.3.79-1.3.79-1.3.79-1.3.79-1.3.79h-.01a2.5 2.5 0 0 1-3.6-1.05l-2.08-4.24a4.05 4.05 0 0 1 1.53-5.26l3.21-1.95a4 4 0 0 1 5.37 1.05l2.81 3.8a2.5 2.5 0 0 1-.72 3.69"
            fill="currentColor"
          />
          <path
            d="M13.57 8.66a4 4 0 0 0-1.09.46l-3.21 1.95q-.53.32-.91.75l-.01-.01L6.7 9.08a1 1 0 0 1 .33-1.39l3.47-2.11c.48-.29 1.1-.14 1.39.33l1.66 2.73z"
            fill="currentColor"
          />
          <path
            d="m17.33 19.23-1.3.79-1.67-2.75a.8.8 0 0 1 .25-1.05.8.8 0 0 1 1.05.25z"
            fill="currentColor"
          />
          <path
            d="m14.73 20.82-1.3.79-1.67-2.75a.76.76 0 0 1 .25-1.05.8.8 0 0 1 1.05.25z"
            fill="currentColor"
          />
          <path
            d="m19.93 17.65-1.3.79-1.67-2.75a.8.8 0 0 1 .25-1.05.8.8 0 0 1 1.05.25z"
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
            d="M9.49 4.9 8.21 2.78a2.1 2.1 0 0 0-2.32-.96A2.05 2.05 0 0 0 4.7 4.84l1.32 2.17c.15.23.46.31.69.17l2.61-1.59a.5.5 0 0 0 .17-.69"
            fill="currentColor"
          />
          <path
            d="m20.41 14.21-2.81-3.8a4.05 4.05 0 0 0-4.28-1.51l-.01-.02-1.66-2.73c-.3-.47-.92-.62-1.39-.33L6.79 7.93a1 1 0 0 0-.34 1.39l1.65 2.73.01.01a4.05 4.05 0 0 0-.61 4.51l2.08 4.24a2.5 2.5 0 0 0 3.43 1.15c.1-.05.13-.17.07-.27l-1.56-2.58a.76.76 0 0 1 .25-1.05.8.8 0 0 1 1.05.25l1.57 2.58a.2.2 0 0 0 .27.07l.96-.58a.2.2 0 0 0 .07-.27l-1.57-2.58a.8.8 0 0 1 .25-1.05.8.8 0 0 1 1.05.25l1.57 2.58a.2.2 0 0 0 .27.07l.96-.58a.2.2 0 0 0 .07-.27l-1.57-2.58a.8.8 0 0 1 .25-1.05.8.8 0 0 1 1.05.25l1.58 2.57a.2.2 0 0 0 .27.06 2.5 2.5 0 0 0 .54-3.57"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBroom;
