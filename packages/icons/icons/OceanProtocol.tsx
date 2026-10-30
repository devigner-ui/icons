import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconOceanProtocol = forwardRef<SVGSVGElement, IconProps>(
  function IconOceanProtocol(
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
            d="M12 3.17h.02Zm0 4.58h.02Zm0 3.97h.02Z"
            stroke="currentColor"
            strokeWidth={Number(strokeWidth) * 2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.75 5.47h.02Zm8.5 0h.02ZM3.5 7.7h.02Zm17 0h.02ZM7.75 9.72h.02Zm8.5 0h.02Z"
            stroke="currentColor"
            strokeWidth={Number(strokeWidth) * 2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.5 11.73h.02Zm17 0h.02ZM7.75 13.71h.02Zm8.5 0h.02Zm-4.25 2h.02Z"
            stroke="currentColor"
            strokeWidth={Number(strokeWidth) * 1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.5 14.73h.02Zm17 0h.02ZM7.75 17h.02Zm8.5 0h.02ZM12 19.22h.02Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.5 17.49h.02Zm17 0h.02ZM7.75 19.48h.02Zm8.5 0h.02ZM12 21.55h.02Z"
            stroke="currentColor"
            strokeWidth={Number(strokeWidth) * 0.7}
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
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={Number(strokeWidth) * 2}
              d="M12 3.17h.02M12 7.75h.02M12 11.72h.02"
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={Number(strokeWidth) * 2}
              d="M7.75 5.47h.02m8.48 0h.02M3.5 7.7h.02m16.98 0h.02M7.75 9.72h.02m8.48 0h.02"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={Number(strokeWidth) * 1.5}
              d="M3.5 11.73h.02m16.98 0h.02M7.75 13.71h.02m8.48 0h.02m-4.27 2h.02"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
              d="M3.5 14.73h.02m16.98 0h.02M7.75 17h.02m8.48 0h.02M12 19.22h.02"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={Number(strokeWidth) * 0.7}
              d="M3.5 17.49h.02m16.98 0h.02M7.75 19.48h.02m8.48 0h.02M12 21.55h.02"
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
            <path d="M24 0H0v24h24z" fill="none" />
            <path
              d="M12 4.75q-.15 0-.29-.03l-.28-.08-.26-.14-.23-.19a1.5 1.5 0 1 1 1.06.44"
              fill="currentColor"
            />
            <path
              d="M12 9.25q-.15 0-.29-.03l-.28-.08-.26-.14-.23-.19a1.5 1.5 0 1 1 2.12 0l-.23.19-.26.14-.28.08q-.14.03-.29.03"
              fill="currentColor"
            />
            <path
              d="M12 13.25q-.15 0-.29-.03l-.28-.08-.26-.14-.23-.19a1.5 1.5 0 0 1-.44-1.06q.01-.62.44-1.06l.23-.19.26-.14.28-.08a1.5 1.5 0 0 1 1.76 1.76q-.03.15-.09.28a1 1 0 0 1-.32.49l-.23.19-.26.14-.28.08q-.14.03-.29.03"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M12 16.75q-.4-.01-.71-.29a1 1 0 0 1-.29-.71q.01-.4.29-.71a1 1 0 0 1 1.09-.21q.1.03.17.09l.16.12q.28.3.29.71-.01.4-.29.71l-.16.12-.17.09-.19.06z"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M12 20q-.15 0-.29-.06a1 1 0 0 1-.24-.16 1 1 0 0 1-.16-.24.75.75 0 1 1 .69.46"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M12 22.07a.5.5 0 0 1-.35-.15.5.5 0 0 1-.15-.35q0-.2.15-.35a.5.5 0 0 1 .85.35q0 .2-.15.35a.5.5 0 0 1-.35.15"
                fill="currentColor"
              />
            </g>
            <path
              d="M3.5 9.25a1.5 1.5 0 0 1-1.06-2.56 1.55 1.55 0 0 1 2.12 0A1.5 1.5 0 0 1 3.5 9.25"
              fill="currentColor"
            />
            <path
              d="M20.5 9.25c-.39 0-.78-.16-1.06-.44a1.5 1.5 0 0 1-.19-1.89l.19-.23.23-.19q.12-.08.26-.13.13-.06.28-.09a1.4 1.4 0 0 1 .86.09q.14.05.26.13l.23.19.19.23q.08.12.13.26a1.3 1.3 0 0 1 .12.57q-.01.62-.44 1.06l-.23.19-.26.14-.28.08q-.15.03-.29.03"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="m20.5 12.75-.19-.02-.19-.06-.18-.09-.15-.12-.12-.15-.09-.18-.06-.18-.02-.2q.01-.4.29-.71l.15-.12.18-.09.19-.06a1 1 0 0 1 .38 0l.19.06q.1.03.17.09l.16.12q.28.3.29.71l-.02.2-.06.18-.09.18-.12.15q-.07.07-.16.12l-.17.09-.19.06z"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M3.5 12.75q-.4-.01-.71-.29a1 1 0 0 1-.29-.71q.01-.4.29-.71a1 1 0 0 1 1.09-.21q.19.07.33.21.28.3.29.71-.01.4-.29.71-.3.28-.71.29"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M20.5 15.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M3.5 15.5a.75.75 0 0 1-.53-1.28.77.77 0 0 1 1.06 0 .8.8 0 0 1 .22.53q0 .15-.06.29a.8.8 0 0 1-.69.46"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M20.5 18a.4.4 0 0 1-.19-.04.4.4 0 0 1-.16-.11.5.5 0 0 1-.15-.35q0-.2.15-.35a.5.5 0 0 1 .85.35q0 .2-.15.35a.5.5 0 0 1-.35.15"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M3.5 18a.5.5 0 0 1-.35-.15.5.5 0 0 1-.15-.35q0-.2.15-.35a.5.5 0 0 1 .85.35q0 .2-.15.35a.5.5 0 0 1-.35.15"
                fill="currentColor"
              />
            </g>
            <path
              d="M7.75 7a1.4 1.4 0 0 1-.57-.12q-.14-.05-.26-.13l-.23-.19a1.5 1.5 0 0 1-.44-1.06c0-.39.16-.78.44-1.06a1.55 1.55 0 0 1 2.12 0A1.5 1.5 0 0 1 7.75 7"
              fill="currentColor"
            />
            <path
              d="M16.25 7a1.4 1.4 0 0 1-.57-.12 1 1 0 0 1-.49-.32L15 6.33l-.14-.26-.08-.28-.03-.29a1.5 1.5 0 0 1 .67-1.25q.12-.08.26-.13.13-.06.28-.09a1.4 1.4 0 0 1 .86.09q.14.05.26.13l.23.19a1.5 1.5 0 0 1 .19 1.89l-.19.23-.23.19q-.12.08-.26.13a1.3 1.3 0 0 1-.57.12"
              fill="currentColor"
            />
            <path
              d="M7.75 11.25q-.15 0-.29-.03l-.28-.08-.26-.14-.23-.19a1.5 1.5 0 0 1 0-2.12 1.55 1.55 0 0 1 2.12 0 1.5 1.5 0 0 1-1.06 2.56"
              fill="currentColor"
            />
            <path
              d="M16.25 11.25a1.4 1.4 0 0 1-.57-.12 1 1 0 0 1-.49-.32l-.19-.23-.14-.26-.08-.28-.03-.29a1.5 1.5 0 0 1 .67-1.25q.12-.08.26-.13.13-.06.28-.09a1.4 1.4 0 0 1 .86.09q.14.05.26.13l.23.19a1.5 1.5 0 0 1 .41 1.35l-.08.28-.14.26-.19.23-.23.19q-.12.08-.26.13a1.3 1.3 0 0 1-.57.12"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M7.75 14.75a1 1 0 0 1-.38-.08 1 1 0 0 1-.33-.21q-.14-.15-.21-.33a1 1 0 0 1-.08-.38q.01-.4.29-.71a1.05 1.05 0 0 1 1.42 0q.28.3.29.71a1 1 0 0 1-.08.38q-.07.18-.21.33-.3.28-.71.29"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M16.25 14.75q-.4-.01-.71-.29a1 1 0 0 1-.29-.71q.01-.4.29-.71a1.05 1.05 0 0 1 1.42 0q.28.3.29.71l-.02.2-.06.18-.09.17-.12.16q-.3.28-.71.29"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M7.75 17.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M16.25 17.75q-.15 0-.29-.06a1 1 0 0 1-.24-.16 1 1 0 0 1-.16-.24.7.7 0 0 1 0-.58 1 1 0 0 1 .16-.24 1 1 0 0 1 .24-.16.7.7 0 0 1 .58 0q.14.06.24.16A.8.8 0 0 1 17 17q0 .15-.06.29a.8.8 0 0 1-.69.46"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M7.75 20a.5.5 0 0 1-.35-.15.5.5 0 0 1-.15-.35q0-.2.15-.35a.5.5 0 0 1 .85.35q0 .2-.15.35a.5.5 0 0 1-.35.15"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M16.25 20a.4.4 0 0 1-.19-.04.4.4 0 0 1-.16-.11.4.4 0 0 1-.11-.16.4.4 0 0 1-.04-.19q0-.2.15-.35a.5.5 0 0 1 .85.35.4.4 0 0 1-.04.19.4.4 0 0 1-.11.16.5.5 0 0 1-.35.15"
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
              d="M12 4.75q-.15 0-.29-.03l-.28-.08-.26-.14-.23-.19a1.5 1.5 0 1 1 1.06.44"
              fill="currentColor"
            />
            <path
              d="M12 9.25q-.15 0-.29-.03l-.28-.08-.26-.14-.23-.19a1.5 1.5 0 1 1 2.12 0l-.23.19-.26.14-.28.08q-.14.03-.29.03"
              fill="currentColor"
            />
            <path
              d="M12 13.25q-.15 0-.29-.03l-.28-.08-.26-.14-.23-.19a1.5 1.5 0 0 1-.44-1.06q.01-.62.44-1.06l.23-.19.26-.14.28-.08a1.5 1.5 0 0 1 1.76 1.76q-.03.15-.09.28a1 1 0 0 1-.32.49l-.23.19-.26.14-.28.08q-.14.03-.29.03"
              fill="currentColor"
            />
            <path
              d="M12 16.75q-.4-.01-.71-.29a1 1 0 0 1-.29-.71q.01-.4.29-.71a1 1 0 0 1 1.09-.21q.1.03.17.09l.16.12q.28.3.29.71-.01.4-.29.71l-.16.12-.17.09-.19.06z"
              fill="currentColor"
            />
            <path
              d="M12 20q-.15 0-.29-.06a1 1 0 0 1-.24-.16 1 1 0 0 1-.16-.24.75.75 0 1 1 .69.46"
              fill="currentColor"
            />
            <path
              d="M12 22.07a.5.5 0 0 1-.35-.15.5.5 0 0 1-.15-.35q0-.2.15-.35a.5.5 0 0 1 .85.35q0 .2-.15.35a.5.5 0 0 1-.35.15"
              fill="currentColor"
            />
            <path
              d="M3.5 9.25a1.5 1.5 0 0 1-1.06-2.56 1.55 1.55 0 0 1 2.12 0A1.5 1.5 0 0 1 3.5 9.25"
              fill="currentColor"
            />
            <path
              d="M20.5 9.25c-.39 0-.78-.16-1.06-.44a1.5 1.5 0 0 1-.19-1.89l.19-.23.23-.19q.12-.08.26-.13.13-.06.28-.09a1.4 1.4 0 0 1 .86.09q.14.05.26.13l.23.19.19.23q.08.12.13.26a1.3 1.3 0 0 1 .12.57q-.01.62-.44 1.06l-.23.19-.26.14-.28.08q-.15.03-.29.03"
              fill="currentColor"
            />
            <path
              d="m20.5 12.75-.19-.02-.19-.06-.18-.09-.15-.12-.12-.15-.09-.18-.06-.18-.02-.2q.01-.4.29-.71l.15-.12.18-.09.19-.06a1 1 0 0 1 .38 0l.19.06q.1.03.17.09l.16.12q.28.3.29.71l-.02.2-.06.18-.09.18-.12.15q-.07.07-.16.12l-.17.09-.19.06z"
              fill="currentColor"
            />
            <path
              d="M3.5 12.75q-.4-.01-.71-.29a1 1 0 0 1-.29-.71q.01-.4.29-.71a1 1 0 0 1 1.09-.21q.19.07.33.21.28.3.29.71-.01.4-.29.71-.3.28-.71.29"
              fill="currentColor"
            />
            <path
              d="M20.5 15.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5"
              fill="currentColor"
            />
            <path
              d="M3.5 15.5a.75.75 0 0 1-.53-1.28.77.77 0 0 1 1.06 0 .8.8 0 0 1 .22.53q0 .15-.06.29a.8.8 0 0 1-.69.46"
              fill="currentColor"
            />
            <path
              d="M20.5 18a.4.4 0 0 1-.19-.04.4.4 0 0 1-.16-.11.5.5 0 0 1-.15-.35q0-.2.15-.35a.5.5 0 0 1 .85.35q0 .2-.15.35a.5.5 0 0 1-.35.15"
              fill="currentColor"
            />
            <path
              d="M3.5 18a.5.5 0 0 1-.35-.15.5.5 0 0 1-.15-.35q0-.2.15-.35a.5.5 0 0 1 .85.35q0 .2-.15.35a.5.5 0 0 1-.35.15"
              fill="currentColor"
            />
            <path
              d="M7.75 7a1.4 1.4 0 0 1-.57-.12q-.14-.05-.26-.13l-.23-.19a1.5 1.5 0 0 1-.44-1.06c0-.39.16-.78.44-1.06a1.55 1.55 0 0 1 2.12 0A1.5 1.5 0 0 1 7.75 7"
              fill="currentColor"
            />
            <path
              d="M16.25 7a1.4 1.4 0 0 1-.57-.12 1 1 0 0 1-.49-.32L15 6.33l-.14-.26-.08-.28-.03-.29a1.5 1.5 0 0 1 .67-1.25q.12-.08.26-.13.13-.06.28-.09a1.4 1.4 0 0 1 .86.09q.14.05.26.13l.23.19a1.5 1.5 0 0 1 .19 1.89l-.19.23-.23.19q-.12.08-.26.13a1.3 1.3 0 0 1-.57.12"
              fill="currentColor"
            />
            <path
              d="M7.75 11.25q-.15 0-.29-.03l-.28-.08-.26-.14-.23-.19a1.5 1.5 0 0 1 0-2.12 1.55 1.55 0 0 1 2.12 0 1.5 1.5 0 0 1-1.06 2.56"
              fill="currentColor"
            />
            <path
              d="M16.25 11.25a1.4 1.4 0 0 1-.57-.12 1 1 0 0 1-.49-.32l-.19-.23-.14-.26-.08-.28-.03-.29a1.5 1.5 0 0 1 .67-1.25q.12-.08.26-.13.13-.06.28-.09a1.4 1.4 0 0 1 .86.09q.14.05.26.13l.23.19a1.5 1.5 0 0 1 .41 1.35l-.08.28-.14.26-.19.23-.23.19q-.12.08-.26.13a1.3 1.3 0 0 1-.57.12"
              fill="currentColor"
            />
            <path
              d="M7.75 14.75a1 1 0 0 1-.38-.08 1 1 0 0 1-.33-.21q-.14-.15-.21-.33a1 1 0 0 1-.08-.38q.01-.4.29-.71a1.05 1.05 0 0 1 1.42 0q.28.3.29.71a1 1 0 0 1-.08.38q-.07.18-.21.33-.3.28-.71.29"
              fill="currentColor"
            />
            <path
              d="M16.25 14.75q-.4-.01-.71-.29a1 1 0 0 1-.29-.71q.01-.4.29-.71a1.05 1.05 0 0 1 1.42 0q.28.3.29.71l-.02.2-.06.18-.09.17-.12.16q-.3.28-.71.29"
              fill="currentColor"
            />
            <path
              d="M7.75 17.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5"
              fill="currentColor"
            />
            <path
              d="M16.25 17.75q-.15 0-.29-.06a1 1 0 0 1-.24-.16 1 1 0 0 1-.16-.24.7.7 0 0 1 0-.58 1 1 0 0 1 .16-.24 1 1 0 0 1 .24-.16.7.7 0 0 1 .58 0q.14.06.24.16A.8.8 0 0 1 17 17q0 .15-.06.29a.8.8 0 0 1-.69.46"
              fill="currentColor"
            />
            <path
              d="M7.75 20a.5.5 0 0 1-.35-.15.5.5 0 0 1-.15-.35q0-.2.15-.35a.5.5 0 0 1 .85.35q0 .2-.15.35a.5.5 0 0 1-.35.15"
              fill="currentColor"
            />
            <path
              d="M16.25 20a.4.4 0 0 1-.19-.04.4.4 0 0 1-.16-.11.4.4 0 0 1-.11-.16.4.4 0 0 1-.04-.19q0-.2.15-.35a.5.5 0 0 1 .85.35.4.4 0 0 1-.04.19.4.4 0 0 1-.11.16.5.5 0 0 1-.35.15"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconOceanProtocol;
