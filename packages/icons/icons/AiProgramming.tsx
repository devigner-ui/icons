import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiProgramming = forwardRef<SVGSVGElement, IconProps>(function IconAiProgramming(
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
            d="M10.15 20.5H6A3.5 3.5 0 0 1 2.5 17V7A3.5 3.5 0 0 1 6 3.5h12A3.5 3.5 0 0 1 21.5 7v10a3.5 3.5 0 0 1-3.5 3.5h-5.45"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.5 8.5h19m-13 3-2 2.5 2 2.5m7-5 2 2.5-2 2.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 12.1c.17 1.25.65 1.73 1.9 1.9-1.25.17-1.73.65-1.9 1.9-.17-1.25-.65-1.73-1.9-1.9 1.25-.17 1.73-.65 1.9-1.9Z"
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
            d="M6 3.5h12A3.5 3.5 0 0 1 21.5 7v10a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 17V7A3.5 3.5 0 0 1 6 3.5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m8.5 11.5-2 2.5 2 2.5m7-5 2 2.5-2 2.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.5 8.5h19"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12 12.1c.17 1.25.65 1.73 1.9 1.9-1.25.17-1.73.65-1.9 1.9-.17-1.25-.65-1.73-1.9-1.9 1.25-.17 1.73-.65 1.9-1.9Z"
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
            d="M6 2.75h12A4.6 4.6 0 0 1 21 4a4.6 4.6 0 0 1 1.25 3v10A4.6 4.6 0 0 1 21 20a4.6 4.6 0 0 1-3 1.25H6A4.6 4.6 0 0 1 3 20a4.6 4.6 0 0 1-1.25-3V7A4.6 4.6 0 0 1 3 4a4.6 4.6 0 0 1 3-1.25z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M1.75 7.75h20.5v1.5H1.75zm7.22 3.16c.32.26.37.73.12 1.06L7.46 14l1.63 2.03a.75.75 0 0 1-1.18.94l-1.99-2.5a1 1 0 0 1-.17-.47 1 1 0 0 1 .17-.48l2-2.49a.75.75 0 0 1 1.05-.12zm6.06 0c.32-.26.8-.2 1.06.12l1.99 2.49a1 1 0 0 1 .17.48 1 1 0 0 1-.17.48l-2 2.49a.75.75 0 0 1-1.17-.94L16.54 14l-1.63-2.03a.75.75 0 0 1 .12-1.06z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 11.7c.09.7.23 1.08.53 1.37.29.3.68.44 1.37.53a.4.4 0 0 1 0 .8c-.7.09-1.08.23-1.37.53-.3.29-.44.68-.53 1.37a.4.4 0 0 1-.8 0c-.09-.7-.23-1.08-.53-1.37-.29-.3-.68-.44-1.37-.53a.4.4 0 0 1 0-.8c.7-.09 1.08-.23 1.37-.53.3-.29.44-.68.53-1.37a.4.4 0 0 1 .8 0z"
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
            d="M6 2.75h12A4.6 4.6 0 0 1 21 4a4.6 4.6 0 0 1 1.25 3v.75H1.75V7A4.6 4.6 0 0 1 3 4a4.6 4.6 0 0 1 3-1.25zM22.25 17A4.6 4.6 0 0 1 21 20a4.6 4.6 0 0 1-3 1.25H6A4.6 4.6 0 0 1 3 20a4.6 4.6 0 0 1-1.25-3V9.25h20.5zM7.91 11.03l-1.99 2.49a1 1 0 0 0-.17.48 1 1 0 0 0 .17.48l2 2.49a.75.75 0 0 0 1.17-.94L7.46 14l1.63-2.03a.75.75 0 0 0-1.18-.94zm7 .94L16.54 14l-1.63 2.03a.75.75 0 0 0 1.18.94l1.99-2.49a1 1 0 0 0 .17-.48 1 1 0 0 0-.17-.48l-2-2.49a.75.75 0 0 0-1.17.94zM12 11.35a.4.4 0 0 0-.4.35c-.09.7-.23 1.08-.53 1.37-.29.3-.68.44-1.37.53a.4.4 0 0 0 0 .8c.7.09 1.08.23 1.37.53.3.29.44.68.53 1.37a.4.4 0 0 0 .8 0c.09-.7.23-1.08.53-1.37.29-.3.68-.44 1.37-.53a.4.4 0 0 0 0-.8c-.7-.09-1.08-.23-1.37-.53-.3-.29-.44-.68-.53-1.37a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiProgramming;
