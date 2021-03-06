import UserInfo from '@/shared/models/UserInfo';
import axios from 'axios';

const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';

const CLIENT_ID = '248448590515-add45i8g47fmpu9jnsq0is5d6o83o80c.apps.googleusercontent.com';
const OAUTH_ENDPOINT = 'https://accounts.google.com/o/oauth2/v2/auth';
const REVOKE_ENDPOINT = 'https://accounts.google.com/o/oauth2/revoke';
const TOKEN_INFO_ENDPOINT = 'https://www.googleapis.com/oauth2/v3/tokeninfo';
const DRIVE_APP_DATA_SCOPE = 'https://www.googleapis.com/auth/drive.appdata';
const USER_INFO_PROFILE_SCOPE = 'https://www.googleapis.com/auth/userinfo.profile';

function authorizationHeader(accessToken) {
  return { Authorization: `Bearer ${accessToken}` };
}

export default {
  CLIENT_ID,
  OAUTH_ENDPOINT,
  TOKEN_INFO_ENDPOINT,
  DRIVE_APP_DATA_SCOPE,
  USER_INFO_PROFILE_SCOPE,
  setAccessToken(accessToken) {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  },
  getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  },
  async initiateLogin() {
    const params = {
      client_id: this.CLIENT_ID,
      redirect_uri: window.location.origin,
      response_type: 'token',
      scope: `${this.DRIVE_APP_DATA_SCOPE} ${this.USER_INFO_PROFILE_SCOPE}`,
      include_granted_scopes: 'true',
      state: 'pass-through value',
      prompt: 'select_account',
    };

    const query = Object.keys(params)
      .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
      .join('&');
    window.location.href = `${this.OAUTH_ENDPOINT}?${query}`;
  },
  async validateAccessToken(accessToken) {
    try {
      const response = await axios.request({
        method: 'post',
        url: TOKEN_INFO_ENDPOINT,
        params: {
          access_token: accessToken,
        },
      });
      return response.status === 200;
    } catch (e) {
      return false;
    }
  },
  async revokeAccessToken(accessToken) {
    try {
      await axios.request({
        method: 'get',
        url: REVOKE_ENDPOINT,
        params: {
          token: accessToken,
        },
      });
      return true;
    } catch (e) {
      return false;
    }
  },
  async getUserInfo(accessToken) {
    const USER_INFO_ENDPOINT = 'https://www.googleapis.com/userinfo/v2/me';
    try {
      const response = await axios.request({
        method: 'get',
        headers: {
          ...authorizationHeader(accessToken),
        },
        url: USER_INFO_ENDPOINT,
      });
      const { name, picture } = response.data;
      return new UserInfo({ name, picture });
    } catch (e) {
      return new UserInfo();
    }
  },
};

