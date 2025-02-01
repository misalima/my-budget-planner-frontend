import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const registerUser = async (userData: any) => {
  try {
    const response = await axios.post(`${API_URL}/user`, userData);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Erro ao registrar usuário"
    );
  }
};

export const loginUser = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    return response.data; // Supondo que a resposta contenha { user, tokens }
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Erro ao fazer login");
  }
};
