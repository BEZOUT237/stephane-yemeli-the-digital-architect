import { describe, expect, it } from 'vitest';
import { credentials, filterProjects, profile, projects, skillGroups } from './portfolio';

describe('authentic portfolio facts', () => {
  it('uses the specified education and period', () => {
    expect(profile.university).toBe('Bolu Abant İzzet Baysal University');
    expect(profile.educationPeriod).toBe('2026–2030');
  });
  it('uses the exact contact email', () => expect(profile.email).toBe('yemelink@gmail.com'));
  it('keeps Networker a concept without a fabricated live link', () => {
    const project = projects.find((item) => item.id === 'networker');
    expect(project?.category).toBe('Concepts');
    expect(project?.url).toBeUndefined();
  });
  it('includes the three supplied credentials, and no others', () => {
    expect(credentials).toHaveLength(3);
    expect(credentials[0]?.date).toBe('June 2025');
    expect(credentials[1]?.date).toBe('December 2024');
    expect(credentials[2]?.date).toBe('Three-day practical training');
  });
  it('distinguishes developing AI from practical experience without numerical ratings', () => {
    expect(skillGroups.find((group) => group.title === 'Artificial intelligence')?.status).toBe('Developing');
    expect(skillGroups.every((group) => !('percentage' in group) && !('level' in group))).toBe(true);
  });
  it('filters concepts separately from products and experiments', () => {
    expect(filterProjects('Concepts').map((item) => item.id)).toEqual(['networker']);
    expect(filterProjects('Products').map((item) => item.id)).toEqual(['livora', 'skillgap', 'yemelink']);
    expect(filterProjects('All')).toHaveLength(8);
  });
});