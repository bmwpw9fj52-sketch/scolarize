// Subjects by level
export const subjectsByLevel: Record<string, string[]> = {
  // Collège
  '6e': ['Français', 'Mathématiques', 'Histoire-Géographie', 'Anglais', 'Sciences', 'Technologie', 'EPS', 'Arts', 'Musique'],
  '5e': ['Français', 'Mathématiques', 'Histoire-Géographie', 'Anglais', 'Sciences', 'Technologie', 'EPS', 'Arts', 'Musique', 'Espagnol'],
  '4e': ['Français', 'Mathématiques', 'Histoire-Géographie', 'Anglais', 'Sciences', 'Technologie', 'EPS', 'Arts', 'Musique', 'Espagnol'],
  '3e': ['Français', 'Mathématiques', 'Histoire-Géographie', 'Anglais', 'Sciences', 'EPS', 'Arts', 'Musique', 'Espagnol', 'Technologie'],
  
  // Lycée général
  'seconde_generale': ['Français', 'Mathématiques', 'Histoire-Géographie', 'Anglais', 'Espagnol', 'Sciences de la Vie et de la Terre', 'Physique-Chimie', 'Technologie', 'EPS', 'SNT'],
  'premiere_generale': ['Français', 'Mathématiques', 'Histoire-Géographie', 'Anglais', 'Espagnol', 'EPS', 'Philosophie'],
  'terminale_generale': ['Mathématiques', 'Philosophie', 'Histoire-Géographie', 'Anglais', 'Espagnol', 'EPS'],
  
  // Lycée technologique
  'seconde_techno': ['Français', 'Mathématiques', 'Histoire-Géographie', 'Anglais', 'Espagnol', 'EPS', 'Management', 'Sciences'],
  'premiere_sti2d': ['Français', 'Mathématiques', 'Physique-Chimie', 'Anglais', 'Espagnol', 'EPS', 'Enseignements technologiques', 'Innovation technologique'],
  'premiere_stmg': ['Français', 'Mathématiques', 'Histoire-Géographie', 'Anglais', 'Espagnol', 'EPS', 'Management', 'Droit-Économie'],
  'premiere_stl': ['Français', 'Mathématiques', 'Physique-Chimie', 'Anglais', 'Espagnol', 'EPS', 'Biologie-Écologie'],
  'premiere_st2s': ['Français', 'Mathématiques', 'Biologie-Écologie', 'Anglais', 'Espagnol', 'EPS', 'Santé-Social'],
  'terminale_sti2d': ['Mathématiques', 'Physique-Chimie', 'Anglais', 'Espagnol', 'EPS', 'Enseignements technologiques', 'Philosophie'],
  'terminale_stmg': ['Mathématiques', 'Droit-Économie', 'Management', 'Anglais', 'Espagnol', 'EPS', 'Philosophie'],
  'terminale_stl': ['Mathématiques', 'Physique-Chimie', 'Biologie-Écologie', 'Anglais', 'Espagnol', 'EPS', 'Philosophie'],
  'terminale_st2s': ['Mathématiques', 'Biologie-Écologie', 'Anglais', 'Espagnol', 'EPS', 'Santé-Social', 'Philosophie'],
};

export const collegeLevels = ['6e', '5e', '4e', '3e'];

export const lyceeLevels = [
  'seconde_generale',
  'seconde_techno',
  'premiere_generale',
  'premiere_sti2d',
  'premiere_stmg',
  'premiere_stl',
  'premiere_st2s',
  'terminale_generale',
  'terminale_sti2d',
  'terminale_stmg',
  'terminale_stl',
  'terminale_st2s',
];

export const levelLabels: Record<string, string> = {
  '6e': '6ème',
  '5e': '5ème',
  '4e': '4ème',
  '3e': '3ème',
  'seconde_generale': 'Seconde générale',
  'seconde_techno': 'Seconde technologique',
  'premiere_generale': '1ère générale',
  'premiere_sti2d': '1ère STI2D',
  'premiere_stmg': '1ère STMG',
  'premiere_stl': '1ère STL',
  'premiere_st2s': '1ère ST2S',
  'terminale_generale': 'Terminale générale',
  'terminale_sti2d': 'Terminale STI2D',
  'terminale_stmg': 'Terminale STMG',
  'terminale_stl': 'Terminale STL',
  'terminale_st2s': 'Terminale ST2S',
};

export const specialityByLevel: Record<string, string[]> = {
  'premiere_generale': ['Mathématiques', 'Physique-Chimie', 'Sciences de la Vie et de la Terre', 'Histoire-Géographie-Géopolitique', 'Anglais renforcé', 'Littérature-Langues', 'Philosophie', 'Numérique-Informatique'],
  'terminale_generale': ['Mathématiques expertes', 'Mathématiques complémentaires', 'Physique-Chimie', 'Sciences de la Vie et de la Terre', 'Philosophie', 'Littérature', 'Anglais renforcé'],
};

export function getSubjectsForLevel(level: string): string[] {
  return subjectsByLevel[level] || [];
}

export function getLevelType(level: string): 'college' | 'lycee' {
  if (collegeLevels.includes(level)) return 'college';
  if (lyceeLevels.includes(level)) return 'lycee';
  return 'college';
}
