import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiLandscape = forwardRef<SVGSVGElement, IconProps>(function IconAiLandscape(
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
            d="M9.01 5.24H14c3.77 0 5.66-.02 6.83 1.16S22 9.47 22 13.24s0 5.65-1.17 6.83-3.06 1.17-6.83 1.17h-3.23m-2.4 0c-2.71-.03-4.21-.18-5.2-1.17C2 18.89 2 17 2 13.24c0-2.12 0-3.64.21-4.78"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.01 5.8c-.11-.93-.34-1.57-.83-2.06-.95-.94-2.46-.94-5.49-.94H8.74"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.01 9.74a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m2 13.74 1.75-1.54a2.3 2.3 0 0 1 3.14.1l4.3 4.3a2 2 0 0 0 2.56.22l.3-.2a3 3 0 0 1 3.73.22l3.22 2.9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M4.5 2.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            d="M9.01 5.24H14c3.77 0 5.66-.02 6.83 1.16S22 9.47 22 13.24s0 5.65-1.17 6.83-3.06 1.17-6.83 1.17h-4c-3.77 0-5.66 0-6.83-1.17C2 18.89 2 17 2 13.24c0-2.12 0-3.64.21-4.78"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.01 5.8c-.11-.93-.34-1.57-.83-2.06-.95-.94-2.46-.94-5.49-.94H8.74"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.01 9.74a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m2 13.74 1.75-1.54a2.3 2.3 0 0 1 3.14.1l4.3 4.3a2 2 0 0 0 2.56.22l.3-.2a3 3 0 0 1 3.73.22l3.22 2.9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M4.5 2.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            d="M18.51 10.33c0 .74-.62 1.33-1.4 1.33-.76 0-1.39-.6-1.39-1.33s.63-1.34 1.4-1.34 1.4.6 1.4 1.34"
            fill="currentColor"
          />
          <path
            d="m2.29 8.69-.08.37-.11.77-.07.86-.03.99v2.98l.02.54v.5l.02.48.06.86.11.79.08.36.1.35.13.33.15.3.18.3.21.27.49.51.3.2.3.17.33.14.34.11.36.1.38.08.81.11.91.06 1.03.03h6.22l2.19-.03.91-.06.78-.09.36-.06.35-.1.34-.13.34-.15.32-.19.3-.2.29-.23.25-.26.2-.27.18-.3.15-.31.12-.33.1-.34.09-.37.11-.77.06-.88.02-.48v-4.01l-.02-.98-.05-.71-.13-.94-.08-.37-.1-.35-.13-.33-.15-.31-.17-.3-.21-.27-.25-.26-.27-.23-.29-.2-.3-.17-.33-.15-.34-.11-.36-.1-.38-.08-.4-.06-.41-.04-.91-.06-1.03-.02H9.4l-.17.27-.17.21-.16.16-.15.12-.22.15-.21.11-.31.12-.23.06-.63.1-.15.04-.02.04 1.37-.04h7.3l1.43.04.77.08.33.05.3.06.27.08.24.08.4.2.33.25.14.15.13.17.2.39.09.23.14.54.05.32.08.74.03.87.02 1.59v2.34l-.03.94-.02.42-.12 1.01-.12.49-.07.21-2.63-2.27-.25-.16-.26-.14-.27-.12-.27-.1-.28-.07-.28-.05-.29-.03-.57.01-.29.04-.28.06-.55.2-.26.13-.26.16-.28.2-.18.1-.19.06-.2.04h-.2l-.19-.04-.18-.06-.18-.1-.16-.13-4.2-4-.46-.29-.48-.2-.51-.11-.26-.02h-.26l-.26.03-.25.05-.25.07-.25.1-.24.12-.23.14-.22.16-.47.4v-.83l.03-.74.04-.65.08-.7-.31-.16-.19-.13-.18-.15-.16-.16-.12-.15-.13-.19-.09-.16z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m8.96 2.77.13.13.14.18.13.19.11.21.09.21.06.19.05.24.02.19h5.78l.53.03.51.01.93.06.89.12.44.1.42.12.39.16-.13-.3-.17-.29-.2-.27-.23-.26-.24-.2-.25-.17-.27-.15-.27-.13-.29-.1-.3-.08-.3-.06-.63-.07-1.14-.06-1.34-.01z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M4.9 1.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
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
            d="M18.51 10.33c0 .74-.62 1.33-1.4 1.33-.76 0-1.39-.6-1.39-1.33s.63-1.34 1.4-1.34 1.4.6 1.4 1.34"
            fill="currentColor"
          />
          <path
            d="m2.29 8.69-.08.37-.11.77-.07.86-.03.99v2.98l.02.54v.5l.02.48.06.86.11.79.08.36.1.35.13.33.15.3.18.3.21.27.49.51.3.2.3.17.33.14.34.11.36.1.38.08.81.11.91.06 1.03.03h6.22l2.19-.03.91-.06.78-.09.36-.06.35-.1.34-.13.34-.15.32-.19.3-.2.29-.23.25-.26.2-.27.18-.3.15-.31.12-.33.1-.34.09-.37.11-.77.06-.88.02-.48v-4.01l-.02-.98-.05-.71-.13-.94-.08-.37-.1-.35-.13-.33-.15-.31-.17-.3-.21-.27-.25-.26-.27-.23-.29-.2-.3-.17-.33-.15-.34-.11-.36-.1-.38-.08-.4-.06-.41-.04-.91-.06-1.03-.02H9.4l-.17.27-.17.21-.16.16-.15.12-.22.15-.21.11-.31.12-.23.06-.63.1-.15.04-.02.04 1.37-.04h7.3l1.43.04.77.08.33.05.3.06.27.08.24.08.4.2.33.25.14.15.13.17.2.39.09.23.14.54.05.32.08.74.03.87.02 1.59v2.34l-.03.94-.02.42-.12 1.01-.12.49-.07.21-2.63-2.27-.25-.16-.26-.14-.27-.12-.27-.1-.28-.07-.28-.05-.29-.03-.57.01-.29.04-.28.06-.55.2-.26.13-.26.16-.28.2-.18.1-.19.06-.2.04h-.2l-.19-.04-.18-.06-.18-.1-.16-.13-4.2-4-.46-.29-.48-.2-.51-.11-.26-.02h-.26l-.26.03-.25.05-.25.07-.25.1-.24.12-.23.14-.22.16-.47.4v-.83l.03-.74.04-.65.08-.7-.31-.16-.19-.13-.18-.15-.16-.16-.12-.15-.13-.19-.09-.16z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="m8.96 2.77.13.13.14.18.13.19.11.21.09.21.06.19.05.24.02.19h5.78l.53.03.51.01.93.06.89.12.44.1.42.12.39.16-.13-.3-.17-.29-.2-.27-.23-.26-.24-.2-.25-.17-.27-.15-.27-.13-.29-.1-.3-.08-.3-.06-.63-.07-1.14-.06-1.34-.01z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M4.9 1.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiLandscape;
