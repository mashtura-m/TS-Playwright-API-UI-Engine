import { APIResponse } from "@playwright/test";
import { ApiClient } from "../api/ApiClient";

export class AuthClient {
    private token: string;
    async fetchAuthToken(response: APIResponse): Promise<string> {
        // Simulate an API call to fetch the auth token
        const data = await response.json();
        const authToken = data.Authorization; // Assuming the token is in the 'token' field
        return authToken;

    }

    async fetchAuthTokenForUser(userEmail: string, userPassword: string): Promise<string> {
        const loginPayload = {
            email: userEmail,
            password: userPassword
        };
        const apiClient = new ApiClient(null);
        let response = apiClient.postRequest('/user/login', loginPayload);
        this.token = await this.fetchAuthToken(await response);
        return this.token;

    }

}