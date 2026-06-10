interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

export default function SkillCategory({ title, icon, skills }: SkillCategoryProps) {
  return (
    <div className="p-5 rounded-2xl bg-gradient-to-br from-background to-muted/20 border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
      <h3 className="mb-4 text-lg font-semibold text-foreground flex items-center gap-2">
        <span aria-hidden="true" className="text-primary">{icon}</span>
        {title}
      </h3>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill}>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              <span>{skill}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
