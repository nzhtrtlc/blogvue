import { apiService } from './api.service';
import store from '../store/store';

export const AuthService = {
  login(payload) {
    return apiService.post('/author/login', payload);
  },
  logOut() {
    store.dispatch('setToken', null);
    store.dispatch('setUser', null);
    localStorage.removeItem('token');
  },
  async checkAndUpdateSession() {
    const token = localStorage.getItem('token');

    // no token exists
    if (!token) return false;

    // verify current token
    try {
      const response = await apiService.post('/author/checktoken', null, { headers: { Authorization: `Bearer ${token}` } });
      this.updateSession(token, response.data.userData);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  },
  updateSession(token, userData) {
    store.dispatch('setToken', token);
    store.dispatch('setUser', userData);
  }
};
