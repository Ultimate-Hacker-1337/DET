export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-yellow-50 via-white to-blue-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm">
        © {new Date().getFullYear()} دار الایمان والتقویٰ
      </div>
    </footer>
  );
}