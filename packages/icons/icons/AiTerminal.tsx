import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiTerminal = forwardRef<SVGSVGElement, IconProps>(function IconAiTerminal(
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
            d="M12.91 6.84V4.59c0-.95.76-1.71 1.71-1.71h3.42c.95 0 1.71.76 1.71 1.71v2.28a1.7 1.7 0 0 1-1.71 1.71h-3.41"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.33 8.58V12m-6.84 0h6.84m-6.84 0v4.56M16.33 12v4.56m-9.12 2.28a2.28 2.28 0 1 0 4.56 0 2.28 2.28 0 0 0-4.56 0zm6.84 0a2.28 2.28 0 1 0 4.56 0 2.28 2.28 0 0 0-4.56 0z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.21 3.34c.26 1.96 1 2.7 2.97 2.96-1.96.26-2.7 1-2.97 2.96-.26-1.96-1-2.7-2.96-2.96 1.96-.26 2.7-1 2.96-2.96z"
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
            d="M14.62 2.88h3.42c.95 0 1.71.76 1.71 1.71v2.28a1.7 1.7 0 0 1-1.71 1.71h-3.42a1.7 1.7 0 0 1-1.71-1.71V4.59c0-.95.76-1.71 1.71-1.71z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.33 8.58V12m-6.84 0h6.84m-6.84 0v4.56M16.33 12v4.56"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.21 18.84a2.28 2.28 0 1 0 4.56 0 2.28 2.28 0 0 0-4.56 0zm6.84 0a2.28 2.28 0 1 0 4.56 0 2.28 2.28 0 0 0-4.56 0z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.21 3.34c.26 1.96 1 2.7 2.97 2.96-1.96.26-2.7 1-2.97 2.96-.26-1.96-1-2.7-2.96-2.96 1.96-.26 2.7-1 2.96-2.96z"
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
            d="M12.8 2.77a3 3 0 0 0-.74 1.82v2.28c.03.65.34 1.4.75 1.82.42.41 1.16.71 1.81.75h3.42c.65-.03 1.4-.34 1.83-.76.41-.42.71-1.16.74-1.81V4.59a3 3 0 0 0-.76-1.82 3 3 0 0 0-1.81-.74h-3.42c-.65.03-1.4.34-1.82.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="m8.66 11.75.07-.16.09-.14.11-.11.14-.09.16-.07.16-.04h6.08v-1.7h1.72v6.4l.38.14.46.24.32.23.14.11.16.17.21.29.21.32-.01.02.13.29.11.29.1.44.03.46-.01.31-.04.29-.08.3-.11.29-.13.29.01.02-.21.34-.23.28-.19.19-.34.27-.41.22-.43.19-.47.1-.31.04h-.3l-.46-.06-.3-.08-.44-.19-.42-.22-.34-.27-.2-.2-.29-.38-.15-.26-.19-.42-.09-.29-.07-.3-.03-.3-.01-.31.04-.31.06-.3.1-.3.19-.43.16-.28.18-.24.18-.2.2-.18.24-.18.26-.15.28-.14.39-.15v-2.98h-5.13v2.99l.29.1.37.18.26.15.24.18.2.18.19.2.17.24.16.27.19.43.1.31.06.3.05.31v.3l-.05.31-.06.3-.1.31-.13.29-.22.41-.27.35-.19.19-.23.19-.38.25-.44.18-.29.1-.47.08-.31.02-.31-.02-.31-.04-.29-.08-.45-.19-.41-.22-.34-.27-.2-.2-.28-.38-.16-.26-.18-.42-.12-.43-.06-.31-.02-.31.02-.31.08-.45.16-.45.21-.42.26-.38.25-.27.13-.11.24-.18.45-.25.48-.19V12z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M7.67 2.88c.14 1.06.38 1.68.83 2.13s1.07.7 2.13.83a.46.46 0 0 1 0 .92c-1.06.14-1.68.38-2.13.83s-.7 1.07-.83 2.13a.46.46 0 0 1-.91 0c-.14-1.06-.38-1.68-.84-2.13s-1.07-.7-2.13-.83a.46.46 0 0 1 0-.92c1.06-.14 1.68-.36 2.13-.83s.7-1.07.84-2.13a.46.46 0 0 1 .91 0z"
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
            d="M8.63 12v3.83l-.48.19-.37.2-.32.23-.29.28-.27.34-.22.41-.19.45-.1.45-.04.31.01.31.03.3.12.45.15.42.15.28.25.37.21.24.2.19.38.25.42.21.3.12.45.1.31.04h.3l.47-.06.3-.08.45-.17.41-.23.34-.28.19-.19.27-.35.22-.41.13-.29.1-.31.06-.3.05-.31v-.3l-.05-.31-.06-.3-.1-.31-.19-.43-.16-.27-.17-.24-.19-.2-.2-.18-.24-.18-.26-.15-.37-.18-.29-.1v-2.99h5.13v2.98l-.39.15-.28.14-.26.15-.24.18-.2.18-.18.2-.18.24-.16.28-.13.28-.12.3-.08.29-.04.31-.02.31.02.31.06.31.08.29.17.42.13.28.27.37.2.24.21.19.37.25.42.21.3.12.46.1.3.04h.3l.47-.06.31-.08.43-.19.27-.14.38-.25.25-.23.27-.34.21-.34-.01-.02.13-.29.11-.29.1-.44.03-.46-.01-.31-.04-.29-.08-.3-.11-.29-.13-.29.01-.02-.21-.32-.17-.23-.14-.16-.13-.13-.15-.11-.24-.17-.46-.24-.38-.14V9.43h.85l.25-.02.38-.08.24-.08.24-.1.23-.11.2-.13.27-.22.22-.27.14-.2.11-.23.1-.24.08-.25.06-.25.04-.25.01-2.41-.05-.38-.06-.25-.08-.25-.1-.24-.11-.23-.2-.29-.14-.17-.18-.15-.2-.14-.33-.18-.37-.14-.25-.07-.25-.05-.25-.02h-3.43l-.25.02-.36.08-.24.07-.23.09-.33.18-.31.22-.09.08-.15.17-.14.2-.12.22-.1.23-.1.25-.06.25-.06.25-.02.25v2.28l.04.38.09.36.08.23.1.23.13.21.14.21.16.19.09.08.2.16.22.13.22.11.24.1.23.07.24.06.38.05h.86v1.71H9.39l-.16.03-.16.07-.14.09-.11.11-.09.14-.07.16z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M7.67 2.88c.14 1.06.38 1.68.83 2.13s1.07.7 2.13.83a.46.46 0 0 1 0 .92c-1.06.14-1.68.38-2.13.83s-.7 1.07-.83 2.13a.46.46 0 0 1-.91 0c-.14-1.06-.38-1.68-.84-2.13s-1.07-.7-2.13-.83a.46.46 0 0 1 0-.92c1.06-.14 1.68-.36 2.13-.83s.7-1.07.84-2.13a.46.46 0 0 1 .91 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiTerminal;
