import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDumbbell = forwardRef<SVGSVGElement, IconProps>(function IconDumbbell(
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
            d="m17.23 16.85-.28.7zM16 13.5h.75a.75.75 0 0 0-.75-.75zm.15 2.27-.7.28zm5.7 0 .7.28zm-1.08 1.08-.3-.7zm0-9.7-.3.7zm1.08 1.09.7-.3zm-4.62-1.09-.28-.69zM16 10.5v.75c.41 0 .75-.34.75-.75zm.15-2.26-.7-.3zm-12.92 8.6-.28.7zm-1.08-1.07-.7.28zM8 13.5v-.75a.75.75 0 0 0-.75.75zm-.15 2.27.7.28zm-1.08 1.08.28.7zm0-9.7.28-.69zM8 10.5h-.75c0 .41.34.75.75.75zm-.15-2.26.7-.3zM3.23 7.15l-.28-.69zM2.15 8.24l-.7-.3zM21.25 10v4h1.5v-4zM19 16.25q-.7 0-1.04-.02a1 1 0 0 1-.44-.07l-.57 1.38q.44.17.9.19t1.15.02zm-3.75-2.75c0 .46 0 .96.02 1.38l.05.6q.03.3.14.57l1.39-.57-.02-.05-.02-.14-.04-.48q-.02-.59-.02-1.3zm2.27 2.66q-.47-.2-.67-.68l-1.4.57c.29.68.82 1.21 1.5 1.5zM21.25 14q0 .7-.02 1.04t-.08.44l1.4.57q.16-.44.18-.9t.02-1.15zM19 17.75q.69 0 1.15-.02t.9-.19l-.57-1.38q-.1.05-.44.07t-1.04.02zm2.15-2.27q-.2.47-.67.68l.57 1.38a2.8 2.8 0 0 0 1.5-1.49zM19 7.75q.7 0 1.04.02t.44.08l.57-1.39a3 3 0 0 0-.9-.19q-.47-.03-1.15-.02zM22.75 10q0-.68-.02-1.14a3 3 0 0 0-.19-.91l-1.39.57c.04.08.07.2.08.44q.02.34.02 1.04zm-2.27-2.15q.47.2.67.67l1.4-.57a2.8 2.8 0 0 0-1.5-1.49zM19 6.25q-.69 0-1.15.02t-.9.19l.57 1.39q.1-.06.44-.08T19 7.75zm-2.25 4.25a30 30 0 0 1 .06-1.79l.02-.14.02-.05-1.4-.57q-.1.29-.13.56l-.05.61c-.02.43-.02.92-.02 1.38zm.2-4.04c-.68.28-1.21.81-1.5 1.49l1.4.57q.2-.47.67-.67zM2.75 14v-4h-1.5v4zM5 16.25c-.48 0-.8 0-1.04-.02a1 1 0 0 1-.44-.07l-.57 1.38q.44.17.9.19t1.15.02zM1.25 14q0 .69.02 1.15.02.47.19.9l1.39-.57q-.06-.1-.08-.44T2.75 14zm2.27 2.16c-.3-.13-.55-.37-.67-.68l-1.4.57c.29.68.82 1.21 1.5 1.5zm3.73-2.66a30 30 0 0 1-.06 1.79l-.02.14-.02.05 1.4.57q.1-.28.13-.56l.05-.61c.02-.43.02-.92.02-1.38zM5 17.75q.69 0 1.15-.02t.9-.19l-.57-1.38q-.1.05-.44.07T5 16.25zm2.15-2.27c-.12.3-.37.55-.67.68l.57 1.38a2.8 2.8 0 0 0 1.5-1.49zM5 7.75c.48 0 .8 0 1.04.02q.34.02.44.08l.57-1.39a3 3 0 0 0-.9-.19Q5.67 6.24 5 6.25zm3.75 2.75c0-.46 0-.95-.02-1.38l-.05-.6a2 2 0 0 0-.14-.57l-1.39.57.02.05.02.14.04.48q.02.59.02 1.31zM6.48 7.85q.47.2.67.67l1.4-.57a2.8 2.8 0 0 0-1.5-1.49zM5 6.25q-.68 0-1.15.02t-.9.19l.57 1.39c.08-.04.2-.07.44-.08.24-.02.56-.02 1.04-.02zM2.75 10q0-.7.02-1.04t.08-.44l-1.4-.57q-.16.43-.18.9-.03.48-.02 1.15zm.2-3.54c-.68.28-1.21.81-1.5 1.49l1.4.57c.12-.3.37-.55.67-.67zM8 11.26h8V9.74H8zm8 1.5H8v1.5h8z"
            fill="currentColor"
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
            d="M22 10v4c0 .93 0 1.4-.15 1.77a2 2 0 0 1-1.08 1.08c-.37.15-.84.15-1.77.15s-1.4 0-1.77-.15a2 2 0 0 1-1.08-1.08C16 15.4 16 14.43 16 13.5v-3c0-.93 0-1.9.15-2.26a2 2 0 0 1 1.08-1.09C17.6 7 18.07 7 19 7s1.4 0 1.77.15a2 2 0 0 1 1.08 1.09c.15.36.15.83.15 1.76m-14 .5v3c0 .93 0 1.9-.15 2.27a2 2 0 0 1-1.08 1.08C6.4 17 5.93 17 5 17s-1.4 0-1.77-.15a2 2 0 0 1-1.08-1.08C2 15.4 2 14.93 2 14v-4c0-.93 0-1.4.15-1.76a2 2 0 0 1 1.08-1.09C3.6 7 4.07 7 5 7s1.4 0 1.77.15a2 2 0 0 1 1.08 1.09C8 8.6 8 9.57 8 10.5"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16 10.5H8v3h8z"
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
            d="M22 14v-4c0-.93 0-1.4-.15-1.76a2 2 0 0 0-1.08-1.09C20.4 7 19.93 7 19 7s-1.4 0-1.77.15a2 2 0 0 0-1.08 1.09C16 8.6 16 9.57 16 10.5H8c0-.93 0-1.9-.15-2.26a2 2 0 0 0-1.08-1.09C6.4 7 5.93 7 5 7s-1.4 0-1.77.15a2 2 0 0 0-1.08 1.09C2 8.6 2 9.07 2 10v4c0 .93 0 1.4.15 1.77a2 2 0 0 0 1.08 1.08C3.6 17 4.07 17 5 17s1.4 0 1.77-.15a2 2 0 0 0 1.08-1.08C8 15.4 8 14.43 8 13.5h8c0 .93 0 1.9.15 2.27a2 2 0 0 0 1.08 1.08c.37.15.84.15 1.77.15s1.4 0 1.77-.15a2 2 0 0 0 1.08-1.08c.15-.37.15-.84.15-1.77"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconDumbbell;
