import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconEndCall = forwardRef<SVGSVGElement, IconProps>(function IconEndCall(
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
            d="M8 12.86v.62c0 .85-.58 1.6-1.42 1.85l-2 .59C3.3 16.29 2 15.36 2 14.06v-1.92c0-.49.12-.97.44-1.35m18.93-.93c.45.4.63.97.63 1.56v2.12a1.98 1.98 0 0 1-2.3 1.92l-2-.3a1.96 1.96 0 0 1-1.7-1.91v-.39"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.25 12.86a.75.75 0 0 0 1.5 0zM12 7v.75zm3.25 5.86a.75.75 0 0 0 1.5 0zM12 11.4v-.75zm-8.98-.13C3.9 10.2 6.52 7.75 12 7.75v-1.5c-6.01 0-9.02 2.71-10.14 4.06zM12 7.75c5.23 0 7.86 1.77 8.87 2.67l1-1.12C20.59 8.16 17.61 6.25 12 6.25zm4 5.11h.75v-.08l-.02-.12-.11-.34a2 2 0 0 0-.68-.8c-.68-.5-1.87-.87-3.94-.87v1.5c1.93 0 2.74.35 3.06.58q.2.18.2.21l-.01-.06v-.01zm-4-2.21c-2.07 0-3.26.37-3.94.87q-.51.4-.68.8a2 2 0 0 0-.13.53v.01a26 26 0 0 0 1.5 0v.08q0 .02 0 0c0-.01.04-.1.2-.2.3-.24 1.12-.6 3.05-.6z"
            fill="currentColor"
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
            d="M8 12.86v.62c0 .85-.58 1.6-1.42 1.85l-2 .59C3.3 16.29 2 15.36 2 14.06v-1.92c0-.49.12-.97.44-1.35A10.5 10.5 0 0 1 8 7.48zm8 0v.39c0 .96.72 1.77 1.7 1.91l2 .3c1.21.17 2.3-.73 2.3-1.92v-2.12a2 2 0 0 0-.63-1.56A11.4 11.4 0 0 0 16 7.38z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 11.4c4 0 4 1.46 4 1.46V7.38A20 20 0 0 0 12 7q-2.3.02-4 .48v5.38s0-1.46 4-1.46"
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
            d="M8 13.48v-.62s0-1.46 4-1.46 4 1.46 4 1.46v.39c0 .96.72 1.77 1.7 1.91l2 .3c1.21.17 2.3-.73 2.3-1.92v-2.12a2 2 0 0 0-.63-1.56C20.23 8.84 17.42 7 12 7c-5.75 0-8.56 2.58-9.56 3.79-.32.38-.44.86-.44 1.35v1.92c0 1.3 1.3 2.23 2.58 1.86l2-.59c.84-.25 1.42-1 1.42-1.85"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconEndCall;
