import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRewind15SecondsForward = forwardRef<SVGSVGElement, IconProps>(
  function IconRewind15SecondsForward(
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
              opacity={duotone ? "0.4" : "1"}
              d="M10 4.5 12 2a10 10 0 1 0 4 .83"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 8.5h-2.64a.5.5 0 0 0-.47.34l-.67 2a.5.5 0 0 0 .47.66h1.31a2 2 0 1 1 0 4h-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m7.5 10.5 2.5-2v7"
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
              d="M10.32 7.82c.26.13.43.4.43.68v7a.75.75 0 0 1-1.5 0v-5.44l-1.28 1.03a.75.75 0 0 1-.94-1.18l2.5-2a.8.8 0 0 1 .8-.09"
              fill="currentColor"
            />
            <path
              d="M12.67 8.6c.17-.5.65-.85 1.19-.85h2.64a.75.75 0 0 1 0 1.5h-2.46l-.5 1.5h.96a2.75 2.75 0 1 1 0 5.5h-2a.75.75 0 0 1 0-1.5h2a1.25 1.25 0 1 0 0-2.5h-1.3c-.86 0-1.46-.84-1.2-1.65z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.68 1.68a.8.8 0 0 0-.68-.43q-1.1 0-2.15.22a10.75 10.75 0 1 0 6.45.67.75.75 0 0 0-.6 1.38 9.25 9.25 0 1 1-6.45-.35V4.5a.75.75 0 0 0 1.34.47l2-2.5a.8.8 0 0 0 .09-.8"
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
              d="M10.32 7.82c.26.13.43.4.43.68v7a.75.75 0 0 1-1.5 0v-5.44l-1.28 1.03a.75.75 0 0 1-.94-1.18l2.5-2a.8.8 0 0 1 .8-.09m2.35.78c.17-.5.65-.85 1.19-.85h2.64a.75.75 0 0 1 0 1.5h-2.46l-.5 1.5h.96a2.75 2.75 0 1 1 0 5.5h-2a.75.75 0 0 1 0-1.5h2a1.25 1.25 0 1 0 0-2.5h-1.3c-.86 0-1.46-.84-1.2-1.65z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.68 1.68a.8.8 0 0 0-.68-.43q-1.1 0-2.15.22a10.75 10.75 0 1 0 6.45.67.75.75 0 0 0-.6 1.38 9.25 9.25 0 1 1-6.45-.35V4.5a.75.75 0 0 0 1.34.47l2-2.5a.8.8 0 0 0 .09-.8"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRewind15SecondsForward;
