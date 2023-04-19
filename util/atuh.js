import axios from "axios"

const API_KEY = 'AIzaSyA7stl1t4aekkq2Hdw061bbEPlBf707hVk';

export async function createUser (email, password) {
  const respone = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
    {
        email:email,
        password:password,
        returnSecureToken: true
    }
  );
}