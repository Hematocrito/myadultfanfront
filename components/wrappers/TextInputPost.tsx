type TextInput = {
    fieldName: String;
    register?: any;
    errors?: any;
    type?: string;
    label?: String;
    placeHolder?: string;
  };
  
  export const TextInputPost = ({
    label,
    fieldName,
    register,
    placeHolder,
    errors,
    type = "text",
  }: TextInput) => {
    return (
      <div className="my-3 relative">
        <label
          //     className={`px-1 text-xs transition-all duration-300
          //     ${errors[`${fieldName}`] && "text-red-600"}
          // `}
          className={`px-1 text-sm transition-all duration-300 flex align-baseline font-semibold`}
        >
          <label className="text-blue-450 text-xl mr-1">* </label>
          {label}
        </label>
        <div
          //     className={`flex items-center w-full border rounded-md px-2 py-1 focus-within:ring-2 border-blue-450
          //     ${errors[`${fieldName}`] && "border-red-500 ring-red-300"}
          // `}
          className={`flex items-center w-[90px] border rounded-md px-2 py-1 focus-within:ring-2 border-black
          `}
        >
          <input
            // {...register(fieldName)}
            type={type}
            placeholder={placeHolder}
            className="text-base font-medium outline-none flex-1 appearance-none w-full bg-white text-black"
            autoComplete="off"
          />
        </div>
        {/* <div className="sm:px-1 text-xs text-red-500">
          {errors[`${fieldName}`]?.message}
        </div> */}
      </div>
    );
  };
  