import { defineConfig } from 'astro/config';
// Astro 프레임워크의 구성 파일을 정의하기 위해 defineConfig 함수를 불러옵니다.

import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import markdoc from '@astrojs/markdoc';
import remarkGfm from 'remark-gfm';
import { remarkReadingTime } from './src/scripts/remark-reading-time.mjs';
import partytown from '@astrojs/partytown';
// 사용할 Astro 통합 모듈들을 가져옵니다.

export default defineConfig({
  site: 'https://photoby.xyz', // 웹사이트의 URL을 지정합니다.
  compressHTML: true, // HTML 파일 압축 여부를 설정합니다.
  image: {
    domains: ['', 'photoby.xyz', 'cdn.jsdelivr.net'], // 허용된 이미지 도메인을 지정합니다.
    service: {
      entrypoint: 'astro/assets/services/sharp', // 이미지 처리 서비스의 진입점을 지정합니다.
      config: {
        limitInputPixels: false, // 입력 이미지의 픽셀 제한 여부를 설정합니다.
      },
    },
  },
  integrations: [
    partytown({
      // 서드파티 스크립트를 웹 워커로 분리하여 메인 스레드 성능을 개선합니다.
      config: {
        forward: ['dataLayer.push'], // dataLayer.push 함수를 전달할 함수 목록을 지정합니다.
      },
    }),
    sitemap({
      // 웹사이트의 사이트맵을 생성합니다.
      lastmod: new Date(), // 사이트맵의 마지막 수정 날짜를 현재 날짜로 설정합니다.
    }),
    mdx({
      // Markdown 파일을 JSX로 렌더링할 수 있게 합니다.
      syntaxHighlight: 'shiki', // 구문 강조 기능으로 Shiki를 사용합니다.
      shikiConfig: {
        theme: 'dracula', // Shiki의 테마를 'dracula'로 설정합니다.
      },
      gfm: false, // GitHub Flavored Markdown 사용 여부를 설정합니다.
    }),
    tailwind(), // Tailwind CSS를 사용할 수 있게 합니다.
    markdoc(), // Markdown 문서를 렌더링할 수 있게 합니다.
  ],
  markdown: {
    remarkPlugins: [remarkGfm, remarkReadingTime], // Markdown 파일 처리 시 사용할 remark 플러그인 목록입니다.
    // remarkGfm: GitHub Flavored Markdown를 사용할 수 있게 합니다.
    // remarkReadingTime: 블로그 포스트의 예상 읽기 시간을 계산합니다.
  },
  prefetch: {
    prefetchAll: true, // 모든 링크를 미리 가져오도록 설정합니다.
    defaultStrategy: 'viewport', // 뷰포트에 있는 링크만 미리 가져오도록 설정합니다.
  },
  experimental: {
    clientPrerender: true, // 클라이언트 사이드에서 미리 렌더링을 수행합니다.
    contentCollectionCache: true,
    // directRenderScript: true // 주석 처리된 코드입니다.
  },
});
