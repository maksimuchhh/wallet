export default class LocalStorage {
  static set(key: string, data: string) {
    localStorage.setItem(key, window.btoa(data));
  }

  static get(key: string) {
    const data = localStorage.getItem(key);
    if (data) return window.atob(data);

    return data;
  }
}
