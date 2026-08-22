import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTicket2 = forwardRef<SVGSVGElement, IconProps>(function IconTicket2(
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
            d="M19.58 14.7a2.35 2.35 0 0 0 2.35 2.33c0 3.75-.94 4.7-4.69 4.7H7.86c-3.75 0-4.69-.95-4.69-4.7v-.46a2.36 2.36 0 0 0 2.35-2.35 2.36 2.36 0 0 0-2.35-2.35v-.46c.01-3.75.94-4.69 4.69-4.69h9.37c3.75 0 4.69.94 4.69 4.7v.93a2.34 2.34 0 0 0-2.34 2.34"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.88 6.72H7.8l2.93-2.93c2.4-2.39 3.6-2.39 5.98 0l.6.6a2.1 2.1 0 0 0-.42 2.33"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.55 6.72v15"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="5 5"
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
            d="M21.51 13.17a.7.7 0 0 0 .7-.72v-.88c0-3.93-1.2-5.12-5.12-5.12h-6.3v2.43c.39 0 .71.32.71.71v2.68c0 .39-.32.71-.71.71v2.51c.39 0 .71.32.71.71v2.68c0 .39-.32.71-.71.71V22h6.3c3.92 0 5.12-1.2 5.12-5.12a.7.7 0 0 0-.7-.71 1.5 1.5 0 1 1 0-3"
            fill="currentColor"
          />
          <path
            d="M8.24 6.46q.01 0 0 0h9.03l-.01-.05a1.2 1.2 0 0 1 .37-.95.7.7 0 0 0 .21-.5.7.7 0 0 0-.21-.5l-.55-.56C16.1 2.91 15.02 2 13.76 2s-2.34.91-3.32 1.9L7.89 6.46z"
            fill="currentColor"
          />
          <path
            d="M10.08 9.59v2.68c0 .39.32.71.71.71v2.51a.7.7 0 0 0-.71.71v2.68c0 .39.32.71.71.71V22H8.25c-3.92 0-5.12-1.2-5.12-5.12v-.43c0-.4.31-.71.7-.71a1.5 1.5 0 1 0 0-3.02.7.7 0 0 1-.7-.71v-.43c0-3.93 1.2-5.12 5.12-5.12h2.53v2.43a.7.7 0 0 0-.7.7"
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
            d="M17.86 4.96v.02l-.77-.02H9.4l1.07-1.06c.98-.99 2.06-1.9 3.31-1.9 1.26 0 2.34.91 3.32 1.9l.56.56q.21.2.21.5"
            fill="currentColor"
          />
          <path
            d="M21.51 13.17a.7.7 0 0 0 .7-.72v-.88c0-3.93-1.2-5.12-5.12-5.12H8.25c-3.92 0-5.12 1.2-5.12 5.12V12c0 .4.31.71.7.71a1.52 1.52 0 0 1 0 3.03.7.7 0 0 0-.7.71v.43c0 3.93 1.2 5.12 5.12 5.12h8.83c3.92 0 5.12-1.2 5.12-5.12a.7.7 0 0 0-.7-.71 1.5 1.5 0 1 1 .01-3M11.5 18.86c0 .39-.32.71-.7.71a.7.7 0 0 1-.72-.71v-2.68c0-.39.32-.71.71-.71.4 0 .71.32.71.71zm0-6.59c0 .39-.32.71-.7.71a.7.7 0 0 1-.72-.71V9.59c0-.39.32-.71.71-.71.4 0 .71.32.71.71z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTicket2;
