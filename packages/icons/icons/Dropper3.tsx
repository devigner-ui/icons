import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDropper3 = forwardRef<SVGSVGElement, IconProps>(function IconDropper3(
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
            d="M22 16.5V10c0-1.89 0-2.83-.59-3.41C20.83 6 19.9 6 18 6h-4c-1.89 0-2.83 0-3.41.59C10 7.17 10 8.1 10 10v6.5c0 .66.28 1.3.76 1.73a7.8 7.8 0 0 0 10.48 0c.48-.44.76-1.07.76-1.72"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M18 16h-4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M18 11.42c0 1.15-.9 2.08-2 2.08s-2-.93-2-2.08c0-.72.78-1.68 1.37-2.3a.86.86 0 0 1 1.26 0c.59.62 1.37 1.58 1.37 2.3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16 21v1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 22V8c0-2.83 0-4.24.88-5.12S5.18 2 8 2h3.94a3 3 0 0 1 1.88.68l.03.03.08.07a3 3 0 0 0 2.07.66M18.5 2l-.52.52-.08.08a3 3 0 0 1-1.9.84M16 2v1.44m0 0V6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 16.5V10c0-1.89 0-2.83-.59-3.41C20.83 6 19.9 6 18 6h-4c-1.89 0-2.83 0-3.41.59C10 7.17 10 8.1 10 10v6.5c0 .66.28 1.3.76 1.73a7.8 7.8 0 0 0 10.48 0c.48-.44.76-1.07.76-1.72m-8.75-.5c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75M16 13.5c1.1 0 2-.93 2-2.08 0-.72-.78-1.68-1.37-2.3a.86.86 0 0 0-1.26 0c-.59.62-1.37 1.58-1.37 2.3 0 1.15.9 2.08 2 2.08"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.3 2.1a3.8 3.8 0 0 0-2.36-.85H7.95c-1.37 0-2.47 0-3.34.12-.9.12-1.66.38-2.26.98S1.49 3.7 1.37 4.6c-.12.87-.12 1.97-.12 3.34v14.3a.75.75 0 1 0 1.5 0V8c0-1.44 0-2.44.1-3.2.1-.73.28-1.11.56-1.4.28-.27.66-.45 1.4-.55L8 2.75h3.93q.8 0 1.41.51l.03.03.09.07q.81.65 1.79.79V6h1.5V4.07c.61-.15 1.2-.47 1.68-.94l.07-.07.53-.53a.75.75 0 0 0-1.06-1.06l-.52.52-.07.07q-.29.27-.63.43V2a.75.75 0 0 0-1.5 0v.62q-.46-.12-.85-.43l-.07-.06z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.25 20.22v1.03a.75.75 0 1 0 1.5 0v-1.03q-.75.07-1.5 0"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 10v6.5c0 .66-.28 1.3-.76 1.73a7.8 7.8 0 0 1-4.49 2v1.02a.75.75 0 1 1-1.5 0v-1.03a7.8 7.8 0 0 1-4.49-1.99 2.3 2.3 0 0 1-.76-1.72V10c0-1.89 0-2.83.59-3.41C11.17 6 12.1 6 14 6h4c1.89 0 2.83 0 3.41.59C22 7.17 22 8.1 22 10m-8 5.25a.75.75 0 0 0 0 1.5h4a.75.75 0 1 0 0-1.5zm4-3.83c0 1.15-.9 2.08-2 2.08s-2-.93-2-2.08c0-.72.78-1.68 1.37-2.3a.86.86 0 0 1 1.26 0c.59.62 1.37 1.58 1.37 2.3"
            fill="currentColor"
          />
          <path
            d="M14.3 2.1a3.8 3.8 0 0 0-2.36-.85H7.95c-1.37 0-2.47 0-3.34.12-.9.12-1.66.38-2.26.98S1.49 3.7 1.37 4.6c-.12.87-.12 1.97-.12 3.34v14.3a.75.75 0 1 0 1.5 0V8c0-1.44 0-2.44.1-3.2.1-.73.28-1.11.56-1.4.28-.27.66-.45 1.4-.55L8 2.75h3.93q.8 0 1.41.51l.03.03.09.07q.81.65 1.79.79V6h1.5V4.07c.61-.15 1.2-.47 1.68-.94l.07-.07.53-.53a.75.75 0 0 0-1.06-1.06l-.52.52-.07.07q-.29.27-.63.43V2a.75.75 0 0 0-1.5 0v.62q-.46-.12-.85-.43l-.07-.06z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconDropper3;
