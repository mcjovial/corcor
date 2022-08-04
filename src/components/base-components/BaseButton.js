const BaseButton = ({ customStyle, customText, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-masto-blue-10 text-white font-bold ${customStyle} rounded-lg py-3 lg:py-4 w-full`}
    >
      {customText}
    </button>
  );
};

export default BaseButton;
