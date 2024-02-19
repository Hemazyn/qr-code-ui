import qrCode from "./assets/image-qr-code.png";

const App = () => {
  return (
    <>
      <div className="relative bg-[hsl(212,45%,89%)] w-full h-[100vh] flex items-center justify-center">
        <div className="w-4/5 md:w-[300px] bg-[hsl(0,0%,100%)] p-[15px] rounded-[20px]">
          <img src={qrCode} alt="qr-code" className="w-full rounded-[10px]" loading="lazy" />
          <div className="font-outfit flex flex-col text-center mb-4 mt-4">
            <h4 className="text-[hsl(218,44%,22%)] text-xl font-bold mb-0">Improve your front-end <br />skills by building projects</h4>
            <p className="text-[hsl(220,15%,55%)] text-[15px] font-normal mb-0">Scan the QR code to visit Frontend <br /> Mentor and take your coding skills to <br /> the next level</p>
          </div>
        </div>
      </div>

      <div className="attribution text-[11px] text-center">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="text-[hsl(228,45%,44%)]">Frontend Mentor</a>.
        Coded by <a href="https://devemma.netlify.app" target="_blank" className="text-[hsl(228,45%,44%)]">Emmanuel Tofunmi</a>.
      </div>
    </>
  );
}

export default App