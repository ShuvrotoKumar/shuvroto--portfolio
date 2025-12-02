import type { ISkillListItem } from "@/types";
import Image from "next/image";
import CardBox from "@/components/core/CardBox";
import Row from "@/components/core/Row";
import Column from "@/components/core/Column";

const SkillItem = ({ data }: { data: ISkillListItem }) => {
  return (
    <div className="h-full">
      <CardBox classNames="p-6 items-center justify-between rounded-[var(--borderRadius)] border border-[rgba(255,255,255,0.10)] dark:bg-[var(--primaryColor5)] bg-[var(--primaryColor5)] shadow-[2px_4px_16px_0px_rgba(100,100,100,0.06)_inset] w-full h-full group">
        <p className="text-lg/6 font-semibold text-center mb-6">{data.title}</p>

        {data.items.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 w-full">
            {data.items.map((skill, index) => {
              return (
                <div
                  key={`skill-item-${index}`}
                  className="flex flex-col items-center gap-2 text-[var(--textColor)] p-2 hover:bg-[rgba(255,255,255,0.05)] rounded-lg transition-colors"
                >
                  {skill.icon ? (
                    <div className="w-12 h-12 flex items-center justify-center">
                      <Image
                        src={skill.icon}
                        alt={`logo-${skill.title}`}
                        width={48}
                        height={48}
                        sizes="100%"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="/images/logical-thinking.png"
                        className="w-full h-auto max-h-12 object-contain"
                      />
                    </div>
                  ) : null}
                  <p className="text-xs font-medium text-center">{skill.title}</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </CardBox>
    </div>
  );
};

export default SkillItem;
