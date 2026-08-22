import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTornado = forwardRef<SVGSVGElement, IconProps>(function IconTornado(
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
            d="M12 3c-4.97 0-9 .67-9 1.5S7.03 6 12 6s9-.67 9-1.5c0-.52-1.59-.98-4-1.25"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20 8s-2.8 1-8.28 1S4 8 4 8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16 14s-1.26.5-4 .5-4-.5-4-.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M16 16.5a9 9 0 0 1-3 .5 16 16 0 0 1-3-.24"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.72 19.46q.57.04 1.28.04.86 0 1.5-.11"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M18 11s-.52 1-6 1m-6-1s.22.43 1.9.72"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M13 22h.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.31 4.5q.56-.17 1.45-.32A40 40 0 0 1 12 3.75a.75.75 0 0 0 0-1.5c-2.51 0-4.8.17-6.49.45q-1.26.2-2.08.52-.4.15-.72.4c-.2.16-.46.45-.46.88s.26.72.46.88q.31.25.72.4.82.3 2.08.52c1.68.28 3.98.45 6.49.45s4.8-.17 6.49-.45a11 11 0 0 0 2.08-.52q.4-.15.72-.4c.2-.16.46-.45.46-.88 0-.54-.4-.86-.63-1a4 4 0 0 0-1-.44 17 17 0 0 0-3.04-.55.75.75 0 0 0-.16 1.49q1.79.2 2.77.5-.56.17-1.45.32c-1.58.26-3.78.43-6.24.43s-4.66-.17-6.24-.43q-.9-.14-1.45-.32m16.05.3-.01-.02zM6.59 10.53a.75.75 0 0 0-1.26.8L6 11l-.67.35h.01l.01.02.07.1q.05.08.12.14.15.15.42.3a6 6 0 0 0 1.8.55.75.75 0 1 0 .26-1.48 5 5 0 0 1-1.43-.44m11.75-.2c.37.18.52.64.33 1L18 11l.67.35-.02.02-.13.18q-.1.11-.26.22-.3.23-.98.45c-.92.28-2.5.53-5.28.53a.75.75 0 0 1 0-1.5c2.7 0 4.12-.25 4.84-.47q.5-.16.56-.24a.76.76 0 0 1 .94-.2"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.71 16.26a.75.75 0 0 1-.47.95c-.8.27-1.78.54-3.24.54-1.4 0-2.43-.13-3.14-.26a.75.75 0 1 1 .28-1.47c.6.11 1.55.23 2.86.23a8 8 0 0 0 2.76-.46c.39-.13.82.08.95.47M12.25 22c0-.41.34-.75.75-.75h.5a.75.75 0 0 1 0 1.5H13a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.24 19.27c.07.4-.21.79-.62.86q-.7.11-1.62.12a21 21 0 0 1-1.33-.04.75.75 0 0 1 .1-1.5q.55.04 1.23.04.8 0 1.38-.1c.4-.07.8.2.86.62"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.3 13.72a.75.75 0 0 1 .97-.42l.18.06q.21.07.66.15c.61.12 1.56.24 2.89.24a16 16 0 0 0 3.55-.4l.15-.04h.02a.75.75 0 0 1 .56 1.39L16 14l.28.7h-.03l-.28.1q-.27.08-.8.19c-.7.13-1.75.26-3.17.26s-2.46-.13-3.17-.26a9 9 0 0 1-1.08-.28h-.02v-.01a.75.75 0 0 1-.43-.98"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.7 7.75a.75.75 0 0 1-.45.96h-.01l-.03.01-.54.16q-.54.16-1.62.36a36 36 0 0 1-6.33.51c-2.78 0-4.76-.25-6.06-.51a14 14 0 0 1-1.92-.54h-.03v-.01H3.7L4 8l-.3.69a.75.75 0 0 1 .6-1.38h.01l.35.13q.4.14 1.3.32c1.19.24 3.07.49 5.76.49 2.7 0 4.73-.25 6.07-.49a18 18 0 0 0 1.94-.46h.02c.39-.15.82.06.96.45"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.31 4.5q.56-.17 1.45-.32A40 40 0 0 1 12 3.75a.75.75 0 0 0 0-1.5c-2.51 0-4.8.17-6.49.45q-1.26.2-2.08.52-.4.15-.72.4c-.2.16-.46.45-.46.88s.26.72.46.88q.31.25.72.4.82.3 2.08.52c1.68.28 3.98.45 6.49.45s4.8-.17 6.49-.45a11 11 0 0 0 2.08-.52q.4-.15.72-.4c.2-.16.46-.45.46-.88 0-.54-.4-.86-.63-1a4 4 0 0 0-1-.44 17 17 0 0 0-3.04-.55.75.75 0 0 0-.16 1.49q1.79.2 2.77.5-.56.17-1.45.32c-1.58.26-3.78.43-6.24.43s-4.66-.17-6.24-.43q-.9-.14-1.45-.32m16.05.3-.01-.02zM6.59 10.53a.75.75 0 0 0-1.26.8L6 11l-.67.35h.01l.01.02.07.1q.05.08.12.14.15.15.42.3a6 6 0 0 0 1.8.55.75.75 0 1 0 .26-1.48 5 5 0 0 1-1.43-.44m11.75-.2c.37.18.52.64.33 1L18 11l.67.35-.02.02-.13.18q-.1.11-.26.22-.3.23-.98.45c-.92.28-2.5.53-5.28.53a.75.75 0 0 1 0-1.5c2.7 0 4.12-.25 4.84-.47q.5-.16.56-.24a.76.76 0 0 1 .94-.2"
            fill="currentColor"
          />
          <path
            d="M20.7 7.75a.75.75 0 0 1-.45.96h-.01l-.03.01-.54.16q-.54.16-1.62.36a36 36 0 0 1-6.33.51c-2.78 0-4.76-.25-6.06-.51a14 14 0 0 1-1.92-.54h-.03v-.01H3.7L4 8l-.3.68a.75.75 0 0 1 .6-1.37h.01l.35.13q.4.14 1.3.32c1.19.24 3.07.49 5.76.49 2.7 0 4.72-.25 6.07-.49a18 18 0 0 0 1.94-.46h.02c.39-.15.82.06.96.45"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.27 13.3a.75.75 0 0 0-.55 1.4L8 14l-.28.7h.03l.28.1q.27.08.8.19c.7.13 1.75.26 3.17.26s2.46-.13 3.17-.26a9 9 0 0 0 1.08-.28h.02v-.01L16 14l.28.7a.75.75 0 0 0-.56-1.4l-.02.01-.15.05q-.21.07-.66.15c-.61.12-1.56.24-2.89.24a16 16 0 0 1-3.55-.4zm8.43 2.96a.75.75 0 0 1-.47.95c-.8.27-1.78.54-3.24.54-1.4 0-2.43-.13-3.14-.26a.75.75 0 1 1 .28-1.47c.6.11 1.55.23 2.86.23a8 8 0 0 0 2.76-.46c.39-.13.82.08.95.47m-1.47 3c.07.41-.21.8-.62.87q-.7.11-1.62.12a21 21 0 0 1-1.33-.04.75.75 0 1 1 .1-1.5q.55.04 1.23.04.8 0 1.38-.1c.4-.07.8.2.86.62M12.25 22c0-.41.34-.75.75-.75h.5a.75.75 0 0 1 0 1.5H13a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTornado;
