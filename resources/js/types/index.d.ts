export interface User {
  id: number
  name: string
  email: string
  avatar: string | null
  nip: string | null
  jabatan: string | null
  phone: string | null
  address: string | null
  is_active: boolean
  last_login_at: date | null
  signature_path: string | null
  certificate_status: string | null
  certificate_expires_at: string | null
  theme: string | null
  language: string | null
  notification_settings: Record<string, any> | null

  created_at?: string
  updated_at?: string
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};
