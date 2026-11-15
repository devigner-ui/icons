import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiCamera = forwardRef<SVGSVGElement, IconProps>(function IconAiCamera(
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
            d="M14.28 20H6c-1.7 0-3-1.3-3-3v-7c0-1.7 1.3-3 3-3h1.3l1.4-2.1c.3-.6.9-.9 1.5-.9h3.6c.6 0 1.2.3 1.5.9L16.7 7H18c1.7 0 3 1.3 3 3v7c0 1.7-1.3 3-3 3h-1.32"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.2 13.5a3.8 3.8 0 1 0 7.6 0 3.8 3.8 0 1 0-7.6 0Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 11.6c.17 1.25.65 1.73 1.9 1.9-1.25.17-1.73.65-1.9 1.9-.17-1.25-.65-1.73-1.9-1.9 1.25-.17 1.73-.65 1.9-1.9Z"
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
            d="M3 10c0-1.7 1.3-3 3-3h1.3l1.4-2.1c.3-.6.9-.9 1.5-.9h3.6c.6 0 1.2.3 1.5.9L16.7 7H18c1.7 0 3 1.3 3 3v7c0 1.7-1.3 3-3 3H6c-1.7 0-3-1.3-3-3Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.2 13.5a3.8 3.8 0 1 0 7.6 0 3.8 3.8 0 1 0-7.6 0Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 11.6c.17 1.25.65 1.73 1.9 1.9-1.25.17-1.73.65-1.9 1.9-.17-1.25-.65-1.73-1.9-1.9 1.25-.17 1.73-.65 1.9-1.9Z"
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
            d="M2.25 10a4 4 0 0 1 1.08-2.67A4 4 0 0 1 6 6.25h.9l1.18-1.77-.05.08a2.9 2.9 0 0 1 2.17-1.31h3.6a3 3 0 0 1 2.12 1.23l1.18 1.77h.9c1 .03 2.03.45 2.67 1.08A4 4 0 0 1 21.75 10v7a4 4 0 0 1-1.08 2.67A4 4 0 0 1 18 20.75H6a4 4 0 0 1-2.67-1.08A4 4 0 0 1 2.25 17z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12 8.95c1.2 0 2.44.55 3.22 1.33a4.7 4.7 0 0 1 1.33 3.22c0 1.2-.55 2.44-1.33 3.22A4.7 4.7 0 0 1 12 18.05c-1.2 0-2.43-.55-3.22-1.33a4.7 4.7 0 0 1-1.33-3.22c0-1.2.55-2.44 1.33-3.22A4.7 4.7 0 0 1 12 8.95zm0 1.9a.4.4 0 0 0-.4.35c-.09.7-.23 1.08-.53 1.37-.29.3-.68.44-1.37.53a.4.4 0 0 0 0 .8c.7.09 1.08.23 1.37.53.3.29.44.68.53 1.37a.4.4 0 0 0 .8 0c.09-.7.23-1.08.53-1.37.29-.3.68-.44 1.37-.53a.4.4 0 0 0 0-.8c-.7-.09-1.08-.23-1.37-.53-.3-.29-.44-.68-.53-1.37a.4.4 0 0 0-.4-.35z"
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
            d="M2.25 10a4 4 0 0 1 1.08-2.67A4 4 0 0 1 6 6.25h.9l1.18-1.77-.05.08a2.9 2.9 0 0 1 2.17-1.31h3.6a3 3 0 0 1 2.12 1.23l1.18 1.77h.9c1 .03 2.03.45 2.67 1.08A4 4 0 0 1 21.75 10v7a4 4 0 0 1-1.08 2.67A4 4 0 0 1 18 20.75H6a4 4 0 0 1-2.67-1.08A4 4 0 0 1 2.25 17zm6.53.28a4.7 4.7 0 0 0-1.33 3.22c0 1.2.55 2.44 1.33 3.22A4.7 4.7 0 0 0 12 18.05c1.2 0 2.44-.55 3.22-1.33a4.7 4.7 0 0 0 1.33-3.22c0-1.2-.55-2.44-1.33-3.22A4.7 4.7 0 0 0 12 8.95c-1.2 0-2.43.55-3.22 1.33zm3.62.92c.09.7.23 1.08.53 1.37.29.3.68.44 1.37.53a.4.4 0 0 1 0 .8c-.7.09-1.08.23-1.37.53-.3.29-.44.68-.53 1.37a.4.4 0 0 1-.8 0c-.09-.7-.23-1.08-.53-1.37-.29-.3-.68-.44-1.37-.53a.4.4 0 0 1 0-.8c.7-.09 1.08-.23 1.37-.53.3-.29.44-.68.53-1.37a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiCamera;
