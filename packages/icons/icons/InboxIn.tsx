import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconInboxIn = forwardRef<SVGSVGElement, IconProps>(function IconInboxIn(
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
            d="M12 2v8m0 0 3-3m-3 3L9 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 13h3.16c.9 0 1.36 0 1.76.18.4.19.69.53 1.28 1.22l.6.7c.6.7.89 1.03 1.28 1.22.4.18.85.18 1.76.18h.32c.9 0 1.36 0 1.76-.18.4-.19.69-.53 1.28-1.22l.6-.7c.6-.69.89-1.03 1.28-1.22.4-.18.85-.18 1.76-.18H22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M17 2.13c1.63.16 2.72.52 3.54 1.33C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.28 2.65 5.37 2.3 7 2.13"
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
            opacity={duotone ? "0.4" : "1"}
            d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
            fill="currentColor"
          />
          <path
            d="M3.46 20.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46c1.35-1.36 1.45-3.48 1.46-7.54h-3.16c-.9 0-1.36 0-1.76.18-.4.19-.69.53-1.28 1.22l-.6.7c-.6.7-.89 1.03-1.28 1.22-.4.18-.85.18-1.76.18h-.32c-.9 0-1.36 0-1.76-.18-.4-.19-.69-.53-1.28-1.22l-.6-.7c-.6-.69-.89-1.03-1.28-1.22-.4-.18-.85-.18-1.76-.18H2c0 4.06.1 6.18 1.46 7.54"
            fill="currentColor"
          />
          <path
            d="M12.53 11.33a.75.75 0 0 1-1.06 0l-3.3-3.3a.75.75 0 1 1 1.06-1.06l2.02 2.02V2h1.5v6.99l2.02-2.02a.75.75 0 1 1 1.06 1.06z"
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
            d="M12 10.75q.31 0 .53-.22l3-3a.75.75 0 0 0-1.06-1.06l-1.72 1.72V2a.75.75 0 0 0-1.5 0v6.19L9.53 6.47a.75.75 0 0 0-1.06 1.06l3 3q.22.22.53.22"
            fill="currentColor"
          />
          <path
            d="M3.46 20.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46c1.27-1.27 1.43-3.22 1.46-6.79h-3.16c-.97 0-1.23.02-1.44.11-.22.1-.4.29-1.03 1.03l-.7.8a4 4 0 0 1-1.44 1.3c-.55.26-1.16.26-1.94.26h-.58c-.78 0-1.39 0-1.94-.25a5 5 0 0 1-1.45-1.3l-.7-.81c-.63-.74-.8-.93-1.02-1.03s-.47-.11-1.44-.11H2c.03 3.57.2 5.52 1.46 6.79"
            fill="currentColor"
          />
          <path
            d="M22 12c0-4.71 0-7.07-1.46-8.54-1.21-1.2-3.03-1.42-6.29-1.45v2.87a2.25 2.25 0 0 1 2.34 3.71l-3 3a2.25 2.25 0 0 1-3.18 0l-3-3a2.25 2.25 0 0 1 2.34-3.71V2c-3.26.03-5.08.24-6.29 1.45C2 4.93 2 7.3 2 12v.25h3.3c.77 0 1.38 0 1.93.25.55.26.95.72 1.45 1.3l.7.82c.63.73.8.92 1.02 1.02s.47.11 1.44.11h.32c.97 0 1.23-.02 1.44-.11.22-.1.4-.29 1.03-1.02l.7-.81c.5-.59.89-1.05 1.44-1.3a5 5 0 0 1 1.94-.26H22z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconInboxIn;
