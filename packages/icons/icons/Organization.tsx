import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconOrganization = forwardRef<SVGSVGElement, IconProps>(
  function IconOrganization(
    { className, variant = "Outline", strokeWidth = "1.5", ...rest },
    ref,
  ) {
    const fill = variant === "Bold" || variant === "Bulk";
    const duotone = variant === "TwoTone" || variant === "Bulk";

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
            d="M2 4.15Q2 2 4.15 2h4.3q2.15 0 2.15 2.15V6"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M6.7 18H4.15Q2 18 2 15.85V8.04"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M17.37 8.42v11.16q0 2.42-2.41 2.42H9.12Q6.7 22 6.7 19.58V8.42Q6.7 6 9.12 6h5.84q2.4 0 2.4 2.42Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M13.4 6V4.15Q13.4 2 15.55 2h4.3Q22 2 22 4.15v11.7Q22 18 19.85 18h-2.48"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M10 11h4"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M10 14h4"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M12 22v-3"
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
              opacity={duotone ? "0.4" : "1"}
              d="M6.7 18H4.15Q2 18 2 15.85V4.15Q2 2 4.15 2h4.3q2.15 0 2.15 2.15V6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.37 8.42v11.16q0 2.42-2.41 2.42H9.12Q6.7 22 6.7 19.58V8.42Q6.7 6 9.12 6h5.84q2.41 0 2.41 2.42"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13.4 6V4.15Q13.4 2 15.55 2h4.3Q22 2 22 4.15v11.7Q22 18 19.85 18h-2.48"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 11h4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 14h4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 22v-3"
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
            <path
              d="M10.6 4.15V6H9.12Q6.7 6 6.7 8.42V18H4.15Q2 18 2 15.85V4.15Q2 2 4.15 2h4.3q2.15 0 2.15 2.15"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.37 8.42v11.16q0 2.42-2.41 2.42H9.12Q6.7 22 6.7 19.58V8.42Q6.7 6 9.12 6h5.84q2.41 0 2.41 2.42"
              fill="currentColor"
            />
            <path
              d="M22 4.15v11.7Q22 18 19.85 18h-2.48V8.42Q17.37 6 14.96 6H13.4V4.15Q13.4 2 15.55 2h4.3Q22 2 22 4.15"
              fill="currentColor"
            />
            <path
              d="M14 11.75h-4a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M14 14.75h-4a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M12.75 19v3h-1.5v-3c0-.41.34-.75.75-.75s.75.34.75.75"
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
              d="M10.6 4.15c0 .19-.16.35-.35.35H9.12A3.93 3.93 0 0 0 5.2 8.42v9.23c0 .19-.16.35-.35.35h-.7A2.15 2.15 0 0 1 2 15.85V4.15C2 2.96 2.96 2 4.15 2h4.3c1.19 0 2.15.96 2.15 2.15"
              fill="currentColor"
            />
            <path
              d="M22 4.15v11.7c0 1.19-.96 2.15-2.15 2.15h-.63a.35.35 0 0 1-.35-.35V8.42a3.93 3.93 0 0 0-3.92-3.92h-1.2a.35.35 0 0 1-.35-.35c0-1.19.96-2.15 2.15-2.15h4.3C21.04 2 22 2.96 22 4.15"
              fill="currentColor"
            />
            <path
              d="M14.95 6H9.12A2.4 2.4 0 0 0 6.7 8.42v11.16A2.4 2.4 0 0 0 9.12 22h1.63a.5.5 0 0 0 .5-.5V19c0-.41.34-.75.75-.75s.75.34.75.75v2.5c0 .28.22.5.5.5h1.71a2.4 2.4 0 0 0 2.41-2.41V8.42A2.4 2.4 0 0 0 14.95 6M14 14.75h-4a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75m0-3h-4a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconOrganization;
