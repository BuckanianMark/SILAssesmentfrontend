//const BASE_URL = "http://localhost:8000/api"
const BASE_URL = "https://sil-assessment-backend.onrender.com/api"
const LOCAL_URL = "http://localhost:8000/api"

export const ALBUMS_URL = BASE_URL + '/albums/getAllAlbums'
export const PAGINATED_ALBUMS_URL = BASE_URL + '/albums/getpaginatedAlbums'
export const ALBUMS_BY_ID_URL = BASE_URL + '/albums/'
export const USERS_URL = BASE_URL + '/users/getAllUsers'
export const USERS_BY_ID_URL = BASE_URL + '/users/'
export const PHOTOS_URL = BASE_URL + '/photos/getPhotos'
export const EDIT_PHOTO_URL = BASE_URL +'/photos/newTitle/'
export const GET_PHOTO_BY_ID = BASE_URL + '/photos/'
export const REGISTER_USER = BASE_URL + '/auth/register'
export const LOGIN_USER = BASE_URL + '/auth/login'