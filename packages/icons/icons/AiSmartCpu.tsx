import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiSmartCpu = forwardRef<SVGSVGElement, IconProps>(function IconAiSmartCpu(
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


  /* TwoTone and Bulk stop the pins at the body's outer edge, so they don't
     sit over the dimmed body. */
  const clip = useId();
  const outside = (edge: number) => (
    <defs>
      <clipPath id={clip}>
        <rect x="0" y="0" width="24" height={edge} />
        <rect x="0" y="0" width={edge} height="24" />
      </clipPath>
    </defs>
  );

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
            d="M8.83 15.5H7.5a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-1.27"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 2v2.5M2 8h2.5M12 2v2.5M2 12h2.5m4.3-4.5h2.4c.72 0 1.3.58 1.3 1.3v2.4c0 .72-.58 1.3-1.3 1.3H8.8a1.3 1.3 0 0 1-1.3-1.3V8.8c0-.72.58-1.3 1.3-1.3Zm5.8 14v-2.52a1.68 1.68 0 0 1 3.36 0v2.52m-3.36-1.76h3.36m1.76-2.44v4.2"
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
          {duotone && outside(4.5 - Number(strokeWidth) / 2)}
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.5 4.5h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            clipPath={duotone ? `url(#${clip})` : undefined}
            d="M8 2v2.5M2 8h2.5M12 2v2.5M2 12h2.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.8 7.5h2.4c.72 0 1.3.58 1.3 1.3v2.4c0 .72-.58 1.3-1.3 1.3H8.8a1.3 1.3 0 0 1-1.3-1.3V8.8c0-.72.58-1.3 1.3-1.3Zm5.8 14v-2.52a1.68 1.68 0 0 1 3.36 0v2.52m-3.36-1.76h3.36m1.76-2.44v4.2"
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
          {outside(3.75)}
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.5 3.75h5a4 4 0 0 1 2.65 1.1 4 4 0 0 1 1.1 2.65v5a4 4 0 0 1-1.1 2.65 4 4 0 0 1-2.65 1.1h-5a4 4 0 0 1-2.65-1.1 4 4 0 0 1-1.1-2.65v-5a4 4 0 0 1 1.1-2.65 4 4 0 0 1 2.65-1.1z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            clipPath={`url(#${clip})`}
            d="M8 1.25c.41 0 .75.34.75.75v2.5a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75zM1.25 8c0-.41.34-.75.75-.75h2.5a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 8zM12 1.25c.41 0 .75.34.75.75v2.5a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75zM1.25 12c0-.41.34-.75.75-.75h2.5a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75z"
            fill="currentColor"
          />
          <path
            d="M8.8 6.75h2.4c.51.03 1.12.27 1.45.6s.57.94.6 1.45v2.4a2.5 2.5 0 0 1-.6 1.45c-.33.33-.94.57-1.45.6H8.8a2.5 2.5 0 0 1-1.45-.6 2.4 2.4 0 0 1-.6-1.45V8.8c.03-.51.27-1.12.6-1.45s.94-.57 1.45-.6zm5.05 14.75v-1.92c0-.55-.02-1.1.22-1.61a2.45 2.45 0 0 1 4.25-.3c.39.6.39 1.23.39 1.91v1.92a.75.75 0 0 1-1.5 0v-1.01h-1.86v1a.75.75 0 0 1-1.5 0zm3.32-2.78c-.23-.78-1.32-.9-1.7-.18q-.11.2-.13.45h1.88q0-.15-.05-.27zm2.55-2.17c.42 0 .75.34.75.75v4.2a.75.75 0 0 1-1.5 0v-4.2c0-.41.34-.75.75-.75z"
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
            d="M15.15 4.85a4 4 0 0 1 1.1 2.65v5a4 4 0 0 1-1.1 2.65 4 4 0 0 1-2.65 1.1h-5a4 4 0 0 1-2.65-1.1c-.58-.58-1-1.5-1.08-2.4H2a.75.75 0 0 1 0-1.5h1.75v-2.5H2a.75.75 0 0 1 0-1.5h1.77c.09-.9.5-1.82 1.08-2.4s1.5-1 2.4-1.08V2a.75.75 0 0 1 1.5 0v1.75h2.5V2a.75.75 0 0 1 1.5 0v1.77c.9.09 1.82.5 2.4 1.08zm-1.3 16.65v-1.92c0-.55-.02-1.1.22-1.61a2.45 2.45 0 0 1 4.25-.3c.39.6.39 1.23.39 1.91v1.92a.75.75 0 0 1-1.5 0v-1.01h-1.86v1a.75.75 0 0 1-1.5 0zm3.32-2.78c-.23-.78-1.32-.9-1.7-.18q-.11.2-.13.45h1.88q0-.15-.05-.27zm2.55-2.17c.42 0 .75.34.75.75v4.2a.75.75 0 0 1-1.5 0v-4.2c0-.41.34-.75.75-.75zM7.35 7.35c-.33.33-.57.94-.6 1.45v2.4c.03.51.27 1.12.6 1.45s.94.57 1.45.6h2.4a2.5 2.5 0 0 0 1.45-.6c.33-.33.57-.94.6-1.45V8.8a2.5 2.5 0 0 0-.6-1.45 2.4 2.4 0 0 0-1.45-.6H8.8c-.51.03-1.12.27-1.45.6z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiSmartCpu;
