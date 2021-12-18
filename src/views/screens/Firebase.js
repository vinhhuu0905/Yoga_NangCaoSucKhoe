import FirebaseKeys from "./config"
import firebase from '@react-native-firebase/app'

class Fire{
    constructor() {
        firebase.initializeApp(FirebaseKeys)
    }
    addPost = async ({ text, localUri}) => {
        const remoteUri = await this.uploadVideoAsync(localUri);
        return new Promise((res, rej) => {
            this.firestore
            .collection("posts")
            .add({
                text,
                uid: this.uid,
                timestamp: this.timestamp,
                video: remoteUri
            })
            .then(ref => {
                res(ref);
            })
            .catch(error => {
                rej(error);
            });
        });
    };
    uploadVideoAsync = async uri => {
        const path =`video/${this.uid}/${Date.now()}.mp4`

        return new  Promise(async (res, rej) => {
            const response = await fetch(uri)
            const file = await response.blob()
            let upload = firebase.storage().ref(path).put(file)
            upload.on(
                "state_changed",
                snapshot => {},
                err => {
                    rej(err);
                
                },
                async () => {
                    const url = await upload.snapshot.ref.getDownloadURL();
                    res(url);
                }
            )
        })
    }


   get firestore() {
       return firebase.firestore()
   }
   get uid(){
       return (firebase.auth().curentUser || {}).uid
   }

   get timestamp() {
       return Date.now()
   }
}