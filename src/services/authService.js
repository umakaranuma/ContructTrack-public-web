// authService — wraps Axios calls to the ConstructTrack backend auth API.
// Base URL is read from the VITE_API_BASE_URL environment variable.
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000, // 15-second timeout
})

/**
 * Register a new company account.
 * POST /api/auth/register/
 *
 * @param {Object} payload
 * @param {string} payload.company_name
 * @param {string} payload.owner_name
 * @param {string} payload.email
 * @param {string} payload.phone
 * @param {string} payload.password
 * @param {string} payload.plan  — 'lite' | 'pro' | 'enterprise'
 * @returns {Promise<Object>} response data from the API
 */
export async function registerUser(payload) {
  const response = await api.post('/api/auth/register/', payload)
  return response.data
}

/**
 * Log in an existing user.
 * POST /api/auth/login/
 *
 * @param {string} email
 * @param {string} password
 * @returns {Promise<Object>} { token, user }
 */
export async function loginUser(email, password) {
  const response = await api.post('/api/auth/login/', { email, password })
  return response.data
}

export default api
