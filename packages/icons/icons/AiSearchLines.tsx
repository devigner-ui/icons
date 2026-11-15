import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiSearchLines = forwardRef<SVGSVGElement, IconProps>(function IconAiSearchLines(
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
            d="M17.84 12.26a4 4 0 1 0 1.42 1.89"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.5 18.5 21 21M3 5h14M3 10h7m-7 5h5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5 13.6c.17 1.25.65 1.73 1.9 1.9-1.25.17-1.73.65-1.9 1.9-.17-1.25-.65-1.73-1.9-1.9 1.25-.17 1.73-.65 1.9-1.9Z"
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
            opacity={duotone ? "0.4" : "1"}
            d="M11.5 15.5a4 4 0 1 0 8 0 4 4 0 1 0-8 0Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={duotone ? "M3 5h14M3 10h7m-7 5h5" : "M18.5 18.5 21 21M3 5h14M3 10h7m-7 5h5"}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {duotone && <path d="M21.53 20.47a.75.75 0 0 1-1.06 1.06l-2.18-2.18q.6-.46 1.06-1.06z" fill="currentColor" />}
          <path
            d="M15.5 13.6c.17 1.25.65 1.73 1.9 1.9-1.25.17-1.73.65-1.9 1.9-.17-1.25-.65-1.73-1.9-1.9 1.25-.17 1.73-.65 1.9-1.9Z"
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
            d="M15.5 10.75a5 5 0 0 1 3.36 1.4c.82.8 1.39 2.1 1.39 3.35a5 5 0 0 1-1.4 3.36c-.8.82-2.1 1.39-3.35 1.39a5 5 0 0 1-3.36-1.4 5 5 0 0 1-1.39-3.35 5 5 0 0 1 1.4-3.36c.8-.82 2.1-1.39 3.35-1.39z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M21.53 20.47a.75.75 0 0 1-1.06 1.06l-2.18-2.18q.6-.46 1.06-1.06zM2.25 5c0-.41.34-.75.75-.75h14a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 5zm0 5c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75zm0 5c0-.41.34-.75.75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M15.9 13.2c.09.7.23 1.08.53 1.37.29.3.68.44 1.37.53a.4.4 0 0 1 0 .8c-.7.09-1.08.23-1.37.53-.3.29-.44.68-.53 1.37a.4.4 0 0 1-.8 0c-.09-.7-.23-1.08-.53-1.37-.29-.3-.68-.44-1.37-.53a.4.4 0 0 1 0-.8c.7-.09 1.08-.23 1.37-.53.3-.29.44-.67.53-1.37a.4.4 0 0 1 .8 0z"
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
            d="M15.5 10.75a5 5 0 0 1 3.36 1.4c.82.8 1.39 2.1 1.39 3.35 0 1-.36 2-.9 2.78l2.18 2.19a.75.75 0 1 1-1.06 1.06l-2.19-2.19c-.78.56-1.79.91-2.78.91a5 5 0 0 1-3.36-1.39 5 5 0 0 1-1.4-3.36c0-1.26.58-2.54 1.4-3.36s2.1-1.39 3.36-1.39zM2.25 5c0-.41.34-.75.75-.75h14a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 5zm0 5c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75zm0 5c0-.41.34-.75.75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75zm13.25-2.15a.4.4 0 0 0-.4.35c-.09.7-.23 1.08-.53 1.37-.29.3-.68.44-1.37.53a.4.4 0 0 0 0 .8c.7.09 1.08.23 1.37.53.3.29.44.68.53 1.37a.4.4 0 0 0 .8 0c.09-.7.23-1.08.53-1.37.29-.3.68-.44 1.37-.53a.4.4 0 0 0 0-.8c-.7-.09-1.08-.23-1.37-.53-.3-.29-.44-.67-.53-1.37a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiSearchLines;
