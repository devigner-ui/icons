import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCardanoAda = forwardRef<SVGSVGElement, IconProps>(
  function IconCardanoAda(
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
              d="M13.75 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              stroke="currentColor"
              strokeMiterlimit="10"
            />
            <path
              d="M10.25 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              stroke="currentColor"
              strokeMiterlimit="10"
            />
            <path
              d="M15.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              stroke="currentColor"
              strokeMiterlimit="10"
            />
            <path
              d="M17.15 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
              stroke="currentColor"
              strokeMiterlimit="10"
              opacity={duotone ? "0.6" : "1"}
            />
            <path
              d="M17.15 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
              stroke="currentColor"
              strokeMiterlimit="10"
              opacity={duotone ? "0.6" : "1"}
            />
            <path
              d="M19.75 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
              stroke="currentColor"
              strokeMiterlimit="10"
              opacity={duotone ? "0.6" : "1"}
            />
            <path
              d="M6.8 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
              stroke="currentColor"
              strokeMiterlimit="10"
              opacity={duotone ? "0.6" : "1"}
            />
            <path
              d="M6.8 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
              stroke="currentColor"
              strokeMiterlimit="10"
              opacity={duotone ? "0.6" : "1"}
            />
            <path
              d="M4.2 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
              stroke="currentColor"
              strokeMiterlimit="10"
              opacity={duotone ? "0.6" : "1"}
            />
            <path
              d="M15.9 5.95a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
              stroke="currentColor"
              strokeMiterlimit="10"
              opacity={duotone ? "0.6" : "1"}
            />
            <path
              d="M8.1 5.95a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
              stroke="currentColor"
              strokeMiterlimit="10"
              opacity={duotone ? "0.6" : "1"}
            />
            <path
              d="M12.05 6.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
              stroke="currentColor"
              strokeMiterlimit="10"
              opacity={duotone ? "0.6" : "1"}
            />
            <path
              d="M15.9 19.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
              stroke="currentColor"
              strokeMiterlimit="10"
              opacity={duotone ? "0.6" : "1"}
            />
            <path
              d="M8.1 19.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
              stroke="currentColor"
              strokeMiterlimit="10"
              opacity={duotone ? "0.6" : "1"}
            />
            <path
              d="M12.05 18.95a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
              stroke="currentColor"
              strokeMiterlimit="10"
              opacity={duotone ? "0.6" : "1"}
            />
            <path
              d="M8.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              stroke="currentColor"
              strokeMiterlimit="10"
            />
            <path
              d="M10.25 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              stroke="currentColor"
              strokeMiterlimit="10"
            />
            <path
              d="M13.75 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              stroke="currentColor"
              strokeMiterlimit="10"
            />
            <path
              d="M12 2.45"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              d="M17.5 2.85"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              d="M17.5 21.2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              d="M20 16.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              d="M20 7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              d="M4 16.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              d="M4 7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              d="M6.5 2.85"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              d="M6.5 21.2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              d="M12 21.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              d="M1.55 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              d="M22.5 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={duotone ? "0.4" : "1"}
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M17.82 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
                fill="currentColor"
              />
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M17.82 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
                fill="currentColor"
              />
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M20.42 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
                fill="currentColor"
              />
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M7.47 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
                fill="currentColor"
              />
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M7.47 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
                fill="currentColor"
              />
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M4.87 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
                fill="currentColor"
              />
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M16.57 6.2a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
                fill="currentColor"
              />
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M8.77 6.2a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
                fill="currentColor"
              />
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M12.72 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
                fill="currentColor"
              />
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M16.57 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
                fill="currentColor"
              />
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M8.77 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
                fill="currentColor"
              />
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M12.72 19.2a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
                fill="currentColor"
              />
            </g>
            <path
              d="M14.42 10.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
              fill="currentColor"
            />
            <path
              d="M10.92 10.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
              fill="currentColor"
            />
            <path
              d="M16.17 13.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
              fill="currentColor"
            />
            <path
              d="M9.17 13.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
              fill="currentColor"
            />
            <path
              d="M10.92 16.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
              fill="currentColor"
            />
            <path
              d="M14.42 16.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M12.67 3.33a.87.87 0 1 1 0-1.75.87.87 0 1 1 0 1.75"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M17.92 3.6a.76.76 0 0 1-.76-.75c0-.41.34-.75.75-.75s.76.34.76.75-.33.75-.75.75"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M7.42 3.6a.75.75 0 1 1 0-1.5h.01c.41 0 .75.34.75.75s-.34.75-.76.75"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M12.67 22.38a.87.87 0 0 1-.88-.88c0-.49.39-.88.88-.88s.88.39.88.88-.39.88-.88.88"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M17.92 21.85a.76.76 0 0 1-.76-.75c0-.41.34-.75.75-.75s.76.34.76.75-.33.75-.75.75"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M7.42 21.85a.75.75 0 1 1 0-1.5h.01c.41 0 .75.34.75.75s-.34.75-.76.75"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M2.22 12.88a.9.9 0 0 1-.88-.87V12c0-.48.39-.88.88-.88s.87.39.87.88-.39.88-.87.88"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M4.42 17.75a.76.76 0 0 1-.75-.75v-.01c0-.41.34-.75.75-.75s.75.34.75.75-.34.76-.75.76"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M4.42 7.76a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75s.75.33.75.74v.01c0 .41-.34.75-.75.75"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M23.17 12.88a.9.9 0 0 1-.88-.87V12a.88.88 0 1 1 .88.88"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M20.97 17.75a.75.75 0 0 1-.75-.75v-.01c0-.41.34-.75.75-.75s.75.34.75.75-.34.76-.75.76"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M20.97 7.76a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75s.75.33.75.74v.01c0 .41-.34.75-.75.75"
                fill="currentColor"
              />
            </g>
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
              d="M17.82 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              fill="currentColor"
            />
            <path
              d="M17.82 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              fill="currentColor"
            />
            <path
              d="M20.42 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              fill="currentColor"
            />
            <path
              d="M7.47 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              fill="currentColor"
            />
            <path
              d="M7.47 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              fill="currentColor"
            />
            <path
              d="M4.87 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              fill="currentColor"
            />
            <path
              d="M16.57 6.2a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              fill="currentColor"
            />
            <path
              d="M8.77 6.2a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              fill="currentColor"
            />
            <path
              d="M12.72 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              fill="currentColor"
            />
            <path
              d="M16.57 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              fill="currentColor"
            />
            <path
              d="M8.77 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              fill="currentColor"
            />
            <path
              d="M12.72 19.2a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              fill="currentColor"
            />
            <path
              d="M14.42 10.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
              fill="currentColor"
            />
            <path
              d="M10.92 10.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
              fill="currentColor"
            />
            <path
              d="M16.17 13.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
              fill="currentColor"
            />
            <path
              d="M9.17 13.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
              fill="currentColor"
            />
            <path
              d="M10.92 16.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
              fill="currentColor"
            />
            <path
              d="M14.42 16.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
              fill="currentColor"
            />
            <path
              d="M12.67 3.33a.87.87 0 0 1-.88-.88c0-.49.39-.88.88-.88s.88.39.88.88-.39.88-.88.88"
              fill="currentColor"
            />
            <path
              d="M17.92 3.6a.76.76 0 0 1-.76-.75c0-.41.34-.75.75-.75s.76.34.76.75-.33.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M7.42 3.6a.75.75 0 1 1 0-1.5h.01c.41 0 .75.34.75.75s-.34.75-.76.75"
              fill="currentColor"
            />
            <path
              d="M12.67 22.38a.87.87 0 0 1-.88-.88c0-.49.39-.88.88-.88s.88.39.88.88-.39.88-.88.88"
              fill="currentColor"
            />
            <path
              d="M17.92 21.85a.76.76 0 0 1-.76-.75c0-.41.34-.75.75-.75s.76.34.76.75-.33.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M7.42 21.85a.75.75 0 1 1 0-1.5h.01c.41 0 .75.34.75.75s-.34.75-.76.75"
              fill="currentColor"
            />
            <path
              d="M2.22 12.88a.9.9 0 0 1-.88-.87V12a.88.88 0 1 1 .88.88"
              fill="currentColor"
            />
            <path
              d="M4.42 17.75a.75.75 0 0 1-.75-.75v-.01c0-.41.34-.75.75-.75s.75.34.75.75-.34.76-.75.76"
              fill="currentColor"
            />
            <path
              d="M4.42 7.76a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75s.75.33.75.74v.01c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M23.17 12.88a.9.9 0 0 1-.88-.87V12a.88.88 0 1 1 .88.88"
              fill="currentColor"
            />
            <path
              d="M20.97 17.75a.75.75 0 0 1-.75-.75v-.01c0-.41.34-.75.75-.75s.75.34.75.75-.34.76-.75.76"
              fill="currentColor"
            />
            <path
              d="M20.97 7.76a.76.76 0 0 1-.75-.75.75.75 0 1 1 1.5 0v.01c0 .4-.34.74-.75.74"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCardanoAda;
