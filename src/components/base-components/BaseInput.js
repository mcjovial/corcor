const BaseInput = ({ inputType, inputPlaceholder, inputStyle }) => {
  return (
    <input
      type={inputType}
      placeholder={inputPlaceholder}
      className={`bg-[#F9FAFC] text-masto-brown-10 w-full py-3 sm:py-4 lg:py-5 pl-4 rounded-xl border focus:border-masto-blue-10 focus:outline-none ${inputStyle}`}
    />
  );
};

export default BaseInput;
