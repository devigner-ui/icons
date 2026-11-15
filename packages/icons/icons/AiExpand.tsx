import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiExpand = forwardRef<SVGSVGElement, IconProps>(function IconAiExpand(
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
            d="M9.61 15.21A2.2 2.2 0 0 1 8.5 13.3v-2.6c0-1.22.99-2.2 2.2-2.2h2.6c1.21 0 2.2.99 2.2 2.2v2.6a2.2 2.2 0 0 1-2.2 2.2h-1.34"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.2 6.2 3 3m0 2.8V3h2.8m12 3.2L21 3m-2.8 0H21v2.8m-3.2 12L21 21m0-2.8V21h-2.8m-12-3.2L3 21m2.8 0H3v-2.8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 10.1c.17 1.25.65 1.73 1.9 1.9-1.25.17-1.73.65-1.9 1.9-.17-1.25-.65-1.73-1.9-1.9 1.25-.17 1.73-.65 1.9-1.9Z"
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
            d="M10.7 8.5h2.6c1.21 0 2.2.98 2.2 2.2v2.6a2.2 2.2 0 0 1-2.2 2.2h-2.6a2.2 2.2 0 0 1-2.2-2.2v-2.6c0-1.21.98-2.2 2.2-2.2Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.2 6.2 3 3m0 2.8V3h2.8m12 3.2L21 3m-2.8 0H21v2.8m-3.2 12L21 21m0-2.8V21h-2.8m-12-3.2L3 21m2.8 0H3v-2.8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 10.1c.17 1.25.65 1.73 1.9 1.9-1.25.17-1.73.65-1.9 1.9-.17-1.25-.65-1.73-1.9-1.9 1.25-.17 1.73-.65 1.9-1.9Z"
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
            d="M10.7 7.75h2.6c.76.03 1.6.37 2.09.86.49.5.83 1.33.86 2.09v2.6c-.03.76-.37 1.6-.86 2.09-.5.49-1.33.83-2.09.86h-2.6a3.3 3.3 0 0 1-2.09-.86 3.3 3.3 0 0 1-.86-2.09v-2.6c.03-.76.37-1.6.86-2.09.5-.49 1.33-.83 2.09-.86z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M6.73 6.73c-.3.3-.77.3-1.06 0L3.75 4.81v.99a.75.75 0 0 1-1.5 0V3q0 0 0 0a.7.7 0 0 1 .22-.53.8.8 0 0 1 .53-.22h2.8a.75.75 0 0 1 0 1.5h-1l1.92 1.92c.3.3.3.77 0 1.06zm10.54 0a.75.75 0 0 1 0-1.06l1.92-1.92h-.99a.75.75 0 0 1 0-1.5H21a.7.7 0 0 1 .53.22.8.8 0 0 1 .22.53v2.8a.75.75 0 0 1-1.5 0v-1l-1.92 1.92c-.3.3-.77.3-1.06 0zm0 10.54c.3-.3.77-.3 1.06 0l1.92 1.92v-.99a.75.75 0 0 1 1.5 0V21a.7.7 0 0 1-.22.53.8.8 0 0 1-.53.22h-2.8a.75.75 0 0 1 0-1.5h.99l-1.92-1.92a.75.75 0 0 1 0-1.06zm-10.54 0c.3.3.3.77 0 1.06l-1.92 1.92h.99a.75.75 0 0 1 0 1.5H3a.7.7 0 0 1-.53-.22.8.8 0 0 1-.22-.53v-2.8a.75.75 0 0 1 1.5 0v.99l1.92-1.92c.3-.3.77-.3 1.06 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 9.7c.09.7.23 1.08.53 1.37.29.3.68.44 1.37.53a.4.4 0 0 1 0 .8c-.7.09-1.08.23-1.37.53-.3.29-.44.68-.53 1.37a.4.4 0 0 1-.8 0c-.09-.7-.23-1.08-.53-1.37-.29-.3-.68-.44-1.37-.53a.4.4 0 0 1 0-.8c.7-.09 1.08-.23 1.37-.53.3-.29.44-.67.53-1.37a.4.4 0 0 1 .8 0z"
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
            d="M10.7 7.75h2.6c.76.03 1.6.37 2.09.86.49.5.83 1.33.86 2.09v2.6c-.03.76-.37 1.6-.86 2.09-.5.49-1.33.83-2.09.86h-2.6a3.3 3.3 0 0 1-2.09-.86 3.3 3.3 0 0 1-.86-2.09v-2.6c.03-.76.37-1.6.86-2.09.5-.49 1.33-.83 2.09-.86zM6.73 6.73c-.3.3-.77.3-1.06 0L3.75 4.81v.99a.75.75 0 0 1-1.5 0V3q0 0 0 0a.7.7 0 0 1 .22-.53.8.8 0 0 1 .53-.22h2.8a.75.75 0 0 1 0 1.5h-1l1.92 1.92c.3.3.3.77 0 1.06zm10.54 0a.75.75 0 0 1 0-1.06l1.92-1.92h-.99a.75.75 0 0 1 0-1.5H21a.7.7 0 0 1 .53.22.8.8 0 0 1 .22.53v2.8a.75.75 0 0 1-1.5 0v-1l-1.92 1.92c-.3.3-.77.3-1.06 0zm0 10.54c.3-.3.77-.3 1.06 0l1.92 1.92v-.99a.75.75 0 0 1 1.5 0V21a.7.7 0 0 1-.22.53.8.8 0 0 1-.53.22h-2.8a.75.75 0 0 1 0-1.5h.99l-1.92-1.92a.75.75 0 0 1 0-1.06zm-10.54 0c.3.3.3.77 0 1.06l-1.92 1.92h.99a.75.75 0 0 1 0 1.5H3a.7.7 0 0 1-.53-.22.8.8 0 0 1-.22-.53v-2.8a.75.75 0 0 1 1.5 0v.99l1.92-1.92c.3-.3.77-.3 1.06 0zM12 9.35a.4.4 0 0 0-.4.35c-.09.7-.23 1.08-.53 1.37-.29.3-.68.44-1.37.53a.4.4 0 0 0 0 .8c.7.09 1.08.23 1.37.53.3.29.44.68.53 1.37a.4.4 0 0 0 .8 0c.09-.7.23-1.08.53-1.37.29-.3.68-.44 1.37-.53a.4.4 0 0 0 0-.8c-.7-.09-1.08-.23-1.37-.53-.3-.29-.44-.67-.53-1.37a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiExpand;
