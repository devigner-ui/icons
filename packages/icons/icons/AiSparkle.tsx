import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiSparkle = forwardRef<SVGSVGElement, IconProps>(function IconAiSparkle(
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
            d="M12 3.5c.77 5.61 2.89 7.74 8.5 8.5-5.61.77-7.73 2.89-8.5 8.5-.77-5.61-2.89-7.73-8.5-8.5 5.61-.77 7.74-2.89 8.5-8.5Z"
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
          <path
            d="M12 3.5c.77 5.61 2.89 7.74 8.5 8.5-5.61.77-7.73 2.89-8.5 8.5-.77-5.61-2.89-7.73-8.5-8.5 5.61-.77 7.74-2.89 8.5-8.5Z"
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
            d="M12.4 3.1c.38 2.87 1.1 4.76 2.42 6.08s3.2 2.04 6.08 2.42a.4.4 0 0 1 0 .8c-2.87.38-4.76 1.1-6.08 2.42s-2.04 3.2-2.42 6.08a.4.4 0 0 1-.8 0c-.38-2.87-1.1-4.76-2.42-6.08s-3.2-2.04-6.08-2.42a.4.4 0 0 1 0-.8c2.87-.38 4.76-1.1 6.08-2.42s2.04-3.2 2.42-6.08a.4.4 0 0 1 .8 0z"
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
            d="M12.4 3.1c.38 2.87 1.1 4.76 2.42 6.08s3.2 2.04 6.08 2.42a.4.4 0 0 1 0 .8c-2.87.38-4.76 1.1-6.08 2.42s-2.04 3.2-2.42 6.08a.4.4 0 0 1-.8 0c-.38-2.87-1.1-4.76-2.42-6.08s-3.2-2.04-6.08-2.42a.4.4 0 0 1 0-.8c2.87-.38 4.76-1.1 6.08-2.42s2.04-3.2 2.42-6.08a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiSparkle;
