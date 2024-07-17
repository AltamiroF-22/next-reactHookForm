"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "./inputs/input";
import ImageUpload from "./inputs/imageInput";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Form = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      lastname: "",
      address: "",
      number: "",
      block: "",
      phoneNumber: "",
      imageSrc: "",
    },
  });

  const imageSrc = watch("imageSrc");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("credentials", data);
    if (!data) {
      toast.loading("Somehing went wrong!");
      return;
    }

    axios
      .post("/api/form", data)
      .then(() => {
        toast.success("Form sent with success!");
        router.refresh();
      })
      .catch(() => {
        toast.error("Something went wrong!");
      });
  };

  return (
    <div className="flex flex-col gap-3">
      <Input
        id="name"
        placeholder="Name*"
        register={register("name", {
          required: "Name is required!",
          minLength: {
            value: 9,
            message: "Name must be at least 9 characters long!",
          },
        })}
        errors={errors}
      />
      <Input
        id="lastname"
        placeholder="Lastname*"
        register={register("lastname", {
          required: "Lastname is required!",
        })}
        errors={errors}
      />
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-2">
          <Input
            id="address"
            errors={errors}
            register={register("address", { required: "Address is required!" })}
            placeholder="Address*"
          />
        </div>
        <div className="col-span-1">
          <Input
            id="block"
            register={register("block", {
              required: "The block?",
            })}
            errors={errors}
            placeholder="Block*"
          />
        </div>
        <div className="col-span-1">
          <Input
            id="number"
            register={register("number", {
              required: "Your house number?",
            })}
            errors={errors}
            type="number"
            placeholder="N*"
          />
        </div>
      </div>

      <Input
        id="phoneNumber"
        register={register("phoneNumber", {
          required: "Phone number is required!",
        })}
        errors={errors}
        placeholder="Phone number*"
      />
      <div className="w-full">
        <ImageUpload
          onChange={(value) => setCustomValue("imageSrc", value)}
          value={imageSrc}
        />
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
