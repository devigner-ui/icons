import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSuperIntelligenceChip = forwardRef<SVGSVGElement, IconProps>(function IconSuperIntelligenceChip(
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
            d="M9.83 18.5H8.5a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-3.27"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 2.5v3m0 13v3M2.5 9h3m13 0h3M12 2.5v3m0 13v3M2.5 12h3m13 0h3M15 2.5v3m0 13v3M2.5 15h3m13 0h3m-8.93-4.6c-.68-.9-3.05-.9-3.4.4-.27.9 3.4 1.1 3.4 2.4-.34 1.3-2.71 1.3-3.4.4m5.65-4.1v5"
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
            d="M8.5 5.5h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3Zm.5-3v3m0 13v3M2.5 9h3m13 0h3M12 2.5v3m0 13v3M2.5 12h3m13 0h3M15 2.5v3m0 13v3M2.5 15h3m13 0h3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.57 10.4c-.68-.9-3.05-.9-3.4.4-.27.9 3.4 1.1 3.4 2.4-.34 1.3-2.71 1.3-3.4.4m5.65-4.1v5"
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
            d="M18.15 5.85c.59.58 1 1.5 1.08 2.4h2.27a.75.75 0 0 1 0 1.5h-2.25v1.5h2.25a.75.75 0 0 1 0 1.5h-2.25v1.5h2.25a.75.75 0 0 1 0 1.5h-2.27a4 4 0 0 1-1.08 2.4c-.58.59-1.5 1-2.4 1.08v2.27a.75.75 0 0 1-1.5 0v-2.25h-1.5v2.25a.75.75 0 0 1-1.5 0v-2.25h-1.5v2.25a.75.75 0 0 1-1.5 0v-2.27c-.9-.09-1.82-.5-2.4-1.08s-1-1.5-1.08-2.4H2.5a.75.75 0 0 1 0-1.5h2.25v-1.5H2.5a.75.75 0 0 1 0-1.5h2.25v-1.5H2.5a.75.75 0 0 1 0-1.5h2.27c.09-.9.5-1.82 1.08-2.4s1.5-1 2.4-1.08V2.5a.75.75 0 0 1 1.5 0v2.25h1.5V2.5a.75.75 0 0 1 1.5 0v2.25h1.5V2.5a.75.75 0 0 1 1.5 0v2.27c.9.09 1.82.5 2.4 1.08z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M11.98 10.85c-.33-.38-1.08-.39-1.53-.27q-.21.06-.4.19l.23.1.87.32c.92.34 1.94.77 2.15 1.8a1 1 0 0 1-.04.5c-.68 1.83-3.5 1.96-4.68.56a.75.75 0 0 1 1.2-.9c.34.4 1.12.4 1.58.25q.24-.06.4-.24c-.07-.05-.2-.16-.26-.18q-.36-.2-.77-.34c-.56-.22-1.16-.38-1.67-.71-.3-.2-.57-.48-.63-.85-.13-.79.53-1.5 1.19-1.8 1.14-.51 2.72-.31 3.55.67a.75.75 0 0 1-1.2.9zm2.84-2.1c.42 0 .75.34.75.75v5a.75.75 0 0 1-1.5 0v-5c0-.41.34-.75.75-.75z"
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
            d="M18.15 5.85c.59.58 1 1.5 1.08 2.4h2.27a.75.75 0 0 1 0 1.5h-2.25v1.5h2.25a.75.75 0 0 1 0 1.5h-2.25v1.5h2.25a.75.75 0 0 1 0 1.5h-2.27a4 4 0 0 1-1.08 2.4c-.58.59-1.5 1-2.4 1.08v2.27a.75.75 0 0 1-1.5 0v-2.25h-1.5v2.25a.75.75 0 0 1-1.5 0v-2.25h-1.5v2.25a.75.75 0 0 1-1.5 0v-2.27c-.9-.09-1.82-.5-2.4-1.08s-1-1.5-1.08-2.4H2.5a.75.75 0 0 1 0-1.5h2.25v-1.5H2.5a.75.75 0 0 1 0-1.5h2.25v-1.5H2.5a.75.75 0 0 1 0-1.5h2.27c.09-.9.5-1.82 1.08-2.4s1.5-1 2.4-1.08V2.5a.75.75 0 0 1 1.5 0v2.25h1.5V2.5a.75.75 0 0 1 1.5 0v2.25h1.5V2.5a.75.75 0 0 1 1.5 0v2.27c.9.09 1.82.5 2.4 1.08zM13.03 11c.33-.25.4-.72.14-1.05-.83-.98-2.4-1.18-3.55-.66-.66.3-1.32 1-1.2 1.79.07.37.34.65.64.85.5.33 1.11.5 1.67.7q.4.14.77.34l.27.2q-.17.17-.41.23c-.46.15-1.25.15-1.59-.25a.75.75 0 0 0-1.2.9c1.19 1.4 4.01 1.27 4.7-.55a.7.7 0 0 0 .02-.51c-.2-1.03-1.22-1.46-2.14-1.8q-.45-.14-.87-.33l-.23-.1q.18-.13.4-.18c.45-.12 1.2-.11 1.52.27.25.33.72.4 1.05.15zm1.05-1.5v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconSuperIntelligenceChip;
