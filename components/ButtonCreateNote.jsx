"use client";

export default function ButtonCreateNote() {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-primary fixed top-10 right-10"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Create Note +
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box space-y-4">
          <h3 className="font-bold text-lg">Create Note</h3>
          {/* form */}
          <div>
            <textarea
              className="textarea w-full"
              placeholder="workout at 5am 💪"
            ></textarea>
            <div className="flex justify-end pt-5 gap-1">
              <button className="btn btn-error">Cancel</button>
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
          {/* form end */}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
