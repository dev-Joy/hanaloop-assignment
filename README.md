## 시스템 요구사항

Node 20 LTS 이상
pnpm 10 이상

```shell
# package 설치
pnpm install

# 실행
pnpm dev

```

## 푤더 구조

```
src
├─ app
│  ├─ company
│  │  └─ page.tsx
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.tsx
│  └─ post
│     ├─ add
│     │  └─ page.tsx
│     └─ page.tsx
├─ components
│  ├─ chart
│  │  ├─ AreaChart.tsx
│  │  ├─ BarChart.tsx
│  │  ├─ LoadingSkeleton.tsx
│  │  └─ NoData.tsx
│  ├─ company
│  │  └─ CompanyList.tsx
│  ├─ dashboard
│  │  └─ Dashboard.tsx
│  ├─ layout
│  │  ├─ Footer.tsx
│  │  └─ NavBar.tsx
│  └─ post
│     ├─ PostCard.tsx
│     ├─ PostForm.tsx
│     └─ PostList.tsx
├─ hooks
│  ├─ QueryProvider.tsx
│  ├─ use-companies.ts
│  └─ use-posts.ts
├─ lib
│  ├─ api.ts
│  └─ data.ts
└─ types
   ├─ company.ts
   ├─ emission.ts
   └─ post.ts
```

## 프레임워크

- [nextJS 15+](https://nextjs.org/)

## 스타일링

- [tailwindcss v4](https://tailwindcss.com/)

## 라이브러리

- [Tanstack Query v5](https://tanstack.com/query/latest)

  > 서버 상태 관리(캐싱, 재시도, 무한 스크롤, 옵티미스틱 업데이트 등)를 간단하고 견고하게 처리하기 위해 선택했습니다

- [Apache Chart](https://echarts.apache.org/en/index.html)

  > 복잡한 시각화(Area, Bar, Stacked 등)를 유연하고 성능 좋게 그리기 위해 사용했습니다. ECharts는 대량 데이터/상호작용 차트에서 강점이 있습니다.
