type TextInput = {
  fieldName: String;
  register: any;
  errors: any;
  type?: String;
  label?: String;
  placeHolder?: String;
};

export const TextInputLine = ({
  label,
  fieldName,
  register,
  placeHolder = "",
  errors,
  type = "text",
}: TextInput) => {
  return (
    <div className="my-3 relative mb-4">
      <div
        className={`flex items-center w-full border-b-2 px-2 py-1 focus-within:ring-2 border-gray-400
            ${errors[`${fieldName}`] && "border-red-500 ring-red-300"}
        `}
      >
        <input
          {...register(fieldName)}
          type={type}
          placeholder={placeHolder}
          className="text-sm font-medium outline-none flex-1 appearance-none w-full bg-white text-black"
          autoComplete="off"
        />
      </div>
      <div className="sm:px-1 text-xs text-red-500">
        {errors[`${fieldName}`]?.message}
      </div>
    </div>
  );
};
