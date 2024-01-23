import axios from "axios";

const BASE_URL = "https://34.245.88.242";
const API_KEY =
  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA3ODg2Mjc5LCJpYXQiOjE3MDUyOTQyNzksImp0aSI6ImJkZTU2OTVkNzc2ZjRhNzU5NWMwZTVlNmQ1YmJlNGIxIiwidXNlcl9pZCI6ImViZjlhYmNlLWU0ODEtNGVkNC1iZjdjLWVkODYzMWEzZTI0MCJ9.SBJyQidR7WF1JZpBsOxIGUEWmWnvGNDTq7uG_3q55qY";
const headers = {
  Authorization: API_KEY,
};
export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json"},
});
