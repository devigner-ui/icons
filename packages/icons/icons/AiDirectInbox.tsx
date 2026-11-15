import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiDirectInbox = forwardRef<SVGSVGElement, IconProps>(function IconAiDirectInbox(
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
            d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2c1.67 0 3.04 0 4.19.07m5.74 5.74q.09 1.7.07 4.19c0 4.7 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22h-1.03m-2.4-.03c-2.53-.08-4.05-.38-5.11-1.43C2 19.07 2 16.7 2 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 13h3.16c.9 0 1.36 0 1.76.18.4.19.69.53 1.28 1.22l.6.7c.6.7.89 1.03 1.28 1.22.4.18.85.18 1.76.18h.32c.9 0 1.36 0 1.76-.18.4-.19.69-.53 1.28-1.22l.6-.7c.6-.69.89-1.03 1.28-1.22.4-.18.85-.18 1.76-.18H22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M19.5 2.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2c1.67 0 3.04 0 4.19.07m5.74 5.74q.09 1.7.07 4.19c0 4.7 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 13h3.16c.9 0 1.36 0 1.76.18.4.19.69.53 1.28 1.22l.6.7c.6.7.89 1.03 1.28 1.22.4.18.85.18 1.76.18h.32c.9 0 1.36 0 1.76-.18.4-.19.69-.53 1.28-1.22l.6-.7c.6-.69.89-1.03 1.28-1.22.4-.18.85-.18 1.76-.18H22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M19.5 2.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            d="m21.82 6.52.06.53.04.57.03.6.03.66v.7l.02.76v1.91h-3.78l-.5.03-.48.1-.47.13-.2.1-.19.13-.35.3-.34.35-.36.42-.1.1-.6.71-.22.25-.18.2-.15.17-.12.13-.1.1-.1.07-.16.1-.18.06-.11.01-.15.02H13l-.23.02h-1.75l-.17-.02-.14-.01-.12-.02-.18-.06-.16-.1-.1-.07-.1-.1-.12-.13-.15-.17-.18-.2-.22-.25-.6-.72-.1-.1-.35-.41-.35-.36-.35-.3-.2-.12-.2-.11-.2-.08-.22-.07-.45-.07-.5-.03H2v-1.9l.01-.76.01-.7.03-.66.03-.61.04-.57.06-.53.08-.5.1-.45.11-.43.15-.39.16-.36.2-.33.22-.31.26-.3.29-.25.3-.22.34-.2.36-.17.4-.14.42-.12.46-.1.49-.07.53-.06.57-.04.61-.04.66-.02.7-.01h.76l.8-.01h3.26l.7.02.66.02.61.04.57.04.53.06h0c-.01.19-.02.16-.08.22-.08.08 0 .06-.57.12a2 2 0 0 0 0 3.96c.58.06.49.04.57.12s.07 0 .12.57a2 2 0 0 0 3.97 0c.05-.58.03-.49.12-.57.05-.06.02-.07.21-.08z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M3.46 20.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46c1.27-1.27 1.43-3.22 1.46-6.79h-3.16c-.97 0-1.23.02-1.44.11-.22.1-.4.29-1.03 1.03l-.6.7-.1.1a4 4 0 0 1-1.44 1.3c-.55.26-1.16.26-1.94.26h-.58c-.78 0-1.39 0-1.94-.25a5 5 0 0 1-1.45-1.3l-.09-.1-.6-.71c-.64-.74-.81-.93-1.03-1.03s-.47-.11-1.44-.11H2c.03 3.57.2 5.52 1.46 6.79"
            fill="currentColor"
          />
          <path
            d="M19.9 1.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
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
            d="M3.46 20.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46c1.27-1.27 1.43-3.22 1.46-6.79h-3.16c-.97 0-1.23.02-1.44.11-.22.1-.4.29-1.03 1.03l-.6.7-.1.1a4 4 0 0 1-1.44 1.3c-.55.26-1.16.26-1.94.26h-.58c-.78 0-1.39 0-1.94-.25a5 5 0 0 1-1.45-1.3l-.09-.1-.6-.71c-.64-.74-.81-.93-1.03-1.03s-.47-.11-1.44-.11H2c.03 3.57.2 5.52 1.46 6.79"
            fill="currentColor"
          />
          <path
            d="m21.82 6.52.06.53.04.57.03.6.03.66v.7l.02.76v1.91h-3.78l-.5.03-.48.1-.47.13-.2.1-.19.13-.35.3-.34.35-.36.42-.1.1-.6.71-.22.25-.18.2-.15.17-.12.13-.1.1-.1.07-.16.1-.18.06-.11.01-.15.02H13l-.23.02h-1.75l-.17-.02-.14-.01-.12-.02-.18-.06-.16-.1-.1-.07-.1-.1-.12-.13-.15-.17-.18-.2-.22-.25-.6-.72-.1-.1-.35-.41-.35-.36-.35-.3-.2-.12-.2-.11-.2-.08-.22-.07-.45-.07-.5-.03H2v-1.9l.01-.76.01-.7.03-.66.03-.61.04-.57.06-.53.08-.5.1-.45.11-.43.15-.39.16-.36.2-.33.22-.31.26-.3.29-.25.3-.22.34-.2.36-.17.4-.14.42-.12.46-.1.49-.07.53-.06.57-.04.61-.04.66-.02.7-.01h.76l.8-.01h3.26l.7.02.66.02.61.04.57.04.53.06h0c-.01.19-.02.16-.08.22-.08.08 0 .06-.57.12a2 2 0 0 0 0 3.96c.58.06.49.04.57.12s.07 0 .12.57a2 2 0 0 0 3.97 0c.05-.58.03-.49.12-.57.05-.06.02-.07.21-.08z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19.9 1.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiDirectInbox;
