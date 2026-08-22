import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWallet4 = forwardRef<SVGSVGElement, IconProps>(function IconWallet4(
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
            d="m13.33 2.52-.03.07-2.9 6.73H7.55q-1.03 0-1.92.39l1.75-4.18.04-.1.07-.16.07-.17c1.31-3.03 2.79-3.72 5.77-2.58"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.72 9.52q-.68-.2-1.41-.2H10.4l2.9-6.73.03-.07.44.18 2.21.93a6.5 6.5 0 0 1 2.61 1.68q.15.17.25.36.14.2.2.43l.09.26q.39 1.24-.41 3.16"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.2 14.2v1.95l-.03.6q-.29 5.24-5.84 5.25h-7.8q-.37 0-.7-.05-4.78-.31-5.1-5.1a6 6 0 0 1-.05-.7V14.2a4.9 4.9 0 0 1 4.88-4.88h9.76a4.9 4.9 0 0 1 4.87 4.88"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.38 5.53 5.63 9.7a4.9 4.9 0 0 0-2.96 4.49v-2.93a5.85 5.85 0 0 1 4.71-5.74"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.19 11.27v2.93c0-2.2-1.46-4.07-3.46-4.67.52-1.3.67-2.32.42-3.17l-.1-.26a5.8 5.8 0 0 1 3.14 5.17"
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
            fill="currentColor"
            d="m12.9 2.52-.03.07-2.9 6.73H7.12q-1.02 0-1.92.39l1.75-4.18.04-.09.06-.16.08-.18c1.31-3.03 2.79-3.72 5.77-2.58"
            opacity={duotone ? "0.7" : "1"}
          />
          <path
            fill="currentColor"
            d="M18.29 9.52q-.68-.2-1.41-.2H9.97l2.9-6.73.03-.07.44.17 2.21.93a6.6 6.6 0 0 1 2.62 1.68l.25.36q.14.2.2.43.06.13.09.26.38 1.26-.42 3.17"
          />
          <path
            fill="currentColor"
            d="M21.76 14.2v1.95l-.02.59Q21.45 22 15.9 22H8.1a5 5 0 0 1-.71-.05q-4.77-.32-5.1-5.09a6 6 0 0 1-.05-.71V14.2A4.9 4.9 0 0 1 5.2 9.71q.9-.39 1.92-.39h9.76q.73 0 1.41.2a4.9 4.9 0 0 1 3.47 4.68"
            opacity={duotone ? "0.3" : "1"}
          />
          <path
            fill="currentColor"
            d="M6.95 5.53 5.2 9.71a4.9 4.9 0 0 0-2.96 4.49v-2.93a5.85 5.85 0 0 1 4.71-5.74m14.81 5.74v2.93a4.9 4.9 0 0 0-3.47-4.68q.8-1.91.42-3.17l-.09-.26a5.8 5.8 0 0 1 3.14 5.18"
            opacity={duotone ? "0.5" : "1"}
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
            d="m12.61 2.21-2.4 5.61H7.78q-.6 0-1.17.11l1-2.4.04-.09.06-.16.08-.18c1.16-2.69 2.46-3.53 4.81-2.89"
            fill="currentColor"
          />
          <path
            d="m19.4 8.09-.02-.01a7 7 0 0 0-1.83-.26H11.3l2.25-5.23.03-.07.44.17 2.21.93a6.6 6.6 0 0 1 2.62 1.68q.14.17.25.36.15.2.2.43l.1.26q.21.76.01 1.74"
            fill="currentColor"
          />
          <path
            d="M13.2 17.66h.24c.3 0 .55-.27.55-.6 0-.42-.12-.48-.38-.58l-.42-.15z"
            fill="currentColor"
          />
          <path
            d="M18.96 9.52q-.68-.2-1.4-.2H7.78q-1.02 0-1.92.39A4.9 4.9 0 0 0 2.9 14.2v1.95q0 .35.05.71.33 4.77 5.1 5.09.34.05.71.05h7.8q5.55 0 5.84-5.26l.02-.59V14.2a4.9 4.9 0 0 0-3.47-4.68m-5 5.98c.45.16 1.07.5 1.07 1.56 0 .91-.7 1.64-1.59 1.64h-.25v.22c0 .29-.23.52-.52.52a.5.5 0 0 1-.52-.52v-.22h-.09c-.96 0-1.75-.81-1.75-1.81 0-.29.23-.52.52-.52s.52.23.52.52c0 .42.32.77.71.77h.1v-1.69l-.77-.27c-.46-.16-1.08-.5-1.08-1.56 0-.91.71-1.64 1.6-1.64h.24v-.22c0-.29.23-.52.52-.52s.52.23.52.52v.22h.1c.95 0 1.74.81 1.74 1.81 0 .29-.23.52-.52.52a.5.5 0 0 1-.52-.52c0-.42-.32-.77-.7-.77h-.1v1.69z"
            fill="currentColor"
          />
          <path
            d="M11.35 14.14c0 .42.12.48.38.58l.42.15v-1.33h-.25c-.3 0-.55.27-.55.6"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconWallet4;
