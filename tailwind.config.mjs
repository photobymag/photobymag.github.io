/** @type {import('tailwindcss').Config} */
// Tailwind CSS 설정 파일임을 나타내는 주석입니다.

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  // Tailwind CSS가 스캔할 파일 경로와 확장자를 지정합니다. src 디렉토리 내의 모든 Astro, HTML, JavaScript, JSX, Markdown, MDX, Svelte, TypeScript, TSX, Vue 파일을 스캔합니다.

  theme: {
    extend: {
      fontFamily: {
        'overpass-mono': ['"Overpass Mono Variable"', 'sans-serif'],
        inconsolata: ['"Inconsolata Variable"', 'sans-serif'],
        pretendard: ['Pretendard Variable', 'sans-serif'],
      },
      // 사용할 폰트 패밀리를 확장합니다. 'overpass-mono', 'inconsolata', 'pretendard' 폰트를 추가합니다.

      objectPosition: {
        'top-33': 'center top 33.33%',
        'top-50': 'center top 50%',
      },
      // 객체 위치 유틸리티 클래스를 추가합니다. 'top-33'은 위쪽에서 33.33%에 위치하고, 'top-50'은 위쪽에서 50%에 위치합니다.

      backgroundPosition: {
        'center-33': 'center 33.33%',
      },
      // 배경 위치 유틸리티 클래스를 추가합니다. 'center-33'은 중앙에서 33.33% 위치에 배경을 표시합니다.

      backgroundSize: {
        'size-66': '100% 66.67%',
      },
      // 배경 크기 유틸리티 클래스를 추가합니다. 'size-66'은 배경 이미지의 너비를 100%, 높이를 66.67%로 설정합니다.

      typography: {
        'no-quotes': {
          css: {
            'blockquote p:first-of-type::before': {
              content: 'none !important',
            },
            'blockquote p:last-of-type::after': {
              content: 'none !important',
            },
          },
        },
      },
      // 인라인 스타일을 추가합니다. 'no-quotes'는 blockquote 요소의 첫 번째와 마지막 문단에 대해 앞뒤 따옴표를 제거합니다.
    },

    screens: {
      sm: '800px',
      // => @media (min-width: 800px) { ... }
      md: '1200px',
      // => @media (min-width: 1280px) { ... }
      lg: '1900px',
      // => @media (min-width: 1920px) { ... }
      xl: '2500px',
      // => @media (min-width: 2560px) { ... }
      '2xl': '3800px',
      // => @media (min-width: 3840px) { ... }
    },
    // 반응형 디자인을 위한 미디어 쿼리 breakpoint를 정의합니다.
  },

  plugins: [require('@tailwindcss/typography')],
  // Tailwind CSS Typography 플러그인을 사용합니다.

  darkMode: 'class',
  // 다크 모드를 클래스 기반으로 사용합니다.
};
