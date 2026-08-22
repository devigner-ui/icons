import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBodyShape = forwardRef<SVGSVGElement, IconProps>(
  function IconBodyShape(
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
              d="M20 2s-2 4.69-2 8.57a6.7 6.7 0 0 0 1 3.32c.66 1.2 1.52 2.38 2.15 3.86.5 1.18.85 2.55.85 4.25"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 2s2 4.69 2 8.57a6.7 6.7 0 0 1-1 3.32c-.66 1.2-1.52 2.38-2.15 3.86A11 11 0 0 0 2 22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6 13h12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6 11h12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M12 22c.5-1.5 3-4.5 9-4.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M12 22c-.5-1.5-3-4.5-9-4.5"
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
              d="M21.84 17.46a24 24 0 0 0-1.54-2.84l-.52-.87H4.22l-.52.87c-.51.84-1.1 1.8-1.54 2.84A11 11 0 0 0 1.25 22a.75.75 0 0 0 1.5 0c0-1.49.29-2.7.7-3.74 5.4.14 7.47 2.87 7.84 3.98a.75.75 0 0 0 1.42 0c.37-1.11 2.44-3.84 7.83-3.98.42 1.04.71 2.25.71 3.74a.75.75 0 0 0 1.5 0c0-1.82-.38-3.28-.91-4.54"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4.69 1.7a.75.75 0 1 0-1.38.6l.02.04.28.72c.18.49.43 1.18.67 1.99.5 1.63.97 3.69.97 5.52q0 .89-.3 1.68h14.1q-.3-.8-.3-1.68c0-1.83.48-3.89.97-5.52a32 32 0 0 1 .95-2.7l.02-.04V2.3a.75.75 0 1 0-1.38-.6L20 2l-.69-.3v.02l-.02.05-.3.76c-.2.51-.45 1.24-.7 2.08-.49 1.6-.99 3.68-1.04 5.64H6.75a22 22 0 0 0-1.03-5.64 34 34 0 0 0-1-2.84l-.02-.05z"
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
              d="M21.84 17.46a24 24 0 0 0-1.54-2.84l-.52-.87H4.22l-.52.87c-.51.84-1.1 1.8-1.54 2.84A11 11 0 0 0 1.25 22a.75.75 0 0 0 1.5 0c0-1.49.29-2.7.7-3.74 5.4.14 7.47 2.87 7.84 3.98a.75.75 0 0 0 1.42 0c.37-1.11 2.44-3.84 7.83-3.98.42 1.04.71 2.25.71 3.74a.75.75 0 0 0 1.5 0c0-1.82-.38-3.28-.91-4.54"
              fill="currentColor"
            />
            <path
              d="M4.69 1.7a.75.75 0 1 0-1.38.6l.02.04.28.72q.29.75.67 1.99c.5 1.63.97 3.69.97 5.52q0 .88-.3 1.68h14.1q-.3-.8-.3-1.68c0-1.83.48-3.89.97-5.52a32 32 0 0 1 .95-2.7l.02-.05a.75.75 0 1 0-1.38-.6L20 2l-.69-.3v.02l-.03.05-.3.76c-.19.51-.44 1.24-.7 2.08-.48 1.6-.98 3.68-1.03 5.64H6.75a22 22 0 0 0-1.03-5.64 34 34 0 0 0-1-2.84l-.02-.05z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBodyShape;
