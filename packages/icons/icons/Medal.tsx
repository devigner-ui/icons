import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMedal = forwardRef<SVGSVGElement, IconProps>(function IconMedal(
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
            d="M12.67 15a6.63 6.63 0 0 0 6.75-6.5c0-3.59-3.02-6.5-6.75-6.5a6.63 6.63 0 0 0-6.75 6.5c0 3.59 3.02 6.5 6.75 6.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m8.19 13.52-.01 7.38c0 .9.63 1.34 1.41.97l2.68-1.27c.22-.11.59-.11.81 0l2.69 1.27c.77.36 1.41-.07 1.41-.97v-7.56"
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
            d="M12.67 15a6.63 6.63 0 0 0 6.75-6.5c0-3.59-3.02-6.5-6.75-6.5a6.63 6.63 0 0 0-6.75 6.5c0 3.59 3.02 6.5 6.75 6.5"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m8.19 13.52-.01 7.38c0 .9.63 1.34 1.41.97l2.68-1.27c.22-.11.59-.11.81 0l2.69 1.27c.77.36 1.41-.07 1.41-.97v-7.56"
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
            d="M12.67 15a6.63 6.63 0 0 0 6.75-6.5c0-3.59-3.02-6.5-6.75-6.5a6.63 6.63 0 0 0-6.75 6.5c0 3.59 3.02 6.5 6.75 6.5"
            fill="currentColor"
          />
          <path
            d="M16.46 15.61c.33-.17.71.08.71.45v4.85c0 .9-.63 1.34-1.41.97l-2.68-1.27c-.23-.1-.59-.1-.82 0l-2.68 1.27c-.78.36-1.41-.08-1.41-.98l.02-4.84a.5.5 0 0 1 .71-.45q1.71.87 3.77.89 2.06-.02 3.79-.89"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconMedal;
