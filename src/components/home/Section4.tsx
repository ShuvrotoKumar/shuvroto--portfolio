import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import GridBox from "@/components/core/GridBox";
import SectionTitle from "@/components/common/SectionTitle";
import SkillItem from "./ui/SkillItem";
import skills from "@/data/skills";

const HomeSection4 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--dialogColor)] bg-[var(--dialogColor)] min-h-screen items-center justify-center dark:bg-dot-white/[0.15] bg-dot-white/[0.15]"
      id={id}
    >
      <ConstrainedBox classNames="p-4 py-16">
        <SectionTitle>Skills</SectionTitle>

        <div className="w-full overflow-x-auto pb-4 mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 min-w-max">
            {skills.map((skill, index) => (
              <div key={`skill-${index}`} className="h-full">
                <SkillItem data={skill} />
              </div>
            ))}
          </div>
        </div>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection4;
