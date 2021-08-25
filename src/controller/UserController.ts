import { AddUserResponse, CreateUserDTO } from "../types/user/createUser";
import { VirtualizorApi } from "../utils/virtualizorApi";
import { EditUserDTO, EditUserResponse } from "../types/user/editUser";
import { ListUserDTO, ListUserResponse } from "../types/user/listUser";

export class UserController {
    public listUsers(data: ListUserDTO): Promise<ListUserResponse> {
        return VirtualizorApi.call('adduser', {data});
    }

    public editUser(data: EditUserDTO): Promise<EditUserResponse> {
        return VirtualizorApi.call('edituser', {data: {...data, edituser: 1}});
    }

    public addUser(data: CreateUserDTO): Promise<AddUserResponse> {
        return VirtualizorApi.call('adduser', {data: {...data, adduser: 1}});
    }
}
