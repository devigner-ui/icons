import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPin = forwardRef<SVGSVGElement, IconProps>(function IconPin(
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
            d="m15.99 4.95.53-.53h0zM8.74 19.43l-.53.53v0zM4.62 15.3l.53-.53v0zm12.95-.32-.27-.7v0zm-1.92.72.26.7v0zM8.33 8.38l-.7-.26h0zm.7-1.9.7.26v0zm-3.18 4.2.2.72h0zm1.45-.54-.44-.61h0zm.38-.35.57.49h0zm6.57 6.6.5.56h0zm-.87 1.81-.72-.2v0zm.54-1.45-.61-.44h0zm-11.2-4-.75.01v0zm.21-.8-.65-.37h0zm8.38 9.4v-.76h0zm.78-.22-.37-.65h0zm9.88-8.83.73.16zM11.7 2.04l.16.73v0zm10.66 8.59a.75.75 0 1 0-1.31.74zM18 8.03a.75.75 0 0 0 1.06-1.06zM9.27 18.9l-4.12-4.12-1.06 1.06 4.12 4.12zm8.03-4.6-1.9.7.52 1.4 1.92-.71zM9.04 8.63l.7-1.9-1.42-.51-.7 1.9zm-3 2.76c.72-.2 1.26-.34 1.7-.66l-.88-1.21c-.17.12-.4.2-1.21.42zm1.59-3.28c-.3.8-.39 1.02-.52 1.18l1.14.98c.35-.42.53-.95.79-1.64zm.11 2.62q.29-.2.5-.46L7.12 9.3q-.12.13-.25.23zM15.39 15c-.7.26-1.22.45-1.63.8l.98 1.14a4 4 0 0 1 1.17-.53zm-1.29 3.4c.23-.82.3-1.04.43-1.22l-1.22-.87c-.32.44-.46.98-.65 1.7zm-.34-2.59q-.26.23-.45.5l1.22.87q.09-.12.21-.23zm-8.6-1.03a20 20 0 0 1-1.38-1.45c-.28-.35-.31-.51-.31-.58l-1.5.01c0 .58.3 1.07.64 1.5q.54.66 1.48 1.58zm.49-4.83q-1.28.33-2.07.63c-.52.21-1 .5-1.3 1l1.3.75c.04-.06.14-.18.56-.35s1.02-.34 1.9-.58zm-2.18 2.8q0-.23.11-.42l-1.3-.75q-.3.55-.31 1.18zm4.74 7.2q.92.96 1.58 1.5c.44.35.93.64 1.51.64v-1.5c-.06 0-.22-.03-.58-.31s-.8-.73-1.45-1.38zM12.66 18c-.25.89-.41 1.5-.58 1.92-.18.43-.3.53-.36.56l.75 1.3c.5-.28.79-.78 1-1.3q.3-.8.63-2.08zm-1.36 4.1q.62 0 1.17-.31l-.75-1.3a1 1 0 0 1-.41.1zm6.53-6.4c1.36-.52 2.46-.93 3.25-1.36.8-.44 1.43-1 1.62-1.88l-1.47-.31c-.05.25-.23.52-.88.88-.66.36-1.64.73-3.05 1.26zM16.52 4.42c-1.04-1.04-1.87-1.88-2.6-2.41-.73-.55-1.5-.9-2.38-.7l.32 1.46c.25-.06.57 0 1.17.44.61.46 1.36 1.2 2.43 2.27zM9.73 6.74c.52-1.42.89-2.4 1.25-3.08.36-.66.63-.84.88-.9l-.32-1.46c-.89.2-1.44.84-1.88 1.65-.43.79-.83 1.9-1.34 3.28zm11.32 4.63c.2.36.22.58.18.78l1.47.31a2.5 2.5 0 0 0-.34-1.83zm-5.6-5.89 2.56 2.55 1.06-1.06-2.55-2.55z"
            fill="currentColor"
          />
          <path
            d="M1.47 21.47a.75.75 0 0 0 1.06 1.06zm5.71-3.6a.75.75 0 0 0-1.06-1.06zm-4.65 4.66 4.65-4.66-1.06-1.06-4.65 4.66z"
            fill="currentColor"
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
            d="M18.34 8.4 15.6 5.67c-1.89-1.9-2.84-2.84-3.87-2.63s-1.54 1.45-2.55 3.93l-.95 2.32a4 4 0 0 1-.65 1.29q-.12.13-.27.24a4 4 0 0 1-1.35.53c-1.67.49-2.5.73-2.8 1.31q-.14.3-.15.6c-.02.64.6 1.26 1.83 2.5l3.42 3.42c1.24 1.24 1.86 1.85 2.5 1.83q.3 0 .6-.15c.58-.3.82-1.13 1.31-2.8a4 4 0 0 1 .53-1.35q.1-.15.24-.27c.26-.24.6-.38 1.29-.65l2.32-.95c2.48-1.01 3.72-1.52 3.93-2.55s-.74-1.98-2.63-3.87"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m3 20.93 3.56-3.56"
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
            d="m19.15 7.79-2.94-2.94c-2.03-2.03-3.04-3.04-4.15-2.82-1.1.22-1.65 1.55-2.73 4.2l-1.01 2.5c-.3.73-.45 1.1-.7 1.38l-.3.26c-.3.22-.68.33-1.44.56-1.8.53-2.69.79-3 1.4q-.15.31-.16.65c-.03.69.64 1.35 1.96 2.67l1.27 1.28 1.12 1.12 1.28 1.27c1.32 1.32 1.98 1.99 2.67 1.96q.33-.01.64-.17c.62-.3.88-1.2 1.41-3 .23-.75.34-1.13.56-1.43l.26-.3c.28-.25.65-.4 1.38-.7l2.5-1.01c2.65-1.08 3.98-1.62 4.2-2.73s-.8-2.12-2.82-4.15"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m3.35 21.77 3.72-3.72-1.12-1.12-3.72 3.72a.79.79 0 1 0 1.12 1.12"
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
            d="m16.21 4.85 2.94 2.94c2.03 2.03 3.04 3.04 2.82 4.15-.22 1.1-1.55 1.65-4.2 2.73l-2.5 1.01c-.73.3-1.1.45-1.38.7l-.26.3c-.22.3-.33.68-.56 1.44-.53 1.8-.79 2.69-1.4 3q-.31.15-.65.16c-.69.03-1.35-.64-2.67-1.96l-1.28-1.27-3.72 3.72a.79.79 0 0 1-1.12-1.12l3.72-3.72-1.27-1.28c-1.32-1.32-1.99-1.98-1.96-2.67q.01-.33.17-.64c.3-.62 1.2-.88 3-1.41a5 5 0 0 0 1.43-.56l.3-.26c.25-.28.4-.65.7-1.38l1.01-2.5c1.08-2.65 1.62-3.98 2.73-4.2s2.12.8 4.15 2.82"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPin;
