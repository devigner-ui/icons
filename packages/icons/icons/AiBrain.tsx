import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiBrain = forwardRef<SVGSVGElement, IconProps>(function IconAiBrain(
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

  /* TwoTone masks the dimmed inner lines with the stroked outline, and Bulk
     keeps the white lines inside the brain, so the midline stops at the
     outline instead of sitting over it. One tone skips it: there the overlap
     is invisible, and a mask would leave a hairline seam. */
  const cut = useId();

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
            d="M12 5c.37-.86 1-1.5 1.77-1.86m6.89 4.78q.34.7.34 1.58c0 .8-.3 1.6-.8 2.2.5.6.8 1.4.8 2.3 0 1.6-1.1 3-2.6 3.4a3.9 3.9 0 0 1-3.9 3.3c-1.1 0-2-.5-2.5-1.2M12 5c-.6-1.4-1.9-2.2-3.3-2.2-1.9 0-3.5 1.5-3.6 3.4C3.8 6.8 3 8 3 9.5c0 .8.3 1.6.8 2.2a3.6 3.6 0 0 0-.65 3.3m1.39 1.9q.48.35 1.06.5a3.9 3.9 0 0 0 3.9 3.3c1.1 0 2-.5 2.5-1.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 5v14.5m-5-10c1.3 0 2.3 1 2.3 2.3m-2.8 2.7c1.4.2 2.4 1.2 2.6 2.6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.5 1.5c.27 1.98 1.02 2.73 3 3-1.98.27-2.73 1.02-3 3-.27-1.98-1.02-2.73-3-3 1.98-.27 2.73-1.02 3-3Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
          <mask id={cut} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="white" />
            <path d="M12 5c-.6-1.4-1.9-2.2-3.3-2.2-1.9 0-3.5 1.5-3.6 3.4C3.8 6.8 3 8 3 9.5c0 .8.3 1.6.8 2.2-.5.6-.8 1.4-.8 2.3 0 1.6 1.1 3 2.6 3.4a3.9 3.9 0 0 0 3.9 3.3c1.1 0 2-.5 2.5-1.2M12 5c.37-.86 1-1.5 1.77-1.86m6.89 4.78q.34.7.34 1.58c0 .8-.3 1.6-.8 2.2.5.6.8 1.4.8 2.3 0 1.6-1.1 3-2.6 3.4a3.9 3.9 0 0 1-3.9 3.3c-1.1 0-2-.5-2.5-1.2" stroke="black" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
          </mask>
          <path
            d="M12 5c-.6-1.4-1.9-2.2-3.3-2.2-1.9 0-3.5 1.5-3.6 3.4C3.8 6.8 3 8 3 9.5c0 .8.3 1.6.8 2.2-.5.6-.8 1.4-.8 2.3 0 1.6 1.1 3 2.6 3.4a3.9 3.9 0 0 0 3.9 3.3c1.1 0 2-.5 2.5-1.2M12 5c.37-.86 1-1.5 1.77-1.86m6.89 4.78q.34.7.34 1.58c0 .8-.3 1.6-.8 2.2.5.6.8 1.4.8 2.3 0 1.6-1.1 3-2.6 3.4a3.9 3.9 0 0 1-3.9 3.3c-1.1 0-2-.5-2.5-1.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            mask={duotone ? `url(#${cut})` : undefined}
            d="M12 5v14.5m-5-10c1.3 0 2.3 1 2.3 2.3m-2.8 2.7c1.4.2 2.4 1.2 2.6 2.6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.5 1.5c.27 1.98 1.02 2.73 3 3-1.98.27-2.73 1.02-3 3-.27-1.98-1.02-2.73-3-3 1.98-.27 2.73-1.02 3-3Z"
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
          <mask id={cut} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <path d="M9.5 21.45a4.6 4.6 0 0 1-4.54-3.48 3.2 3.2 0 0 1-1.82-1.36A4.5 4.5 0 0 1 2.25 14c0-1.03.26-1.64.65-2.3-.57-.71-.65-1.27-.65-2.2 0-1.7.9-2.97 2.16-3.77a4.35 4.35 0 0 1 6.65-2.99q.5.34.94.86.42-.52.94-.85a4.3 4.3 0 0 1 3.75-.46q-.07.12-.18.22c-.24.23-.4.31-1.23.4a1.6 1.6 0 0 0 0 3.17c.82.1 1 .17 1.23.4s.31.42.4 1.23a1.6 1.6 0 0 0 3.17 0c.1-.81.18-.99.4-1.22q.02 0 .03-.02a4.2 4.2 0 0 1 .6 5.23 4.4 4.4 0 0 1-.26 4.9 4 4 0 0 1-1.82 1.37 3.7 3.7 0 0 1-1.46 2.36 5 5 0 0 1-3.07 1.12c-.94 0-1.84-.38-2.5-.9-.66.52-1.56.9-2.5.9z" fill="white" />
          </mask>
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.5 21.45a4.6 4.6 0 0 1-4.54-3.48 3.2 3.2 0 0 1-1.82-1.36A4.5 4.5 0 0 1 2.25 14c0-1.03.26-1.64.65-2.3-.57-.71-.65-1.27-.65-2.2 0-1.7.9-2.97 2.16-3.77a4.35 4.35 0 0 1 6.65-2.99q.5.34.94.86.42-.52.94-.85a4.3 4.3 0 0 1 3.75-.46q-.07.12-.18.22c-.24.23-.4.31-1.23.4a1.6 1.6 0 0 0 0 3.17c.82.1 1 .17 1.23.4s.31.42.4 1.23a1.6 1.6 0 0 0 3.17 0c.1-.81.18-.99.4-1.22q.02 0 .03-.02a4.2 4.2 0 0 1 .6 5.23 4.4 4.4 0 0 1-.26 4.9 4 4 0 0 1-1.82 1.37 3.7 3.7 0 0 1-1.46 2.36 5 5 0 0 1-3.07 1.12c-.94 0-1.84-.38-2.5-.9-.66.52-1.56.9-2.5.9z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            mask={`url(#${cut})`}
            d="M11.25 5v14.5a.75.75 0 0 0 1.5 0V5a.75.75 0 0 0-1.5 0zm-5 4.5c0 .41.34.75.75.75.88.02 1.53.67 1.55 1.55a.75.75 0 0 0 1.5 0A3.07 3.07 0 0 0 7 8.75a.75.75 0 0 0-.75.75zm-.5 4.9c-.05.4.24.78.65.84a2.3 2.3 0 0 1 1.96 1.97.75.75 0 0 0 1.48-.22 3.8 3.8 0 0 0-3.23-3.23.75.75 0 0 0-.85.63z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M18.9 1.1c.14 1.06.38 1.7.84 2.16.47.46 1.1.7 2.16.84a.4.4 0 0 1 0 .8c-1.06.13-1.7.38-2.16.84s-.7 1.1-.84 2.16a.4.4 0 0 1-.8 0c-.14-1.06-.38-1.7-.84-2.16-.47-.47-1.1-.7-2.16-.85a.4.4 0 0 1 0-.79c1.06-.14 1.7-.38 2.16-.84.46-.47.7-1.1.84-2.16a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
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
            d="M9.5 21.45a4.6 4.6 0 0 1-4.54-3.48 3.2 3.2 0 0 1-1.82-1.36A4.5 4.5 0 0 1 2.25 14c0-1.03.26-1.64.65-2.3-.57-.71-.65-1.27-.65-2.2 0-1.7.9-2.97 2.16-3.77A4.35 4.35 0 0 1 8.7 2.04a4.5 4.5 0 0 1 2.68.94 1 1 0 0 0-.13.42v17.62q-.8.41-1.75.43zm3.44-18.7a4.3 4.3 0 0 1 3.75-.46q-.07.12-.18.22c-.23.23-.4.31-1.23.4a1.6 1.6 0 0 0 0 3.18c.82.09 1 .17 1.23.4s.31.4.4 1.23a1.6 1.6 0 0 0 3.18 0c.09-.82.17-1 .4-1.23l.02-.02a4.2 4.2 0 0 1 .6 5.23 4.4 4.4 0 0 1-.26 4.9 4 4 0 0 1-1.81 1.37 3.7 3.7 0 0 1-1.46 2.36 5 5 0 0 1-3.08 1.12q-.94-.01-1.75-.43V3.4q0-.24-.13-.42zM6.25 9.5c0 .41.34.75.75.75.88.02 1.53.67 1.55 1.55a.75.75 0 0 0 1.5 0A3.07 3.07 0 0 0 7 8.75a.75.75 0 0 0-.75.75zm-.5 4.9c-.05.4.24.78.65.84a2.3 2.3 0 0 1 1.96 1.97.75.75 0 0 0 1.48-.22 3.8 3.8 0 0 0-3.23-3.23.75.75 0 0 0-.85.63z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M18.9 1.1c.14 1.06.38 1.7.84 2.16.47.46 1.1.7 2.16.84a.4.4 0 0 1 0 .8c-1.06.13-1.7.38-2.16.84s-.7 1.1-.84 2.16a.4.4 0 0 1-.8 0c-.14-1.06-.38-1.7-.84-2.16-.47-.47-1.1-.7-2.16-.85a.4.4 0 0 1 0-.79c1.06-.14 1.7-.38 2.16-.84.46-.47.7-1.1.84-2.16a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiBrain;
