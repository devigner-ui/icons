import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBinanceUsdBusd = forwardRef<SVGSVGElement, IconProps>(
  function IconBinanceUsdBusd(
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
              d="M12.07 2.35 6.92 7.5a.5.5 0 0 0 0 .71l1.73 1.73c.2.2.51.2.71 0l5.15-5.15a.5.5 0 0 0 0-.71l-1.73-1.73a.5.5 0 0 0-.71 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m15.97 6.26-9.05 9.05a.5.5 0 0 0 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05a.5.5 0 0 0 0-.71l-1.73-1.73a.5.5 0 0 0-.71 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m19.88 10.16-9.05 9.05a.5.5 0 0 0 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05a.5.5 0 0 0 0-.71l-1.73-1.73a.5.5 0 0 0-.71 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m4.76 13.84-1.73-1.73a.5.5 0 0 1 0-.71l1.73-1.73c.2-.2.51-.2.71 0L7.2 11.4c.2.2.2.51 0 .71l-1.73 1.73a.5.5 0 0 1-.71 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
            <path d="M24.67 0h-24v24h24z" fill="none" />
            <path
              d="M12.07 2.35 6.93 7.5a.5.5 0 0 0 0 .71l1.73 1.73c.2.2.51.2.71 0l5.15-5.15a.5.5 0 0 0 0-.71l-1.73-1.73a.53.53 0 0 0-.72 0"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.97 6.26 6.93 15.3a.5.5 0 0 0 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05a.5.5 0 0 0 0-.71l-1.73-1.73a.5.5 0 0 0-.72.01"
              fill="currentColor"
            />
            <path
              d="m19.88 10.16-9.05 9.05a.5.5 0 0 0 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05a.5.5 0 0 0 0-.71l-1.73-1.73a.5.5 0 0 0-.71 0"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m4.76 13.84-1.73-1.73a.5.5 0 0 1 0-.71l1.73-1.73c.2-.2.51-.2.71 0L7.2 11.4c.2.2.2.51 0 .71l-1.73 1.73a.5.5 0 0 1-.71 0"
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
              d="M12.07 2.35 6.92 7.5a.5.5 0 0 0 0 .71l1.73 1.73c.2.2.51.2.71 0l5.15-5.15a.5.5 0 0 0 0-.71l-1.73-1.73a.5.5 0 0 0-.71 0"
              fill="currentColor"
            />
            <path
              d="m15.97 6.26-9.05 9.05a.5.5 0 0 0 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05a.5.5 0 0 0 0-.71l-1.73-1.73a.5.5 0 0 0-.71 0"
              fill="currentColor"
            />
            <path
              d="m19.88 10.16-9.05 9.05a.5.5 0 0 0 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05a.5.5 0 0 0 0-.71l-1.73-1.73a.5.5 0 0 0-.71 0"
              fill="currentColor"
            />
            <path
              d="m4.76 13.84-1.73-1.73a.5.5 0 0 1 0-.71l1.73-1.73c.2-.2.51-.2.71 0L7.2 11.4c.2.2.2.51 0 .71l-1.73 1.73a.5.5 0 0 1-.71 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBinanceUsdBusd;
