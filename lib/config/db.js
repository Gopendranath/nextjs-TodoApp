import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://baban567899:ecogs8zhGLOtt1Kq@clustertodo.it3bn.mongodb.net/ToDo_App');
    console.log('DB connection successfull.')
}