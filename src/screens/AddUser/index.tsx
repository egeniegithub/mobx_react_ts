import * as React from "react";
import { Dialog } from "@progress/kendo-react-dialogs";
import { Input } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { observer } from "mobx-react-lite"
import { useStore } from "../../store/store";
import { useState } from "react";
import { userType } from "../../types";
const user = {
    userName: "",
    firstName: "",
    lastName: "",
    fullName: "",
    lastLogin: "02-02-2022",
    enabled: "No"
}

const AddUser = observer((props: any) => {
    const { dataStore } = useStore();
    const [userData, setUserData] = useState(user)

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const newUser = userData;
        const fullName = newUser.firstName.trim() + newUser.lastName.trim();
        if (fullName.length > 40) {
            alert('Full name must be less than 40 character')
            return;
        } else {
            newUser.fullName = newUser.firstName.trim() + " " + newUser.lastName.trim();
        }
        if (newUser.userName.trim().length > 0) {
            let notUnique = false;
            dataStore.data.map((item: userType | any) => {
                if (item.userName == newUser.userName)
                    notUnique = true
            })
            if (notUnique) {
                alert("This user already exist. Please try another user");
                return;
            }
            props.addUser(newUser);
        } else {
            alert('user name must have some character')
            return

        }
    }

    const handleChange = (event: { target: { name: string; value: string; }, value: string } | any) => {

        if (event.target.name === "userName") {
            setUserData({ ...userData, userName: event.value });
        } else if (event.target.name === "firstName") {
            setUserData({ ...userData, firstName: event.value });
        } else if (event.target.name === "lastName") {
            setUserData({ ...userData, lastName: event.value });
        } else if (event.target.name === "enabled") {
            setUserData({ ...userData, enabled: event.value });
        }
    };

    return (
        <Dialog title={`Add User`} onClose={props.cancelEdit}>
            <div className="row example-wrapper" style={{
                width: 650, height: 300
            }}>
                {/* <div className="col-xs-12 col-sm-6 offset-sm-3 example-col"> */}
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Add User:</legend>
                        <div className="mb-3">
                            <Input
                                name="userName"
                                style={{
                                    width: "100%",
                                }}
                                type={"text"}
                                label="User Name"
                                pattern={"[A-Za-z0-9_ ]+"}
                                minLength={2}
                                maxLength={15}
                                required={true}
                                onChange={handleChange}
                                validationMessage={"usernameValidationMessage"}
                            />
                        </div>
                        <div className="mb-3">
                            <Input
                                name="firstName"
                                style={{
                                    width: "100%",
                                }}
                                label="First Name"
                                pattern={"[A-Za-z0-9_ ]+"}
                                minLength={2}
                                maxLength={25}
                                required={true}
                                onChange={handleChange}
                                validationMessage={"usernameValidationMessage"}
                            />
                        </div>
                        <div className="mb-3">
                            <Input
                                name="lastName"
                                style={{
                                    width: "100%",
                                }}
                                label="Last Name"
                                pattern={"[A-Za-z0-9_ ]+"}
                                minLength={2}
                                maxLength={25}
                                required={true}
                                onChange={handleChange}
                                validationMessage={"usernameValidationMessage"}
                            />
                        </div>
                        <div style={{ minWidth: "300px", }}>
                            <DropDownList name='enabled' label="Enabled" required data={['Yes', 'No']} onChange={handleChange} />
                        </div>
                    </fieldset>
                    <input
                        type="submit"
                        className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
                    // value="Search"
                    />
                </form>
            </div>
            {/* </div> */}
        </Dialog>
    )
});

export default AddUser;