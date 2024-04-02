const AmountInput = ({ amount, setAmount }) => {
  const decreaseAmount = () => {
    setAmount((prevAmount) => Math.max(prevAmount - 1, 1));
  };

  const increaseAmount = () => {
    setAmount((prevAmount) => Math.min(prevAmount + 1, 10));
  };

  return (
    <div className="flex items-center border-[1px] rounded-3xl px-4  w-full py-3 ">
      <button
        className="bg-gray-300 border-[1px] rounded-full hover:bg-gray-400 text-gray-800 font-bold px-2"
        onClick={decreaseAmount}
      >
        -
      </button>
      <input
        type="number"
        className=" w-full text-center"
        min="1"
        max="10"
        value={amount}
        onChange={(e) =>
          setAmount(Math.max(1, Math.min(10, Number(e.target.value))))
        }
      />
      <button
        className="bg-gray-300 border-[1px] rounded-full hover:bg-gray-400 text-gray-800 font-bold px-2"
        onClick={increaseAmount}
      >
        +
      </button>
    </div>
  );
};

export default AmountInput;
