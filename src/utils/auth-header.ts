import firebase from './firebase';

export default async function authHeader () {
    const user = firebase.auth().currentUser;

    if (user) {
        const token = await user.getIdToken(true);
        return { tokenId: token };
    } else {
        return {};
    }
}
