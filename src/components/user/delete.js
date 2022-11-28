import { deleteObject, ref } from "firebase/storage";
import storage from "../../firebase";

export default function deleteEI(name){
    const desertRef = ref(storage,`images/${name}`);
    deleteObject(desertRef).then(() => {
        // image deleted successfully
        console.log("Deleted")
    }).catch((error)=>{
        console.log(error)
    })
}