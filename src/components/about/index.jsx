import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            About Me
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          안녕하세요, 도전에서 즐거움을 찾고 실패를 통해 성장하는 개발자 배채희 입니다. <br/>
          프론트엔드 기술과 데이터 분석에 대해 흥미를 가지고 활동합니다.<br/>
          모든 경험에는 가치가 있다고 생각하며 모든 경험에 도전하며 경험을 즐깁니다.<br/>
          주어진 일에 대해 책임감을 가지며 끊임없이 고민하여 좋은 성과를 만들어 내기 위해 노력합니다.<br/>
          저는 도전은 배움과 성공만 있을 뿐 실패는 없다고 생각합니다. 이에 다양한 분야에서의 경험을 즐기고 있습니다.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            DGSW <br/><sub className="font-semibold text-base">인공지능소프트웨어과 재학 중</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            Front-end{" "}
            <sub className="font-semibold text-base">developer</sub>
          </p>
        </ItemLayout>

        {/* <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=error27&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="error"
            loading="lazy"
          />
        </ItemLayout> */}

        {/* <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=error27&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="error"
            loading="lazy"
          />
        </ItemLayout> */}

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=react,ts,javascript,css,figma,git,github,html,jquery,nextjs,nodejs,npm,react,redux,sass,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="error"
            loading="lazy"
          />
        </ItemLayout>
{/* 
        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=error27&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="error"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/error27/Nextjs-contentlayer-blog"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=error27&repo=Nextjs-contentlayer-blog&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="error"
              loading="lazy"
            />
          </Link>
        </ItemLayout> */}
      </div>
    </section>
  );
};

export default AboutDetails;
