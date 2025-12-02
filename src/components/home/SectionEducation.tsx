import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import { Timeline } from "@/components/common/timeline";
import education from "@/data/education";

import type { IEducationItem } from "@/types";

interface EducationItemProps {
  data: IEducationItem;
}

const EducationItem = ({ data }: EducationItemProps) => (
  <div className="flex flex-col gap-1">
    <p className="text-lg/6 font-semibold">{data.degree}</p>
    <p className="text-[var(--textColorLight)] text-base/6 font-medium">@{data.institution}</p>
    <div className="flex flex-col gap-2 mt-2">
      {data.description.map((desc: string, i: number) => (
        <p key={`edu-desc-${i}`} className="text-base/6 font-normal">{desc}</p>
      ))}
    </div>
  </div>
);

const HomeSectionEducation = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen items-center justify-center"
      id={id}
    >
      <ConstrainedBox classNames="p-4 py-16">
        <SectionTitle>Education</SectionTitle>
        <Timeline
          data={education.map((edu, i) => ({
            title: edu.startDate + " - " + (edu.endDate || "Present"),
            content: <EducationItem key={`education-${i}`} data={edu} />,
          }))}
        />
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSectionEducation;
