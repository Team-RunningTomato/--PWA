'use client';

import emotionReset from 'emotion-reset';

import { Global, css } from '@emotion/react';

export function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionReset}

        body, * {
          font-family:
            'Pretendard Variable',
            Pretendard,
            -apple-system,
            BlinkMacSystemFont,
            system-ui,
            Roboto,
            'Helvetica Neue',
            'Segoe UI',
            'Apple SD Gothic Neo',
            'Noto Sans KR',
            'Malgun Gothic',
            'Apple Color Emoji',
            'Segoe UI Emoji',
            'Segoe UI Symbol',
            sans-serif;
          box-sizing: border-box;
        }

        body {
          background: '#ffffff';
          height: 100vh;
          height: 100dvh;
          overscroll-behavior-y: none;
          overflow-y: hidden;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        html {
          @media (max-width: 359px) {
            font-size: 15px;
          }
          @media (max-width: 350px) {
            font-size: 14px;
          }
          @media (max-width: 320px) {
            font-size: 13px;
          }
        }

        button {
          padding: 0;
          border: none;
          outline: none;
          background: inherit;
          cursor: pointer;
        }

        // storybook style
        #storybook-root {
          height: 100%;
        }

        // input type number일때 화살표 제거
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type='number'] {
          -moz-appearance: textfield;
        }
      `}
    />
  );
}

export default GlobalStyle;
