import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDriving = forwardRef<SVGSVGElement, IconProps>(function IconDriving(
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
            d="M11.28 2H9.45c-1.8 0-2.2.9-2.43 2.01L6.2 7.93h11.6l-.82-3.92C16.75 2.91 16.35 2 14.55 2"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m19.16 13.43.08.89c.08.85-.6 1.58-1.47 1.58h-1.36c-.78 0-.89-.33-1.03-.75l-.15-.43c-.2-.59-.33-.99-1.38-.99h-3.71c-1.04 0-1.2.45-1.38.99l-.15.43c-.14.41-.25.75-1.03.75H6.22c-.87 0-1.55-.73-1.47-1.58l.41-4.42c.1-1.09.31-1.98 2.21-1.98h9.25c1.9 0 2.11.89 2.21 1.98"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M6.2 5.75h-.73"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M18.53 5.75h-.73"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M7.65 10.83h2.17"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M14.18 10.83h2.17"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M12 17v1"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M12 21v1"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m3 18-1 4"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m21 18 1 4"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
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
            d="M14.55 2h-5.1c-1.8 0-2.2.9-2.43 2.01L6.2 7.93h11.6l-.82-3.92C16.75 2.9 16.35 2 14.55 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.24 14.32c.08.85-.6 1.58-1.47 1.58h-1.36c-.78 0-.89-.33-1.03-.75l-.15-.43c-.2-.59-.33-.99-1.38-.99h-3.72c-1.04 0-1.2.45-1.38.99l-.15.43c-.14.41-.25.75-1.03.75H6.22c-.87 0-1.55-.73-1.47-1.58l.4-4.42c.1-1.09.32-1.98 2.22-1.98h9.25c1.9 0 2.11.89 2.21 1.98z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.2 5.75h-.73"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.53 5.75h-.73"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.65 10.83h2.17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.18 10.83h2.17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 17v1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 21v1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m3 18-1 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m21 18 1 4"
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
            d="M12 18.75a.76.76 0 0 1-.75-.75v-1c0-.41.34-.75.75-.75s.75.34.75.75v1c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M12 22.75a.76.76 0 0 1-.75-.75v-1c0-.41.34-.75.75-.75s.75.34.75.75v1c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="m2 22.75-.18-.02a.76.76 0 0 1-.55-.91l1-4a.75.75 0 1 1 1.46.36l-1 4a.8.8 0 0 1-.73.57"
            fill="currentColor"
          />
          <path
            d="M22 22.75a.8.8 0 0 1-.73-.57l-1-4c-.1-.4.14-.81.55-.91.4-.1.81.14.91.55l1 4c.1.4-.14.81-.55.91z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.26 9.52c-.11-1.18-.42-2.43-2.71-2.43h-9.1c-2.29 0-2.6 1.26-2.71 2.43l-.4 4.34A1.96 1.96 0 0 0 6.32 16h1.34c1.15 0 1.37-.66 1.52-1.1l.14-.43c.16-.49.2-.61.85-.61h3.65c.64 0 .66.07.85.61l.14.43c.15.44.37 1.1 1.52 1.1h1.34c.56 0 1.1-.24 1.48-.65.37-.4.55-.95.5-1.49z"
            fill="currentColor"
          />
          <path
            d="M18.42 4.94h-.72l-.27-1.29c-.26-1.25-.79-2.4-2.92-2.4H9.5c-2.13 0-2.66 1.15-2.92 2.4l-.27 1.29h-.72c-.3 0-.54.24-.54.54s.24.54.54.54h.51l-.3 1.43q.57-.34 1.66-.36h9.1q1.1.01 1.66.36l-.3-1.43h.51c.3 0 .54-.24.54-.54a.55.55 0 0 0-.55-.54"
            fill="currentColor"
          />
          <path
            d="M9.86 11.01H7.73a.54.54 0 0 1-.54-.54c0-.3.24-.54.54-.54h2.14c.3 0 .54.24.54.54a.55.55 0 0 1-.54.54"
            fill="currentColor"
          />
          <path
            d="M16.28 11.01h-2.14a.54.54 0 0 1-.54-.54c0-.3.24-.54.54-.54h2.14c.3 0 .54.24.54.54s-.24.54-.54.54"
            fill="currentColor"
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
            d="M12.12 18.75a.76.76 0 0 1-.75-.75v-1c0-.41.34-.75.75-.75s.75.34.75.75v1c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M12.12 22.75a.76.76 0 0 1-.75-.75v-1c0-.41.34-.75.75-.75s.75.34.75.75v1c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="m2.12 22.75-.18-.02a.76.76 0 0 1-.55-.91l1-4a.75.75 0 1 1 1.46.36l-1 4a.8.8 0 0 1-.73.57"
            fill="currentColor"
          />
          <path
            d="M21.87 22.5a.8.8 0 0 1-.73-.57l-1-4c-.1-.4.14-.8.55-.9.4-.1.81.13.91.54l1 4c.1.4-.14.81-.55.91z"
            fill="currentColor"
          />
          <path
            d="M19.26 5.3c0 .3-.25.54-.54.54H5.65a.54.54 0 0 1-.54-.54c0-.3.25-.54.54-.54h.74l.28-1.31C6.93 2.17 7.47 1 9.63 1h5.09c2.16 0 2.71 1.17 2.97 2.44l.28 1.31h.74c.3 0 .55.25.55.55"
            fill="currentColor"
          />
          <path
            d="M19.57 9.4c-.11-1.2-.43-2.47-2.76-2.47H7.55c-2.33 0-2.64 1.28-2.76 2.47l-.41 4.42A2 2 0 0 0 6.4 16h1.36c1.18 0 1.4-.67 1.55-1.12l.15-.44c.17-.5.21-.62.86-.62h3.72c.65 0 .67.07.86.62l.15.44c.14.45.37 1.12 1.54 1.12h1.36c.57 0 1.12-.24 1.51-.66.38-.41.56-.97.51-1.52zM10 10.92H7.83a.54.54 0 0 1-.54-.54c0-.29.25-.54.54-.54h2.18c.3 0 .54.25.54.54s-.25.54-.55.54m6.53 0h-2.18a.54.54 0 0 1-.54-.54c0-.29.25-.54.54-.54h2.18c.3 0 .54.25.54.54s-.24.54-.54.54"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconDriving;
