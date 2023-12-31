'use client';
import Top3 from './component/top3';
import Header from './component/header';
import MiddleContent from './component/middleContent';

export default function Component() {
  return (
    <>
      <header>
        <Header />
      </header>
      <div
        className="drop-shadow-lg
        text-center
        text-3xl
        font-semibold
        bg-gradient-to-r
        bg-clip-text
        text-transparent
        from-indigo-500
        via-purple-500
        to-indigo-500
        animate-text
        h-max
        p-5
        shadowFilter"
      >
        Top 3 Cryptocurrencies
      </div>{' '}
      <div className="flex justify-center">
        <div className="h-1 rounded-full w-1/3 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"></div>{' '}
      </div>
      <div className="grid justify-items-center ">
        <svg className="animate-bounce h-20 w-20 m-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="1.0"
            stroke="url(#myGradient)"
          >
            <defs>
              <linearGradient id="myGradient" gradientTransform="rotate(90)">
                <stop offset="0%" stopColor="#9333EA" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </svg>
      </div>
      <Top3 />
      <MiddleContent />
    </>
  );
}
