export interface Session {
    id: string;
    patientId: string;
    patientName: string;
    type: "dictate" | "note" | "record";
    status: "in_progress" | "stopped" | "generating" | "error" | "done";
    title: string; 
    diagnosis: string | null;
    complaint: string | null;
    story: string | null;
    clinical_findings: string | null;
    treatment: string | null;
    insights: string | null;
    created_at: Date;
    updated_at: Date;
} 

export interface Patient {
    id: string;
    name: string;
    category: "personal" | "couple" | "child";
    gender: "male" | "female" | "other";
    age: number;
    diagnosis: string | null;
    profile_color: {
        light: string;
        dark: string;
    };
    created_at: string;
    updated_at: string;
}