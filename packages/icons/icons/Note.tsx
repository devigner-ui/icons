import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconNote = forwardRef<SVGSVGElement, IconProps>(function IconNote(
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
            d="m22.33 10.44-.98 4.18c-.84 3.61-2.5 5.07-5.62 4.77q-.75-.06-1.62-.27l-1.68-.4c-4.17-.99-5.46-3.05-4.48-7.23l.98-4.19q.3-1.28.74-2.2c1.17-2.42 3.16-3.07 6.5-2.28l1.67.39c4.19.98 5.47 3.05 4.49 7.23"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.73 19.39q-.93.62-2.35 1.08l-1.58.52c-3.97 1.28-6.06.21-7.35-3.76l-1.28-3.95c-1.28-3.97-.22-6.07 3.75-7.35l1.58-.52q.62-.2 1.17-.31-.45.92-.74 2.2l-.98 4.19c-.98 4.18.31 6.24 4.48 7.23l1.68.4q.87.21 1.62.27"
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
            d="m22.33 10.44-.98 4.18c-.84 3.61-2.5 5.07-5.62 4.77q-.75-.06-1.62-.27l-1.68-.4c-4.17-.99-5.46-3.05-4.48-7.23l.98-4.19q.3-1.28.74-2.2c1.17-2.42 3.16-3.07 6.5-2.28l1.67.39c4.19.98 5.47 3.05 4.49 7.23"
            fill="currentColor"
          />
          <path
            d="M15.73 19.39q-.93.62-2.35 1.08l-1.58.52c-3.97 1.28-6.06.21-7.35-3.76l-1.28-3.95c-1.28-3.97-.22-6.07 3.75-7.35l1.58-.52q.62-.2 1.17-.31-.45.92-.74 2.2l-.98 4.19c-.98 4.18.31 6.24 4.48 7.23l1.68.4q.87.21 1.62.27"
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
            d="M14.22 20.16q-.39.16-.84.31l-1.58.52c-3.97 1.28-6.06.21-7.35-3.76l-1.28-3.95c-1.28-3.97-.22-6.07 3.75-7.35l1.54-.51q-.28.72-.5 1.65l-.98 4.19c-1.1 4.71.51 7.31 5.22 8.43l1.68.4z"
            fill="currentColor"
          />
          <path
            d="m17.84 3.21-1.67-.39c-3.34-.79-5.33-.14-6.5 2.28q-.45.92-.74 2.2l-.98 4.19c-.98 4.18.31 6.24 4.48 7.23l1.68.4q.87.21 1.62.27c3.12.3 4.78-1.16 5.62-4.77l.98-4.18c.98-4.18-.3-6.25-4.49-7.23"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconNote;
