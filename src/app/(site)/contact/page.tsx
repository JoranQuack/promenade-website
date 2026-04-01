import ImageBlock from "@/components/ui/ImageBlock";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <main className="grow w-full max-w-2xl mt-24 px-2 sm:px-4 flex flex-col items-center">
        <ImageBlock alt="contact" src="/contact.jpg" />
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 mt-6">Contact</h1>
        <p className="text-base sm:text-lg text-center max-w-md mb-6">
          For bookings and inquiries, please email us at
          <a
            href="mailto:info@promenadequartet.com"
            className="underline text-pred ml-1"
          >
            info@promenadequartet.com
          </a>
          .
        </p>
        <form
          className="w-full flex flex-col gap-4 bg-black/40 rounded-xl p-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="flex flex-col">
            <span className="mb-1">Name</span>
            <input
              type="text"
              className="rounded p-2 bg-dark text-bright"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-1">Email</span>
            <input
              type="email"
              className="rounded p-2 bg-dark text-bright"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-1">Message</span>
            <textarea
              className="rounded p-2 bg-dark text-bright"
              rows={4}
              required
            />
          </label>
          <button
            type="submit"
            className="bg-pred text-bright rounded p-2 font-semibold hover:opacity-80 transition"
          >
            Send
          </button>
        </form>
      </main>
    </div>
  );
}
