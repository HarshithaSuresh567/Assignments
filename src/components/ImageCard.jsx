export default function ImageCard() {
  return (
    <div className="flex justify-center">
      <img
        src="https://via.placeholder.com/300"
        className="rounded-lg shadow-lg
                   transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
}
