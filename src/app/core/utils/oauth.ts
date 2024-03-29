import { environment } from "environments/environment";

const SERVER_URL = environment.SERVER_URL 

/**
 * Generates a URL for Google OAuth.
 *
 * @returns The URL for Google OAuth.
 */
export function getGoogleOAuthURL() {
    const rootURL = 'https://accounts.google.com/o/oauth2/v2/auth';
    const qs = new URLSearchParams();
    qs.append('redirect_uri', `${environment.SERVER_URL}`);
    qs.append('client_id', '918788768911-8ntq1amaij2eloden8171d3gcvk1qmrf.apps.googleusercontent.com')
    qs.append('access_type', 'offline');
    qs.append('response_type', 'code');
    qs.append('prompt', 'consent');
    qs.append('scope', [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"
    ].join(' '));
    
    return `${rootURL}?${qs.toString()}`;
  }
  