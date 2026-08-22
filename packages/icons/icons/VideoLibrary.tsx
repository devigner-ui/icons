import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconVideoLibrary = forwardRef<SVGSVGElement, IconProps>(
  function IconVideoLibrary(
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
              d="M2.9 13.8c-.42-3.17-.63-4.75.27-5.78C4.07 7 5.67 7 8.85 7h6.3c3.19 0 4.78 0 5.68 1.02.9 1.03.69 2.6.26 5.77l-.4 3c-.33 2.48-.5 3.72-1.34 4.47s-2.1.74-4.6.74h-5.5c-2.5 0-3.75 0-4.6-.74-.85-.75-1.01-1.99-1.34-4.47z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.56 7c.23-1.3-.77-2.5-2.1-2.5H6.54A2.13 2.13 0 0 0 4.44 7M17.5 4.5l.04-.5a2 2 0 0 0-1.78-1.99l-.5-.01H8.74l-.5.01a2 2 0 0 0-1.78 2l.04.49"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M13.89 12.7c1.07.76 1.61 1.14 1.61 1.8s-.54 1.04-1.61 1.8a15 15 0 0 1-1.65 1.03c-1.07.57-1.6.86-2.09.54s-.52-.98-.61-2.3a17 17 0 0 1 0-2.14c.09-1.32.13-1.98.61-2.3s1.02-.03 2.1.54a15 15 0 0 1 1.64 1.02"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              d="M15 7.54H9c-3.03 0-4.55 0-5.4.99s-.66 2.51-.25 5.56l.38 2.9c.31 2.38.47 3.58 1.28 4.3.8.71 2 .71 4.38.71h5.22c2.39 0 3.58 0 4.38-.72.81-.71.97-1.9 1.28-4.3l.38-2.9c.4-3.04.6-4.56-.25-5.55s-2.37-.99-5.4-.99m-4.35 4.58h-.02c-.01.02-.07.05-.12.3a16 16 0 0 0 0 4.7c.05.25.1.28.12.3h.02l.16-.03a13 13 0 0 0 3.63-2.3c.17-.17.18-.25.18-.32s-.01-.15-.18-.32c-.2-.21-.53-.45-1.06-.83a14 14 0 0 0-2.57-1.47z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.6" : "1"}
              d="M6.88 4.72a2.75 2.75 0 0 0-2.64 2.03q.54-.17 1.1-.26c.98-.14 2.2-.14 3.64-.14h6.2c1.43 0 2.66 0 3.63.14q.57.08 1.1.26a2.8 2.8 0 0 0-2.63-2.03z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.86 2h6.28q.3 0 .51.02c1 .1 1.81.77 2.16 1.67H6.19A2.6 2.6 0 0 1 8.86 2"
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
              d="M8.86 2h6.28q.3 0 .51.02c1 .1 1.81.77 2.16 1.67H6.19A2.6 2.6 0 0 1 8.86 2"
              fill="currentColor"
            />
            <path
              d="M6.88 4.72a2.75 2.75 0 0 0-2.64 2.03q.54-.17 1.1-.26c.98-.13 2.2-.13 3.64-.13h6.2a28 28 0 0 1 3.63.13q.57.08 1.1.26a2.8 2.8 0 0 0-2.63-2.03z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.6 8.53c-.86.99-.66 2.51-.25 5.56l.38 2.9c.31 2.38.47 3.58 1.28 4.3.8.71 2 .71 4.38.71h5.22c2.39 0 3.58 0 4.38-.72.81-.71.97-1.9 1.28-4.3l.38-2.9c.4-3.04.6-4.56-.25-5.55s-2.37-.99-5.4-.99H9c-3.03 0-4.55 0-5.4.99m8.91 2.85.06.03a15 15 0 0 1 1.64 1.03l.05.03c.47.35.9.65 1.2.96.34.36.58.78.58 1.34s-.24.99-.58 1.34c-.3.3-.73.62-1.2.96l-.05.03a15 15 0 0 1-1.64 1.04l-.06.02c-.46.25-.9.49-1.27.6-.44.15-.92.17-1.39-.14a1.8 1.8 0 0 1-.74-1.19Q9 16.8 8.95 15.9v-.05a17 17 0 0 1 0-2.16v-.05q.04-.9.16-1.53c.1-.45.3-.9.74-1.2.47-.3.95-.28 1.39-.14.38.12.8.36 1.27.6m-1.88.75.02-.01.16.03a13 13 0 0 1 3.63 2.3c.17.17.18.25.18.32s-.01.15-.18.33c-.2.2-.53.44-1.06.82a14 14 0 0 1-2.57 1.47l-.16.03h-.02c-.01-.02-.07-.05-.12-.3a16 16 0 0 1 0-4.7c.05-.25.1-.28.12-.3"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconVideoLibrary;
