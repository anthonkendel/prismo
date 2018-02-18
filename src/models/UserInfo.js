export default class UserInfo {
  constructor({ name = '???', picture = 'https://picsum.photos/200/?image=513' } = {}) {
    this.name = name;
    this.picture = picture;
  }
}
