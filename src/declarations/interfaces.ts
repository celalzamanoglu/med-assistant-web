export interface Session {
    id: string;
    patientId: string;
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
    name: string;
    category: "personal" | "couple" | "child";
    gender: "male" | "female" | "other";
    age: number;
    diagnosis: string;
    profile_color: {
        light: string;
        dark: string;
    };
    created_at: string;
    updated_at: string;
}