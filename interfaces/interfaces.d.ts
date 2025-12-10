// Auth
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

// Tasks
export interface TaskAssignedUser {
    id: number;
    name: string;
    email: string;
    phone: string;
    role: string;
    avis_id: string;
    avatar: string;
    avatar_url: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
}

export type TaskCreator = TaskAssignedUser;

export interface Task {
    id: number;
    title: string;
    description: string;
    work_date: string;
    work_time: string;
    status: string;
    priority: string;
    due_date: string;
    completed_at: string | null;
    created_at: string;
    updated_at: string;
    assigned_users: TaskAssignedUser[];
    creator: TaskCreator;
    attachments: any[]; // Update if you later define attachment model
}

export interface Pagination {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

export interface TaskListResponseData {
    tasks: Task[];
    pagination: Pagination;
}