import axios from 'axios';

const APP_DATA_SPACE = 'appDataFolder';
const JSON_MIME_TYPE = 'application/json';
const FILES_URL = 'https://www.googleapis.com/drive/v3/files';
const FILES_UPLOAD_URL = 'https://www.googleapis.com/upload/drive/v3/files';

function authorizationHeader(accessToken) {
  return { Authorization: `Bearer ${accessToken}` };
}

function contentType(type) {
  return { 'Content-Type': type };
}

export default {
  async getFiles(accessToken) {
    try {
      return await axios.request({
        method: 'get',
        headers: {
          ...authorizationHeader(accessToken),
        },
        url: FILES_URL,
        params: {
          spaces: APP_DATA_SPACE,
        },
      });
    } catch (e) {
      // Intentionally left empty.
    }
    return {};
  },
  async getFile(accessToken, fileId) {
    try {
      return await axios.request({
        method: 'get',
        headers: {
          ...authorizationHeader(accessToken),
        },
        url: `${FILES_URL}/${fileId}`,
        params: {
          alt: 'media',
        },
      });
    } catch (e) {
      // Intentionally left empty.
    }
    return {};
  },
  async createFile(accessToken, name, description) {
    try {
      return await axios.request({
        method: 'post',
        headers: {
          ...authorizationHeader(accessToken),
          ...contentType(JSON_MIME_TYPE),
        },
        url: FILES_URL,
        data: {
          name,
          description,
          parents: [APP_DATA_SPACE],
          mimeType: JSON_MIME_TYPE,
        },
      });
    } catch (e) {
      // Intentionally left empty.
    }
    return {};
  },
  async deleteFile(accessToken, fileId) {
    try {
      await axios.request({
        method: 'delete',
        headers: {
          ...authorizationHeader(accessToken),
        },
        url: `${FILES_URL}/${fileId}`,
      });
      return true;
    } catch (e) {
      // Intentionally left empty.
    }
    return false;
  },
  async uploadFileData(accessToken, fileId, data = {}) {
    try {
      return await axios.request({
        method: 'patch',
        headers: {
          ...authorizationHeader(accessToken),
          'Content-Type': 'application/json',
        },
        url: `${FILES_UPLOAD_URL}/${fileId}`,
        params: { uploadType: 'media' },
        data: {
          ...data,
        },
      });
    } catch (e) {
      // Intentionally left empty.
    }
    return {};
  },
};
