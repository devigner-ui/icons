import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiShield = forwardRef<SVGSVGElement, IconProps>(function IconAiShield(
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
            d="M19.5 7.23V5C17 4.8 14.6 4 12 2.5 9.4 4 7 4.8 4.5 5v6c0 5 3.3 8.6 7.5 10.5 4.2-1.9 7.5-5.5 7.5-10.5V9.63"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8.2c.3 2.18 1.12 3 3.3 3.3-2.18.3-3 1.12-3.3 3.3-.3-2.18-1.12-3-3.3-3.3 2.18-.3 3-1.12 3.3-3.3Z"
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
            d="M12 2.5C9.4 4 7 4.8 4.5 5v6c0 5 3.3 8.6 7.5 10.5 4.2-1.9 7.5-5.5 7.5-10.5V5C17 4.8 14.6 4 12 2.5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8.2c.3 2.18 1.12 3 3.3 3.3-2.18.3-3 1.12-3.3 3.3-.3-2.18-1.12-3-3.3-3.3 2.18-.3 3-1.12 3.3-3.3Z"
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
            d="M20.25 5v6a11.5 11.5 0 0 1-2.33 6.87 15 15 0 0 1-5.61 4.31.8.8 0 0 1-.62 0 15 15 0 0 1-5.61-4.31A11.5 11.5 0 0 1 3.75 11V5c0-.4.3-.72.69-.75 2.41-.18 4.65-.93 7.19-2.4a.8.8 0 0 1 .74 0 16.4 16.4 0 0 0 7.19 2.4c.39.03.69.36.69.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 7.8c.15 1.16.42 1.86.93 2.37.5.51 1.21.78 2.37.93a.4.4 0 0 1 0 .8c-1.16.15-1.86.42-2.37.93-.52.5-.78 1.21-.93 2.37a.4.4 0 0 1-.8 0c-.15-1.16-.42-1.86-.93-2.37-.5-.52-1.21-.78-2.37-.93a.4.4 0 0 1 0-.8c1.16-.15 1.86-.42 2.37-.93s.78-1.21.93-2.37a.4.4 0 0 1 .8 0z"
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
            d="M20.25 5v6a11.5 11.5 0 0 1-2.33 6.87 15 15 0 0 1-5.61 4.31.8.8 0 0 1-.62 0 15 15 0 0 1-5.61-4.31A11.5 11.5 0 0 1 3.75 11V5c0-.4.3-.72.69-.75 2.41-.18 4.65-.93 7.19-2.4a.8.8 0 0 1 .74 0 16.4 16.4 0 0 0 7.19 2.4c.39.03.69.36.69.75zM12 7.45a.4.4 0 0 0-.4.35c-.15 1.16-.42 1.86-.93 2.37-.5.51-1.21.78-2.37.93a.4.4 0 0 0 0 .8c1.16.15 1.86.42 2.37.93.51.5.78 1.21.93 2.37a.4.4 0 0 0 .8 0c.15-1.16.42-1.86.93-2.37.5-.52 1.21-.78 2.37-.93a.4.4 0 0 0 0-.8c-1.16-.15-1.86-.42-2.37-.93-.52-.51-.78-1.21-.93-2.37a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiShield;
