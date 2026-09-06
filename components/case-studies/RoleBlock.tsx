import { ProjectData } from '@/lib/types';
import { TechStack } from '@/components/ui/TechStack';

export function RoleBlock({ project }: { project: ProjectData }) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-8 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-[1fr_1.4fr_1fr_0.7fr]">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-wider text-faint">Role</p>
        <p className="mt-2 text-sm leading-relaxed text-ink">{project.role}</p>
      </div>

      <div>
        <p className="font-mono text-[11px] uppercase tracking-wider text-faint">What I owned</p>
        <ul className="mt-2 space-y-1.5">
          {project.whatIOwned.map((item) => (
            <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="font-mono text-[11px] uppercase tracking-wider text-faint">Tech</p>
        <TechStack items={project.technologies} className="mt-2" />
      </div>

      <div>
        <p className="font-mono text-[11px] uppercase tracking-wider text-faint">Status</p>
        <p className="mt-2 text-sm text-ink">{project.status}</p>
      </div>
    </div>
  );
}
