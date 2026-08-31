import { z } from 'zod';

export const UserProfileSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  first_name: z.string().optional(),
  institution: z.string().optional(),
  level_type: z.enum(['college', 'lycee']).optional(),
  level: z.string().optional(),
  speciality: z.string().optional(),
  theme_color: z.string().default('violet'),
  weekly_revision_goal: z.number().default(300),
  created_at: z.string(),
  updated_at: z.string(),
});

export const HomeworkSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  subject: z.string().min(1, 'Matière requise'),
  title: z.string().min(1, 'Titre requis'),
  description: z.string().optional(),
  due_date: z.string(),
  estimated_time: z.number().positive('Temps estimé requis'),
  priority: z.enum(['low', 'medium', 'high', 'urgent']),
  completed: z.boolean().default(false),
  notes: z.string().optional(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const CalendarEventSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  title: z.string().min(1, 'Titre requis'),
  description: z.string().optional(),
  start_time: z.string(),
  end_time: z.string(),
  source: z.enum(['manual', 'ical']),
  ical_uid: z.string().optional(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const StudySessionSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  subject: z.string().min(1, 'Matière requise'),
  duration_minutes: z.number().positive('Durée requise'),
  date: z.string(),
  notes: z.string().optional(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const NoteFileSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  subject: z.string().min(1, 'Matière requise'),
  name: z.string().min(1, 'Nom requis'),
  file_path: z.string(),
  file_type: z.string(),
  file_size: z.number(),
  thumbnail_url: z.string().optional(),
  created_at: z.string(),
  updated_at: z.string(),
});

export type UserProfile = z.infer<typeof UserProfileSchema>;
export type Homework = z.infer<typeof HomeworkSchema>;
export type CalendarEvent = z.infer<typeof CalendarEventSchema>;
export type StudySession = z.infer<typeof StudySessionSchema>;
export type NoteFile = z.infer<typeof NoteFileSchema>;
