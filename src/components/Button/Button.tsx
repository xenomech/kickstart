export type ButtonPropsType = {
  text: string;
};

export default function Button({ text }: ButtonPropsType) {
  return (
    <button className="rounded-xl px-4 py-3 text-white bg-orange-500 hover:bg-orange-600">
      {text}
    </button>
  );
}
