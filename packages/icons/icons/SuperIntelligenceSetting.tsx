import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSuperIntelligenceSetting = forwardRef<SVGSVGElement, IconProps>(function IconSuperIntelligenceSetting(
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
            d="m8.88 18.63-.7-.29-1.7 1.39-2.2-2.2 1.38-1.71-.84-2.04-2.2-.22v-3.12l2.2-.22.84-2.04-1.39-1.7 2.2-2.2 1.71 1.38 2.04-.84.22-2.2h3.12l.22 2.2 2.04.84 1.7-1.39 2.2 2.2-1.38 1.71.84 2.04 2.2.22v3.12l-2.2.22-.84 2.04 1.39 1.7-2.2 2.2-1.71-1.38-2.04.84-.22 2.2h-3.12l-.13-1.25"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.46 10.72c-.54-.72-2.45-.72-2.72.32-.22.72 2.72.88 2.72 1.92-.27 1.04-2.18 1.04-2.72.32M14.26 10v4"
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
            d="m10.22 4.82.22-2.2h3.12l.22 2.2 2.04.84 1.7-1.39 2.2 2.2-1.38 1.71.84 2.04 2.2.22v3.12l-2.2.22-.84 2.04 1.39 1.7-2.2 2.2-1.71-1.38-2.04.84-.22 2.2h-3.12l-.22-2.2-2.04-.84-1.7 1.39-2.2-2.2 1.38-1.71-.84-2.04-2.2-.22v-3.12l2.2-.22.84-2.04-1.39-1.7 2.2-2.2 1.71 1.38Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.46 10.72c-.54-.72-2.45-.72-2.72.32-.22.72 2.72.88 2.72 1.92-.27 1.04-2.18 1.04-2.72.32M14.26 10v4"
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
            d="M9.7 2.56a.75.75 0 0 1 .75-.68h3.1a.7.7 0 0 1 .51.2 1 1 0 0 1 .25.48l.17 1.74 1.21.5 1.35-1.1a.8.8 0 0 1 .84-.09l.18.14 2.2 2.19a.75.75 0 0 1 .04 1.02L19.2 8.3l.5 1.2 1.74.18a.75.75 0 0 1 .68.76v3.1a.7.7 0 0 1-.2.51 1 1 0 0 1-.48.25l-1.74.17-.5 1.2 1.1 1.36a.8.8 0 0 1 .09.84l-.14.18-2.2 2.2a.75.75 0 0 1-1 .04l-1.36-1.1-1.2.5-.18 1.74a.75.75 0 0 1-.76.68h-3.1a.7.7 0 0 1-.51-.2 1 1 0 0 1-.25-.48l-.17-1.74-1.21-.5-1.35 1.1a.8.8 0 0 1-.84.09l-.18-.14-2.2-2.2a.75.75 0 0 1-.05-1l1.1-1.36-.5-1.2-1.73-.18a.75.75 0 0 1-.68-.76v-3.1a.7.7 0 0 1 .2-.51 1 1 0 0 1 .48-.25L4.3 9.5l.5-1.2-1.1-1.35a.8.8 0 0 1-.09-.84l.14-.18 2.2-2.2a.75.75 0 0 1 1-.05l1.36 1.1 1.2-.5z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M11.86 11.17c-.21-.24-.71-.24-1-.18l-.05.01.7.27c.6.22 1.3.52 1.58 1.14a1 1 0 0 1 .1.4 1 1 0 0 1-.05.48c-.64 1.53-2.96 1.63-4 .44a.75.75 0 0 1 1.2-.9c.23.26.77.24 1.07.16l.16-.06-.12-.06q-.33-.16-.68-.28c-.68-.25-1.66-.5-1.78-1.35-.09-.63.41-1.22.93-1.49 1-.53 2.4-.34 3.14.52a.75.75 0 0 1-1.2.9zm2.4-1.92c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75z"
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
            d="M9.7 2.56a.75.75 0 0 1 .75-.68h3.1a.7.7 0 0 1 .51.2 1 1 0 0 1 .25.48l.17 1.74 1.21.5 1.35-1.1a.8.8 0 0 1 .84-.09l.18.14 2.2 2.19a.75.75 0 0 1 .04 1.02L19.2 8.3l.5 1.2 1.74.18a.75.75 0 0 1 .68.76v3.1a.7.7 0 0 1-.2.51 1 1 0 0 1-.48.25l-1.74.17-.5 1.2 1.1 1.36a.8.8 0 0 1 .09.84l-.14.18-2.2 2.2a.75.75 0 0 1-1 .04l-1.36-1.1-1.2.5-.18 1.74a.75.75 0 0 1-.76.68h-3.1a.7.7 0 0 1-.51-.2 1 1 0 0 1-.25-.48l-.17-1.74-1.21-.5-1.35 1.1a.8.8 0 0 1-.84.09l-.18-.14-2.2-2.2a.75.75 0 0 1-.05-1l1.1-1.36-.5-1.2-1.73-.18a.75.75 0 0 1-.68-.76v-3.1a.7.7 0 0 1 .2-.51 1 1 0 0 1 .48-.25L4.3 9.5l.5-1.2-1.1-1.35a.8.8 0 0 1-.09-.84l.14-.18 2.2-2.2a.75.75 0 0 1 1-.05l1.36 1.1 1.2-.5zm3.21 8.76c.33-.25.4-.72.15-1.05a2.7 2.7 0 0 0-3.15-.52c-.5.27-1.01.86-.92 1.49.12.84 1.1 1.1 1.78 1.35a6 6 0 0 1 .8.34l-.16.06c-.3.08-.84.1-1.07-.16a.75.75 0 0 0-1.2.9c1.04 1.2 3.35 1.1 4-.44a1 1 0 0 0 .05-.48 1 1 0 0 0-.1-.4c-.28-.61-.98-.91-1.57-1.14l-.7-.26.04-.02c.29-.05.78-.06 1 .18.25.33.72.4 1.05.15zm.6-1.32v4a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconSuperIntelligenceSetting;
