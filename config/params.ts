import { User } from "./user";

export interface Params {
    env: "dev" | "qa" | "preview" | "live";
    baseUrl: string;

    users: {
        complianceAdmin: User;
        trainer: User;
        opsManager: User;
        learner: User;
    };
}
