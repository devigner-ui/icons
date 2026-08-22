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
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              strokeWidth={Number(strokeWidth) * 2}
              d="M12 11.68"
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              strokeWidth={Number(strokeWidth) * 1.5}
              d="M12 15.7"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              strokeWidth={strokeWidth}
              d="M12 19.2v.01"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              d="M12 22.2v.01"
              strokeWidth={Number(strokeWidth) * 0.7}
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              strokeWidth={Number(strokeWidth) * 2}
              d="M20.5 7.69"
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              strokeWidth={Number(strokeWidth) * 1.5}
              d="M3.5 11.69"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              strokeWidth={strokeWidth}
              d="M20.5 14.7"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              d="M20.5 17.7v.01"
              strokeWidth={Number(strokeWidth) * 0.7}
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              strokeWidth={strokeWidth}
              d="M3.5 14.7"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              d="M3.5 17.7v.01"
              strokeWidth={Number(strokeWidth) * 0.7}
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              strokeWidth={Number(strokeWidth) * 2}
              d="M16.25 5.49"
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              strokeWidth={Number(strokeWidth) * 1.5}
              d="M7.8 13.7"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              strokeWidth={strokeWidth}
              d="M7.8 16.7v.01"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              d="M7.8 19.7v.01"
              strokeWidth={Number(strokeWidth) * 0.7}
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              strokeWidth={Number(strokeWidth) * 1.5}
              d="M16.2 13.7"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              strokeWidth={strokeWidth}
              d="M16.2 16.7v.01"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              strokeWidth={Number(strokeWidth) * 0.7}
              d="M16.2 19.7v.01"
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
            <path
              d="M12.67 4.75q-.15 0-.29-.03l-.28-.08-.26-.14-.23-.19a1.5 1.5 0 1 1 1.06.44"
              fill="currentColor"
            />
            <path
              d="M12.67 9.25q-.15 0-.29-.03l-.28-.08-.26-.14-.23-.19a1.5 1.5 0 1 1 2.12 0L13.5 9l-.26.14-.28.08q-.14.03-.29.03"
              fill="currentColor"
            />
            <path
              d="M12.67 13.25q-.15 0-.29-.03l-.28-.08-.26-.14-.23-.19a1.5 1.5 0 0 1-.44-1.06q.01-.62.44-1.06l.23-.19.26-.14.28-.08a1.5 1.5 0 0 1 1.76 1.76q-.03.15-.09.28a1 1 0 0 1-.32.49l-.23.19-.26.14-.28.08q-.14.03-.29.03"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M12.67 16.75q-.4-.01-.71-.29a1 1 0 0 1-.29-.71q.01-.4.29-.71a1 1 0 0 1 1.09-.21q.1.03.17.09l.16.12q.28.3.29.71-.01.4-.29.71l-.16.12-.17.09-.19.06z"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M12.67 20q-.15 0-.29-.06a1 1 0 0 1-.24-.16 1 1 0 0 1-.16-.24.75.75 0 1 1 .69.46"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M12.67 22.07a.5.5 0 0 1-.35-.15.5.5 0 0 1-.15-.35q0-.2.15-.35a.5.5 0 0 1 .85.35q0 .2-.15.35a.5.5 0 0 1-.35.15"
                fill="currentColor"
              />
            </g>
            <path
              d="M4.17 9.25a1.5 1.5 0 0 1-1.06-2.56 1.55 1.55 0 0 1 2.12 0 1.5 1.5 0 0 1-1.06 2.56"
              fill="currentColor"
            />
            <path
              d="M21.17 9.25c-.39 0-.78-.16-1.06-.44a1.5 1.5 0 0 1-.19-1.89l.19-.23.23-.19q.12-.08.26-.13.13-.06.28-.09a1.4 1.4 0 0 1 .86.09q.14.05.26.13l.23.19.19.23q.08.12.13.26a1.3 1.3 0 0 1 .12.57q-.01.62-.44 1.06L22 9l-.26.14-.28.08q-.15.03-.29.03"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="m21.17 12.75-.19-.02-.19-.06-.18-.09-.15-.12-.12-.15-.09-.18-.06-.18-.02-.2q.01-.4.29-.71l.15-.12.18-.09.19-.06a1 1 0 0 1 .38 0l.19.06q.1.03.17.09l.16.12q.28.3.29.71l-.02.2-.06.18-.09.18-.12.15q-.07.07-.16.12l-.17.09-.19.06z"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M4.17 12.75q-.4-.01-.71-.29a1 1 0 0 1-.29-.71q.01-.4.29-.71a1 1 0 0 1 1.09-.21q.19.07.33.21.28.3.29.71-.01.4-.29.71-.3.28-.71.29"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M21.17 15.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M4.17 15.5a.75.75 0 0 1-.53-1.28.77.77 0 0 1 1.06 0 .8.8 0 0 1 .22.53q0 .15-.06.29a.8.8 0 0 1-.69.46"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M21.17 18a.4.4 0 0 1-.19-.04.4.4 0 0 1-.16-.11.5.5 0 0 1-.15-.35q0-.2.15-.35a.5.5 0 0 1 .85.35q0 .2-.15.35a.5.5 0 0 1-.35.15"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M4.17 18a.5.5 0 0 1-.35-.15.5.5 0 0 1-.15-.35q0-.2.15-.35a.5.5 0 0 1 .85.35q0 .2-.15.35a.5.5 0 0 1-.35.15"
                fill="currentColor"
              />
            </g>
            <path
              d="M8.42 7a1.4 1.4 0 0 1-.57-.12q-.14-.05-.26-.13l-.23-.19a1.5 1.5 0 0 1-.44-1.06c0-.39.16-.78.44-1.06a1.55 1.55 0 0 1 2.12 0A1.5 1.5 0 0 1 8.42 7"
              fill="currentColor"
            />
            <path
              d="M16.92 7a1.4 1.4 0 0 1-.57-.12 1 1 0 0 1-.49-.32l-.19-.23-.14-.26-.08-.28-.03-.29a1.5 1.5 0 0 1 .67-1.25q.12-.08.26-.13.13-.06.28-.09a1.4 1.4 0 0 1 .86.09q.14.05.26.13l.23.19a1.5 1.5 0 0 1 .19 1.89l-.19.23-.23.19q-.12.08-.26.13a1.3 1.3 0 0 1-.57.12"
              fill="currentColor"
            />
            <path
              d="M8.42 11.25q-.15 0-.29-.03l-.28-.08-.26-.14-.23-.19a1.5 1.5 0 0 1 0-2.12 1.55 1.55 0 0 1 2.12 0 1.5 1.5 0 0 1-1.06 2.56"
              fill="currentColor"
            />
            <path
              d="M16.92 11.25a1.4 1.4 0 0 1-.57-.12 1 1 0 0 1-.49-.32l-.19-.23-.14-.26-.08-.28-.03-.29a1.5 1.5 0 0 1 .67-1.25q.12-.08.26-.13.13-.06.28-.09a1.4 1.4 0 0 1 .86.09q.14.05.26.13l.23.19a1.5 1.5 0 0 1 .41 1.35l-.08.28-.14.26-.19.23-.23.19q-.12.08-.26.13a1.3 1.3 0 0 1-.57.12"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M8.42 14.75a1 1 0 0 1-.38-.08 1 1 0 0 1-.33-.21q-.14-.15-.21-.33a1 1 0 0 1-.08-.38q.01-.4.29-.71a1.05 1.05 0 0 1 1.42 0q.28.3.29.71a1 1 0 0 1-.08.38q-.07.18-.21.33-.3.28-.71.29"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M16.92 14.75q-.4-.01-.71-.29a1 1 0 0 1-.29-.71q.01-.4.29-.71a1.05 1.05 0 0 1 1.42 0q.28.3.29.71l-.02.2-.06.18-.09.17-.12.16q-.3.28-.71.29"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M8.42 17.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M16.92 17.75q-.15 0-.29-.06a1 1 0 0 1-.24-.16 1 1 0 0 1-.16-.24.7.7 0 0 1 0-.58 1 1 0 0 1 .16-.24 1 1 0 0 1 .24-.16.7.7 0 0 1 .58 0q.14.06.24.16a.8.8 0 0 1 .22.53q0 .15-.06.29a.8.8 0 0 1-.69.46"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M8.42 20a.5.5 0 0 1-.35-.15.5.5 0 0 1-.15-.35q0-.2.15-.35a.5.5 0 0 1 .85.35q0 .2-.15.35a.5.5 0 0 1-.35.15"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M16.92 20a.4.4 0 0 1-.19-.04.4.4 0 0 1-.16-.11.4.4 0 0 1-.11-.16.4.4 0 0 1-.04-.19q0-.2.15-.35a.5.5 0 0 1 .85.35.4.4 0 0 1-.04.19.4.4 0 0 1-.11.16.5.5 0 0 1-.35.15"
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
              d="M12.67 4.75q-.15 0-.29-.03l-.28-.08-.26-.14-.23-.19a1.5 1.5 0 1 1 1.06.44"
              fill="currentColor"
            />
            <path
              d="M12.67 9.25q-.15 0-.29-.03l-.28-.08-.26-.14-.23-.19a1.5 1.5 0 1 1 2.12 0L13.5 9l-.26.14-.28.08q-.14.03-.29.03"
              fill="currentColor"
            />
            <path
              d="M12.67 13.25q-.15 0-.29-.03l-.28-.08-.26-.14-.23-.19a1.5 1.5 0 0 1-.44-1.06q.01-.62.44-1.06l.23-.19.26-.14.28-.08a1.5 1.5 0 0 1 1.76 1.76q-.03.15-.09.28a1 1 0 0 1-.32.49l-.23.19-.26.14-.28.08q-.14.03-.29.03"
              fill="currentColor"
            />
            <path
              d="M12.67 16.75q-.4-.01-.71-.29a1 1 0 0 1-.29-.71q.01-.4.29-.71a1 1 0 0 1 1.09-.21q.1.03.17.09l.16.12q.28.3.29.71-.01.4-.29.71l-.16.12-.17.09-.19.06z"
              fill="currentColor"
            />
            <path
              d="M12.67 20q-.15 0-.29-.06a1 1 0 0 1-.24-.16 1 1 0 0 1-.16-.24.75.75 0 1 1 .69.46"
              fill="currentColor"
            />
            <path
              d="M12.67 22.07a.5.5 0 0 1-.35-.15.5.5 0 0 1-.15-.35q0-.2.15-.35a.5.5 0 0 1 .85.35q0 .2-.15.35a.5.5 0 0 1-.35.15"
              fill="currentColor"
            />
            <path
              d="M4.17 9.25a1.5 1.5 0 0 1-1.06-2.56 1.55 1.55 0 0 1 2.12 0 1.5 1.5 0 0 1-1.06 2.56"
              fill="currentColor"
            />
            <path
              d="M21.17 9.25c-.39 0-.78-.16-1.06-.44a1.5 1.5 0 0 1-.19-1.89l.19-.23.23-.19q.12-.08.26-.13.13-.06.28-.09a1.4 1.4 0 0 1 .86.09q.14.05.26.13l.23.19.19.23q.08.12.13.26a1.3 1.3 0 0 1 .12.57q-.01.62-.44 1.06L22 9l-.26.14-.28.08q-.15.03-.29.03"
              fill="currentColor"
            />
            <path
              d="m21.17 12.75-.19-.02-.19-.06-.18-.09-.15-.12-.12-.15-.09-.18-.06-.18-.02-.2q.01-.4.29-.71l.15-.12.18-.09.19-.06a1 1 0 0 1 .38 0l.19.06q.1.03.17.09l.16.12q.28.3.29.71l-.02.2-.06.18-.09.18-.12.15q-.07.07-.16.12l-.17.09-.19.06z"
              fill="currentColor"
            />
            <path
              d="M4.17 12.75q-.4-.01-.71-.29a1 1 0 0 1-.29-.71q.01-.4.29-.71a1 1 0 0 1 1.09-.21q.19.07.33.21.28.3.29.71-.01.4-.29.71-.3.28-.71.29"
              fill="currentColor"
            />
            <path
              d="M21.17 15.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5"
              fill="currentColor"
            />
            <path
              d="M4.17 15.5a.75.75 0 0 1-.53-1.28.77.77 0 0 1 1.06 0 .8.8 0 0 1 .22.53q0 .15-.06.29a.8.8 0 0 1-.69.46"
              fill="currentColor"
            />
            <path
              d="M21.17 18a.4.4 0 0 1-.19-.04.4.4 0 0 1-.16-.11.5.5 0 0 1-.15-.35q0-.2.15-.35a.5.5 0 0 1 .85.35q0 .2-.15.35a.5.5 0 0 1-.35.15"
              fill="currentColor"
            />
            <path
              d="M4.17 18a.5.5 0 0 1-.35-.15.5.5 0 0 1-.15-.35q0-.2.15-.35a.5.5 0 0 1 .85.35q0 .2-.15.35a.5.5 0 0 1-.35.15"
              fill="currentColor"
            />
            <path
              d="M8.42 7a1.4 1.4 0 0 1-.57-.12q-.14-.05-.26-.13l-.23-.19a1.5 1.5 0 0 1-.44-1.06c0-.39.16-.78.44-1.06a1.55 1.55 0 0 1 2.12 0A1.5 1.5 0 0 1 8.42 7"
              fill="currentColor"
            />
            <path
              d="M16.92 7a1.4 1.4 0 0 1-.57-.12 1 1 0 0 1-.49-.32l-.19-.23-.14-.26-.08-.28-.03-.29a1.5 1.5 0 0 1 .67-1.25q.12-.08.26-.13.13-.06.28-.09a1.4 1.4 0 0 1 .86.09q.14.05.26.13l.23.19a1.5 1.5 0 0 1 .19 1.89l-.19.23-.23.19q-.12.08-.26.13a1.3 1.3 0 0 1-.57.12"
              fill="currentColor"
            />
            <path
              d="M8.42 11.25q-.15 0-.29-.03l-.28-.08-.26-.14-.23-.19a1.5 1.5 0 0 1 0-2.12 1.55 1.55 0 0 1 2.12 0 1.5 1.5 0 0 1-1.06 2.56"
              fill="currentColor"
            />
            <path
              d="M16.92 11.25a1.4 1.4 0 0 1-.57-.12 1 1 0 0 1-.49-.32l-.19-.23-.14-.26-.08-.28-.03-.29a1.5 1.5 0 0 1 .67-1.25q.12-.08.26-.13.13-.06.28-.09a1.4 1.4 0 0 1 .86.09q.14.05.26.13l.23.19a1.5 1.5 0 0 1 .41 1.35l-.08.28-.14.26-.19.23-.23.19q-.12.08-.26.13a1.3 1.3 0 0 1-.57.12"
              fill="currentColor"
            />
            <path
              d="M8.42 14.75a1 1 0 0 1-.38-.08 1 1 0 0 1-.33-.21q-.14-.15-.21-.33a1 1 0 0 1-.08-.38q.01-.4.29-.71a1.05 1.05 0 0 1 1.42 0q.28.3.29.71a1 1 0 0 1-.08.38q-.07.18-.21.33-.3.28-.71.29"
              fill="currentColor"
            />
            <path
              d="M16.92 14.75q-.4-.01-.71-.29a1 1 0 0 1-.29-.71q.01-.4.29-.71a1.05 1.05 0 0 1 1.42 0q.28.3.29.71l-.02.2-.06.18-.09.17-.12.16q-.3.28-.71.29"
              fill="currentColor"
            />
            <path
              d="M8.42 17.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5"
              fill="currentColor"
            />
            <path
              d="M16.92 17.75q-.15 0-.29-.06a1 1 0 0 1-.24-.16 1 1 0 0 1-.16-.24.7.7 0 0 1 0-.58 1 1 0 0 1 .16-.24 1 1 0 0 1 .24-.16.7.7 0 0 1 .58 0q.14.06.24.16a.8.8 0 0 1 .22.53q0 .15-.06.29a.8.8 0 0 1-.69.46"
              fill="currentColor"
            />
            <path
              d="M8.42 20a.5.5 0 0 1-.35-.15.5.5 0 0 1-.15-.35q0-.2.15-.35a.5.5 0 0 1 .85.35q0 .2-.15.35a.5.5 0 0 1-.35.15"
              fill="currentColor"
            />
            <path
              d="M16.92 20a.4.4 0 0 1-.19-.04.4.4 0 0 1-.16-.11.4.4 0 0 1-.11-.16.4.4 0 0 1-.04-.19q0-.2.15-.35a.5.5 0 0 1 .85.35.4.4 0 0 1-.04.19.4.4 0 0 1-.11.16.5.5 0 0 1-.35.15"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconOceanProtocol;
