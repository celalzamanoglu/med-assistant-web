export interface Session {
    id: string;
    patientName: string;
    type: "dictate" | "note" | "record";
    status: "in_progress" | "stopped" | "generating" | "error" | "done";
    diagnosis: string | null;
    title: string;
    content: string;
    created_at: Date;
    updated_at: Date;
} 

export interface Patient {
    id: string;
    fullName: string;
    category: "personal" | "couple" | "child";
    gender: "male" | "female" | "other";
    age: number;
    diagnosis: string;
    profile_color: "bg-pink-200 dark:bg-pink-500" | "bg-purple-200 dark:bg-purple-500" | "bg-indigo-200 dark:bg-indigo-500" | "bg-blue-200 dark:bg-blue-500" | "bg-teal-200 dark:bg-teal-500" | "bg-green-200 dark:bg-green-500" | "bg-yellow-200 dark:bg-yellow-500" | "bg-orange-200 dark:bg-orange-500" | "bg-red-200 dark:bg-red-500" | "bg-rose-200 dark:bg-rose-500";
    created_at: string;
    updated_at: string;
}