import { Fragment, useState } from "react";

import "../styles/form.css";
import { Input } from "./Input";
import { View } from "./View";

export function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [school, setSchool] = useState("");
    const [position, setPosition] = useState("");
    const [birth, setBirth] = useState("");

    function handleOnchange(e) {
        if (e.target.name === "name") {
            setName(e.target.value);
        } else if (e.target.name === "email") {
            setEmail(e.target.value);
        } else if (e.target.name === "phone") {
            setPhone(e.target.value);
        } else if (e.target.name === "school") {
            setSchool(e.target.value);
        } else if (e.target.name === "pos") {
            setPosition(e.target.value);
        } else if (e.target.name === "dob") {
            setBirth(e.target.value);
        }
    }

    return (
        <Fragment key="form">
            <div id="fcon">
                <form action="#post">
                    <h1>Personal Details</h1>
                    <Input
                        label="Name"
                        type="text"
                        name="name"
                        onChange={handleOnchange}
                    ></Input>

                    <Input
                        label="Email"
                        type="email"
                        name="email"
                        onChange={handleOnchange}
                    ></Input>

                    <Input
                        label="Phone"
                        type="number"
                        name="phone"
                        onChange={handleOnchange}
                    ></Input>
                </form>

                <form action="#post">
                    <h1>Secondary Details</h1>
                    <Input
                        label="School"
                        type="text"
                        name="school"
                        onChange={handleOnchange}
                    ></Input>

                    <Input
                        label="Position"
                        type="text"
                        name="pos"
                        onChange={handleOnchange}
                    ></Input>

                    <Input
                        label="Date of Birth"
                        type="text"
                        name="dob"
                        onChange={handleOnchange}
                    ></Input>
                </form>
            </div>

            <View
                name={name}
                email={email}
                phone={phone}
                school={school}
                position={position}
                dob={birth}
            ></View>
        </Fragment>
    );
}
