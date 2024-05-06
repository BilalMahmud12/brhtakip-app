import { cookies } from "next/headers";

import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { getCurrentUser } from "aws-amplify/auth/server";

import { type Schema } from "../../amplify/data/resource";
import config from "@/amplifyconfiguration.json";
import { AmplifyServer } from "aws-amplify/adapter-core";

export const { runWithAmplifyServerContext } = createServerRunner({
    config,
});

export const cookiesClient = generateServerClientUsingCookies<Schema>({
    config,
    cookies,
});

export async function AuthGetCurrentUserServer() {
    try {
        const currentUser = await runWithAmplifyServerContext({
            nextServerContext: { cookies },
            operation: (contextSpec: AmplifyServer.ContextSpec) => getCurrentUser(contextSpec),
        });
        return currentUser;
    } catch (error) {
        console.error(error);
    }
}