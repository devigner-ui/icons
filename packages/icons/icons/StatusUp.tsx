import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStatusUp = forwardRef<SVGSVGElement, IconProps>(function IconStatusUp(
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
      {!fill ? (
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
            d="M7.55 18.15v-2.07"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 18.15v-4.14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.79 18.15v-6.22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="m17.79 5.85-.46.54a19 19 0 0 1-9.78 6.04"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M14.86 5.85h2.93v2.92"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M9.67 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
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
            d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
            fill="currentColor"
          />
          <path
            d="M7.55 18.9a.76.76 0 0 1-.75-.75v-2.07c0-.41.34-.75.75-.75s.75.34.75.75v2.07c0 .42-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M12.67 18.9a.76.76 0 0 1-.75-.75V14c0-.41.34-.75.75-.75s.75.34.75.75v4.15c0 .42-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M17.79 18.9a.76.76 0 0 1-.75-.75v-6.22c0-.41.34-.75.75-.75s.75.34.75.75v6.22c0 .42-.33.75-.75.75"
            fill="currentColor"
          />
          <path
            d="m18.54 5.82-.03-.16-.03-.13-.07-.11q-.04-.07-.1-.12l-.02-.02-.09-.05-.14-.08-.15-.03-.11-.02h-2.93a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h1.25a18 18 0 0 1-8.75 5.11c-.4.1-.65.51-.55.91a.75.75 0 0 0 .91.55 19.5 19.5 0 0 0 9.31-5.36v.97c0 .41.34.75.75.75s.75-.34.75-.75z"
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
            d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2M8.3 18.15c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-2.07c0-.41.34-.75.75-.75s.75.34.75.75zm5.12 0c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V14c0-.41.34-.75.75-.75s.75.34.75.75zm5.12 0c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-6.22c0-.41.34-.75.75-.75s.75.34.75.75zm0-9.38c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V7.8a19.5 19.5 0 0 1-9.31 5.36l-.18.02a.8.8 0 0 1-.73-.57c-.1-.4.14-.81.55-.91a18 18 0 0 0 8.75-5.11h-1.25a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2.93l.11.02.15.03.14.08.09.05.02.02.1.12.07.11.03.13.03.16.01.03z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconStatusUp;
