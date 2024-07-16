import { deleteDoc, doc } from "firebase/firestore";
import { FirebaseDB } from "../config";

export const deleteProduct = async (producto_id: string) => {
  const productRef = doc(FirebaseDB, "productos", producto_id);
  await deleteDoc(productRef);
};
