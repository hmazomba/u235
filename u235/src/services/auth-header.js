//Authheader is a helper function that we will use when we need to access protected resources i.e. user information in this case
//This function checks LocalStorage for the user. It returns a view based on which accessToken the user has.
export default function authHeader(){
    const user = JSON.parse(localStorage.getItem('user'))

    if(user && user.accessToken){
        return { Authorization: 'Bearer' + user.accessToken};
    } else {
        return {};
    }
}
