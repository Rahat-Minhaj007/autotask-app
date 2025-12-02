export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    role: string;
    avatar: string;
    avatar_url: string;
    avis_id: string;
    created_at: string;
    updated_at: string;
    email_verified_at: string | null;
}

export interface LoginResponse {
    token: string;
    user: User;
}

export interface ApiResponse<T> {
    data: T;
    message: string;
    success: boolean;
    meta: any;
}