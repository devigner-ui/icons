import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAlertHexagon = forwardRef<SVGSVGElement, IconProps>(
  function IconAlertHexagon(
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
              d="M12 7v6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle cx="12" cy="16" r="1" fill="currentColor" />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.84 3.8C9.87 2.6 10.9 2 12 2s2.13.6 4.16 1.8l.68.4c2.03 1.21 3.05 1.81 3.6 2.8s.56 2.2.56 4.6v.8c0 2.4 0 3.61-.56 4.6-.55.99-1.57 1.59-3.6 2.8l-.68.4C14.13 21.4 13.1 22 12 22s-2.13-.6-4.16-1.8l-.68-.4c-2.03-1.21-3.05-1.81-3.6-2.8S3 14.8 3 12.4v-.8c0-2.4 0-3.61.56-4.6.55-.99 1.57-1.59 3.6-2.8z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              d="m16.16 3.8.68.4c2.03 1.21 3.05 1.81 3.6 2.8s.56 2.2.56 4.6v.8c0 2.4 0 3.61-.56 4.6-.55.99-1.57 1.59-3.6 2.8l-.68.4C14.13 21.4 13.1 22 12 22s-2.13-.6-4.16-1.8l-.68-.4c-2.03-1.21-3.05-1.81-3.6-2.8S3 14.8 3 12.4v-.8c0-2.4 0-3.61.56-4.6.55-.99 1.57-1.59 3.6-2.8l.68-.4C9.87 2.6 10.9 2 12 2s2.13.6 4.16 1.8"
              fill="currentColor"
            />
            <path
              d="M12 6.25c.41 0 .75.34.75.75v6a.75.75 0 0 1-1.5 0V7c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path d="M12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="currentColor" />
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
              d="M7.84 3.8C9.87 2.6 10.9 2 12 2s2.13.6 4.16 1.8l.68.4c2.03 1.21 3.05 1.81 3.6 2.8s.56 2.2.56 4.6v.8c0 2.4 0 3.61-.56 4.6-.55.99-1.57 1.59-3.6 2.8l-.68.4C14.13 21.4 13.1 22 12 22s-2.13-.6-4.16-1.8l-.68-.4c-2.03-1.21-3.05-1.81-3.6-2.8S3 14.8 3 12.4v-.8c0-2.4 0-3.61.56-4.6.55-.99 1.57-1.59 3.6-2.8zM13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1-9.75c.41 0 .75.34.75.75v6a.75.75 0 0 1-1.5 0V7c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconAlertHexagon;
