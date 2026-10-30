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
            d="M11.4 2.35 6.25 7.5a.5.5 0 0 0 0 .71l1.73 1.73c.2.2.51.2.71 0l5.15-5.15a.5.5 0 0 0 0-.71l-1.73-1.73a.5.5 0 0 0-.71 0Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m12.95 8.61-6.7 6.7a.5.5 0 0 0 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05a.5.5 0 0 0 0-.71l-1.73-1.73a.5.5 0 0 0-.71 0"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m19.21 10.16-9.05 9.05a.5.5 0 0 0 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05a.5.5 0 0 0 0-.71l-1.73-1.73a.5.5 0 0 0-.71 0Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m4.1 13.84-1.74-1.73a.5.5 0 0 1 0-.71L4.1 9.67c.2-.2.51-.2.71 0l1.73 1.73c.2.2.2.51 0 .71L4.8 13.84a.5.5 0 0 1-.7 0Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
              d="M11.4 2.35 6.25 7.5a.5.5 0 0 0 0 .71l1.73 1.73c.2.2.51.2.71 0l5.15-5.15a.5.5 0 0 0 0-.71l-1.73-1.73a.5.5 0 0 0-.71 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m15.3 6.26-9.05 9.05a.5.5 0 0 0 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05a.5.5 0 0 0 0-.71l-1.73-1.73a.5.5 0 0 0-.71 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m19.21 10.16-9.05 9.05a.5.5 0 0 0 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05a.5.5 0 0 0 0-.71l-1.73-1.73a.5.5 0 0 0-.71 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m4.09 13.84-1.73-1.73a.5.5 0 0 1 0-.71l1.73-1.73c.2-.2.51-.2.71 0l1.73 1.73c.2.2.2.51 0 .71L4.8 13.84a.5.5 0 0 1-.71 0"
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
            <path d="M24 0H0v24h24z" fill="none" />
            <path
              d="M11.4 2.35 6.26 7.5a.5.5 0 0 0 0 .71l1.73 1.73c.2.2.51.2.71 0l5.15-5.15a.5.5 0 0 0 0-.71l-1.73-1.73a.53.53 0 0 0-.72 0"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.3 6.26 6.26 15.3a.5.5 0 0 0 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05a.5.5 0 0 0 0-.71l-1.73-1.73a.5.5 0 0 0-.72.01"
              fill="currentColor"
            />
            <path
              d="m19.21 10.16-9.05 9.05a.5.5 0 0 0 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05a.5.5 0 0 0 0-.71l-1.73-1.73a.5.5 0 0 0-.71 0"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m4.09 13.84-1.73-1.73a.5.5 0 0 1 0-.71l1.73-1.73c.2-.2.51-.2.71 0l1.73 1.73c.2.2.2.51 0 .71L4.8 13.84a.5.5 0 0 1-.71 0"
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
              d="M11.4 2.35 6.25 7.5a.5.5 0 0 0 0 .71l1.73 1.73c.2.2.51.2.71 0l5.15-5.15a.5.5 0 0 0 0-.71l-1.73-1.73a.5.5 0 0 0-.71 0"
              fill="currentColor"
            />
            <path
              d="m15.3 6.26-9.05 9.05a.5.5 0 0 0 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05a.5.5 0 0 0 0-.71l-1.73-1.73a.5.5 0 0 0-.71 0"
              fill="currentColor"
            />
            <path
              d="m19.21 10.16-9.05 9.05a.5.5 0 0 0 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05a.5.5 0 0 0 0-.71l-1.73-1.73a.5.5 0 0 0-.71 0"
              fill="currentColor"
            />
            <path
              d="m4.09 13.84-1.73-1.73a.5.5 0 0 1 0-.71l1.73-1.73c.2-.2.51-.2.71 0l1.73 1.73c.2.2.2.51 0 .71L4.8 13.84a.5.5 0 0 1-.71 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBinanceUsdBusd;
