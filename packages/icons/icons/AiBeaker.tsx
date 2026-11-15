import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiBeaker = forwardRef<SVGSVGElement, IconProps>(function IconAiBeaker(
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
            d="m16.75 10.11 2.75 6.29c1.35 3.08.47 5.6-3.67 5.6H8.16c-4.18 0-5.02-2.53-3.66-5.61l4.25-9.65h-.3A2.37 2.37 0 1 1 8.44 2h7.11c.66 0 1.25.27 1.68.7.56.56.84 1.38.63 2.25a2.46 2.46 0 0 1-2.42 1.79h-.16l.51 1.17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 13.2c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            opacity={duotone ? "0.4" : "1"}
            d="M8.16 22c-4.18 0-5.02-2.53-3.66-5.61l4.25-9.65h-.3A2.37 2.37 0 1 1 8.44 2h7.11c.66 0 1.25.27 1.68.7.56.56.84 1.38.63 2.25a2.46 2.46 0 0 1-2.42 1.79h-.16l4.22 9.66c1.35 3.08.47 5.6-3.67 5.6Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 13.2c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            d="M8.16 22.75c-2.26-.04-3.9-.83-4.56-2.04-.67-1.2-.5-2.96.21-4.62l3.85-8.73a3.3 3.3 0 0 1-1.42-.78 3.3 3.3 0 0 1-.91-2.2c0-.81.38-1.69.9-2.21.53-.52 1.4-.88 2.21-.92h7.11c.82.04 1.69.4 2.21.92.68.68 1.02 1.9.82 2.99a3.5 3.5 0 0 1-1.18 1.7q-.45.32-1.03.5l3.82 8.74c.7 1.66.86 3.42.19 4.62s-2.31 2-4.55 2.03z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 12.8c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
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
            d="M8.16 22.75c-2.26-.04-3.9-.83-4.56-2.04-.67-1.2-.5-2.96.21-4.62l3.85-8.73a3.3 3.3 0 0 1-1.42-.78 3.3 3.3 0 0 1-.91-2.2c0-.81.38-1.69.9-2.21.53-.52 1.4-.88 2.21-.92h7.11c.82.04 1.69.4 2.21.92.68.68 1.02 1.9.82 2.99a3.5 3.5 0 0 1-1.18 1.7q-.45.32-1.03.5l3.82 8.74c.7 1.66.86 3.42.19 4.62s-2.31 2-4.55 2.03zM12 12.45a.4.4 0 0 0-.4.35c-.1.86-.3 1.36-.67 1.73s-.87.56-1.73.67a.4.4 0 0 0 0 .8c.86.1 1.36.3 1.73.67s.56.87.67 1.73a.4.4 0 0 0 .8 0c.1-.86.3-1.36.67-1.73s.87-.56 1.73-.67a.4.4 0 0 0 0-.8c-.86-.1-1.36-.3-1.73-.67s-.56-.87-.67-1.73a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiBeaker;
