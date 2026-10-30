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
            d="m8 13.4-.74.01v0zm.02.63.75-.02zm-1.37 1.85-.2-.72h0zm-1.98.55.2.72h0zm-2.62-1.96-.75.02h0zM2 12.5l.75-.02v0zm9.85-5 .02-.74zm8.92 3.73a.75.75 0 1 0 1.01-1.1zm-4.78 2.38.75-.02zm.01.4.75-.03zm1.75 2 .13-.75zm2 .35.13-.74zM11.96 12l.02-.75zm10.79 2.44a.75.75 0 1 0-1.5.04zM2.4 11.13l-.59-.47h0zm5.35-3.99A.75.75 0 1 0 8.1 8.6zm-3.04 2.9a.75.75 0 1 0-.83-1.25zm2.54 3.37.01.63 1.5-.03-.01-.63zm-.8 1.75-1.99.55.4 1.44 1.98-.55zm-3.66-.71-.05-1.97-1.5.04.05 1.97zm9.03-6.2c5.22.14 7.9 2.02 8.94 2.98l1.01-1.1c-1.29-1.2-4.3-3.23-9.91-3.37zm3.41 5.37.01.4 1.5-.04v-.4zm2.38 3.12 2 .35.26-1.47-2-.36zm-1.63-3.13.75-.02q0 0 0 0v-.04l-.02-.17-.11-.33a2 2 0 0 0-.68-.8c-.69-.53-1.88-.94-3.95-1l-.04 1.5c1.92.05 2.75.44 3.08.69a1 1 0 0 1 .22.25q.01.02.01 0v-.05q0 0 0 0v-.01q0 0 0 0zm-4-2.36c-2.07-.05-3.26.3-3.95.8q-.5.42-.67.82a2 2 0 0 0-.11.54q0 0 0 0t0 0L8 13.4l.75-.02q0 0 0 0t0 0v.07q0 .03 0 0-.01-.02.17-.19c.3-.21 1.09-.56 3.01-.5zm7.63 5.84c1.67.3 3.17-.95 3.13-2.65l-1.5.04c.02.72-.6 1.27-1.37 1.14zM2.75 12.5q0-.6.24-.9l-1.17-.93a2.8 2.8 0 0 0-.57 1.86zm12.5 1.53a2.9 2.9 0 0 0 2.37 2.72l.26-1.48a1.4 1.4 0 0 1-1.13-1.28zM4.47 15.71c-.8.22-1.65-.42-1.67-1.26l-1.5.04a2.85 2.85 0 0 0 3.57 2.66zm2.8-1.67c.02.53-.31.98-.82 1.12l.4 1.44A2.6 2.6 0 0 0 8.77 14zM8.1 8.6q1.57-.38 3.73-.34l.04-1.5q-2.34-.05-4.1.38zm-5.1 3c.31-.4.87-1 1.72-1.56L3.9 8.79a9 9 0 0 0-2.07 1.87z"
            fill="currentColor"
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
            d="M8 13.36v.62c0 .85-.58 1.6-1.42 1.85l-2 .59C3.3 16.79 2 15.86 2 14.56v-1.92c0-.49.12-.97.44-1.35m18.93-.93c.45.4.63.97.63 1.56v2.12a1.98 1.98 0 0 1-2.3 1.92l-2-.3a1.96 1.96 0 0 1-1.7-1.91v-.39"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.25 13.36a.75.75 0 0 0 1.5 0zM12 7.5v.75zm3.25 5.86a.75.75 0 0 0 1.5 0zM12 11.9v-.75zm-8.98-.13C3.9 10.7 6.52 8.25 12 8.25v-1.5c-6.01 0-9.02 2.71-10.14 4.06zM12 8.25c5.23 0 7.86 1.77 8.87 2.67l1-1.12C20.59 8.66 17.61 6.75 12 6.75zm4 5.11h.75v-.08l-.02-.12-.11-.34a2 2 0 0 0-.68-.8c-.68-.5-1.87-.87-3.94-.87v1.5c1.93 0 2.74.35 3.06.58q.2.18.2.21l-.01-.06v-.01zm-4-2.21c-2.07 0-3.26.37-3.94.87q-.51.4-.68.8a2 2 0 0 0-.13.53v.01a26 26 0 0 0 1.5 0v.08q0 .02 0 0c0-.01.04-.1.2-.2.3-.24 1.12-.6 3.05-.6z"
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
            d="M8 13.36v.62c0 .85-.58 1.6-1.42 1.85l-2 .59C3.3 16.79 2 15.86 2 14.56v-1.92c0-.49.12-.97.44-1.35A10.5 10.5 0 0 1 8 7.98zm8 0v.39c0 .96.72 1.77 1.7 1.91l2 .3c1.21.17 2.3-.73 2.3-1.92v-2.12a2 2 0 0 0-.63-1.56A11.4 11.4 0 0 0 16 7.88z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 11.9c4 0 4 1.46 4 1.46V7.88a20 20 0 0 0-4-.38q-2.3.02-4 .48v5.38s0-1.46 4-1.46"
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
            d="M8 13.98v-.62s0-1.46 4-1.46 4 1.46 4 1.46v.39c0 .96.72 1.77 1.7 1.91l2 .3c1.21.17 2.3-.73 2.3-1.92v-2.12a2 2 0 0 0-.63-1.56C20.23 9.34 17.42 7.5 12 7.5c-5.75 0-8.56 2.58-9.56 3.79-.32.38-.44.86-.44 1.35v1.92c0 1.3 1.3 2.23 2.58 1.86l2-.59c.84-.25 1.42-1 1.42-1.85"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconEndCall;
