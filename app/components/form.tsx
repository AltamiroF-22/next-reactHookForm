"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "./inputs/input";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      lastname: "",
      address: "",
      number: "",
      block:""
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("credentials", data);
  };

  return (
    <div className="flex flex-col gap-3">
      <Input
        id="name"
        placeholder="name:"
        register={register("name", {
          required: "Name is required",
          minLength: {
            value: 9,
            message: "Name must be at least 9 characters long",
          },
        })}
        errors={errors}
      />
      <Input
        id="lastname"
        placeholder="lastname:"
        register={register("lastname", {
          required: "Lastname is required",
        })}
        errors={errors}
      />
     <div className="grid grid-cols-4 gap-4">
  <div className="col-span-2">
    <Input
      id="address"
      errors={errors}
      register={register("address", { required: "address is required!" })}
      placeholder="address:"
    />
  </div>
  <div className="col-span-1">
    <Input
      id="block"
      register={register("block", {
        required: "the block?",
      })}
      errors={errors}
      placeholder="block:"
    />
  </div>
  <div className="col-span-1">
    <Input
      id="number"
      register={register("number", {
        required: "your house number?",
      })}
      errors={errors}
      type="number"
      placeholder="N:"
    />
  </div>
</div>

      <button
        onClick={handleSubmit(onSubmit)}
        className="py-4 bg-blue-700 rounded-md hover:bg-blue-500  transition text-white"
      >
        Submit
      </button>
    </div>
  );
};

export default Form;
