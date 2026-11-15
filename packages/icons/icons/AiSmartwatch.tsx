import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiSmartwatch = forwardRef<SVGSVGElement, IconProps>(function IconAiSmartwatch(
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
            d="m8.5 6 .6-2.6c.1-.5.5-.9 1-.9h3.8c.5 0 .9.4 1 .9l.6 2.6m-7 12 .6 2.6c.1.5.5.9 1 .9h3.8c.5 0 .9-.4 1-.9l.6-2.6m-5.1 0H9a3.5 3.5 0 0 1-3.5-3.5v-5A3.5 3.5 0 0 1 9 6h6a3.5 3.5 0 0 1 3.5 3.5v5A3.5 3.5 0 0 1 15 18h-2.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 9.3c.24 1.78.92 2.46 2.7 2.7-1.78.24-2.46.92-2.7 2.7-.24-1.78-.92-2.46-2.7-2.7 1.78-.24 2.46-.92 2.7-2.7Z"
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
            d="M9 6h6a3.5 3.5 0 0 1 3.5 3.5v5A3.5 3.5 0 0 1 15 18H9a3.5 3.5 0 0 1-3.5-3.5v-5A3.5 3.5 0 0 1 9 6Zm-.5 0 .6-2.6c.1-.5.5-.9 1-.9h3.8c.5 0 .9.4 1 .9l.6 2.6m-7 12 .6 2.6c.1.5.5.9 1 .9h3.8c.5 0 .9-.4 1-.9l.6-2.6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 9.3c.24 1.78.92 2.46 2.7 2.7-1.78.24-2.46.92-2.7 2.7-.24-1.78-.92-2.46-2.7-2.7 1.78-.24 2.46-.92 2.7-2.7Z"
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
            d="M18 6.5a4.6 4.6 0 0 1 1.25 3v5a4.6 4.6 0 0 1-1.25 3 4.4 4.4 0 0 1-1.86 1.07l-.4 1.7c-.11.52-.21 1.03-.6 1.44q-.46.47-1.12.53c-.4.04-.83.01-1.24.01H10.5c-.63 0-1.2-.06-1.65-.54-.39-.4-.49-.92-.6-1.45l-.4-1.7A4.4 4.4 0 0 1 6 17.5a4.6 4.6 0 0 1-1.24-3v-5A4.6 4.6 0 0 1 6 6.5a4.4 4.4 0 0 1 1.87-1.07l.4-1.7c.11-.52.21-1.03.6-1.44.46-.48 1.02-.54 1.65-.54h2.27c.4 0 .83-.03 1.24 0q.66.07 1.12.54c.39.4.49.92.6 1.45l.4 1.7c.72.2 1.38.57 1.86 1.05zM7.07 7.55a2.5 2.5 0 0 0-.81 1.95v5c-.03.81.27 1.4.8 1.95a2.5 2.5 0 0 0 1.95.8h6c.81.03 1.4-.27 1.95-.8a2.5 2.5 0 0 0 .8-1.95v-5c.03-.81-.27-1.4-.8-1.94A2.5 2.5 0 0 0 15 6.74H9c-.81-.03-1.4.27-1.94.8zm7.23-3.47c-.06-.24-.06-.61-.26-.78-.16-.13-.48-.05-.66-.05h-2.99c-.14 0-.32-.04-.44.08-.19.2-.2.6-.25.86l-.25 1.06h5.12zM9.69 19.8c.06.26.06.66.26.86.11.12.3.08.44.08h2.98c.18 0 .5.08.66-.05.2-.17.2-.54.26-.77l.27-1.18H9.44z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 8.9c.12.96.34 1.53.76 1.94.41.42.98.64 1.94.76a.4.4 0 0 1 0 .8c-.96.12-1.53.34-1.94.76-.42.41-.64.98-.76 1.94a.4.4 0 0 1-.8 0c-.12-.96-.34-1.53-.76-1.94-.41-.42-.98-.64-1.94-.76a.4.4 0 0 1 0-.8c.96-.12 1.53-.34 1.94-.76.42-.41.64-.98.76-1.94a.4.4 0 0 1 .8 0z"
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
            d="M18 6.5a4.6 4.6 0 0 1 1.25 3v5a4.6 4.6 0 0 1-1.25 3 4.4 4.4 0 0 1-1.86 1.07l-.4 1.7c-.11.52-.21 1.03-.6 1.44q-.46.47-1.12.53c-.4.04-.83.01-1.24.01H10.5c-.63 0-1.2-.06-1.65-.54-.39-.4-.49-.92-.6-1.45l-.4-1.7A4.4 4.4 0 0 1 6 17.5a4.6 4.6 0 0 1-1.24-3v-5A4.6 4.6 0 0 1 6 6.5a4.4 4.4 0 0 1 1.87-1.07l.4-1.7c.11-.52.21-1.03.6-1.44.46-.48 1.02-.54 1.65-.54h2.27c.4 0 .83-.03 1.24 0q.66.07 1.12.54c.39.4.49.92.6 1.45l.4 1.7c.72.2 1.38.57 1.86 1.05zM7.07 7.55a2.5 2.5 0 0 0-.81 1.95v5c-.03.81.27 1.4.8 1.95a2.5 2.5 0 0 0 1.95.8h6c.81.03 1.4-.27 1.95-.8a2.5 2.5 0 0 0 .8-1.95v-5c.03-.81-.27-1.4-.8-1.94A2.5 2.5 0 0 0 15 6.74H9c-.81-.03-1.4.27-1.94.8zm7.23-3.47c-.06-.24-.06-.61-.26-.78-.16-.13-.48-.05-.66-.05h-2.99c-.14 0-.32-.04-.44.08-.19.2-.2.6-.25.86l-.25 1.06h5.12zM9.69 19.8c.06.26.06.66.26.86.11.12.3.08.44.08h2.98c.18 0 .5.08.66-.05.2-.17.2-.54.26-.77l.27-1.18H9.44zm2.7-10.91c.13.96.35 1.53.77 1.94.41.42.98.64 1.94.76a.4.4 0 0 1 0 .8c-.96.12-1.53.34-1.94.76-.42.41-.64.98-.76 1.94a.4.4 0 0 1-.8 0c-.12-.96-.34-1.53-.76-1.94-.41-.42-.98-.64-1.94-.76a.4.4 0 0 1 0-.8c.96-.12 1.53-.34 1.94-.76.42-.41.64-.98.76-1.94a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiSmartwatch;
