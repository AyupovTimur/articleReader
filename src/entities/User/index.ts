import {userReducer, userActions} from "entities/User/model/slice/userSlice";
import {User, UserSchema} from "entities/User/model/types/userSchema";
import {getUserAuthData} from "entities/User/model/selectors/getUserAuthData/getUserAuthData";

export {
    userReducer,
    userActions,
    User,
    UserSchema,
    getUserAuthData,
}
