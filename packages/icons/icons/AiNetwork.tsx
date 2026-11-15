import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiNetwork = forwardRef<SVGSVGElement, IconProps>(function IconAiNetwork(
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
            d="M2.7 5a2.3 2.3 0 1 0 4.6 0 2.3 2.3 0 0 0-4.6 0zm14 0a2.3 2.3 0 1 0 4.6 0 2.3 2.3 0 0 0-4.6 0zm-14 14a2.3 2.3 0 1 0 4.6 0 2.3 2.3 0 0 0-4.6 0zm17.48-1.97q-.52-.32-1.18-.33a2.3 2.3 0 1 0 2.3 2.33"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m6.8 6.8 2 2m8.4-2-2 2m-8.4 8.4 2-2m8.4 2-2-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8.7c.3 2.18 1.12 3 3.3 3.3-2.18.3-3 1.12-3.3 3.3-.3-2.18-1.12-3-3.3-3.3 2.18-.3 3-1.12 3.3-3.3Z"
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
            d="M2.7 5a2.3 2.3 0 1 0 4.6 0 2.3 2.3 0 1 0-4.6 0Zm14 0a2.3 2.3 0 1 0 4.6 0 2.3 2.3 0 1 0-4.6 0Zm-14 14a2.3 2.3 0 1 0 4.6 0 2.3 2.3 0 1 0-4.6 0Zm14 0a2.3 2.3 0 1 0 4.6 0 2.3 2.3 0 1 0-4.6 0Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m6.8 6.8 2 2m8.4-2-2 2m-8.4 8.4 2-2m8.4 2-2-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8.7c.3 2.18 1.12 3 3.3 3.3-2.18.3-3 1.12-3.3 3.3-.3-2.18-1.12-3-3.3-3.3 2.18-.3 3-1.12 3.3-3.3Z"
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
            d="M5 1.95c.79 0 1.65.38 2.16.9.5.5.89 1.36.89 2.15s-.38 1.65-.9 2.16c-.5.5-1.36.89-2.15.89s-1.65-.38-2.16-.9A3.3 3.3 0 0 1 1.95 5c0-.79.38-1.65.9-2.16.5-.5 1.36-.89 2.15-.89zm14 0c.79 0 1.65.38 2.16.9.5.5.89 1.36.89 2.15s-.38 1.65-.9 2.16c-.5.5-1.36.89-2.15.89s-1.65-.38-2.16-.9A3.3 3.3 0 0 1 15.95 5c0-.79.38-1.65.9-2.16.5-.5 1.36-.89 2.15-.89zm-14 14c.79 0 1.65.38 2.16.9.5.5.89 1.36.89 2.15s-.38 1.65-.9 2.16c-.5.5-1.36.89-2.15.89s-1.65-.38-2.16-.9A3.3 3.3 0 0 1 1.95 19c0-.79.38-1.65.9-2.16.5-.5 1.36-.89 2.15-.89zm14 0c.79 0 1.65.38 2.16.9.5.5.89 1.36.89 2.15s-.38 1.65-.9 2.16c-.5.5-1.36.89-2.15.89s-1.65-.38-2.16-.9a3.3 3.3 0 0 1-.89-2.15c0-.79.38-1.65.9-2.16.5-.5 1.36-.89 2.15-.89z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M9.33 8.27a.75.75 0 0 1-1.06 1.06l-1.71-1.7q.67-.4 1.06-1.07zm6.4 1.06a.75.75 0 0 1-1.06-1.06l1.7-1.71q.4.67 1.07 1.06zm-7.46 5.34a.75.75 0 0 1 1.06 1.06l-1.7 1.71q-.4-.67-1.07-1.06zm6.4 1.06a.75.75 0 0 1 1.06-1.06l1.71 1.7q-.67.4-1.06 1.07z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 8.3c.15 1.16.42 1.86.93 2.37.5.51 1.21.78 2.37.93a.4.4 0 0 1 0 .8c-1.16.15-1.86.41-2.37.93-.52.5-.78 1.21-.93 2.37a.4.4 0 0 1-.8 0c-.15-1.16-.42-1.86-.93-2.37-.5-.52-1.21-.78-2.37-.94a.4.4 0 0 1 0-.79c1.16-.15 1.86-.42 2.37-.93s.78-1.21.93-2.37a.4.4 0 0 1 .8 0z"
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
            d="M5 1.95c.79 0 1.65.38 2.16.9.5.5.89 1.36.89 2.15 0 .53-.17 1.09-.44 1.55l1.72 1.72a.75.75 0 1 1-1.06 1.06L6.55 7.61c-.46.27-1.02.44-1.55.44-.79 0-1.65-.38-2.16-.9A3.3 3.3 0 0 1 1.95 5c0-.79.38-1.65.9-2.16.5-.5 1.36-.89 2.15-.89zm14 0c.79 0 1.65.38 2.16.9.5.5.89 1.36.89 2.15s-.38 1.65-.9 2.16c-.5.5-1.36.89-2.15.89-.53 0-1.09-.17-1.55-.44l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72A3 3 0 0 1 15.95 5c0-.79.38-1.65.9-2.16.5-.5 1.36-.89 2.15-.89zm-14 14c.53 0 1.09.17 1.55.44l1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72c.27.46.44 1.02.44 1.55 0 .79-.38 1.65-.9 2.16-.5.5-1.36.89-2.15.89s-1.65-.38-2.16-.9A3.3 3.3 0 0 1 1.95 19c0-.79.38-1.65.9-2.16.5-.5 1.36-.89 2.15-.89zm14 0c.79 0 1.65.38 2.16.9.5.5.89 1.36.89 2.15s-.38 1.65-.9 2.16c-.5.5-1.36.89-2.15.89s-1.65-.38-2.16-.9a3.3 3.3 0 0 1-.89-2.15c0-.53.17-1.09.44-1.55l-1.72-1.72a.75.75 0 1 1 1.06-1.06l1.72 1.72a3 3 0 0 1 1.55-.44zM12.4 8.3c.15 1.16.42 1.86.93 2.37.5.51 1.21.78 2.37.93a.4.4 0 0 1 0 .8c-1.16.15-1.86.41-2.37.93-.52.5-.78 1.21-.93 2.37a.4.4 0 0 1-.8 0c-.15-1.16-.42-1.86-.93-2.37-.5-.52-1.21-.78-2.37-.94a.4.4 0 0 1 0-.79c1.16-.15 1.86-.42 2.37-.93s.78-1.21.93-2.37a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiNetwork;
