import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLockKeyholeMinimalisticUnlocked = forwardRef<
  SVGSVGElement,
  IconProps
>(function IconLockKeyholeMinimalisticUnlocked(
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
            d="M2 16c0-2.83 0-4.24.88-5.12S5.18 10 8 10h8c2.83 0 4.24 0 5.12.88S22 13.18 22 16s0 4.24-.88 5.12-2.3.88-5.12.88H8c-2.83 0-4.24 0-5.12-.88S2 18.82 2 16"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6 10V8a6 6 0 0 1 11.81-1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 14v4"
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
            d="M2 16c0-2.83 0-4.24.88-5.12S5.18 10 8 10h8c2.83 0 4.24 0 5.12.88S22 13.18 22 16s0 4.24-.88 5.12-2.3.88-5.12.88H8c-2.83 0-4.24 0-5.12-.88S2 18.82 2 16"
            fill="currentColor"
          />
          <path
            d="M12.75 14a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"
            fill="currentColor"
          />
          <path
            d="M6.75 8a5.25 5.25 0 0 1 10.33-1.31.75.75 0 0 0 1.46-.38A6.75 6.75 0 0 0 5.25 8v2.06Q5.9 10 6.75 10z"
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
            d="M12 2.75A5.25 5.25 0 0 0 6.75 8v2H16c2.83 0 4.24 0 5.12.88S22 13.18 22 16s0 4.24-.88 5.12-2.3.88-5.12.88H8c-2.83 0-4.24 0-5.12-.88S2 18.82 2 16s0-4.24.88-5.12c.53-.53 1.26-.74 2.37-.82V8a6.75 6.75 0 0 1 13.29-1.69.75.75 0 0 1-1.46.38A5.25 5.25 0 0 0 12 2.75M12.75 14a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconLockKeyholeMinimalisticUnlocked;
