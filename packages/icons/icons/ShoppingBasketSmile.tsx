import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconShoppingBasketSmile = forwardRef<SVGSVGElement, IconProps>(
  function IconShoppingBasketSmile(
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
            d="M15.34 15.28q.16-.5.16-1.03"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M8.5 14.25a3.52 3.52 0 0 0 4.54 3.34"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M8.8 2 5.2 5.63"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m15.19 2 3.62 3.63"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2 7.85c0-1.85.99-2 2.22-2h15.56c1.23 0 2.22.15 2.22 2 0 2.15-.99 2-2.22 2H4.22C2.99 9.85 2 10 2 7.85Z"
            strokeWidth={strokeWidth}
            stroke="currentColor"
          />
          <path
            d="M4.91 18.64C5.23 20.58 6 22 8.86 22h6.03c3.11 0 3.57-1.36 3.93-3.24L20.5 10"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            stroke="currentColor"
          />
          <path
            d="m3.5 10 .69 4.25"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M8.5 14.25c0 1.92 1.58 3.5 3.5 3.5s3.5-1.58 3.5-3.5"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.81 2 5.19 5.63"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m15.19 2 3.62 3.63"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M2 7.85c0-1.85.99-2 2.22-2h15.56c1.23 0 2.22.15 2.22 2 0 2.15-.99 2-2.22 2H4.22C2.99 9.85 2 10 2 7.85"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m3.5 10 1.41 8.64C5.23 20.58 6 22 8.86 22h6.03c3.11 0 3.57-1.36 3.93-3.24L20.5 10"
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
              opacity={duotone ? "0.4" : "1"}
              d="M19.24 5.58h-.4L15.46 2.2a.7.7 0 0 0-.99 0 .7.7 0 0 0 0 .99l2.39 2.39H7.14l2.39-2.39a.7.7 0 0 0 0-.99.7.7 0 0 0-.99 0L5.17 5.58h-.4c-.9 0-2.77 0-2.77 2.56 0 .97.2 1.61.62 2.03q.37.36.84.45.44.1.9.08h15.28q.46 0 .88-.08c.84-.2 1.48-.8 1.48-2.48 0-2.56-1.87-2.56-2.76-2.56"
              fill="currentColor"
            />
            <path
              d="M19.65 10.7H4.36q-.45.02-.9-.09l1.26 7.69C5 20.02 5.75 22 9.08 22h5.61c3.37 0 3.97-1.69 4.33-3.58l1.51-7.81q-.43.1-.88.09M12 18.5a4.26 4.26 0 0 1-4.25-4.25c0-.41.34-.75.75-.75s.75.34.75.75a2.75 2.75 0 1 0 5.5 0c0-.41.34-.75.75-.75s.75.34.75.75A4.26 4.26 0 0 1 12 18.5"
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
              d="M19.24 5.58h-.4L15.46 2.2a.7.7 0 0 0-.99 0 .7.7 0 0 0 0 .99l2.39 2.39H7.14l2.39-2.39a.7.7 0 0 0 0-.99.7.7 0 0 0-.99 0L5.17 5.58h-.4c-.9 0-2.77 0-2.77 2.56 0 .97.2 1.61.62 2.03q.37.36.84.45.44.1.9.08h15.28q.46 0 .88-.08c.84-.2 1.48-.8 1.48-2.48 0-2.56-1.87-2.56-2.76-2.56"
              fill="currentColor"
            />
            <path
              d="M19.05 12H4.87a1 1 0 0 0-.99 1.16l.84 5.14C5 20.02 5.75 22 9.08 22h5.61c3.37 0 3.97-1.69 4.33-3.58l1.01-5.23a1 1 0 0 0-.98-1.19M12 19.5a4.26 4.26 0 0 1-4.25-4.25c0-.41.34-.75.75-.75s.75.34.75.75a2.75 2.75 0 1 0 5.5 0c0-.41.34-.75.75-.75s.75.34.75.75A4.26 4.26 0 0 1 12 19.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconShoppingBasketSmile;
