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
    status: "running" | "completed" | "pending" | "cancelled";
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

export interface Vehicle {
    vehicle_id: number;
    make: string;
    model: string;
    chassis_model: string;
    chassis_number: string;
    veh_cc: string;
    veh_year: string;
    veh_color: string;
    veh_buy_date: string; // ISO date string
    veh_auc_ship_number: string;
    veh_net_weight: string;
    veh_m3: string;
    veh_l: string;
    veh_h: string;
    veh_w: string;
    veh_n1: string;
    veh_n2: string;
    veh_n3: string;
    veh_n4: string;
    veh_buy_price: number;
    yard_date_in: string; // ISO date string
    rikso_from_place_id: number;
    rikso_to_place_id: number;
    rikso_cost: number;
    rikso_company: string;
    images: string[];
}

export interface VehicleSearchResponse {
    vehicles: Vehicle[];
}