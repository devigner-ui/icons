import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMagicStick = forwardRef<SVGSVGElement, IconProps>(
  function IconMagicStick(
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
              d="M12.62 3.78c2.17-1.39 3.26-2.08 4.1-1.65s.86 1.7.92 4.23l.02.66c.02.72.02 1.08.17 1.4.15.3.42.53.97.99l.5.4c1.9 1.6 2.86 2.4 2.68 3.35s-1.38 1.41-3.77 2.34l-.61.25c-.68.26-1.02.4-1.28.64-.25.25-.4.59-.68 1.26l-.25.62c-1 2.37-1.49 3.56-2.44 3.71-.94.16-1.71-.82-3.25-2.78l-.4-.51c-.44-.56-.65-.84-.96-1-.3-.15-.67-.17-1.38-.2l-.66-.04c-2.52-.13-3.78-.2-4.19-1.05-.4-.85.32-1.92 1.76-4.06l.37-.56c.4-.6.61-.91.68-1.26.06-.34-.02-.7-.18-1.4l-.15-.63c-.57-2.45-.85-3.68-.15-4.36s1.9-.36 4.33.28l.63.16c.7.18 1.04.27 1.38.21.35-.05.66-.25 1.28-.64z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.53 18.47a.75.75 0 1 0-1.06 1.06zm.94 3.06a.75.75 0 1 0 1.06-1.06zm-2-2 2 2 1.06-1.06-2-2z"
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
              d="M16.71 2.13c-.83-.43-1.92.26-4.1 1.65l-.55.36c-.62.4-.93.59-1.28.64s-.69-.03-1.38-.21l-.63-.16c-2.42-.64-3.64-.96-4.33-.28-.7.68-.42 1.9.15 4.36l.15.64c.16.7.24 1.05.18 1.4-.07.34-.27.64-.68 1.25l-.37.56C2.43 14.48 1.7 15.55 2.1 16.4s1.67.92 4.2 1.05l.65.03c.71.04 1.07.06 1.38.22.3.15.52.43.96.99l.4.5c1.54 1.97 2.3 2.95 3.25 2.8s1.45-1.35 2.44-3.72l.25-.62c.29-.67.43-1 .68-1.26.26-.25.6-.38 1.28-.64l.61-.25c2.4-.93 3.59-1.4 3.77-2.34.18-.95-.78-1.74-2.69-3.34l-.5-.41c-.54-.46-.8-.69-.96-1-.15-.3-.15-.67-.17-1.39l-.02-.66c-.06-2.53-.1-3.8-.93-4.23"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.53 18.47a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 1 0 1.06-1.06z"
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
              d="M16.71 2.13c-.83-.43-1.92.26-4.1 1.65l-.55.36c-.62.4-.93.59-1.28.64s-.69-.03-1.38-.21l-.63-.16c-2.42-.64-3.64-.96-4.33-.28-.7.68-.42 1.9.15 4.36l.15.64c.16.7.24 1.05.18 1.4-.07.34-.27.64-.68 1.25l-.37.56C2.43 14.48 1.7 15.55 2.1 16.4s1.67.92 4.2 1.05l.65.03c.71.04 1.07.06 1.38.22.3.15.52.43.96.99l.4.5c1.54 1.97 2.3 2.95 3.25 2.8s1.45-1.35 2.44-3.72l.25-.62c.29-.67.43-1 .68-1.26.26-.25.6-.38 1.28-.64l.61-.25c2.4-.93 3.59-1.4 3.77-2.34.18-.95-.78-1.74-2.69-3.34l-.5-.41c-.54-.46-.8-.69-.96-1-.15-.3-.15-.67-.17-1.39l-.02-.66c-.06-2.53-.1-3.8-.93-4.23"
              fill="currentColor"
            />
            <path
              d="M19.53 18.47a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 1 0 1.06-1.06z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMagicStick;
