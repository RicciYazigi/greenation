export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4">
          © {new Date().getFullYear()} Green Nation EC – Sembrando resiliencia.
        </p>
        <a
          href="mailto:ryfotografia2012@gmail.com"
          className="underline"
        >
          ryfotografia2012@gmail.com
        </a>
        <div className="mt-4 flex justify-center gap-6">
          <a
            href="https://www.facebook.com/greennationec/"
            target="_blank"
            rel="noopener"
          >
            <img src="/facebook.svg" alt="Facebook" className="w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com/watch?v=u4CHz6RFgXM"
            target="_blank"
            rel="noopener"
          >
            <img src="/youtube.svg" alt="YouTube" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
