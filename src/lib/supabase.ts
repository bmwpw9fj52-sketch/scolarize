import { createClient } from '@supabase/supabase-js';
import { supabaseUrl, supabaseAnonKey } from '@/config';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          first_name: string | null;
          institution: string | null;
          level_type: 'college' | 'lycee' | null;
          level: string | null;
          speciality: string | null;
          theme_color: string;
          weekly_revision_goal: number;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['users']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['users']['Insert']>;
      };
      homework: {
        Row: {
          id: string;
          user_id: string;
          subject: string;
          title: string;
          description: string | null;
          due_date: string;
          estimated_time: number;
          priority: 'low' | 'medium' | 'high' | 'urgent';
          completed: boolean;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['homework']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['homework']['Insert']>;
      };
      calendar_events: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          description: string | null;
          start_time: string;
          end_time: string;
          source: 'manual' | 'ical';
          ical_uid: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['calendar_events']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['calendar_events']['Insert']>;
      };
      study_sessions: {
        Row: {
          id: string;
          user_id: string;
          subject: string;
          duration_minutes: number;
          date: string;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['study_sessions']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['study_sessions']['Insert']>;
      };
      note_files: {
        Row: {
          id: string;
          user_id: string;
          subject: string;
          name: string;
          file_path: string;
          file_type: string;
          file_size: number;
          thumbnail_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['note_files']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['note_files']['Insert']>;
      };
      ai_interactions: {
        Row: {
          id: string;
          user_id: string;
          query: string;
          response: string;
          context_type: 'homework' | 'planning' | 'revision' | 'general';
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['ai_interactions']['Row'], 'id' | 'created_at'>;
        Update: never;
      };
    };
  };
};
