import { Params } from "./params";

export const environments = {
    dev: {
        env: "dev",
        baseUrl: "https://develop-web.bud.co.uk",

        users: {
            complianceAdmin: {
                email: "compliance.admin@automationtests.com",
                password: "Password123"
            },
            opsManager: {
                email: "operations.manager@automationtests.com",
                password: "Password123"
            },
            trainer: {
                email: "assessorsteve@bud.co.uk",
                password: "Password123"
            },
            learner: {
                email: "signed-up.applicant@test.com",
                password: "Password123"
            }
        }
    },
    qa: {
        env: "qa",
        baseUrl: "https://qa-web.bud.co.uk",

        users: {
            complianceAdmin: {
                email: "compliance.admin@automationtests.com",
                password: "Password123"
            },
            opsManager: {
                email: "operations.manager@automationtests.com",
                password: "Password123"
            },
            trainer: {
                email: "assessor@automationtests.com",
                password: "Password123"
            },
            learner: {
                email: "signed-up.applicant@test.com",
                password: "Password123"
            }
        }
    },
    preview: {
        env: "preview",
        baseUrl: "https://preview-web.bud.co.uk",

        users: {
            complianceAdmin: {
                email: "compliance.admin@automationtest.com",
                password: "X:)s1dVO"
            },
            opsManager: {
                email: "operations.manager@automationtest.com",
                password: "A:)s1dBB"
            },
            trainer: {
                email: "trainer@automationtest.com",
                password: "X:(s7dHz"
            },
            learner: {
                email: "signed-up.applicant@test.com",
                password: "Password123"
            }
        }
    },
    live: {
        env: "live",
        baseUrl: "https://web.bud.co.uk",

        users: {
            complianceAdmin: {
                email: "compliance.admin@automationtest.com",
                password: "X:)s1dVO"
            },
            opsManager: {
                email: "operations.manager@automationtest.com",
                password: "A:)s1dBB"
            },
            trainer: {
                email: "trainer@automationtest.com",
                password: "X:(s7dHz"
            },
            learner: {
                email: "signed-up.applicant@test.com",
                password: "Password123"
            }
        }
    }
} as { [name: string]: Params };
