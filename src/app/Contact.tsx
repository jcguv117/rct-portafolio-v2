
export default function Contact() {
    return (
      <section id="contact" className="container mx-auto my-4 py-[15rem] text-center">
          <h1 className="md:text-4xl text-2xl font-medium title-font mb-4 text-white">
              Contactame
          </h1>
          <div className="flex items-center justify-center m-2 p-2 text-white">
              <form name="contact" method="POST" className="grid gap-x-8 gap-y-2 w-full" data-netlify="true">
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="w-full">
                      <input className="bg-cyan-900 rounded-xl m-1 p-2 w-full md:w-2/3 lg:w-1/2" type="text" name="name" placeholder="Nombre" />
                  </div>
                  <div className="w-full">
                      <input className="bg-cyan-900 rounded-xl m-1 p-2 w-full md:w-2/3 lg:w-1/2" type="email" name="email" placeholder="Correo" />
                  </div>
                  <div className="w-full">
                      <textarea className="bg-cyan-900 rounded-xl m-1 p-2 w-full md:w-2/3 lg:w-1/2" name="message" placeholder="Mensaje Aqui!"></textarea>
                  </div>
                  <div>
                      <button className="bg-cyan-900 hover:bg-cyan-800 cursor-pointer rounded-xl px-4 py-2 " type="submit">Enviar!</button>
                  </div>
              </form>    
          </div>
      </section>
    )
  }