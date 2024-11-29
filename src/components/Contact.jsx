const Contact = () => (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">İletişim</h2>
        <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Adınız"
            className="block w-full max-w-md mx-auto p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email Adresiniz"
            className="block w-full max-w-md mx-auto p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Mesajınız"
            className="block w-full max-w-md mx-auto p-2 border border-gray-300 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Gönder
          </button>
        </form>
      </div>
    </section>
  );
  export default Contact;
  