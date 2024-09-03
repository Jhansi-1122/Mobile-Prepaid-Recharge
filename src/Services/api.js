// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Adjust if necessary



export const getAllPlans = () => axios.get(`${API_URL}/plans`);
export const getAllRechargeHistory = () => axios.get(`${API_URL}/recharge-history`);
export const getUserByMobileNumber = (mobileNumber) => axios.get(`${API_URL}/users/${mobileNumber}`);
