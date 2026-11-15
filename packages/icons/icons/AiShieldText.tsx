import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiShieldText = forwardRef<SVGSVGElement, IconProps>(function IconAiShieldText(
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
            d="M9.3 14v-2.64a1.76 1.76 0 0 1 3.52 0V14M9.3 12.15h3.52m1.85-2.55V14"
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
            d="M9.3 14v-2.64a1.76 1.76 0 0 1 3.52 0V14M9.3 12.15h3.52m1.85-2.55V14"
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
            d="M8.55 14v-2.02c0-.66 0-1.29.34-1.88a2.53 2.53 0 0 1 4.42.15c.28.55.26 1.13.26 1.73V14a.75.75 0 0 1-1.5 0v-1.1h-2.02V14a.75.75 0 0 1-1.5 0zm3.49-2.9c-.23-.88-1.48-1-1.89-.18q-.1.23-.1.48h2.03q0-.15-.04-.3zm2.63-2.25c.41 0 .75.34.75.75V14a.75.75 0 0 1-1.5 0V9.6c0-.41.33-.75.75-.75z"
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
            d="M20.25 5v6a11.5 11.5 0 0 1-2.33 6.87 15 15 0 0 1-5.61 4.31.8.8 0 0 1-.62 0 15 15 0 0 1-5.61-4.31A11.5 11.5 0 0 1 3.75 11V5c0-.4.3-.72.69-.75 2.41-.18 4.65-.93 7.19-2.4a.8.8 0 0 1 .74 0 16.4 16.4 0 0 0 7.19 2.4c.39.03.69.36.69.75zM9.3 14.75c.41 0 .75-.34.75-.75v-1.1h2.02V14a.75.75 0 0 0 1.5 0v-2.02c0-.6.02-1.17-.26-1.73a2.53 2.53 0 0 0-4.42-.15c-.34.6-.34 1.22-.34 1.88V14c0 .41.34.75.75.75zm2.78-3.35h-2.04q.01-.25.11-.49c.4-.82 1.66-.7 1.89.2zm1.84-1.8V14a.75.75 0 0 0 1.5 0V9.6a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiShieldText;
