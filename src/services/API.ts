import React from "react";
import { useStore } from "../store/store";
import { userType } from "../types";
import requests from "./request";

export const getUsers = async () => {
    return requests.get();

}
export const getSingleUser = async (name: string) => {
    return requests.getUser(name);
}

export const addUser = async (data: userType) => {
    let reqHeader = {
        header: {
            "content-type": "application/json",
            Authorization: `bearer `,
        }
    }
    return requests.post(data, reqHeader);
}
export const updateUser = async (data: userType) => {
    return requests.update(data);
}