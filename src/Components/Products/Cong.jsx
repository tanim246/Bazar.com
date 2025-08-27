import React from "react";

const Cong = () => {
  const handleClose = () => {
    document.getElementById("my_modal_2").close();
  };

  return (
    <div>
      {/* Open the modal using document.getElementById('my_modal_2').showModal() method */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box flex flex-col justify-center items-center gap-4">
          <div>
            <video
              width="100"
              height="100"
              preload="none"
              style={{
                background:
                  "transparent url('https://cdn-icons-png.flaticon.com/512/10246/10246805.png') 50% 50% / contain no-repeat",
              }}
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="https://cdn-icons-mp4.flaticon.com/512/10246/10246805.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
          >
            Close
          </button>
        </div>

        {/* Outside backdrop click */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Cong;
