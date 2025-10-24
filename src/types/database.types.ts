export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      address: {
        Row: {
          address: string | null
          address_2: string | null
          city: string | null
          country: string | null
          created_at: string
          id: string
          postal_code: string | null
          state: string | null
          type: Database["public"]["Enums"]["Address"] | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          address?: string | null
          address_2?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          id?: string
          postal_code?: string | null
          state?: string | null
          type?: Database["public"]["Enums"]["Address"] | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          address?: string | null
          address_2?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          id?: string
          postal_code?: string | null
          state?: string | null
          type?: Database["public"]["Enums"]["Address"] | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      event_lineups: {
        Row: {
          created_at: string
          description: string | null
          event_id: string | null
          id: number
          tagline: string | null
          title: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          event_id?: string | null
          id?: number
          tagline?: string | null
          title?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          event_id?: string | null
          id?: number
          tagline?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_lineups_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          address: string | null
          amount: number | null
          city: string | null
          country: string | null
          created_at: string
          date: string | null
          end_time: string | null
          event_type: string | null
          id: string
          image_url: string | null
          location_type: string | null
          postal_code: string | null
          slug: string | null
          start_time: string | null
          state: string | null
          summary: string | null
          title: string | null
          updated_at: string | null
          user_id: string | null
          venue: string | null
        }
        Insert: {
          address?: string | null
          amount?: number | null
          city?: string | null
          country?: string | null
          created_at?: string
          date?: string | null
          end_time?: string | null
          event_type?: string | null
          id?: string
          image_url?: string | null
          location_type?: string | null
          postal_code?: string | null
          slug?: string | null
          start_time?: string | null
          state?: string | null
          summary?: string | null
          title?: string | null
          updated_at?: string | null
          user_id?: string | null
          venue?: string | null
        }
        Update: {
          address?: string | null
          amount?: number | null
          city?: string | null
          country?: string | null
          created_at?: string
          date?: string | null
          end_time?: string | null
          event_type?: string | null
          id?: string
          image_url?: string | null
          location_type?: string | null
          postal_code?: string | null
          slug?: string | null
          start_time?: string | null
          state?: string | null
          summary?: string | null
          title?: string | null
          updated_at?: string | null
          user_id?: string | null
          venue?: string | null
        }
        Relationships: []
      }
      favorited_events: {
        Row: {
          created_at: string
          event_id: string | null
          id: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          event_id?: string | null
          id?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          event_id?: string | null
          id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "favorited_events_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      featured_events: {
        Row: {
          created_at: string
          event_id: string | null
          id: number
        }
        Insert: {
          created_at?: string
          event_id?: string | null
          id?: number
        }
        Update: {
          created_at?: string
          event_id?: string | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "featured_events_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string
          id: string
          message: string | null
          status: string | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          message?: string | null
          status?: string | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          message?: string | null
          status?: string | null
          title?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      preferences: {
        Row: {
          confirmation_from_attendies: boolean | null
          created_at: string
          discover_events: boolean | null
          event_sales_recap: boolean | null
          events_liked: boolean | null
          events_on_sale: boolean | null
          feature_update: boolean | null
          friends_buy_ticket: boolean | null
          id: string
          organizer_announce_event: boolean | null
          reminder_for_next_event: boolean | null
        }
        Insert: {
          confirmation_from_attendies?: boolean | null
          created_at?: string
          discover_events?: boolean | null
          event_sales_recap?: boolean | null
          events_liked?: boolean | null
          events_on_sale?: boolean | null
          feature_update?: boolean | null
          friends_buy_ticket?: boolean | null
          id?: string
          organizer_announce_event?: boolean | null
          reminder_for_next_event?: boolean | null
        }
        Update: {
          confirmation_from_attendies?: boolean | null
          created_at?: string
          discover_events?: boolean | null
          event_sales_recap?: boolean | null
          events_liked?: boolean | null
          events_on_sale?: boolean | null
          feature_update?: boolean | null
          friends_buy_ticket?: boolean | null
          id?: string
          organizer_announce_event?: boolean | null
          reminder_for_next_event?: boolean | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          blog: string | null
          company: string | null
          created_at: string
          first_name: string | null
          home_phone: string | null
          id: string
          job_title: string | null
          last_name: string | null
          prefix: Database["public"]["Enums"]["Prefix"] | null
          suffix: string | null
          updated_at: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          blog?: string | null
          company?: string | null
          created_at?: string
          first_name?: string | null
          home_phone?: string | null
          id?: string
          job_title?: string | null
          last_name?: string | null
          prefix?: Database["public"]["Enums"]["Prefix"] | null
          suffix?: string | null
          updated_at?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          blog?: string | null
          company?: string | null
          created_at?: string
          first_name?: string | null
          home_phone?: string | null
          id?: string
          job_title?: string | null
          last_name?: string | null
          prefix?: Database["public"]["Enums"]["Prefix"] | null
          suffix?: string | null
          updated_at?: string | null
          website?: string | null
        }
        Relationships: []
      }
      tickets: {
        Row: {
          access: string | null
          code: string
          created_at: string
          event_id: string | null
          id: string
          row: string | null
          seat: string | null
          section: string | null
          user_id: string | null
        }
        Insert: {
          access?: string | null
          code: string
          created_at?: string
          event_id?: string | null
          id?: string
          row?: string | null
          seat?: string | null
          section?: string | null
          user_id?: string | null
        }
        Update: {
          access?: string | null
          code?: string
          created_at?: string
          event_id?: string | null
          id?: string
          row?: string | null
          seat?: string | null
          section?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Tickets_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_top_cities_events: {
        Args: { country_input: string }
        Returns: {
          address: string | null
          amount: number | null
          city: string | null
          country: string | null
          created_at: string
          date: string | null
          end_time: string | null
          event_type: string | null
          id: string
          image_url: string | null
          location_type: string | null
          postal_code: string | null
          slug: string | null
          start_time: string | null
          state: string | null
          summary: string | null
          title: string | null
          updated_at: string | null
          user_id: string | null
          venue: string | null
        }[]
        SetofOptions: {
          from: "*"
          to: "events"
          isOneToOne: false
          isSetofReturn: true
        }
      }
    }
    Enums: {
      Address: "HOME" | "BILLING" | "SHIPPING" | "COMPANY"
      Prefix: "MR" | "MRS" | "MS" | "MX" | "MISS" | "PROF" | "DR" | "REV"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      Address: ["HOME", "BILLING", "SHIPPING", "COMPANY"],
      Prefix: ["MR", "MRS", "MS", "MX", "MISS", "PROF", "DR", "REV"],
    },
  },
} as const
