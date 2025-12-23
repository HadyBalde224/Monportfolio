// app/conctact/page.jsx
export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm p-8">
        <h1 className="text-3xl font-bold mb-7">Me contacter</h1>
         <p className="text-blue-800 mb-8">
          Une idée, un projet ou une question? N’hésitez pas à m’écrire.
        </p>
        
    
        <form 
          action="https://formsubmit.co/mamadouhady35@gmail.com" 
          method="POST"
          className="space-y-4"
        >
          <input type="hidden" name="_captcha" value="false" />
          
          <div>
            <label className="block text-sm font-medium mb-2">Nom</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-900"
                placeholder="Votre nom"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-900"
               placeholder="example@gmail.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-900"
               placeholder="Message"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}