import Image from "next/image";

interface UserFotoProps {
  name: string;
  phoneNumber: string;
  lastname?: string;
  imageSrc: string;
}

const UserFoto: React.FC<UserFotoProps> = ({
  name,
  lastname,
  phoneNumber,
  imageSrc,
}) => {
  return (
    <div className="flex items-center gap-x-6 border p-4 rounded-lg hover:bg-slate-100 transition cursor-pointer">
      <Image
        src={imageSrc}
        alt="user image"
        width={100}
        height={100}
        className="rounded-full h-16 w-16 object-cover"
      />
      <div>
        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
          {name}
        </h3>
        <p className="text-sm font-semibold leading-6 text-indigo-600">
          {phoneNumber}
        </p>
      </div>
    </div>
  );
};

export default UserFoto;
