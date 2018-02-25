import PrismoProfile from '@/models/PrismoProfile';
import { driveService } from '@/services';

const FILE_NAME = 'PrismoProfile.json';
const FILE_DESCRIPTION = 'JSON file containing prismo profile data';

export default {
  async uploadPrismoProfile(accessToken, data) {
    const files = await driveService.getFiles(accessToken);
    const metaFile = files.data.files.find(f => f.name === FILE_NAME);
    let fileId = '';
    if (metaFile) {
      fileId = metaFile.id;
    } else {
      const created = await driveService.createFile(accessToken, FILE_NAME, FILE_DESCRIPTION);
      fileId = created.data.id;
    }
    return driveService.uploadFileData(accessToken, fileId, data);
  },
  async getPrismoProfile(accessToken) {
    try {
      const files = await driveService.getFiles(accessToken);
      const metaFile = files.data.files.find(f => f.name === FILE_NAME);
      const file = await driveService.getFile(accessToken, metaFile.id);
      return new PrismoProfile(file.data) || new PrismoProfile();
    } catch (e) {
      // Intentionally left empty.
    }
    return new PrismoProfile();
  },
};
