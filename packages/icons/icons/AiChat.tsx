import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiChat = forwardRef<SVGSVGElement, IconProps>(function IconAiChat(
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
            d="m7.96 19.13 1.14-.53c.9.25 1.9.4 2.9.4 5 0 9-3.4 9-7.75S17 3.5 12 3.5s-9 3.4-9 7.75c0 2.2 1 4.2 2.7 5.6L5 20.5l.78-.36"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 7.85c.3 2.24 1.16 3.1 3.4 3.4-2.24.3-3.1 1.16-3.4 3.4-.3-2.24-1.16-3.1-3.4-3.4 2.24-.3 3.1-1.16 3.4-3.4Z"
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
            d="M12 3.5c-5 0-9 3.4-9 7.75 0 2.2 1 4.2 2.7 5.6L5 20.5l4.1-1.9c.9.25 1.9.4 2.9.4 5 0 9-3.4 9-7.75S17 3.5 12 3.5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 7.85c.3 2.24 1.16 3.1 3.4 3.4-2.24.3-3.1 1.16-3.4 3.4-.3-2.24-1.16-3.1-3.4-3.4 2.24-.3 3.1-1.16 3.4-3.4Z"
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
            d="M21.75 11.25a8.2 8.2 0 0 1-2.89 6.08A10.7 10.7 0 0 1 12 19.75a11 11 0 0 1-2.83-.36l-3.86 1.8a.75.75 0 0 1-1.05-.83l.62-3.23a8 8 0 0 1-2.63-5.88 8.2 8.2 0 0 1 2.89-6.08A10.7 10.7 0 0 1 12 2.75c2.63 0 5.14.95 6.86 2.42a8.2 8.2 0 0 1 2.89 6.08z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 7.45c.15 1.2.43 1.92.96 2.44.52.53 1.25.8 2.44.96a.4.4 0 0 1 0 .8c-1.2.15-1.92.43-2.44.96-.53.52-.8 1.25-.96 2.44a.4.4 0 0 1-.8 0c-.15-1.2-.43-1.92-.96-2.44-.52-.53-1.25-.8-2.44-.96a.4.4 0 0 1 0-.8c1.2-.15 1.92-.43 2.44-.96.53-.52.8-1.25.96-2.44a.4.4 0 0 1 .8 0z"
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
            d="M21.75 11.25a8.2 8.2 0 0 1-2.89 6.08A10.7 10.7 0 0 1 12 19.75a11 11 0 0 1-2.83-.36l-3.86 1.8a.75.75 0 0 1-1.05-.83l.62-3.23a8 8 0 0 1-2.63-5.88 8.2 8.2 0 0 1 2.89-6.08A10.7 10.7 0 0 1 12 2.75c2.63 0 5.14.95 6.86 2.42a8.2 8.2 0 0 1 2.89 6.08zM12 7.1a.4.4 0 0 0-.4.35c-.15 1.2-.43 1.92-.96 2.44-.52.53-1.25.8-2.44.96a.4.4 0 0 0 0 .8c1.2.15 1.92.43 2.44.96.53.52.8 1.25.96 2.44a.4.4 0 0 0 .8 0c.15-1.2.43-1.92.96-2.44.52-.53 1.25-.8 2.44-.96a.4.4 0 0 0 0-.8c-1.2-.15-1.92-.43-2.44-.96-.53-.52-.8-1.25-.96-2.44a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiChat;
