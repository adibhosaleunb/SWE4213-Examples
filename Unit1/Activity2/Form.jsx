import InputField from "./InputField";
import MyButton from "./MyButton";
import { useState } from "react";

export default function Form() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phoneNumber: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    function onSubmit(e) {
        e.preventDefault();

        // TODO: Log all of the values to the console 

        // TODO: Reset the form after submitting it 

    }

    return (
        <form>
            <InputField label="Name" placeholder="Enter your name..." value={form.name} name="name" onChange={handleChange} />
            {/* TODO: Add input fields for email and phone  */}
            
            {/* TODO: Add the MyButton component with the onSubmit function as its onClick */}

        </form>
    );
}