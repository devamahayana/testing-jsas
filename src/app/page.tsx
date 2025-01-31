
export default function Home() {
  return (
    <form
        name="newsletters"
        method="POST"
        action="/"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="lg:max-w-sm space-y-3 bg-black"
    >
        <input type="hidden" name="form-name" value="newsletters" />
        <p className="hidden">
            <label>Jangan diisi: <input name="bot-field" /></label>
        </p>
        <div className="relative">
            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-[#ddd]"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path></svg>
            </div>                        
            <input 
                type="email" 
                name="newsletter" 
                className="bg-white bg-opacity-10 text-white text-sm rounded-xl block w-full ps-12 p-4 outline-none"  
                placeholder="Entrez votre adresse email ..." 
                required 
            />
        </div>

        <button type="submit" className="text-white bg-primary sm:px-5 sm:py-3 px-3 py-2 rounded-xl sm:text-base text-sm w-full cursor-pointer">Enregistrer</button>
    </form>
  );
}
